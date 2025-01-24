import { getBlockscout } from "@/lib/blockscout"
import { IStatus } from "@/types/address-status.type"
import { IEvent } from "@/types/event.type"
import { createClient } from "@/utils/supabase/server"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
	const supabase = await createClient()

	const query = request.nextUrl.searchParams
	const chainId = query.get('chainId') as string
	const address = query.get('address') as string

	const blockscout = getBlockscout(Number(chainId))

	let status: IStatus = {
		status: "clean",
		tags: [],
		lastTxs: [],
		lastDapps: []
	}

	if (!chainId) return Response.json({
		success: false,
		message: 'chainId param is required'
	}, { status: 400 })
	if (!address) return Response.json({
		success: false,
		message: 'address param is required'
	}, { status: 400 })

	// query db 
	const { data: events, error } = await supabase.from('events')
		.select()
		.eq("address", address)
		.returns<IEvent[]>()

	if (error) return Response.json({
		success: false,
		message: error.message
	}, { status: 500 })

	// dirty address
	if (events && events.length != 0) {
		status.status = "dirty"

		events.forEach(e => {
			if (!status.tags.includes(e.contract)) status.tags.push(e.contract)
		})
	}

	// lastTxs and lastDapps
	const res = await blockscout.get(`/addresses/${address}/transactions?filter=from`).catch(() => null) // this returns last 50 txs

	if (res) {
		// get last txs
		status.lastTxs = res.data.items.slice(0, 5)

		// get last dapps
		status.lastDapps = res.data.items
			.filter((i: any) => i.to.is_contract && i.to.name)
			.slice(0, 5)
			.map((d: any) => d.to)
	}

	return Response.json({
		success: true,
		data: status
	})
}

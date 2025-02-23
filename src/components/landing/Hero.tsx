"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TallyModal } from '@/components/landing/TallyModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#F8FAFC] w-full h-screen flex items-center justify-center px-4">
      <div className="mx-auto max-w-7xl w-full h-full flex items-center justify-center">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 w-full items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1A2E44] sm:text-5xl lg:text-6xl">
              AI-powered Threat Detection & Transaction Analysis
            </h1>
            <p className="mt-4 text-lg text-[#64748B] sm:text-xl lg:leading-relaxed">
              Monitor, identify, and track malicious wallets. Stay ahead of
              threats with detailed activity reports, preventing high-risk
              interactions for dApps and exchanges.
            </p>
            <div className="mt-6 flex gap-4 justify-center lg:justify-start">
              {/* Botón para abrir el modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-lg bg-[#1A2E44] px-6 py-3 text-base font-medium text-white shadow-md transition hover:bg-[#16324A]"
                aria-label="Book a demo"
              >
                Book a Demo
              </button>

              <Link
                href="https://docs.wavynode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[#1A2E44] px-6 py-3 text-base font-medium text-[#1A2E44] transition hover:bg-[#1A2E44] hover:text-white"
                aria-label="Learn more"
              >
                Documentation 
              </Link>
            </div>
          </div>

          {/* Right Content - Networks & Partners */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center mt-8 lg:mt-0 space-y-4">
            {/* Network Widget */}
            <div className="rounded-lg border border-[#1A2E44]/10 bg-white p-4 shadow-md w-44">
              <div className="text-sm font-medium text-[#1A2E44] text-center">
                Networks
              </div>
              <div className="mt-2 flex justify-center">
                <Image
                  src="/arB.svg"
                  alt="Arbitrum Network"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
              </div>
            </div>

            {/* Partners Widget - Styled like Network */}
            <div className="rounded-lg border border-[#1A2E44]/10 bg-white p-4 shadow-md w-44">
              <div className="text-sm font-medium text-[#1A2E44] text-center">
                Partners
              </div>
              <div className="mt-2 flex justify-center">
                <Link
                  href="https://drpc.org?ref=7d04bb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/dRPC_fullcollor_black.svg"
                    alt="dRPC Partner"
                    width={100}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Tally */}
      <TallyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;

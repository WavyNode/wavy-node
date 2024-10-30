import FeatureBox from "./FeatureBox";
import Header from "./Header";

export default function MainContent() {
  return (
    <main className="p-8">
      <div className="flex flex-col items-center justify-center main-h-screen bg-gray-50">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-2">
            Stay Protected: Real-Time Exploit Detection and On-Chain Data
            Insights
          </h2>
          <p className="text-gray-700 p-4">
            Our platform is a public good for the blockchain community,
            providing critical exploit alerts to protocols and users alike. With
            a commitment to security, we offer public RPCs across every
            supported network, ensuring rapid and reliable access to real-time
            data.
          </p>
        </div>

        <div className="mt-6">
          <FeatureBox title="Accurate Detection of Connections with dApps" />
        </div>

        <div className="text-center mt-8">
          <h2 className="text-lg font-bold">
            We warn of possible dangerous connections to dApps.
          </h2>
        </div>

        <div className="flex justify-center md:justify-end mt-4 ">
          <div className="bg-gray-700 p-8 rounded-md text-center">
            <span className="text-white block text-sm font-bold">Networks</span>
            <img src="ethL.svg" alt="Networks Icon" className="mx-1 mt-2" />
          </div>
        </div>
      </div>
    </main>
  );
}
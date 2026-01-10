import { FaChartLine, FaShip, FaRegCheckCircle } from "react-icons/fa";

const TradeHighlights = () => (
  <section className="max-w-7xl mx-auto px-4 py-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="bg-secondary/20 w-full aspect-square rounded-[3rem] absolute rotate-3 -z-10" />
        <img
          src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg"
          className="rounded-[3rem] shadow-2xl h-[450px] w-full object-cover"
          alt="Port"
        />
      </div>
      <div>
        <h2 className="text-4xl font-black text-primary mb-6 leading-tight">
          Built for Modern Logistics
        </h2>
        <p className="text-lg opacity-70 mb-8">
          We provide the infrastructure for businesses to compete globally.
          Manage freight documents and inventory in one hub.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl font-semibold">
            <FaChartLine className="text-secondary" /> Real-time market price
            tracking
          </li>
          <li className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl font-semibold">
            <FaShip className="text-secondary" /> End-to-end container
            monitoring
          </li>
          <li className="flex items-center gap-4 p-4 bg-base-200 rounded-2xl font-semibold">
            <FaRegCheckCircle className="text-secondary" /> Verified supplier
            certifications
          </li>
        </ul>
      </div>
    </div>
  </section>
);
export default TradeHighlights;

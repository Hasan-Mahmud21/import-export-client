import React from "react";

const partners = [
  { name: "Asia Logistics", code: "ASIA" },
  { name: "EuroTrade Co.", code: "EURO" },
  { name: "Pacific Exports", code: "PACI" },
  { name: "Global Freight", code: "GLBF" },
  { name: "Nordic Cargo", code: "NRDC" },
  { name: "Vertex Shipping", code: "VTX" },
];

const GlobalPartners = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div className="">
          <p className="text-4xl text-center font-bold text-primary mb-2">
            Global Partners
          </p>
        </div>
        <div className="text-sm text-base-content/60">
          <span className="font-semibold text-primary">
            {partners.length}+ partners
          </span>{" "}
          actively working with TradeSphere.
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.code}
            className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-base-200 bg-base-100 py-4 px-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
              {partner.code}
            </div>
            <p className="text-xs md:text-sm text-center text-base-content/80 group-hover:text-primary line-clamp-2">
              {partner.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalPartners;

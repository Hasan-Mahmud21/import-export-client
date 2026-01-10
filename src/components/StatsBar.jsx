import React from "react";

const StatsBar = () => {
  return (
    <div className="bg-primary text-primary-content py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-black mb-1">12k+</div>
          <div className="opacity-70 text-sm uppercase tracking-widest font-bold">
            Products
          </div>
        </div>
        <div>
          <div className="text-4xl font-black mb-1">85+</div>
          <div className="opacity-70 text-sm uppercase tracking-widest font-bold">
            Countries
          </div>
        </div>
        <div>
          <div className="text-4xl font-black mb-1">2.5k</div>
          <div className="opacity-70 text-sm uppercase tracking-widest font-bold">
            Traders
          </div>
        </div>
        <div>
          <div className="text-4xl font-black mb-1">24/7</div>
          <div className="opacity-70 text-sm uppercase tracking-widest font-bold">
            Support
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;

import React from "react";

const Process = () => (
  <section className="py-20 max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-16 text-primary decoration-secondary">
      How TradeSphere Works
    </h2>
    <div className="grid md:grid-cols-3 gap-12 relative">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-primary/30">
          1
        </div>
        <h3 className="font-bold text-xl mb-3">List Products</h3>
        <p className="opacity-70">
          Upload your export products with detailed specs and images.
        </p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-secondary/30">
          2
        </div>
        <h3 className="font-bold text-xl mb-3">Monitor Stocks</h3>
        <p className="opacity-70">
          Track real-time inventory levels for your imported goods.
        </p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-accent/30">
          3
        </div>
        <h3 className="font-bold text-xl mb-3">Scale Business</h3>
        <p className="opacity-70">
          Use data-driven insights to expand into new global markets.
        </p>
      </div>
    </div>
  </section>
);
export default Process;

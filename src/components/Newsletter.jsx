import React from 'react';

const Newsletter = () => (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <div className="bg-secondary rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
       <h2 className="text-3xl md:text-5xl font-black mb-6 italic">Expand Your Market Today.</h2>
       <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Join 500+ companies using TradeSphere to manage daily imports and exports.</p>
       <div className="flex flex-col sm:flex-row justify-center gap-4">
         <input type="email" placeholder="Business Email" className="input input-bordered w-full max-w-xs text-base-content rounded-xl" />
         <button className="btn btn-primary rounded-xl px-10 border-none">Subscribe</button>
       </div>
    </div>
  </section>
);
export default Newsletter;
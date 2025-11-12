import React from "react";

const ProductDetails = () => {
    // onClick={() => setOpen(true)}
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          
          
          className="w-full rounded-2xl object-cover shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2"></h1>
          <div className="text-sm text-base-content/70 mb-4">
            Origin: 
          </div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-semibold"></span>
            <span className="badge">⭐ </span>
          </div>
          <div className="mb-6">
            Available Quantity: <b></b>
          </div>
          <button className="btn btn-primary" >
            Import Now
          </button>
        </div>
      </div>
      {/* <QuantityModal open={open} onClose={()=>setOpen(false)} available={product.available_quantity} onSubmit={handleImport}/> */}
    </main>
  );
};

export default ProductDetails;

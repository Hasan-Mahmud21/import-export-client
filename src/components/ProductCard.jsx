import React from "react";

const ProductCard = () => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-2xl overflow-hidden h-full">
      <figure className="aspect-4/3 overflow-hidden">
        <img
          
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h3 className="card-title text-base md:text-lg leading-tight">
          
        </h3>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold"></span>
          <span className="badge badge-outline"></span>
        </div>
        <div className="flex items-center justify-between text-sm text-base-content/70">
          <span>⭐ </span>
          <span>Qty: </span>
        </div>
        <div className="mt-3">
          <button
            // onClick={() => onSeeDetails(item._id)}
            className="btn btn-primary btn-block"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

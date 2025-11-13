import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {
    origin_country,
    price,
    product_image,
    product_name,
    available_quantity,
    rating,
    _id,
  } = product;
  return (
    <div className="card bg-base-100 border border-base-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <figure className="relative h-48 overflow-hidden">
        <img
          src={product_image}
          alt={product_name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 badge badge-primary badge-sm text-white shadow-md">
          ⭐ {rating}
        </div>
      </figure>

      {/* Body */}
      <div className="card-body p-5">
        <h2 className="card-title text-base md:text-lg font-semibold mb-1">
          {product_name}
        </h2>

        
        <div className="flex items-center justify-between text-sm text-base-content/70 mb-1">
          <span className="badge badge-outline">{origin_country}</span>
          <span className="text-xs">
            Quantity: <b>{available_quantity}</b>
          </span>
        </div>

        
        <p className="text-primary font-semibold text-lg mb-2">
          ${Number(price).toFixed(2)}
        </p>

        
        <div className="card-actions mt-3">
          <Link
            to={`/productDetails/${_id}`}
            className="btn btn-primary btn-sm w-full text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

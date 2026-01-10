import React from "react";
import { Link } from "react-router";
import { FaStar, FaMapMarkerAlt, FaBoxes, FaCalendarAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    origin_country,
    price,
    product_image,
    product_name,
    available_quantity,
    rating,
    created_at,
    _id,
  } = product;

  // Handle both string IDs and MongoDB $oid objects
  const productId = typeof _id === "object" ? _id.$oid : _id;

  // Format Date (Short description/Meta)
  const dateAdded = new Date(created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group flex flex-col h-full bg-base-100 border border-base-200 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      {/* Image Container with Fixed Height */}
      <figure className="relative h-52 w-full overflow-hidden bg-base-200">
        <img
          src={product_image}
          alt={product_name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-orange-500 shadow-sm">
          <FaStar /> {rating}
        </div>
        {/* Status Badge */}
        <div className="absolute bottom-3 left-3 badge badge-secondary badge-sm border-none text-white shadow-lg">
          Available
        </div>
      </figure>

      {/* Content Body - flex-grow ensures buttons align at bottom */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex-grow">
          {/* Title */}
          <h2
            className="text-lg font-bold text-base-content line-clamp-1 mb-1 group-hover:text-primary transition-colors"
            title={product_name}
          >
            {product_name}
          </h2>

          {/* Location Meta */}
          <div className="flex items-center gap-1.5 text-xs text-base-content/60 mb-3">
            <FaMapMarkerAlt className="text-secondary" />
            <span className="truncate">{origin_country}</span>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="flex items-center gap-2 bg-base-200/50 p-2 rounded-xl">
              <FaBoxes className="text-primary text-xs" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase opacity-50 font-bold leading-none">
                  Stock
                </span>
                <span className="text-xs font-bold">{available_quantity}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-base-200/50 p-2 rounded-xl">
              <FaCalendarAlt className="text-primary text-xs" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase opacity-50 font-bold leading-none">
                  Added
                </span>
                <span className="text-xs font-bold">{dateAdded}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="mt-auto pt-4 border-t border-base-200 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs opacity-50 font-medium">Unit Price</span>
            <span className="text-xl font-black text-primary">
              ${Number(price).toLocaleString()}
            </span>
          </div>

          <Link
            to={`/productDetails/${productId}`}
            className="btn btn-primary btn-sm rounded-xl px-4 normal-case shadow-md shadow-primary/20 hover:shadow-lg"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

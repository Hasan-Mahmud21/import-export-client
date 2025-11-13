import React, { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const MyImports = () => {
  // Demo imports for UI preview
  const [imports, setImports] = useState([
    {
      _id: 1,
      product_name: "High Efficiency Solar Panel 400W",
      product_image:
        "https://i.ibb.co.com/s9vvHpRd/photo-1662601311129-a288e9db505c-ixlib-rb-4-1.jpg",
      price: 329.99,
      origin_country: "China",
      rating: 4.9,
      imported_quantity: 5,
      product_id: "6911ffd927097fbbc7004c6a",
    },
    {
      _id: 2,
      product_name: "Industrial Generator 5kW",
      product_image:
        "https://i.ibb.co.com/gMc6xNmC/photo-1581091870622-9d1de42b6b73-ixlib-rb-4-1.jpg",
      price: 899.0,
      origin_country: "Germany",
      rating: 4.7,
      imported_quantity: 2,
      product_id: "6911ffd927097fbbc7004c6b",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">My Imports</h2>

      <div className="overflow-x-auto bg-base-100 shadow-xl border border-base-200 rounded-2xl">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-base-200 text-base font-semibold text-base-content/80">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Origin</th>
              <th>Imported Qty</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {imports.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-base-200 transition-colors duration-200"
              >
                <td className="font-medium">{index + 1}</td>

                {/* Product image + name */}
                <td className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={item.product_image}
                      alt={item.product_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-base">
                      {item.product_name}
                    </p>
                    <p className="text-xs text-base-content/60">
                      ID: {item.product_id.slice(-6)}
                    </p>
                  </div>
                </td>

                <td className="text-primary font-semibold">
                  ${item.price.toFixed(2)}
                </td>
                <td>
                  <span className="badge badge-primary text-white">
                    ⭐ {item.rating}
                  </span>
                </td>
                <td>{item.origin_country}</td>
                <td>
                  <span className="font-semibold text-success">
                    {item.imported_quantity}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  <div className="flex justify-center gap-3">
                    <button className="btn btn-sm btn-error text-white rounded-full gap-2 shadow hover:scale-105 transition-all">
                      <FaTrash /> Remove
                    </button>
                    <Link
                      to={`/productDetails/${item.product_id}`}
                      className="btn btn-sm btn-primary text-white rounded-full gap-2 shadow hover:scale-105 transition-all"
                    >
                      <FaEye /> See Details
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {imports.length === 0 && (
          <div className="p-10 text-center text-base-content/70">
            <p>No imported products yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyImports;

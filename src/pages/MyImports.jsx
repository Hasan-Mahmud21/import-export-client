import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const MyImports = () => {
  const { user } = useContext(AuthContext);
  const [imports, setImports] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch imports for the logged-in user
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/imports?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setImports(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load imports");
        setLoading(false);
      });
  }, [user]);

  // Remove import (DB + UI)
  const handleRemove = (id) => {
    fetch(`http://localhost:3000/imports/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Removed from imports");
        setImports((prev) => prev.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to remove import");
      });
  };

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">My Imports</h2>

      <div className="overflow-x-auto bg-base-100 shadow-xl border border-base-200 rounded-2xl">
        <table className="table table-zebra w-full">
          
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

          <tbody>
            {imports.map((item, index) => (
              <tr
                key={item._id}
                className="hover:bg-base-200 transition-colors duration-200"
              >
                <td className="font-medium">{index + 1}</td>
                <td className="flex items-center gap-3 py-3">
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
                    {item.productId && (
                      <p className="text-xs text-base-content/60">
                        ID: {String(item.productId).slice(-6)}
                      </p>
                    )}
                  </div>
                </td>

                <td className="text-primary font-semibold">
                  ${Number(item.price).toFixed(2)}
                </td>

                <td>
                  <span className="badge badge-primary text-white">
                    ⭐ {Number(item.rating).toFixed(1)}
                  </span>
                </td>

                <td>{item.origin_country}</td>

                <td>
                  <span className="font-semibold text-success">
                    {item.import_quantity}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="btn btn-sm btn-error text-white rounded-full gap-2 shadow hover:scale-105 transition-all"
                    >
                      <FaTrash /> Remove
                    </button>
                    <Link
                      to={`/productDetails/${item.productId}`}
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

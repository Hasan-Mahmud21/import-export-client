import React, { useState, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ProductDetails = () => {
  const productData = useLoaderData();
  const { user } = useContext(AuthContext) || {};

  const [available, setAvailable] = useState(productData.available_quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const qtyNum = Number(quantity) || 0;

  // Open / close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setQuantity("");
  };

  // Handle quantity input
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  // Handle Import Now submit
  const handleImport = async () => {
    // Frontend validation (Import Limit Rule)
    if (!qtyNum || qtyNum <= 0 || qtyNum > available) return;
    if (!user?.email) {
      alert("You must be logged in to import products.");
      return;
    }

    setIsSubmitting(true);

    const importData = {
      product_id: productData._id, // ✅ must match backend: product_id
      quantity: qtyNum,
      user_email: user.email,
    };

    try {
      const res = await fetch("http://localhost:3000/imports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`❌ ${data.error || "Import failed"}`);
      } else {
        // Update UI available quantity (no reload)
        setAvailable((prev) => prev - qtyNum);
        alert("✅ Product imported successfully!");
        closeModal();
      }
    } catch (error) {
      console.error("Error importing product:", error);
      alert("❌ Server error while importing. Check console/server logs.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-8 lg:p-10">
      <div className="card bg-base-100 shadow-xl border border-base-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-10">
          {/* Left: Product Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={productData.product_image}
                alt={productData.product_name}
                className="w-full h-full object-cover rounded-xl shadow-md transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 badge badge-primary text-white shadow-md">
                ⭐ {productData.rating}
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-center space-y-5 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {productData.product_name}
            </h1>

            <div className="flex flex-wrap gap-3">
              <span className="badge badge-lg badge-outline text-gray-700 font-medium">
                🌍 {productData.origin_country}
              </span>
              <span className="badge badge-lg badge-outline text-gray-700 font-medium">
                Available: {available}
              </span>
            </div>

            <div className="text-4xl font-extrabold text-primary">
              ${Number(productData.price).toFixed(2)}
            </div>

            <p className="text-base md:text-lg text-base-content/70 leading-relaxed">
              This premium product is built for maximum efficiency and global
              export, ensuring reliability and performance for your business
              needs.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={openModal}
                className="btn btn-primary text-white rounded-full shadow hover:scale-105 transition-all duration-300"
                disabled={available <= 0}
              >
                {available > 0 ? "Import Now" : "Out of Stock"}
              </button>
              <Link
                to="/allProducts"
                className="btn btn-outline rounded-full hover:shadow-md transition-all duration-300"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Import Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-base-100 rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-scaleIn">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            >
              ✕
            </button>

            <h3 className="font-bold text-xl mb-3">Import Quantity</h3>
            <p className="text-base-content/70 mb-4">
              Available stock: <b>{available}</b>
            </p>

            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-medium">Quantity</span>
              </label>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Enter quantity"
                className="input input-bordered w-full"
              />
              {qtyNum > available && (
                <label className="label pt-1">
                  <span className="label-text-alt text-error">
                    Quantity cannot exceed available stock.
                  </span>
                </label>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={closeModal} className="btn btn-ghost">
                Cancel
              </button>
              <button
                onClick={handleImport}
                className="btn btn-primary text-white"
                disabled={
                  isSubmitting || !qtyNum || qtyNum <= 0 || qtyNum > available
                }
              >
                {isSubmitting ? "Importing..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

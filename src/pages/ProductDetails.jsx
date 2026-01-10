import React, { useState, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import {
  FaGlobe,
  FaBoxOpen,
  FaStar,
  FaChevronLeft,
  FaShieldAlt,
  FaTruckLoading,
} from "react-icons/fa";

const ProductDetails = () => {
  const productData = useLoaderData();
  const { user } = useContext(AuthContext) || {};

  const [available, setAvailable] = useState(productData.available_quantity);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for image gallery (simulating multiple images if only one exists)
  const [activeImg, setActiveImg] = useState(productData.product_image);
  const images = [
    productData.product_image,
    productData.product_image,
    productData.product_image,
  ];

  const qtyNum = Number(quantity) || 0;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setQuantity("");
  };

  const handleImport = async () => {
    if (!qtyNum || qtyNum <= 0 || qtyNum > available) return;
    if (!user?.email) {
      alert("Please login to process this import.");
      return;
    }

    setIsSubmitting(true);
    const importData = {
      product_id: productData._id,
      quantity: qtyNum,
      user_email: user.email,
    };

    try {
      const res = await fetch("https://tradesphere-server.vercel.app/imports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(importData),
      });

      if (res.ok) {
        setAvailable((prev) => prev - qtyNum);
        alert("✅ Import successful!");
        closeModal();
      }
    } catch (error) {
      alert("❌ Server error.", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Link
          to="/allProducts"
          className="flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          <FaChevronLeft /> Back to Global Catalog
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* --- LEFT: Image Gallery (Lg: 7 cols) --- */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-3xl overflow-hidden bg-base-200 border border-base-200 shadow-sm aspect-video flex items-center justify-center">
            <img
              src={activeImg}
              alt={productData.product_name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="flex gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(img)}
                className={`w-24 h-24 rounded-xl border-2 overflow-hidden transition-all ${
                  activeImg === img
                    ? "border-primary"
                    : "border-transparent opacity-60"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="preview"
                />
              </button>
            ))}
          </div>
        </div>

        {/* --- RIGHT: Information (Lg: 5 cols) --- */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <div className="badge badge-primary badge-outline gap-2 p-3">
              <FaStar className="text-orange-400" /> Rated {productData.rating}{" "}
              / 5.0
            </div>
            <h1 className="text-4xl font-black text-gray-800 leading-tight">
              {productData.product_name}
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-4xl font-black text-primary">
              ${Number(productData.price).toFixed(2)}
            </div>
            <div
              className={`badge badge-lg ${
                available > 0 ? "badge-success text-white" : "badge-error"
              } py-4`}
            >
              {available > 0 ? `${available} In Stock` : "Out of Stock"}
            </div>
          </div>

          <div className="divider"></div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-2xl">
              <FaGlobe className="text-primary text-xl" />
              <div>
                <p className="text-xs uppercase opacity-50 font-bold">Origin</p>
                <p className="font-semibold">{productData.origin_country}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-2xl">
              <FaTruckLoading className="text-primary text-xl" />
              <div>
                <p className="text-xs uppercase opacity-50 font-bold">
                  Category
                </p>
                <p className="font-semibold">Trade Export</p>
              </div>
            </div>
          </div>

          <p className="text-base-content/70 leading-relaxed italic">
            "High-performance trade asset optimized for global logistics and
            secure supply chain management. Verified quality and origin
            certifications included."
          </p>

          <button
            onClick={openModal}
            className="btn btn-primary btn-lg w-full rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
            disabled={available <= 0}
          >
            {available > 0 ? "Process Import Now" : "Unavailable"}
          </button>
        </div>
      </div>

      {/* --- BOTTOM SECTIONS --- */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Rules & Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold border-l-4 border-primary pl-4 uppercase tracking-wider">
            Import Compliance & Rules
          </h2>
          <div className="collapse collapse-plus bg-base-200 rounded-2xl">
            <input type="radio" name="my-accordion" defaultChecked />
            <div className="collapse-title text-lg font-semibold flex items-center gap-2">
              <FaShieldAlt className="text-primary" /> Logistics Verification
            </div>
            <div className="collapse-content text-sm text-base-content/70">
              <p>
                All items in this category must undergo export scanning before
                shipping. Real-time tracking is provided upon successful import
                processing.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 rounded-2xl">
            <input type="radio" name="my-accordion" />
            <div className="collapse-title text-lg font-semibold flex items-center gap-2">
              <FaBoxOpen className="text-primary" /> Bulk Import Restrictions
            </div>
            <div className="collapse-content text-sm text-base-content/70">
              <p>
                Max import quantity per user is limited to available stock. For
                wholesale containers, contact our global partner support.
              </p>
            </div>
          </div>
        </div>

        {/* Specifications/Overview */}
        <div className="bg-primary/5 p-8 rounded-[3rem] border border-primary/10">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-primary/10 pb-2">
              <span className="font-medium opacity-60">SKU Code</span>
              <span className="font-bold">
                TS-{productData._id?.slice(-5).toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between border-b border-primary/10 pb-2">
              <span className="font-medium opacity-60">Certification</span>
              <span className="font-bold">ISO 9001 Verified</span>
            </div>
            <div className="flex justify-between border-b border-primary/10 pb-2">
              <span className="font-medium opacity-60">Lead Time</span>
              <span className="font-bold">3 - 5 Business Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items Simulation */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Suggested for your Business</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-32 bg-base-200 rounded-2xl border border-dashed border-primary/30 flex items-center justify-center text-xs uppercase font-bold text-primary"
            >
              Suggested Trade Item
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (Same as your logic but with better styling) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-base-100 rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 relative scale-up">
            <h3 className="font-black text-2xl mb-2 text-primary">
              Import Order
            </h3>
            <p className="mb-6 opacity-60">
              Enter the quantity you wish to add to your trade pipeline.
            </p>
            <div className="form-control">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="0"
                className="input input-bordered input-lg w-full rounded-2xl text-center font-bold"
              />
            </div>
            <div className="flex gap-4 mt-8">
              <button
                onClick={closeModal}
                className="btn btn-ghost flex-1 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleImport}
                disabled={isSubmitting || !qtyNum || qtyNum > available}
                className="btn btn-primary flex-2 rounded-xl text-white"
              >
                {isSubmitting ? "Processing..." : "Confirm Import"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;

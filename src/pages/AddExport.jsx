// src/pages/AddExport.jsx
import React, { use, useEffect } from "react";

// import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

import { Navigate } from "react-router";
import { toast } from "react-toastify";

const AddExport = () => {
  const { user } = use(AuthContext) || {};

  useEffect(() => {
    document.title = "Add Export • Import Export Hub";
  }, []);

  // ⛳️ Keep your existing functionality here.
  // If you already had a handleSubmit, paste it in place of this one.
  const handleSubmit = (e) => {
    e.preventDefault();

    // --- BEGIN: Your existing logic can stay exactly the same ---
    const form = e.currentTarget;

    const formData = {
      name: form.name.value,
      image: form.image.value,
      price: Number(form.price.value),
      origin_country: form.origin_country.value,
      rating: Number(form.rating.value),
      available_quantity: Number(form.available_quantity.value),
      // Any other fields you already sent (e.g., owner_email, createdAt) go here
      createdAt: new Date(),
      added_by: user.email,
    };
    console.log(formData);

    // Example toast (optional, if you already had success/error toasts keep them)
    // toast.loading("Adding product...", { id: "addExp" });

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Product added!");
        form.reset();
        // Navigate("/allProducts", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        // toast.error(err?.message || "Failed", { id: "addExp" })
      });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="card bg-base-100 border border-base-200 shadow-xl rounded-2xl overflow-hidden">
        <div className="card-body p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Add Export / Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Product Name */}
            <div className="form-control">
              <label htmlFor="name" className="label pb-1">
                <span className="label-text font-medium">Product Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g., UltraBook Pro 14” Laptop"
                className="input input-bordered w-full rounded-xl"
                required
              />
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label htmlFor="image" className="label pb-1">
                <span className="label-text font-medium">
                  Product Image (URL)
                </span>
              </label>
              <input
                id="image"
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full rounded-xl"
                required
              />
              <label className="label pt-1">
                <span className="label-text-alt text-xs text-base-content/60">
                  Use a direct image link (jpg/png/webp).
                </span>
              </label>
            </div>

            {/* Price & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label htmlFor="price" className="label pb-1">
                  <span className="label-text font-medium">Price</span>
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="e.g., 329.99"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="rating" className="label pb-1">
                  <span className="label-text font-medium">Rating</span>
                </label>
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  placeholder="e.g., 4.7"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Origin Country & Available Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label htmlFor="origin_country" className="label pb-1">
                  <span className="label-text font-medium">Origin Country</span>
                </label>
                <input
                  id="origin_country"
                  name="origin_country"
                  type="text"
                  placeholder="e.g., Japan"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>

              <div className="form-control">
                <label htmlFor="available_quantity" className="label pb-1">
                  <span className="label-text font-medium">
                    Available Quantity
                  </span>
                </label>
                <input
                  id="available_quantity"
                  name="available_quantity"
                  type="number"
                  step="1"
                  min="0"
                  placeholder="e.g., 260"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn btn-primary w-full rounded-full"
              >
                Add Export/Product
              </button>
            </div>
          </form>

          {/* Meta helper (optional, does not change functionality) */}
          {user?.email && (
            <p className="text-center text-xs text-base-content/60 mt-4">
              Adding as: <span className="font-medium">{user.email}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddExport;

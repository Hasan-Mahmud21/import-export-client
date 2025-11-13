// src/pages/AddExport.jsx
import React, { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const AddExport = () => {
  const { user } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Add Export • Import Export Hub";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      product_name: form.name.value,
      product_image: form.image.value,
      price: Number(form.price.value),
      origin_country: form.origin_country.value,
      rating: Number(form.rating.value),
      available_quantity: Number(form.available_quantity.value),

      // meta
      created_at: new Date(),
      added_by: user.email,
    };

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Product added successfully!");
        form.reset();
        navigate("/allProducts");
      })
      .catch((error) => {
        toast.error("Failed to add product");
        console.error(error);
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
              <label className="label pb-1">
                <span className="label-text font-medium">Product Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="e.g., UltraBook Pro 14” Laptop"
                className="input input-bordered w-full rounded-xl"
                required
              />
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label pb-1">
                <span className="label-text font-medium">
                  Product Image (URL)
                </span>
              </label>
              <input
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full rounded-xl"
                required
              />
            </div>

            {/* Price & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-medium">Price</span>
                </label>
                <input
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
                <label className="label pb-1">
                  <span className="label-text font-medium">Rating</span>
                </label>
                <input
                  name="rating"
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  placeholder="e.g., 4.8"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Origin Country & Quantity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-medium">Origin Country</span>
                </label>
                <input
                  name="origin_country"
                  type="text"
                  placeholder="e.g., Japan"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-medium">
                    Available Quantity
                  </span>
                </label>
                <input
                  name="available_quantity"
                  type="number"
                  min="0"
                  placeholder="e.g., 260"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full rounded-full"
            >
              Add Export/Product
            </button>
          </form>

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

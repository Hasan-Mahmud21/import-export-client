import React from "react";
import { Link, useLoaderData } from "react-router";

const ProductDetails = () => {
  const ProductData = useLoaderData();
  console.log(ProductData);

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-base-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          {/* Image */}
          <div className="shrink-0 w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={ProductData.product_image}
                alt={ProductData.product_name}
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
              {/* Rating badge on the image */}
              <div className="absolute top-3 right-3 badge badge-primary text-white shadow-md">
                ⭐ {ProductData.rating /* e.g., 4.7 */}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold">
              {ProductData.product_name}
            </h1>

            {/* Badges: origin + available */}
            <div className="flex flex-wrap gap-3">
              <div className="badge badge-lg badge-outline">
                {ProductData.origin_country /* e.g., "Japan" */}
              </div>
              <div className="badge badge-lg badge-outline">
                Available: {ProductData.available_quantity /* e.g., 320 */}
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-extrabold text-primary">
              ${Number(ProductData.price).toFixed(2)}
            </div>

            {/* Optional short description line (static) */}
            <p className="text-base-content/70 leading-relaxed text-base md:text-lg">
              High quality product ready for global export.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-4">
              {/* Static button – no JS handlers wired */}
              <button className="btn btn-primary rounded-full">
                Import Now
              </button>
              <Link to="/allProducts" className="btn btn-outline rounded-full">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Import Modal – static markup (no JS wired) */}
      <dialog id="import_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg">Import Quantity</h3>
          <p className="text-base-content/70 mb-4">
            Available stock: <b>{ProductData.available_quantity}</b>
          </p>

          <div className="form-control">
            <label className="label pb-1">
              <span className="label-text font-medium">Quantity</span>
            </label>
            <input
              type="number"
              min={1}
              placeholder="Enter quantity"
              className="input input-bordered w-full"
            />
            {/* Static hint */}
            <label className="label pt-1">
              <span className="label-text-alt text-xs text-base-content/60">
                Quantity cannot exceed available stock.
              </span>
            </label>
          </div>

          <div className="modal-action">
            <button className="btn btn-ghost">Cancel</button>
            {/* Static disabled example to show the rule visually */}
            <button className="btn btn-primary" disabled>
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;

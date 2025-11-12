// src/pages/ProductDetails.jsx
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";


// const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) || {};

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  const modalRef = useRef(null);

  useEffect(() => {
    document.title = "Product Details • Import Export Hub";
  }, []);

  // Fetch product details
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(`${API_BASE}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => (isMounted = false);
  }, [id]);

  const available = product?.available_quantity ?? 0;
  const invalidQty = useMemo(
    () => qty <= 0 || qty > available,
    [qty, available]
  );

  const onOpenModal = () => {
    modalRef.current?.showModal?.();
    setQty(1);
  };

  const onCloseModal = () => {
    modalRef.current?.close?.();
  };

  const handleImport = (quantity) => {
    if (!user) {
      Swal.fire({
        icon: "info",
        title: "Login required",
        text: "Please log in to import products.",
        confirmButtonText: "Go to Login",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) navigate("/auth/login", { state: { from: location } });
      });
      return;
    }

    // POST /imports -> then decrement on server
    fetch(``, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        product_id: product._id,
        quantity,
        user_email: user?.email, // if you don't verify on server yet
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // success toast + UI refresh
        onCloseModal();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Imported successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // refetch the product to reflect reduced quantity
        return fetch(``)
          .then((res) => res.json())
          .then((updated) => setProduct(updated));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to import",
          text: "Please try again.",
        });
      });
  };

  if (loading || !product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-base-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          {/* Image */}
          <div className="shrink-0 w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover rounded-xl shadow-md"
              />
              <div className="absolute top-3 right-3 badge badge-primary text-white shadow-md">
                ⭐ {product.rating}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold">
              {product.name}
            </h1>

            <div className="flex flex-wrap gap-3">
              <div className="badge badge-outline">{product.origin_country}</div>
              <div className="badge badge-outline">
                Available: {product.available_quantity}
              </div>
            </div>

            <p className="text-base-content/70 leading-relaxed text-base md:text-lg">
              {product.description}
            </p>

            <div className="text-3xl font-extrabold text-primary">
              ${Number(product.price).toFixed(2)}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={onOpenModal}
                className="btn btn-primary rounded-full"
              >
                Import Now
              </button>
              <Link
                to="/allProducts"
                className="btn btn-outline rounded-full"
              >
                Back to Products
              </Link>
              {/* Optional: owner-only actions like Update/Delete could go here */}
            </div>
          </div>
        </div>
      </div>

      {/* Import Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onCloseModal}>
              ✕
            </button>
          </form>

          <h3 className="font-bold text-lg">Import Quantity</h3>
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
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className={`input input-bordered w-full ${invalidQty ? "input-error" : ""}`}
            />
            {qty > available && (
              <label className="label pt-1">
                <span className="label-text-alt text-error">
                  Quantity cannot exceed available stock.
                </span>
              </label>
            )}
          </div>

          <div className="modal-action">
            <button className="btn btn-ghost" onClick={onCloseModal}>
              Cancel
            </button>
            <button
              className="btn btn-primary"
              disabled={invalidQty}
              onClick={() => handleImport(qty)}
            >
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductDetails;

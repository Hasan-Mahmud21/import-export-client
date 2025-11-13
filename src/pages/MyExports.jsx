import React, { useContext, useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const MyExports = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "My Exports | TradeSphere";
  }, []);

  // Update Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/products?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => toast.error("Failed to load exports."));
  }, [user]);

  // Open modal with selected product
  const openModal = (p) => {
    setEditingProduct(p);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // Delete product
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product deleted!");
        setProducts(products.filter((item) => item._id !== id));
      })
      .catch(() => toast.error("Delete failed."));
  };

  // Submit update
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      product_name: form.product_name.value,
      product_image: form.product_image.value,
      price: Number(form.price.value),
      origin_country: form.origin_country.value,
      rating: Number(form.rating.value),
      available_quantity: Number(form.available_quantity.value),
    };

    fetch(`http://localhost:3000/products/${editingProduct._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product updated!");

        // Update UI without reload
        setProducts(
          products.map((p) =>
            p._id === editingProduct._id ? { ...p, ...updatedData } : p
          )
        );

        closeModal();
      })
      .catch(() => toast.error("Update failed."));
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-10">
      <h2 className="text-3xl font-bold text-center mb-8">My Exports</h2>

      <div className="overflow-x-auto bg-base-100 shadow-xl border border-base-200 rounded-2xl">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Origin</th>
              <th>Available Qty</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <tr key={item._id} className="hover:bg-base-200 transition">
                <td>{index + 1}</td>

                {/* Image + Name */}
                <td className="flex items-center gap-3 py-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden shadow">
                    <img
                      src={item.product_image}
                      alt={item.product_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{item.product_name}</p>
                    <p className="text-xs opacity-60">
                      ID: {item._id.slice(-6)}
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

                <td className="font-semibold text-success">
                  {item.available_quantity}
                </td>

                <td>
                  <div className="flex justify-center gap-3">
                    <button
                      className="btn btn-sm btn-error text-white rounded-full gap-2"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrash /> Delete
                    </button>
                    <button
                      className="btn btn-sm btn-primary text-white rounded-full gap-2"
                      onClick={() => openModal(item)}
                    >
                      <FaEdit /> Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <div className="p-10 text-center text-base-content/70">
            No products added yet.
          </div>
        )}
      </div>

      {/* Update Modal */}
      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-base-100 rounded-2xl shadow-xl p-6 w-full max-w-lg animate-scaleIn relative">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">
              Update Product
            </h3>

            <form onSubmit={handleUpdate} className="space-y-4">
              {/* Name */}
              <div>
                <label className="label">Product Name</label>
                <input
                  name="product_name"
                  type="text"
                  defaultValue={editingProduct.product_name}
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="label">Product Image</label>
                <input
                  name="product_image"
                  type="url"
                  defaultValue={editingProduct.product_image}
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>

              {/* Price / Rating */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Price</label>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    defaultValue={editingProduct.price}
                    className="input input-bordered w-full rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label className="label">Rating</label>
                  <input
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    defaultValue={editingProduct.rating}
                    className="input input-bordered w-full rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Origin / Quantity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Origin Country</label>
                  <input
                    name="origin_country"
                    type="text"
                    defaultValue={editingProduct.origin_country}
                    className="input input-bordered w-full rounded-xl"
                    required
                  />
                </div>

                <div>
                  <label className="label">Available Quantity</label>
                  <input
                    name="available_quantity"
                    type="number"
                    defaultValue={editingProduct.available_quantity}
                    className="input input-bordered w-full rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="text-right">
                <button className="btn btn-primary rounded-full" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyExports;

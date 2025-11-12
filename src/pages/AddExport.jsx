import React from "react";

const AddExport = () => {
  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Add Export / Product</h1>
      <form className="space-y-4">
        <div className="form-control">
          <label className="label">Product Name</label>
          <input className="input input-bordered" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">Image URL</label>
          <input
            className="input input-bordered"
            name="image"
            type="url"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">Price</label>
            <input
              className="input input-bordered"
              name="price"
              type="number"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Rating (1-5)</label>
            <input
              className="input input-bordered"
              name="rating"
              type="number"
              min="1"
              max="5"
              step="0.1"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">Origin Country</label>
            <input
              className="input input-bordered"
              name="origin_country"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">Available Quantity</label>
            <input
              className="input input-bordered"
              name="available_quantity"
              type="number"
              min="0"
              step="1"
              required
            />
          </div>
        </div>
        <button className="btn btn-primary w-full">Add Export/Product</button>
      </form>
    </main>
  );
};

export default AddExport;

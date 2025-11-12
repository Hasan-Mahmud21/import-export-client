import React from "react";

const MyExports = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">My Exports</h1>
        <a className="btn btn-outline btn-sm" href="/add-export">
          Add New
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* map owned products with edit/delete */}
      </div>
      {/* Update Modal */}
      {editing && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Product</h3>
            <form className="mt-4 space-y-3">
              {/* prefilled inputs */}
              <input
                className="input input-bordered w-full"
                defaultValue={editing.name}
              />
              {/* ...image, price, rating, origin, available_quantity */}
              <div className="modal-action">
                <button
                  className="btn"
                  onClick={() => setEditing(null)}
                  type="button"
                >
                  Cancel
                </button>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </main>
  );
};

export default MyExports;

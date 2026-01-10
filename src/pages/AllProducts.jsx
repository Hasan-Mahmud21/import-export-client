import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import { FaSearch, FaSortAmountDown } from "react-icons/fa";

const AllProducts = () => {
  const products = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  // Logic: Search Filter
  let filteredProducts = products.filter((product) =>
    product.product_name
      ?.toLowerCase()
      .includes(searchText.trim().toLowerCase())
  );

  // Logic: Sorting
  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="max-w-[1440px] mx-auto px-4 py-10 min-h-screen">
      {/* Header & Controls Section */}
      <section className="bg-base-200/50 p-6 rounded-3xl mb-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-primary mb-2">
              Inventory Explorer
            </h1>
            <p className="text-sm text-base-content/60">
              Browse and filter through our global trade catalog.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40" />
              <input
                type="text"
                placeholder="Search products..."
                className="input input-bordered w-full pl-12 rounded-2xl bg-base-100 focus:outline-primary"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <FaSortAmountDown className="text-primary hidden md:block" />
              <select
                className="select select-bordered rounded-2xl w-full md:w-48 bg-base-100"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Sort by: Default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Meta Info */}
      <div className="flex items-center justify-between mb-6 px-2">
        <p className="text-sm font-medium">
          Showing{" "}
          <span className="text-primary font-bold">
            {filteredProducts.length}
          </span>{" "}
          results
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 bg-base-100 rounded-3xl border-2 border-dashed border-base-300">
            <div className="text-6xl mb-4 opacity-20">🔎</div>
            <h3 className="text-xl font-bold opacity-60">No products found</h3>
            <p className="text-base-content/50">
              Try searching with a different keyword or clearing filters.
            </p>
            <button
              onClick={() => setSearchText("")}
              className="btn btn-primary btn-sm mt-4 rounded-xl"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default AllProducts;

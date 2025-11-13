import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const products = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const filteredProducts = products.filter((product) =>
    product.product_name
      ?.toLowerCase()
      .includes(searchText.trim().toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-semibold">All Products</h1>
        <div className="w-full md:w-80">
          <input
            type="text"
            placeholder="Search by product name..."
            className="input input-bordered w-full rounded-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <p className="text-sm text-base-content/60 mb-4">
        Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
        of <span className="font-semibold">{products.length}</span> products
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-base-content/60">
            No products found for{" "}
            <span className="font-semibold">"{searchText}"</span>.
          </div>
        )}
      </div>
    </main>
  );
};

export default AllProducts;

import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">All Products</h1>
        {/* <ThemeToggle/> optional here too */}
      </div>
      <div className="mb-6">{/* <SearchBar/> */}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* map <ProductCard/> */}
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </main>
  );
};

export default AllProducts;

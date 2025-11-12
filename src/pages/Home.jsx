import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const latestProducts = useLoaderData();
  return (
    <main>
      {/* Banner */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Export & Import Made Simple
            </h1>
            <p className="mt-4 text-white/90">
              Browse global products and import to your hub in one click.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/all-products" className="btn btn-white text-blue-600">
                Explore Products
              </a>
              <a href="/add-export" className="btn btn-outline">
                Add Export
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/banner-illustration.svg"
              alt="banner"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Latest 6 */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl mx-auto font-semibold text-primary">
            Latest Products
          </h2>
          <a className="link link-primary" href="/all-products">
            View all
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* map latest six <ProductCard/> */}
          {latestProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </section>

      {/* Extra Section 1: Why Choose Us */}
      <section className="bg-base-200">
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
          {["Fast Shipping", "Trusted Partners", "Secure Auth"].map(
            (title, i) => (
              <div key={i} className="card bg-base-100 shadow-md p-6">
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-base-content/70">
                  Concise value proposition.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Extra Section 2: Global Partners */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Global Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 opacity-80">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-12 bg-base-200 rounded-xl" />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

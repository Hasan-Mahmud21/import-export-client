import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";

const Home = () => {
  useEffect(() => {
    document.title = "Home | TradeSphere";
  }, []);
  const latestProducts = useLoaderData();
  return (
    <main>
      {/* Banner */}
      <Banner></Banner>

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

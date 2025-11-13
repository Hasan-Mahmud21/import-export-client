import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalPartners from "../components/GlobalPartners";

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
          <h2 className="text-4xl text-primary font-bold text-center mb-8 mx-auto">
            Latest Products
          </h2>
          <Link to="/allProducts" className="link link-primary">
            View all
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestProducts.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </section>

      {/* Extra Section 1: Why Choose Us */}
      <WhyChooseUs></WhyChooseUs>

      {/* Extra Section 2: Global Partners */}
      <GlobalPartners></GlobalPartners>
    </main>
  );
};

export default Home;

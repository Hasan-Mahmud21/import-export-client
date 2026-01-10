import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import GlobalPartners from "../components/GlobalPartners";
import StatsBar from "../components/StatsBar";
import CategoryGrid from "../components/CategoryGrid";
import Process from "../components/Process";
import TradeHighlights from "../components/TradeHighlights";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  useEffect(() => {
    document.title = "Home | TradeSphere";
  }, []);
  const latestProducts = useLoaderData();
  return (
    <main>
      <Banner />
      <StatsBar />
      <CategoryGrid />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl text-primary font-bold text-center mb-8 mx-auto tracking-tight">
          Latest Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
      <WhyChooseUs />
      <Process />
      <TradeHighlights />
      <Testimonials />
      <GlobalPartners />
      <Newsletter />
    </main>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaGlobeAsia, FaArrowRight, FaChevronDown } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Connect Products to the World",
    badge: "Export Management",
    image: "https://images.pexels.com/photos/4484079/pexels-photo-4484079.jpeg",
  },
  {
    id: 2,
    title: "Track Imports Effortlessly",
    badge: "Live Insights",
    image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg",
  },
  {
    id: 3,
    title: "Organize Trade Pipeline",
    badge: "Smart Dashboard",
    image: "https://images.pexels.com/photos/4484077/pexels-photo-4484077.jpeg",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-base-100 lg:h-[70vh] flex items-center border-b border-base-200">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 py-10 lg:py-0 items-center h-full">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            <FaGlobeAsia /> <span>{slides[activeIndex].badge}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] mb-6">
            Manage <span className="text-primary">Global Trade</span> <br />
            Simpler Than Ever.
          </h1>
          <div className="flex gap-4">
            <Link
              to="/allProducts"
              className="btn btn-primary rounded-xl shadow-lg"
            >
              Get Started <FaArrowRight />
            </Link>
            <Link to="/about" className="btn btn-outline rounded-xl">
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative h-[350px] lg:h-[80%]">
          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img
              src={slides[activeIndex].image}
              className="w-full h-full object-cover transition-all duration-700"
              alt="Trade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl font-bold">
                {slides[activeIndex].title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;

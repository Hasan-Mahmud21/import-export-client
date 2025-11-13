import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaGlobeAsia,
  FaArrowRight,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Connect Your Products to the World",
    subtitle: "List your exports and reach global buyers in just a few clicks.",
    badge: "Smart Export Management",
    image:
      "https://images.pexels.com/photos/4484079/pexels-photo-4484079.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    title: "Track Imports Effortlessly",
    subtitle:
      "Manage imported quantities, stock levels, and performance in real-time.",
    badge: "Live Inventory Insights",
    image:
      "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Organize Your Trade Pipeline",
    subtitle:
      "From adding products to monitoring imports, keep everything in one place.",
    badge: "All-in-One Dashboard",
    image:
      "https://images.pexels.com/photos/4484077/pexels-photo-4484077.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 pt-8 pb-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Text / CTA */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <FaGlobeAsia className="text-sm" />
            <span>Import &amp; Export Management</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Manage Your <span className="text-primary">Global Trade</span> in
            One Place.
          </h1>

          <p className="text-base md:text-lg text-base-content/70 max-w-xl">
            Add export-ready products, track your imports, control available
            stock, and keep everything organized inside TradeSphere.
          </p>

          {/* Small feature highlights */}
          <div className="flex flex-wrap gap-4 text-sm text-base-content/80">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-full bg-base-200">
                <FaTruck />
              </span>
              <span>Real-time import tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-full bg-base-200">
                <FaWarehouse />
              </span>
              <span>Smart stock updates</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/allProducts"
              className="btn btn-primary rounded-full text-white gap-2"
            >
              Browse All Products <FaArrowRight />
            </Link>
            <Link
              to="/add-export"
              className="btn btn-outline rounded-full border-base-300 hover:border-primary hover:text-primary"
            >
              Add Export / Product
            </Link>
          </div>
        </div>

        {/* Right: Slider / Swiper */}
        <div className="relative">
          <div className="card bg-base-100 shadow-xl border border-base-200 rounded-3xl overflow-hidden">
            <div className="relative h-64 md:h-80">
              {/* Slide image with fade/slide animation */}
              <img
                key={currentSlide.id}
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 via-base-100/10 to-transparent" />

              {/* Slide content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
                <span className="badge badge-primary badge-sm text-white">
                  {currentSlide.badge}
                </span>
                <h3 className="text-lg md:text-xl font-semibold">
                  {currentSlide.title}
                </h3>
                <p className="text-sm text-base-content/70">
                  {currentSlide.subtitle}
                </p>
              </div>
            </div>

            {/* Dots & index controls */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-base-200">
              <span className="text-xs text-base-content/60">
                Slide {activeIndex + 1} of {slides.length}
              </span>
              <div className="flex gap-2">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-5 bg-primary"
                        : "bg-base-300 hover:bg-base-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Soft glow behind card */}
          <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-40 bg-gradient-to-tr from-primary/20 via-secondary/10 to-base-300/10" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

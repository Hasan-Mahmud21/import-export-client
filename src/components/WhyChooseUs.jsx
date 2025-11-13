import React from "react";
import { FaShippingFast, FaHandshake, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast className="text-primary text-2xl" />,
    title: "Fast & Reliable Shipping",
    desc: "Optimize your export pipeline with real-time stock tracking and quick dispatch.",
  },
  {
    icon: <FaHandshake className="text-primary text-2xl" />,
    title: "Trusted Global Partners",
    desc: "Work with verified vendors and buyers across multiple countries with confidence.",
  },
  {
    icon: <FaShieldAlt className="text-primary text-2xl" />,
    title: "Secure Authentication",
    desc: "Your account, products, and imports are protected with modern auth and best practices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold  text-primary mb-2">
            Why Choose TradeSphere
          </p>
          <p className="text-sm md:text-base text-base-content/70 max-w-2xl mx-auto mt-2">
            From adding exports to tracking imports, TradeSphere helps you keep
            your global trade organized and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="card bg-base-100 border border-base-200 shadow-md rounded-2xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-base md:text-lg">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-base-content/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

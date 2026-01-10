import React, { useEffect } from "react";
import {
  FaGlobeAmericas,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    document.title = "About Us • TradeSphere Hub";
  }, []);

  const features = [
    {
      icon: <FaGlobeAmericas className="text-4xl text-primary" />,
      title: "Global Reach",
      desc: "Connecting exporters from local markets to international buyers across 120+ countries.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-secondary" />,
      title: "Secure Trading",
      desc: "Advanced encryption and verified user profiles ensure every transaction is safe and transparent.",
    },
    {
      icon: <FaChartLine className="text-4xl text-accent" />,
      title: "Real-time Analytics",
      desc: "Monitor your trade volume and market trends with our integrated dashboard tools.",
    },
    {
      icon: <FaUsers className="text-4xl text-info" />,
      title: "Expert Support",
      desc: "Our dedicated logistics experts are available 24/7 to help you navigate customs and shipping.",
    },
  ];

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-content overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Revolutionizing Global Trade
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            TradeSphere Hub is the world's leading digital ecosystem for
            import-export logistics, designed to simplify the complexity of
            international commerce.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Logistics Hub"
              className="rounded-[3rem] shadow-2xl transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-4xl font-black text-primary">15+</div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                Years of Excellence
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-black text-base-content">Our Story</h2>
            <p className="text-lg text-base-content/70 leading-relaxed">
              Founded in 2025, TradeSphere Hub started with a simple goal: to
              make international shipping as easy as sending a local package. We
              realized that small and medium enterprises were struggling with
              the paperwork and lack of transparency in global trade.
            </p>
            <p className="text-lg text-base-content/70 leading-relaxed">
              Today, we provide a unified platform where businesses can add
              exports, track imports, and analyze their growth through a single,
              secure dashboard. We bridge the gap between producers and the
              global market.
            </p>
            <div className="pt-4">
              <button className="btn btn-primary rounded-2xl px-8">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Why Choose TradeSphere?
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="card bg-base-100 p-8 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-base-content/60 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="stats shadow w-full bg-base-100 rounded-[2.5rem] p-8 border border-base-300 flex flex-col md:flex-row gap-8">
          <div className="stat place-items-center">
            <div className="stat-title font-bold">Total Shipments</div>
            <div className="stat-value text-primary">89.4k</div>
            <div className="stat-desc font-medium">21% more than last year</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title font-bold">Active Traders</div>
            <div className="stat-value text-secondary">15,600</div>
            <div className="stat-desc text-secondary font-medium">
              Verified businesses
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title font-bold">Success Rate</div>
            <div className="stat-value">99.2%</div>
            <div className="stat-desc text-success text-lg font-bold">
              Top Tier Reliability
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

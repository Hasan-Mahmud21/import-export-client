import { FaShippingFast, FaHandshake, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Fast Shipping",
      desc: "Optimize your export pipeline with real-time stock tracking.",
    },
    {
      icon: <FaHandshake />,
      title: "Global Trust",
      desc: "Work with verified vendors and buyers across multiple countries.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Trade",
      desc: "Your products and imports are protected with modern best practices.",
    },
  ];

  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Why Choose TradeSphere
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="card bg-base-100 p-8 rounded-3xl shadow-md hover:-translate-y-2 transition-all"
            >
              <div className="text-primary text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="opacity-70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;

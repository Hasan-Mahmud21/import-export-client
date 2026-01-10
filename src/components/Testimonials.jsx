import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah J.",
      role: "Export Manager",
      text: "TradeSphere transformed how we track our cargo.",
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "David C.",
      role: "Global Sourcing",
      text: "Adding exports takes seconds. The dashboard is elite.",
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Elena R.",
      role: "Logistics Lead",
      text: "Security features give us peace of mind with vendors.",
      img: "https://i.pravatar.cc/150?u=3",
    },
  ];
  return (
    <section className="bg-primary/5 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Trusted by Global Traders</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-base-100 p-8 rounded-3xl shadow-sm border border-base-200"
            >
              <p className="italic opacity-80 mb-6">"{r.text}"</p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={r.img}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                  alt={r.name}
                />
                <div className="text-left">
                  <h4 className="font-bold text-sm">{r.name}</h4>
                  <p className="text-xs opacity-60">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

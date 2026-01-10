import { FaLaptop, FaTshirt, FaAppleAlt, FaCogs } from "react-icons/fa";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Electronics",
      icon: <FaLaptop />,
      count: "1.2k Items",
      color: "bg-blue-500",
    },
    {
      name: "Apparel",
      icon: <FaTshirt />,
      count: "800 Items",
      color: "bg-pink-500",
    },
    {
      name: "Agriculture",
      icon: <FaAppleAlt />,
      count: "2.5k Items",
      color: "bg-green-500",
    },
    {
      name: "Industrial",
      icon: <FaCogs />,
      count: "450 Items",
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Browse by Industry
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="group p-8 bg-base-100 border border-base-200 rounded-3xl hover:border-primary transition-all shadow-sm hover:shadow-xl text-center"
          >
            <div
              className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform`}
            >
              {cat.icon}
            </div>
            <h3 className="font-bold text-lg">{cat.name}</h3>
            <p className="text-sm opacity-60">{cat.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CategoryGrid;

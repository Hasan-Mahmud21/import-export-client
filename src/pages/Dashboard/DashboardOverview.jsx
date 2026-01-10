import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { FaArrowUp, FaBoxOpen, FaShip } from "react-icons/fa";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ exports: 0, imports: 0 });

  useEffect(() => {
    // Fetch real backend counts for this user
    fetch(`https://tradesphere-server.vercel.app/user-stats/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, [user]);

  const chartData = [
    { name: "Exports", value: stats.exports },
    { name: "Imports", value: stats.imports },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-black">
          Welcome Back, {user?.displayName?.split(" ")[0]}!
        </h1>
        <p className="opacity-60">
          Here is what's happening with your trade portfolio today.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats shadow bg-base-100 rounded-3xl p-2 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-primary">
              <FaShip size={30} />
            </div>
            <div className="stat-title font-bold">Total Exports</div>
            <div className="stat-value text-primary">{stats.exports}</div>
            <div className="stat-desc flex items-center gap-1 text-success font-bold">
              <FaArrowUp /> 12% increase
            </div>
          </div>
        </div>
        <div className="stats shadow bg-base-100 rounded-3xl p-2 border border-base-300">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBoxOpen size={30} />
            </div>
            <div className="stat-title font-bold">Active Imports</div>
            <div className="stat-value text-secondary">{stats.imports}</div>
            <div className="stat-desc font-medium italic">
              Pending delivery: 2
            </div>
          </div>
        </div>
      </div>

      {/* Chart & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-base-100 p-8 rounded-4xl shadow-sm border border-base-300">
          <h3 className="text-xl font-bold mb-6">Trade Volume Distribution</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  opacity={0.1}
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "15px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#570df8"
                  radius={[10, 10, 0, 0]}
                  barSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-base-100 p-8 rounded-4xl shadow-sm border border-base-300 overflow-hidden">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 hover:bg-base-200 rounded-2xl transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  T
                </div>
                <div>
                  <p className="font-bold">Trade verified for Global Export</p>
                  <p className="text-xs opacity-50">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

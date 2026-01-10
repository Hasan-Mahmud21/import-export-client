
import { Outlet, Link, NavLink, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaHome, FaPlusCircle, FaShip, FaBox, FaUser, FaSignOutAlt, FaChartPie } from "react-icons/fa";

const DashboardLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then(() => navigate("/"));
  };

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: <FaChartPie /> },
    { name: "My Profile", path: "/dashboard/profile", icon: <FaUser /> },
    { name: "Add Export", path: "/dashboard/add-export", icon: <FaPlusCircle /> },
    { name: "My Exports", path: "/dashboard/my-exports", icon: <FaShip /> },
    { name: "My Imports", path: "/dashboard/my-imports", icon: <FaBox /> },
  ];

  return (
    <div className="drawer lg:drawer-open bg-base-200 min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <header className="navbar bg-base-100 shadow-sm px-4 lg:px-8 border-b border-base-300">
          <div className="flex-1">
            <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <h2 className="text-xl font-bold hidden lg:block">TradeSphere Console</h2>
          </div>
          
          <div className="flex-none gap-4">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-2 border-primary">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "https://via.placeholder.com/150"} alt="profile" />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/dashboard/profile">Profile</Link></li>
                <li><Link to="/">Main Site</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 lg:p-10">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <aside className="drawer-side z-20">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-64 min-h-full bg-base-100 text-base-content border-r border-base-300">
          <div className="px-4 py-6 mb-4">
            <h1 className="text-2xl font-black text-primary italic">TradeSphere</h1>
            <p className="text-xs opacity-50 uppercase tracking-widest mt-1">Management Hub</p>
          </div>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path} 
                  end 
                  className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl font-medium transition-all ${isActive ? 'bg-primary text-white shadow-md' : 'hover:bg-base-200'}`}
                >
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-4">
            <button onClick={handleLogout} className="btn btn-outline btn-error w-full rounded-xl gap-2">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardLayout;
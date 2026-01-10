import React, { useContext } from "react";
import { NavLink, Link } from "react-router"; // Fixed import
import {
  FaGlobeAsia,
  FaUserCircle,
  FaSignOutAlt,
  FaColumns,
  FaUserCog,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  // Safe destructuring with fallback to empty object
  const { user, logout } = useContext(AuthContext) || {};

  // Active Link Styling
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-secondary text-white font-bold shadow-sm"
        : "hover:bg-white/20 text-primary-content"
    }`;

  /* ---------- Public Routes ---------- */
  const publicLinks = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allProducts" className={linkClass}>
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </li>
    </>
  );

  /* ---------- Protected Routes ---------- */
  const privateLinks = (
    <>
      <li>
        <NavLink to="/myExports" className={linkClass}>
          My Exports
        </NavLink>
      </li>
      <li>
        <NavLink to="/myImports" className={linkClass}>
          My Imports
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-export" className={linkClass}>
          Add Export
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md border-b border-white/10">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* ---------- Navbar Start ---------- */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-primary-content"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 text-base-content shadow-xl z-50 border border-base-200 p-2"
            >
              <div className="px-3 py-2 text-xs font-bold opacity-50 uppercase tracking-widest">
                Main
              </div>
              {publicLinks}
              {user && (
                <>
                  <div className="divider my-0"></div>
                  <div className="px-3 py-2 text-xs font-bold opacity-50 uppercase tracking-widest">
                    Trade
                  </div>
                  {privateLinks}
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-extrabold text-primary-content group"
          >
            <FaGlobeAsia className="text-secondary text-2xl transition-transform group-hover:rotate-12" />
            <span className="tracking-tight">TradeSphere</span>
          </Link>
        </div>

        {/* ---------- Navbar Center (Desktop) ---------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-1">
            {publicLinks}
            {user && privateLinks}
          </ul>
        </div>

        {/* ---------- Navbar End ---------- */}
        <div className="navbar-end gap-3">
          <ThemeToggle />

          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar ring ring-white/20 ring-offset-base-100 ring-offset-2 hover:ring-secondary transition-all"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Profile" />
                  ) : (
                    <FaUserCircle className="w-full h-full text-2xl bg-base-300" />
                  )}
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 w-60 rounded-2xl bg-base-100 text-base-content shadow-2xl border border-base-200 p-2 z-50"
              >
                <div className="px-4 py-3 mb-2 bg-base-200/50 rounded-xl">
                  <p className="text-xs font-semibold opacity-60">
                    Signed in as
                  </p>
                  <p className="font-bold truncate text-sm">{user.email}</p>
                </div>

                <li>
                  <Link to="/profile" className="py-3">
                    <FaUserCog className="text-primary" /> My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="py-3">
                    <FaColumns className="text-secondary" /> Dashboard
                  </Link>
                </li>

                <div className="divider my-1"></div>

                <li>
                  <button
                    onClick={logout}
                    className="py-3 text-error font-bold hover:bg-error/10"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-secondary btn-sm rounded-lg text-white shadow-lg border-none px-6"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

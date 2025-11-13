import React, { useContext } from "react";
import { NavLink, Link } from "react-router";

import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext) || {};

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myExports"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          My Exports
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myImports"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          My Imports
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-export"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Add Export
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-300">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo + Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-2 btn btn-ghost normal-case text-xl"
          >
            <img
              src="/logo.svg" // ✅ Replace with your actual logo path
              alt="TradeSphere Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-bold text-lg text-primary">TradeSphere</span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="h-8 w-8 rounded-full border border-base-300"
                />
              ) : (
                <FaUserCircle className="text-2xl text-base-content/70" />
              )}
              <button
                onClick={logout}
                className="btn btn-outline btn-sm hover:btn-primary"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary btn-sm text-white"
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

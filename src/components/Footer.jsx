import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaGlobeAsia,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-base-300 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-primary/10 flex items-center justify-center shadow-sm">
              <FaGlobeAsia className="text-primary text-xl" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-lg tracking-tight text-primary">
                TradeSphere
              </span>
              <span className="text-[11px] text-base-content/60">
                Import &amp; Export Hub
              </span>
            </div>
          </div>
          <p className="text-sm text-base-content/70 max-w-sm">
            Manage exports, track imports, and monitor stock levels in one
            simple dashboard tailored for global trade.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-sm mb-3 text-base-content/80">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allProducts"
                className="hover:text-primary transition-colors"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/myExports"
                className="hover:text-primary transition-colors"
              >
                My Exports
              </Link>
            </li>
            <li>
              <Link
                to="/myImports"
                className="hover:text-primary transition-colors"
              >
                My Imports
              </Link>
            </li>
            <li>
              <Link
                to="/add-export"
                className="hover:text-primary transition-colors"
              >
                Add Export / Product
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="font-semibold text-sm mb-1 text-base-content/80">
            Stay Connected
          </h3>
          <p className="text-sm text-base-content/70">
            Need support or have feedback? Reach out any time.
          </p>
          <p className="text-sm text-base-content/70">
            <span className="font-medium">Email:</span> support@tradesphere.app
          </p>

          <div className="flex gap-3 pt-2">
            <button className="btn btn-ghost btn-xs rounded-full border border-base-300 hover:border-primary">
              <FaFacebookF className="text-base-content/70" />
            </button>
            <button className="btn btn-ghost btn-xs rounded-full border border-base-300 hover:border-primary">
              <FaTwitter className="text-base-content/70" />
            </button>
            <button className="btn btn-ghost btn-xs rounded-full border border-base-300 hover:border-primary">
              <FaInstagram className="text-base-content/70" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-base-content/60">
            © {year} TradeSphere. All rights reserved.
          </p>
          <div className="flex gap-3 text-[11px] text-base-content/60">
            <span className="hover:text-primary cursor-pointer">
              Terms &amp; Conditions
            </span>
            <span className="hover:text-primary cursor-pointer">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

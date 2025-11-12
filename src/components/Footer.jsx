import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Import Export Hub</h4>
          <p className="text-sm text-base-content/70">
            Global products, simple imports.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">support@importexporthub.com</p>
          <p className="text-sm">+880 1234-567890</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Follow</h4>
          <div className="flex gap-3 text-2xl">
            <a href="#" aria-label="X">
              ✖️
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="Facebook">
              f
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm py-4 border-t border-base-300">
        © {new Date().getFullYear()} Import Export Hub
      </div>
    </footer>
  );
};

export default Footer;

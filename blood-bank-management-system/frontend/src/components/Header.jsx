import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WEBSITE_NAME = import.meta.env.VITE_WEBSITE_NAME;

export default function Header({ currentUser }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const authLinks = currentUser
    ? [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Profile", path: "/profile" },
    ]
    : [
      { name: "Login", path: "/login" },
      { name: "Register as Donor", path: "/register/donor" },
      { name: "Register as Facility", path: "/register/facility" },
    ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b"
          : "bg-white/80 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 3 }}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M12 2C12 2 6 8 6 12a6 6 0 0012 0c0-4-6-10-6-10z" />
              </svg>
            </motion.div>

            <div className="leading-tight">
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {WEBSITE_NAME}
              </h1>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Blood Management System
              </p>
            </div>

          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg ${isActive(link.path)
                      ? "text-red-700"
                      : "text-gray-700 hover:text-red-600"
                    }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-x-2 -bottom-1 h-0.5 bg-red-600 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <div className="w-px h-6 bg-gray-300 mx-3" />

            {authLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${link.name.includes("Register")
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md hover:shadow-lg"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100"
          >
            <motion.div
              animate={mobileOpen ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: -6 },
                  open: { rotate: 45, y: 0 },
                }}
                className="absolute w-5 h-0.5 bg-current left-0"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="absolute w-5 h-0.5 bg-current left-0 top-2.5"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 6 },
                  open: { rotate: -45, y: 0 },
                }}
                className="absolute w-5 h-0.5 bg-current left-0"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-lg"
            >
              <div className="px-4 py-5 space-y-2">
                {[...navLinks, ...authLinks].map((link) => (
                  <motion.div
                    key={link.name}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-xl font-medium text-center ${link.name.includes("Register")
                          ? "bg-gradient-to-r from-red-600 to-red-700 text-white"
                          : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

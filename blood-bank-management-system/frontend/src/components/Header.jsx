import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const WEBSITE_NAME = import.meta.env.VITE_WEBSITE_NAME;

export default function Header({ currentUser }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-11 h-11 rounded-xl bg-red-600 shadow-lg flex items-center justify-center"
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
              <h1 className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
                {WEBSITE_NAME}
              </h1>
              <p className="text-[11px] uppercase tracking-widest text-slate-300">
                Blood Management System
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition ${
                    isActive(link.path)
                      ? "text-red-400"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute left-2 right-2 -bottom-1 h-0.5 bg-red-500 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            <div className="w-px h-6 bg-slate-600 mx-3" />

            {authLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold rounded-xl transition ${
                    link.name.includes("Register")
                      ? "bg-red-600 text-white hover:bg-red-700 shadow-md"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-slate-700"
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
                className="absolute w-5 h-0.5 bg-white left-0"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="absolute w-5 h-0.5 bg-white left-0 top-2.5"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 6 },
                  open: { rotate: -45, y: 0 },
                }}
                className="absolute w-5 h-0.5 bg-white left-0"
              />
            </motion.div>
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-slate-900 border-t border-slate-700"
            >
              <div className="px-4 py-4 space-y-2">
                {[...navLinks, ...authLinks].map((link) => (
                  <motion.div key={link.name} whileTap={{ scale: 0.96 }}>
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-semibold text-center ${
                        link.name.includes("Register")
                          ? "bg-red-600 text-white"
                          : "text-slate-200 hover:bg-slate-800"
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
    </header>
  );
}

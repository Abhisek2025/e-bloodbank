import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import toast from "react-hot-toast";

/* ---------- Static Data ---------- */

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Mission", path: "/" },
  { name: "Success Stories", path: "/" },
  { name: "News & Updates", path: "/" },
];

const donorResources = [
  { name: "Become a Donor", path: "/register/donor" },
  { name: "Eligibility Criteria", path: "/" },
  { name: "Donation Process", path: "/" },
  { name: "Donor Benefits", path: "/" },
];

const hospitalResources = [
  { name: "Partner with Us", path: "/register/facility" },
  { name: "Blood Request", path: "/" },
  { name: "Inventory Management", path: "/" },
  { name: "Emergency Protocol", path: "/" },
];

const socialLinks = [
  { icon: Facebook, url: "https://www.facebook.com/" },
  { icon: Twitter, url: "https://x.com/" },
  { icon: Instagram, url: "https://www.instagram.com/abhisek_334_/#" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/abhisek-singh-700082251/" },
];

/* -------------------------------- */

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
    toast.success("Subscribed to newsletter!");
    window.location.reload();
  }, 1000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-gray-900 text-gray-300"
    >
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND + NEWSLETTER */}
          <div>
            <Link to="/" className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">BloodConnect</h2>
                <p className="text-sm text-red-300">Life Saver Network</p>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting compassionate donors with those in need through
              technology-driven blood bank management.
            </p>

            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.url}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center
                               hover:bg-red-600 hover:scale-110 transition-all"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>

            {/* NEWSLETTER */}
            <h4 className="text-white font-semibold mb-2">
              Subscribe to our Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get updates on donation camps & emergencies.
            </p>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700
                           text-sm text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit" onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700
                           text-white font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="For Donors" links={donorResources} />

          {/* HOSPITALS + CONTACT */}
          <div>
            <FooterColumn title="For Hospitals" links={hospitalResources} />

            <div className="mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur
                            border border-white/10 shadow-lg space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wide">
                Contact & Support
              </h4>

              <ContactItem icon={Phone} label="Emergency Hotline" value="1800-259-6085" />
              <ContactItem icon={Mail} label="Email Support" value="help@bloodconnect.org" />
              <ContactItem icon={MapPin} label="Coverage" value="Nationwide Network" />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <span className="text-gray-400">
            © {currentYear} BloodConnect. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* FLOATING DONATE BUTTON */}
      <Link
        to="/register/donor"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4
                   bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold
                   rounded-full shadow-2xl hover:scale-105 transition-all"
      >
        <Heart className="w-5 h-5" />
        Donate Now
      </Link>
    </motion.footer>
  );
};

/* ---------- Helpers ---------- */

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
      <span className="w-1 h-4 bg-red-500 rounded-full" />
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link, i) => (
        <li key={i}>
          <Link
            to={link.path}
            className="flex items-center gap-2 hover:text-white transition group"
          >
            <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="flex gap-4 group">
    <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center
                    group-hover:bg-red-600 transition">
      <Icon className="w-4 h-4 text-red-400 group-hover:text-white" />
    </div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  </div>
);

export default React.memo(Footer);

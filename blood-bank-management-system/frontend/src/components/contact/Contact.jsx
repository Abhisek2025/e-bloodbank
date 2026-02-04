import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  ShieldCheck,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Invalid email address");
      return;
    }

    if (form.phone.length < 10) {
      toast.error("Invalid phone number");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f3f9fc]">
      <Header />

      {/* HERO */}
      <section className="mt-20 bg-gradient-to-r from-[#0f2a44] to-[#123c5a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-5"
            >
              Contact BloodConnect
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-200"
            >
              Emergency blood requests, donor support or enquiries — we’re here
              24/7.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* WHY CONTACT */}
      <section className="py-14 bg-white">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {[
            "Fast emergency response",
            "Verified donor coordination",
            "Trusted medical partners",
          ].map((text, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-center gap-4 bg-[#f3f9fc] p-6 rounded-2xl shadow-sm"
            >
              <CheckCircle className="text-cyan-500" />
              <p className="text-sm font-medium text-[#0f2a44]">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MAP + FORM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg h-[280px] sm:h-[400px] md:h-[520px]"
          >
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Adaspur%2C%20Cuttack&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f3f9fc] p-6 sm:p-10 rounded-3xl shadow-lg space-y-5"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2a44]">
              Send Us a Message
            </h2>

            {[
              { label: "Full Name", name: "name", icon: User },
              { label: "Email Address", name: "email", icon: Mail },
              { label: "Phone Number", name: "phone", icon: Phone },
            ].map((f, i) => (
              <div key={i}>
                <label className="text-sm font-medium text-slate-700">
                  {f.label}
                </label>
                <div className="flex items-center border rounded-xl px-4 mt-2 bg-white focus-within:ring-2 ring-cyan-400">
                  <f.icon className="text-slate-400 mr-3" />
                  <input
                    name={f.name}
                    value={form[f.name]}
                    onChange={handleChange}
                    className="w-full py-3 text-sm outline-none"
                    placeholder={f.label}
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="text-sm font-medium text-slate-700">
                Message
              </label>
              <div className="flex items-start border rounded-xl px-4 mt-2 bg-white focus-within:ring-2 ring-cyan-400">
                <MessageSquare className="text-slate-400 mr-3 mt-3" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full py-3 text-sm outline-none"
                  placeholder="Describe your request..."
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-[#0f2a44] py-4 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Message"}
              <Send className="w-5 h-5" />
            </motion.button>

            {/* SOCIALS */}
            <div className="pt-6">
              <p className="text-xs text-slate-500 mb-3">
                Follow us for donation drives
              </p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Linkedin, Globe].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="p-3 rounded-full bg-cyan-100 hover:bg-cyan-200 cursor-pointer"
                  >
                    <Icon className="text-cyan-600 w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Shield,
  Target,
  Droplet,
  MapPin,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

/* ---------------- animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const AboutUs = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Lives Saved" },
    { icon: Droplet, number: "100,000+", label: "Blood Donations" },
    { icon: MapPin, number: "500+", label: "Donation Camps" },
    { icon: Shield, number: "99.8%", label: "Safety Rate" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Every drop matters. We exist to serve humanity with empathy and care.",
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description:
        "Strict medical standards ensure the safest blood for every patient.",
    },
    {
      icon: Users,
      title: "Community Power",
      description:
        "Connecting donors, hospitals, and volunteers nationwide.",
    },
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "Focused on eliminating preventable deaths due to blood shortage.",
    },
  ];

  const team = [
    {
      name: "Dr. Abhijit Dash",
      role: "Medical Director",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500",
    },
    {
      name: "Abhisek Koyal",
      role: "Technology Head",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    },
    {
      name: "Ankita Mohakhund",
      role: "Community Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500",
    },
    {
      name: "Abhijit Dey",
      role: "Operations Lead",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3f9fc] to-white">
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#123c5a] to-[#0b2238] text-white">
  
  {/* Animated background glow */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
  />
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]"
  />

  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    }}
    className="relative max-w-7xl mx-auto px-6 py-32 text-center"
  >
    {/* Badge */}
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="inline-block mb-6 px-6 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sm font-semibold"
    >
      National Blood Network
    </motion.span>

    {/* Heading */}
    <motion.h1
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
    >
      Saving Lives
      <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Beyond Technology
      </span>
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto"
    >
      We are a national blood network built to ensure no life is lost
      due to unavailability of blood.
    </motion.p>
  </motion.div>
</section>


      {/* ---------------- STATS ---------------- */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#f3f9fc] to-white">
  {/* soft background accent */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[140px]" />
  </div>

  <motion.div
    variants={stagger}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative max-w-7xl mx-auto px-4 sm:px-6 
               grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
  >
    {stats.map((s, i) => {
      const Icon = s.icon;
      return (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group relative rounded-3xl bg-white/90 backdrop-blur
                     p-8 md:p-10 text-center shadow-md hover:shadow-2xl
                     border border-slate-100 transition-all duration-300"
        >
          {/* icon wrapper */}
          <div className="relative w-16 h-16 mx-auto mb-5 rounded-2xl 
                          bg-gradient-to-br from-cyan-100 to-blue-100
                          flex items-center justify-center
                          group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-cyan-600" />
          </div>

          {/* number */}
          <div className="text-3xl md:text-4xl font-extrabold text-[#0f2a44] mb-1">
            {s.number}
          </div>

          {/* label */}
          <p className="text-sm md:text-base text-slate-600">
            {s.label}
          </p>

          {/* hover accent line */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 
                           w-0 h-[3px] bg-cyan-500 rounded-full
                           group-hover:w-1/2 transition-all duration-300" />
        </motion.div>
      );
    })}
  </motion.div>
</section>


      {/* ---------------- MISSION ---------------- */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#123c5a] to-[#0b2238] text-white">
  
  {/* Background glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[140px]" />

  {/* Floating blood drops */}
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-6 bg-red-500/30 rounded-b-full rounded-t-lg"
        style={{
          left: `${15 + i * 12}%`,
          top: `${-10 - i * 8}%`,
        }}
        animate={{ y: ["0%", "120%"] }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </motion.div>

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
    
    {/* Text */}
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-6"
    >
      <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm tracking-wide">
        Our Purpose
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Our Mission
        <span className="block text-cyan-400">
          No Life Lost for Blood
        </span>
      </h2>

      <p className="text-slate-200 text-lg leading-relaxed">
        Thousands of lives are lost every year due to delays or unavailability
        of blood. We are building a fast, transparent, and reliable national
        blood access system.
      </p>

      <p className="text-slate-300">
        Through technology, community participation, and medical partnerships,
        we ensure blood reaches the right person — at the right time.
      </p>

      <div className="flex gap-4 pt-4">
        <button className="px-6 py-3 rounded-xl bg-cyan-500 text-[#0f2a44] font-semibold hover:bg-cyan-400 transition cursor-pointer">
          Join Our Mission
        </button>
        <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition cursor-pointer">
          Learn More
        </button>
      </div>
    </motion.div>

    {/* Image with parallax */}
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="relative"
    >
      <motion.img
        src="./blood.png"
        alt="Blood Donation"
        className="rounded-3xl shadow-2xl w-full object-cover"
        whileInView={{ y: [40, 0] }}
        transition={{ duration: 1 }}
      />

      {/* Image overlay card */}
      <div className="absolute -bottom-6 left-6 bg-white text-[#0f2a44] rounded-2xl px-6 py-4 shadow-xl">
        <p className="font-bold text-lg">24/7 Emergency Support</p>
        <p className="text-sm text-slate-600">
          Fast blood access nationwide
        </p>
      </div>
    </motion.div>

  </div>
</section>


      {/* ---------------- WHY WE STARTED ---------------- */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-[#f3f9fc]">
  
  {/* Background accents */}
  <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-cyan-200/40 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] bg-blue-200/40 rounded-full blur-[140px]" />

  <div className="relative max-w-6xl mx-auto px-6 text-center">
    
    {/* Badge */}
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="inline-block mb-6 px-5 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold"
    >
      Our Story
    </motion.span>

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f2a44] mb-10 leading-tight"
    >
      Why We Started
    </motion.h2>

    {/* Content */}
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed"
    >
      Too many families suffer because blood is not available during
      emergencies. We started this initiative after witnessing
      <span className="font-semibold text-slate-700">
        {" "}preventable deaths caused by delays, misinformation, and poor coordination.
      </span>
      <br /><br />
      This platform exists to ensure that no patient ever hears the words —
    </motion.p>

    {/* Quote card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12 inline-block rounded-3xl bg-white shadow-xl px-8 py-6 border border-slate-100"
    >
      <p className="text-xl md:text-2xl font-bold text-[#0f2a44]">
        “Blood not available.”
      </p>
      <p className="text-sm text-slate-500 mt-2">
        Words that should never decide a life.
      </p>
    </motion.div>

  </div>
</section>


      {/* ----------------Our Core Values ---------------- */}

    <section className="relative py-36 overflow-hidden bg-[#f7fbff]">

  {/* ===== Animated Gradient Mesh ===== */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.12),transparent_45%)]" />

  {/* ===== Floating Blobs ===== */}
  <motion.div
    animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-300/30 rounded-full blur-[140px]"
  />

  <motion.div
    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-blue-300/30 rounded-full blur-[160px]"
  />

  {/* ===== Content ===== */}
  <div className="relative max-w-7xl mx-auto px-6">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="text-center mb-28"
    >
      <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full bg-white/70 backdrop-blur border border-cyan-200 text-cyan-700 text-sm font-semibold shadow-sm">
        💙 What Drives Us
      </span>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f2a44] mb-6 leading-tight">
        Our Core Values
      </h2>

      <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg">
        The foundation behind every donation, every decision,
        and every life we touch.
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
    >
      {values.map((v, i) => {
        const Icon = v.icon;
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -18, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative rounded-[2.5rem] bg-white/70 backdrop-blur-xl p-12 text-center border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.25)]"
          >
            {/* Card Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-200/0 via-blue-200/0 to-indigo-200/0 group-hover:from-cyan-200/40 group-hover:via-blue-200/30 group-hover:to-indigo-200/40 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-18 h-18 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition">
                <Icon className="w-9 h-9 text-cyan-700" />
              </div>

              <h3 className="text-xl font-semibold text-[#0f2a44] mb-4">
                {v.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {v.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>



      {/* ---------------- TEAM ---------------- */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0f2a44] mb-20"
          >
            Meet Our Team
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-10"
          >
            {team.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white shadow-lg overflow-hidden"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-[#0f2a44]">
                    {m.name}
                  </h3>
                  <p className="text-cyan-600 text-sm">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
     <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#0f2a44] via-[#123c5a] to-[#0b2238] text-white">
  
  {/* Ambient glow */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-cyan-400/20 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-blue-400/20 rounded-full blur-[140px]" />

  <div className="relative max-w-7xl mx-auto px-6">
    
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <span className="inline-block mb-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-cyan-300">
        Get in Touch
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        We’re Always Here to Help
      </h2>

      <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg">
        Whether it’s an emergency, support request, or collaboration —
        reach out to us anytime.
      </p>
    </motion.div>

    {/* Contact Cards */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center"
    >
      {[
        {
          icon: Phone,
          title: "Emergency Helpline",
          value: "+91 (06087) 112123-HELP",
        },
        {
          icon: Mail,
          title: "Email Support",
          value: "support@bloodconnect.org",
        },
        {
          icon: Globe,
          title: "Network Coverage",
          value: "Nationwide Network",
        },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -12, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="group relative rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 p-10 shadow-lg hover:shadow-2xl"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 opacity-0 group-hover:opacity-100 transition" />

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition">
                <Icon className="w-8 h-8 text-cyan-300" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-slate-200 text-sm sm:text-base">
                {item.value}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>




      <Footer />
    </div>
  );
};

export default AboutUs;

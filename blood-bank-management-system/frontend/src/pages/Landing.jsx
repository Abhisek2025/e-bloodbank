import {
  ArrowRight,
  Heart,
  Users,
  MapPin,
  Clock,
  Droplets,
  Shield,
  Zap,
  Search,
  Bell,
  FileText,
  CheckCircle,
  Activity,
  RefreshCw,
  AlertTriangle,
  Stethoscope,
  Lock,
  Database,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";



/* ---------------- ANIMATIONS ---------------- */

const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------- MAIN ---------------- */

const LandingPage = () => {
  const stats = [
    { icon: Users, label: "Lives Saved", value: "10,000+" },
    { icon: Heart, label: "Blood Units", value: "50,000+" },
    { icon: MapPin, label: "Partner Hospitals", value: "150+" },
    { icon: Clock, label: "Avg Response", value: "< 30 min" },
  ];

  const features = [
    {
      icon: Users,
      title: "Smart Donor Onboarding",
      description:
        "Digitized donor registration with eligibility checks and health screening.",
    },
    {
      icon: Droplets,
      title: "Live Blood Inventory",
      description:
        "Real-time visibility of blood units, expiry dates, and availability.",
    },
    {
      icon: Zap,
      title: "Emergency Matching",
      description:
        "Instant donor-patient matching during critical emergencies.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      icon: FileText,
      title: "Register",
      description: "Create donor or hospital account",
    },
    {
      step: "02",
      icon: Search,
      title: "System Match",
      description: "We match blood needs automatically",
    },
    {
      step: "03",
      icon: Bell,
      title: "Instant Alert",
      description: "Donors get notified immediately",
    },
    {
      step: "04",
      icon: Heart,
      title: "Donate",
      description: "Safe donation at certified centers",
    },
  ];

  const bloodTypes = [
    { type: "A+", need: "High", donors: "32%" },
    { type: "A-", need: "Critical", donors: "8%" },
    { type: "B+", need: "Medium", donors: "12%" },
    { type: "B-", need: "High", donors: "3%" },
    { type: "O+", need: "High", donors: "35%" },
    { type: "O-", need: "Critical", donors: "5%" },
    { type: "AB+", need: "Low", donors: "4%" },
    { type: "AB-", need: "Medium", donors: "1%" },
  ];

  const eligibilityInfo = [
    {
      icon: CheckCircle,
      title: "Eligibility Criteria",
      items: [
        "Age between 17–75 years",
        "Minimum weight 50 kg",
        "Good physical health",
        "No active infections",
      ],
    },
    {
      icon: Stethoscope,
      title: "Health Advantages",
      items: [
        "Free medical screening",
        "Improves blood circulation",
        "Boosts new blood cells",
        "Heart health benefits",
      ],
    },
    {
      icon: Shield,
      title: "Safe Donation",
      items: [
        "Sterile equipment",
        "Certified medical staff",
        "Comfortable process",
        "Post-donation care",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100">

      <Header />

      {/* ---------------- HERO (LEFT-ALIGNED, DIFFERENT) ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b2238] via-[#0f2a44] to-[#123c5a] text-white">
  {/* Ambient glow */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.15 } },
    }}
    className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center"
  >
    {/* Left content */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center gap-2 mb-8 px-6 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sm font-semibold tracking-wide shadow-lg"
      >
        National Blood Network Platform
      </motion.span>

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
        Faster Blood Access <br />
        <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          When Lives Depend On It
        </span>
      </h1>

      <p className="text-lg text-slate-200 mb-12 max-w-xl leading-relaxed">
        A secure, real-time blood bank ecosystem connecting donors, hospitals,
        and patients when every second matters.
      </p>

      <div className="flex flex-wrap gap-5">
        <Link to="/auth">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0f2a44] font-semibold shadow-xl hover:shadow-cyan-500/40 transition"
          >
            Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
          </motion.button>
        </Link>

        <Link to="#about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 rounded-xl border border-white/30 bg-white/5 backdrop-blur hover:bg-white/10 transition"
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.div>

    {/* Right card */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -10 }}
      className="hidden md:block"
    >
      <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl p-12 shadow-2xl border border-white/20">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 hover:opacity-100 transition duration-300" />

        <div className="relative">
          <Shield className="w-20 h-20 text-cyan-300 mb-6 drop-shadow" />
          <p className="text-slate-200 text-lg leading-relaxed">
            Trusted by hospitals and donors nationwide for secure, transparent,
            and life-saving blood management.
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
</section>


      {/* ---------------- STATS (HORIZONTAL CARDS) ---------------- */}
      <section className="relative py-24 bg-white overflow-hidden">
  {/* soft background accents */}
  <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-100/60 rounded-full blur-3xl" />
  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
    {stats.map((s, i) => {
      const Icon = s.icon;
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -10 }}
          className="group relative rounded-3xl bg-gradient-to-br from-[#f7fbfd] to-white p-10 text-center border border-slate-200 shadow-md hover:shadow-2xl transition-all"
        >
          {/* glow on hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-300" />

          <div className="relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-100 flex items-center justify-center group-hover:scale-110 transition">
              <Icon className="w-8 h-8 text-cyan-600" />
            </div>

            <div className="text-4xl font-extrabold text-[#0f2a44] mb-1 tracking-tight">
              {s.value}
            </div>

            <p className="text-slate-600 text-sm font-medium">
              {s.label}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
</section>


      {/* ---------------- Live Blood Availability ---------------- */}

      <section className="py-28 bg-gradient-to-b from-[#f7fbfd] to-[#eef6fb]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-[#0f2a44] mb-16"
        >
          Live Blood Availability
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6"
        >
          {bloodTypes.map((b, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="relative group rounded-2xl bg-white/90 backdrop-blur-lg p-7 text-center shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative z-10">
                <div className="text-4xl font-extrabold bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
                  {b.type}
                </div>

                <p className="mt-3 text-sm font-semibold text-slate-600">
                  {b.need} Demand
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {b.donors} donors
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>


      {/* ---------------- ELIGIBILITY (NEW STRUCTURE) ---------------- */}
      <section className="relative py-32 bg-gradient-to-b from-white to-[#f7fbfd] overflow-hidden">
  <div className="absolute top-24 left-0 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl" />
  <div className="absolute bottom-24 right-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-extrabold tracking-tight text-center text-[#0f2a44] mb-24"
    >
      Donor Eligibility & Safety
    </motion.h2>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="grid gap-12 md:grid-cols-3"
    >
      {eligibilityInfo.map((info, i) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl bg-white/80 backdrop-blur-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/15 to-blue-500/15 opacity-0 group-hover:opacity-100 transition duration-300" />

            <div className="relative">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                <Icon className="w-8 h-8 text-cyan-600" />
              </div>

              <h3 className="text-xl font-semibold text-[#0f2a44] mb-6">
                {info.title}
              </h3>

              <ul className="space-y-4 text-slate-600">
                {info.items.map((item, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>


   
{/* Platform Features */}

<section className="relative py-32 bg-white overflow-hidden">
  
  {/* Ambient background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-cyan-200/20 blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-3xl mx-auto text-center mb-24"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f2a44] mb-4">
        Platform Features
      </h2>
      <p className="text-lg text-slate-600">
        Designed to simplify blood donation, management, and emergency response
        for hospitals and donors.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid gap-10 md:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-3xl bg-white/80 backdrop-blur-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Content */}
            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition duration-300">
                <Icon className="w-7 h-7 text-cyan-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0f2a44] mb-3 group-hover:text-cyan-700 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>



      {/* ---------------- HOW IT WORKS ---------------- */}



      <section className="relative py-32 bg-gradient-to-b from-[#f7fbfd] to-[#eef6fb] overflow-hidden">

        {/* Ambient background accents */}
        <div className="absolute top-24 left-0 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center mb-28"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f2a44] mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              A simple, transparent process to connect donors with those in need.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">

            {/* Vertical line */}
            <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-cyan-300/40 via-blue-300/40 to-transparent hidden md:block" />

            <div className="space-y-20">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`relative flex flex-col md:flex-row gap-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Step Indicator */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative z-10 flex-shrink-0"
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-lg ring-4 ring-cyan-100">
                        {step.step}
                      </div>
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                      className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl flex-1"
                    >
                      {/* Card glow */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 hover:opacity-100 transition duration-300" />

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-cyan-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-[#0f2a44]">
                            {step.title}
                          </h3>
                        </div>

                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* ---------------- CTA ---------------- */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-[#0b1f33] via-[#102a43] to-[#1b3a5f] text-white text-center">

        {/* Background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            Become a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Lifesaver
            </span>{" "}
            Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg text-slate-200 max-w-2xl mx-auto mb-12"
          >
            Your donation can give someone a second chance at life.
            One decision. One moment. One life saved.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Link to="/auth">
              <button className="group inline-flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-cyan-400 to-sky-500 text-[#0b1f33] font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Join Now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>


      <Footer />
    </div>
  );
};

export default LandingPage;

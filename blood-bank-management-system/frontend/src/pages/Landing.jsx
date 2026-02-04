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
    <div className="min-h-screen bg-[#f7fbfd]">
      <Header />

      {/* ---------------- HERO (LEFT-ALIGNED, DIFFERENT) ---------------- */}
      <section className="relative bg-gradient-to-r from-[#0f2a44] to-[#123c5a] text-white">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 text-sm">
              National Blood Network Platform
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Faster Blood Access <br />
              <span className="text-cyan-400">When Lives Depend On It</span>
            </h1>

            <p className="text-lg text-slate-200 mb-10 max-w-xl">
              A modern blood bank management system connecting donors,
              hospitals, and patients in real time.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/auth">
                <button className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-[#0f2a44] font-semibold transition">
                  Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
                </button>
              </Link>
              <Link to="#about">
                <button className="px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 rounded-3xl p-10 backdrop-blur">
              <Shield className="w-20 h-20 text-cyan-400 mb-6" />
              <p className="text-slate-200 text-lg">
                Trusted by hospitals & donors nationwide for secure and
                reliable blood management.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------------- STATS (HORIZONTAL CARDS) ---------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#f0f7fa] rounded-2xl p-8 text-center hover:shadow-xl transition"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-cyan-600" />
                <div className="text-3xl font-bold text-[#0f2a44]">
                  {s.value}
                </div>
                <p className="text-slate-600 text-sm">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ---------------- BLOOD TYPES (GRID BADGES) ---------------- */}
      <section className="py-24 bg-[#f7fbfd]">
        <h2 className="text-3xl font-bold text-center text-[#0f2a44] mb-14">
          Live Blood Availability
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {bloodTypes.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
            >
              <div className="text-3xl font-bold text-cyan-600">
                {b.type}
              </div>
              <p className="text-sm text-slate-600 mt-2">
                {b.need} Demand
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {b.donors} donors
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ELIGIBILITY (NEW STRUCTURE) ---------------- */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f2a44] mb-20">
            Donor Eligibility & Safety
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {eligibilityInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={i}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border border-slate-200 rounded-3xl p-10 hover:border-cyan-400 transition"
                >
                  <Icon className="w-12 h-12 text-cyan-600 mb-6" />
                  <h3 className="text-xl font-semibold text-[#0f2a44] mb-6">
                    {info.title}
                  </h3>
                  <ul className="space-y-3 text-slate-600">
                    {info.items.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a44] mb-4">
        Platform Features
      </h2>
      <p className="text-lg text-slate-600">
        Designed to simplify blood donation, management, and emergency response
        for hospitals and donors.
      </p>
    </motion.div>

    {/* Feature Cards */}
    <div className="grid md:grid-cols-3 gap-10">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group bg-[#f7fbfd] rounded-3xl p-10 shadow-md hover:shadow-xl transition"
          >
            <div className="w-14 h-14 mb-6 rounded-2xl bg-cyan-100 flex items-center justify-center group-hover:scale-110 transition">
              <Icon className="w-7 h-7 text-cyan-600" />
            </div>

            <h3 className="text-xl font-semibold text-[#0f2a44] mb-3">
              {feature.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

<section className="py-28 bg-[#f7fbfd]">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a44] mb-4">
        How It Works
      </h2>
      <p className="text-lg text-slate-600">
        A simple, transparent process to connect donors with those in need.
      </p>
    </motion.div>

    {/* Steps */}
    <div className="max-w-5xl mx-auto space-y-16">
      {processSteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                {step.step}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
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
        );
      })}
    </div>
  </div>
</section>



      {/* ---------------- CTA ---------------- */}
      <section className="py-28 bg-gradient-to-r from-[#0f2a44] to-[#123c5a] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Become a Lifesaver Today
        </h2>
        <p className="max-w-2xl mx-auto text-slate-200 mb-10">
          Your donation can give someone a second chance at life.
        </p>
        <Link to="/auth">
          <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-600 text-[#0f2a44] font-semibold rounded-xl transition">
            Join Now <ArrowRight className="inline w-4 h-4 ml-1" />
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

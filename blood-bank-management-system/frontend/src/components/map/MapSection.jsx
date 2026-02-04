import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200 group">

        {/* Title Overlay */}
        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800">
            📍 Our Location
          </h2>
          <p className="text-sm text-gray-600">
            Adaspur, Cuttack
          </p>
        </div>

        {/* Map */}
        <motion.iframe
          title="map"
          src="https://maps.google.com/maps?q=Adaspur%2C%20Cuttack&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          className="w-full h-96 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </motion.section>
  );
}

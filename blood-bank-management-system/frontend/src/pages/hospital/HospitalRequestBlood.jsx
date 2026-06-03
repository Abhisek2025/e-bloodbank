import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Droplet, MapPin, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const HospitalRequestBlood = () => {
  const [labs, setLabs] = useState([]);
  const [form, setForm] = useState({
    labId: "",
    bloodType: "",
    units: "",
  });
  const [loading, setLoading] = useState(false);
  const [labsLoading, setLabsLoading] = useState(true);

  const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  useEffect(() => {
    const loadLabs = async () => {
      try {
        setLabsLoading(true);
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://bbms-webserver.onrender.com/api/facility/labs",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLabs(res.data.labs || []);
      } catch (err) {
        toast.error("Failed to load blood labs");
      } finally {
        setLabsLoading(false);
      }
    };
    loadLabs();
  }, []);

  const submitRequest = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://bbms-webserver.onrender.com/api/hospital/blood/request",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Blood request sent successfully!");
      setForm({ labId: "", bloodType: "", units: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send request");
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gradient-to-br from-red-50 to-white px-4 py-6 sm:px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="p-3 bg-red-100 rounded-xl">
              <Droplet className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Request Blood
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Request blood units from approved blood labs
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border border-red-100 p-6 sm:p-8"
        >
          <form onSubmit={submitRequest} className="space-y-6">
            {/* Lab */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <MapPin size={16} className="text-red-600" />
                Select Blood Lab
              </label>

              {labsLoading ? (
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="h-4 w-4 border-b-2 border-red-600 rounded-full animate-spin" />
                  Loading labs...
                </div>
              ) : (
                <select
                  value={form.labId}
                  onChange={(e) =>
                    setForm({ ...form, labId: e.target.value })
                  }
                  required
                  disabled={labs.length === 0}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-500"
                >
                  <option value="">-- Select Blood Lab --</option>
                  {labs.map((lab) => (
                    <option key={lab._id} value={lab._id}>
                      {lab.name} — {lab.address?.city}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Blood Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Droplet size={16} className="text-red-600" />
                Blood Type
              </label>
              <select
                value={form.bloodType}
                onChange={(e) =>
                  setForm({ ...form, bloodType: e.target.value })
                }
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-500"
              >
                <option value="">-- Select Blood Type --</option>
                {bloodTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Units */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Units Needed
              </label>
              <input
                type="number"
                min="1"
                max="100"
                required
                value={form.units}
                onChange={(e) =>
                  setForm({ ...form, units: e.target.value })
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-red-500"
                placeholder="Enter number of units"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              disabled={loading || labs.length === 0}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:bg-red-400"
            >
              {loading ? (
                <>
                  <div className="h-4 w-4 border-b-2 border-white rounded-full animate-spin" />
                  Sending Request...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Blood Request
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Labs List */}
        {labs.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-white rounded-2xl shadow-lg border border-red-100 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin className="text-red-600" />
              Available Blood Labs ({labs.length})
            </h3>

            <div className="grid gap-4">
              {labs.map((lab) => (
                <motion.div
                  key={lab._id}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 border border-gray-200 rounded-xl flex flex-col sm:flex-row sm:justify-between gap-3"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{lab.name}</p>
                    <p className="text-sm text-gray-600 flex gap-1">
                      <MapPin size={12} />
                      {lab.address?.city}, {lab.address?.state}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex gap-1 items-center">
                      <Clock size={12} />
                      {lab.operatingHours?.open} - {lab.operatingHours?.close}
                    </div>
                    <div className="flex gap-1 items-center">
                      <Phone size={12} />
                      {lab.phone}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default HospitalRequestBlood;

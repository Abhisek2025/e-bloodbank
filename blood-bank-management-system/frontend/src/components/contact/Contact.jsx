import React from "react";
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
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* HERO */}
      <section className="mt-20 bg-gradient-to-r from-red-600 to-red-700 text-white py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Contact BloodConnect
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl opacity-90">
          Whether it’s an emergency blood request, donor support, or general
          inquiries — our team is always ready to assist you.
        </p>
      </section>

      {/* TRUST / HIGHLIGHTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              icon: Clock,
              title: "24/7 Availability",
              desc: "We operate round-the-clock to handle emergency blood requirements.",
            },
            {
              icon: ShieldCheck,
              title: "Trusted Network",
              desc: "Verified donors and partnered hospitals across the country.",
            },
            {
              icon: HeartHandshake,
              title: "Community Driven",
              desc: "Powered by volunteers, donors, and healthcare professionals.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-10 rounded-2xl text-center shadow-sm hover:shadow-md transition"
            >
              <item.icon className="w-12 h-12 text-red-600 mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              icon: Phone,
              title: "Emergency Helpline",
              l1: "+91 7655087808",
              l2: "Available 24/7",
            },
            {
              icon: Mail,
              title: "Email Support",
              l1: "support@bloodconnect.org",
              l2: "info@bloodconnect.org",
            },
            {
              icon: MapPin,
              title: "Head Office",
              l1: "Acharya Vihar",
              l2: "Bhubaneswar, India",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition text-center"
            >
              <item.icon className="w-12 h-12 text-red-600 mx-auto mb-5" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.l1}</p>
              <p className="text-gray-600">{item.l2}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6">

          {/* MAP */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-[520px]">
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Adaspur%2C%20Cuttack&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {/* FORM */}
          <form className="bg-gray-50 p-12 rounded-3xl shadow-lg space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Have a question, feedback, or urgent request? Fill out the form
              below and we’ll respond as quickly as possible.
            </p>

            {[
              {
                label: "Full Name",
                icon: User,
                type: "text",
                placeholder: "Your full name",
              },
              {
                label: "Email Address",
                icon: Mail,
                type: "email",
                placeholder: "Your email address",
              },
              {
                label: "Phone Number",
                icon: Phone,
                type: "text",
                placeholder: "Your contact number",
              },
            ].map((field, i) => (
              <div key={i}>
                <label className="font-medium text-gray-700">
                  {field.label}
                </label>
                <div className="flex items-center border rounded-xl px-4 mt-2 bg-white focus-within:ring-2 ring-red-500">
                  <field.icon className="text-gray-400 mr-3" />
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full py-3 outline-none"
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="font-medium text-gray-700">Message</label>
              <div className="flex items-start border rounded-xl px-4 mt-2 bg-white focus-within:ring-2 ring-red-500">
                <MessageSquare className="text-gray-400 mr-3 mt-3" />
                <textarea
                  rows="4"
                  placeholder="Describe your query or request..."
                  className="w-full py-3 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
            >
              <Send className="w-5 h-5" />
              Submit Message
            </button>

            {/* SOCIALS */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">
                Follow us for updates and blood donation campaigns
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin, Globe].map((Icon, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-full bg-red-50 hover:bg-red-100 cursor-pointer transition"
                  >
                    <Icon className="text-red-600" />
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

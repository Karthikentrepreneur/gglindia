import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, Warehouse, Package } from "lucide-react";
import { Link } from "react-router-dom";

const bangladeshNavPaths = {
  home: "/Bngaladesh/home",
  about: "/Bngaladesh/about",
  services: "/Bngaladesh/services",
  careers: "/careers",
  contact: "/Bngaladesh/contact",
};

const serviceList = [
  {
    title: "Ocean Freight (LCL & FCL)",
    icon: Ship,
    description: "Weekly services from Chattogram and Mongla with reliable transshipment hubs.",
  },
  {
    title: "Air Freight",
    icon: Plane,
    description: "Express uplift from Dhaka with door-to-door options and shipment visibility.",
  },
  {
    title: "LCL Consolidation",
    icon: Package,
    description: "Neutral consolidation tailored to freight forwarders and NVOCC partners.",
  },
  {
    title: "Warehousing & 3PL",
    icon: Warehouse,
    description: "Inventory management, labelling, and distribution backed by Dhaka facilities.",
  },
  {
    title: "Domestic Transportation",
    icon: Truck,
    description: "Road and last-mile delivery covering major cities across Bangladesh.",
  },
];

const BngaladeshServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header navPaths={bangladeshNavPaths} />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="bg-gradient-to-r from-gray-900 to-brand-navy text-white py-16 md:py-20 mt-2">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="uppercase tracking-[0.3em] text-amber-300 text-sm mb-4">Bangladesh</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Services in Bangladesh</h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Integrated logistics built for Bangladesh shippers with the backing of GGL's global network.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceList.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-3"
              >
                <div className="p-3 bg-amber-100 rounded-lg w-fit text-brand-navy">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Ready to Start?</h2>
              <p className="text-gray-700 leading-relaxed">
                Tell us what you need moved, and our Dhaka operations team will propose the best route, schedule, and documentation support.
              </p>
              <Link
                to={bangladeshNavPaths.contact}
                className="inline-block px-6 py-3 bg-brand-gold text-brand-navy rounded-md font-semibold hover:bg-amber-500 transition"
              >
                Contact Bangladesh Team
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BngaladeshServices;

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Globe, Truck, Warehouse, Ship, Shield } from "lucide-react";

const bangladeshNavPaths = {
  home: "/Bngaladesh/home",
  about: "/Bngaladesh/about",
  services: "/Bngaladesh/services",
  careers: "/careers",
  contact: "/Bngaladesh/contact",
};

const BngaladeshAbout = () => {
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
              <h1 className="text-3xl md:text-5xl font-bold mb-4">About GGL Bangladesh</h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                A dedicated team in Dhaka delivering global logistics standards with local expertise across the Indian Subcontinent.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Regional Strength, Global Network</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Bangladesh office connects shippers to a worldwide network spanning North America, Europe, the Middle East, and Asia.
                From Dhaka, we coordinate ocean and air freight, cross-border trucking, and end-to-end warehousing solutions tailored to local regulations.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With neutral consolidation expertise and transparent communication, the team ensures your cargo moves efficiently while you stay informed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[{ title: "Global Reach", icon: Globe, description: "50+ countries served through our partner network." },
                { title: "Neutral LCL", icon: Ship, description: "Trusted consolidation for freight forwarders and NVOCCs." },
                { title: "Secure Handling", icon: Shield, description: "Compliance-focused operations protecting every shipment." },
                { title: "Local Expertise", icon: Truck, description: "Dhaka-based specialists for customs and road delivery." }].map(
                ({ title, icon: Icon, description }, index) => (
                  <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
                    <div className="p-3 bg-amber-100 rounded-lg w-fit text-brand-navy">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-navy">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">What We Handle</h2>
              <p className="text-gray-700 leading-relaxed">
                From garments and textiles to project cargo and temperature-sensitive goods, our Bangladesh specialists coordinate routing, documentation, and last-mile delivery with care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[{ title: "Ocean & Air Freight", icon: Ship, description: "LCL/FCL and air options with competitive transit times." },
                { title: "Warehousing & 3PL", icon: Warehouse, description: "Flexible storage, labelling, and distribution in Dhaka." },
                { title: "Road Transportation", icon: Truck, description: "Domestic coverage with reliable fleet partners." }].map(
                ({ title, icon: Icon, description }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 space-y-3"
                  >
                    <div className="p-3 bg-amber-100 rounded-lg w-fit text-brand-navy">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BngaladeshAbout;

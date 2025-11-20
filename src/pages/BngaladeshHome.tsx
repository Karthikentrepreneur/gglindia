import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Plane, Ship, Truck, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";

const bangladeshNavPaths = {
  home: "/Bngaladesh/home",
  about: "/Bngaladesh/about",
  services: "/Bngaladesh/services",
  careers: "/careers",
  contact: "/Bngaladesh/contact",
};

const services = [
  {
    id: 1,
    icon: <Ship className="w-5 h-5" />,
    title: "Ocean Freight",
    image: "/oceanf.png",
    description:
      "Comprehensive freight management for both LCL and FCL shipments, ensuring smooth transit across global routes.",
    link: "/Bngaladesh/services",
  },
  {
    id: 2,
    icon: <Warehouse className="w-5 h-5" />,
    title: "LCL Consolidation",
    image: "/hom4.png",
    description:
      "End-to-end consolidation services including collection, labelling, packaging, and documentation for your cargo.",
    link: "/Bngaladesh/services",
  },
  {
    id: 3,
    icon: <Truck className="w-5 h-5" />,
    title: "Transportation",
    image: "/CARGO.png",
    description:
      "Efficient distribution powered by a robust fleet and infrastructure to deliver on time, every time.",
    link: "/Bngaladesh/services",
  },
  {
    id: 4,
    icon: <Warehouse className="w-5 h-5" />,
    title: "Warehousing",
    image: "/warhouseh1.png",
    description:
      "Full-service warehousing and 3PL support to streamline your supply chain with flexible, scalable solutions.",
    link: "/Bngaladesh/services",
  },
  {
    id: 5,
    icon: <Plane className="w-5 h-5" />,
    title: "Air Freight",
    image: "/aircargo2.png",
    description:
      "Fast, reliable, and flexible global air freight options including import/export, express, and door-to-door solutions.",
    link: "/Bngaladesh/services",
  },
  {
    id: 6,
    icon: <Warehouse className="w-5 h-5" />,
    title: "Project Cargo",
    image: "/cargoh1.png",
    description:
      "End-to-end logistics for heavy, oversized, and time-critical shipments with efficiency and safety at the core.",
    link: "/Bngaladesh/services",
  },
];

const BngaladeshHome = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header navPaths={bangladeshNavPaths} />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="bg-gradient-to-r from-gray-900 to-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/lovable-uploads/gp.jpg"
              alt="Bangladesh logistics"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-brand-navy opacity-90" />
          </div>
          <div className="container mx-auto px-4 py-14 md:py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="uppercase tracking-[0.3em] text-amber-300 text-sm mb-4">Bangladesh</p>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Logistics Hub in Dhaka</h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Explore our full suite of services tailored for Bangladesh. From freight forwarding to warehousing and
                on-ground transportation, our Dhaka team is ready to deliver seamless logistics experiences.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">All Services</h2>
              <div className="w-20 h-1 bg-brand-gold mx-auto mb-4" />
              <p className="text-gray-600">
                Discover the comprehensive logistics solutions we provide across Bangladesh and beyond.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group grid grid-cols-1 md:grid-cols-2"
                >
                  <div className="w-full h-48 md:h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="bg-brand-gold text-brand-navy p-2 rounded-full inline-block mb-2 w-fit">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-brand-gold font-medium hover:text-amber-500 inline-flex items-center text-sm"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Need Local Support?</h2>
              <p className="text-gray-600">
                Connect with our Dhaka-based team for tailored logistics solutions across Bangladesh.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                <Link
                  to={bangladeshNavPaths.contact}
                  className="px-6 py-3 bg-brand-gold text-brand-navy rounded-md font-semibold hover:bg-amber-500 transition"
                >
                  Visit Bangladesh Contact
                </Link>
                <Link
                  to={bangladeshNavPaths.services}
                  className="px-6 py-3 border border-brand-navy text-brand-navy rounded-md font-semibold hover:bg-brand-navy hover:text-white transition"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BngaladeshHome;

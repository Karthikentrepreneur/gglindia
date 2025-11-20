import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const bangladeshNavPaths = {
  home: "/Bngaladesh/home",
  about: "/Bngaladesh/about",
  services: "/Bngaladesh/services",
  careers: "/careers",
  contact: "/Bngaladesh/contact",
};

const BngaladeshContact = () => {
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
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Dhaka Contact</h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Reach our Bangladesh team directly for on-ground support, quotations, and shipment assistance.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">Visit or Call Us</h2>
                <div className="w-16 h-1 bg-brand-gold mb-4" />
                <p className="text-gray-600">
                  You will find our Bangladesh office inside Police Plaza Concord, ready to support your cargo needs across the country.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-amber-100 rounded-lg text-brand-navy">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">Address</h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      ID #9-N (New), 9-M(Old-N), 9th floor, Tower 1, Police Plaza Concord No.2, Road # 144, Gulshan Model Town,
                      Dhaka 1215, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-amber-100 rounded-lg text-brand-navy">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">Phone</h3>
                    <p className="text-gray-700 mt-2">+880 1716 620989</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full h-full min-h-[320px] overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <iframe
                title="Bangladesh Office Map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1X0GsrCFJRFoj6Q67PJztKAAzkDlKkXY&ehbc=2E312F&noprof=1&ll=23.751166499999993%2C90.3906431&z=17"
                className="w-full h-[360px] md:h-[420px] border-0"
                loading="lazy"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BngaladeshContact;

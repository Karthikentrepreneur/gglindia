import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Ship, Package, Box, Globe, FileCheck, Anchor, Container, MapPin, Timer, Gauge } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
const LCLConsolidation = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  LCL Consolidation Services
                </motion.h1>
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="text-lg text-gray-700 mb-6">
                  Cost-effective consolidation solutions for your smaller shipments
                </motion.p>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <Link to="/contact" className="px-6 py-3 bg-brand-gold hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} className="rounded-xl overflow-hidden shadow-xl">
                  <AspectRatio ratio={16 / 9}>
                    <img alt="LCL Consolidation Service" className="w-full h-full object-cover" src="/lovable-uploads/lcl.png" />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Professional LCL Consolidation Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">GGL is a LCL Consolidator with global presence covering North America, UK, Middle East, Indian Sub Continent, South East Asia and Far East. Our LCL Groupage services is backed by very efficient customer support at competitive prices.</p>
            <p className="text-gray-700 mb-6 text-justify">The GGL Group is strategically located in the cargo transhipment hubs of Singapore, Malaysia, Srilanka and Dubai offering direct weekly sailings to all major destinations worldwide.</p>
            <p className="text-gray-700 mb-6 text-justify">GGL announces the commencement of its operations in India with the launch of its first office in Mumbai. Offices in Chennai and strategic ICD’s like New Delhi, Pune and Bangalore will follow soon. With this significant development GGL will offer in India a wide spectrum of logistics services including LCL Consolidation, Dangerous Cargo transportation, FCL, Airfreight, Warehousing/3 PL logistics and land transport solutions.</p>
            <p className="text-gray-700 mb-6 text-justify">GGL with its internet based software platform offers unmatched shipment visibility from origin to final destination thereby delivering a truly differentiated customer experience.</p>
            </div>
            
            {/* LCL and FCL Services */}
            
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[{
              title: "Global Network",
              description: "Access to major shipping routes and ports worldwide",
              icon: <Globe className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Container Options",
              description: "Various container types to suit different cargo needs",
              icon: <Container className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Documentation",
              description: "Expert handling of all shipping documentation",
              icon: <FileCheck className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Customs Clearance",
              description: "Seamless processing at international borders",
              icon: <Anchor className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Cargo Tracking",
              description: "Real-time visibility of your shipment status",
              icon: <MapPin className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Specialized Cargo",
              description: "Solutions for oversized and project cargo",
              icon: <Gauge className="h-5 w-5 text-brand-gold" />
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="mb-3 bg-blue-50 p-2 rounded-full inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>)}
            </div>
            
            {/* CTA Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Consolidate Your Shipments?</h3>
              <p className="mb-6 text-blue-50">
                Contact our team today for tailored LCL consolidation solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-brand-navy px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default LCLConsolidation;
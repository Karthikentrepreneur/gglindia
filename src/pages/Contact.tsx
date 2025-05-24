
import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { Phone, Mail, MapPin, Send, Globe } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import MapContainer from "@/components/MapContainer";
import Sidebar from "@/components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("form");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <main className="flex-grow">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[40vh] flex items-center justify-center bg-blue-600 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50" />
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center px-4 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </motion.section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Australia Office</h3>
                    
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <Phone className="mt-1 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">Mob: +61 432254969</p>
                        <p className="text-gray-600">Tel: +61 388205157</p>
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <MapPin className="mt-1 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          Suite 5, 7-9 Mallet Road,<br />Tullamarine, Victoria, 3043
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t">
                    <p className="font-medium mb-4">Connect With Us</p>
                    <div className="flex gap-4">
                      <motion.a
                        href="https://www.linkedin.com/company/gglus/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FaLinkedin size={18} />
                      </motion.a>

                      <motion.a
                        href="https://www.facebook.com/gglusa" 
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FaFacebookF size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-600 mb-6">Fill in the form below and we'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" {...register("firstName")} className="border-gray-200 focus:ring-blue-500" />
                    <Input placeholder="Last Name" {...register("lastName")} className="border-gray-200 focus:ring-blue-500" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Email" type="email" {...register("email")} className="border-gray-200 focus:ring-blue-500" />
                    <Input placeholder="Phone" {...register("phone")} className="border-gray-200 focus:ring-blue-500" />
                  </div>
                  
                  <Input placeholder="Organization/Company" {...register("organization")} className="border-gray-200 focus:ring-blue-500" />
                  
                  <Textarea placeholder="Your Message" className="min-h-[120px] border-gray-200 focus:ring-blue-500" {...register("message")} />
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={18} />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Presence Section with Map and Sidebar */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <Globe className="text-blue-600" />
                Global Presence
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Find our offices worldwide and reach out to our local teams
              </p>
            </motion.div>

            {/* Mobile tabs for switching between map and locations */}
            {isMobile ? (
              <Tabs
                defaultValue="map"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full mb-6"
              >
                <div className="flex justify-center mb-4">
                  <TabsList>
                    <TabsTrigger value="map" className="px-6">Map</TabsTrigger>
                    <TabsTrigger value="locations" className="px-6">Locations</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="map" className="mt-0">
                  <div className="h-[60vh] w-full">
                    <MapContainer />
                  </div>
                </TabsContent>
                
                <TabsContent value="locations" className="mt-0">
                  <div className="h-[60vh] w-full overflow-auto">
                    <Sidebar isOpen={true} onClose={() => {}} />
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              // Desktop view: Map and sidebar side by side
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
                  <MapContainer />
                </div>
                <div className="lg:col-span-1">
                  <Sidebar isOpen={true} onClose={() => {}} />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.583489498719!2d144.8464884754868!3d-37.70139647207317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6579f3b24534d%3A0x7501633196ff14b!2s7-9+Mallett+Rd%2C+Tullamarine+VIC+3043%2C+Australia!5e0!3m2!1sen!2sus!4v1712665730878!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} 
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Users, UserCircle, SearchCode, Ship, Box, ChevronDown, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    // Delay setting visibility for entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  const portalLinks = [{
    icon: <Users className="w-5 h-5" />,
    title: "Customer Portal",
    description: "Access shipping dashboard",
    url: "/customer-portal"
  }, {
    icon: <UserCircle className="w-5 h-5" />,
    title: "Partner Portal",
    description: "Manage partnership",
    url: "/partner-portal"
  }, {
    icon: <SearchCode className="w-5 h-5" />,
    title: "Tracking",
    description: "Track your shipment",
    url: "/tracking"
  }, {
    icon: <Ship className="w-5 h-5" />,
    title: "Sailing Schedule",
    description: "View schedules",
    url: "/schedule"
  }, {
    icon: <Box className="w-5 h-5" />,
    title: "Container Sizes",
    description: "View dimensions",
    url: "/containers"
  }];
  return <section className="relative min-h-[75vh] md:min-h-[90vh] overflow-hidden pt-8 md:pt-16">
      {/* Mobile Navigation Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300
      }} className="fixed top-0 left-0 w-4/5 h-screen bg-brand-navy/95 backdrop-blur-lg z-50 shadow-xl border-l border-brand-gold/30 flex flex-col">
            <div className="p-6 mt-12 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-brand-gold" />
                <h2 className="text-xl font-bold text-white">Global Logistics</h2>
              </div>
              
              <div className="space-y-4">
                {portalLinks.map((link, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-white/20 pb-3">
                    <Link to={link.url} className="flex items-center gap-3 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-brand-gold">{link.icon}</span>
                      <div>
                        <div className="font-medium">{link.title}</div>
                        <div className="text-xs text-white/70">{link.description}</div>
                      </div>
                    </Link>
                  </motion.div>)}
              </div>
              
              <div className="mt-8 space-y-3">
                <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="gold" size="lg" className="w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gold-glow bg-[#d4af37]">
                      Get A Quote
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="lg" variant="gold" className="w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-[#d4af37] text-brand-navy hover:bg-amber-500">
                      Our Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Background image with parallax effect */}
      <motion.div initial={{
      scale: 1.1,
      opacity: 0.8
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 1.8,
      ease: "easeOut"
    }} className="absolute inset-0">
        <img src="homeimage.jpg" alt="Hero background" className="w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy/90" />
      </motion.div>

      {/* Main content - left aligned */}
      <div className="absolute inset-0 flex items-center my-[3px]">
        
      </div>

      {/* MOBILE ONLY: Quick Access Button */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={isVisible ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.8,
      delay: 1.3
    }} className="container mx-auto px-4 sm:px-6 absolute bottom-8 left-0 left-0 z-10 md:hidden">
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="space-y-2 mt-2 mb-4 overflow-hidden bg-brand-navy/80 backdrop-blur-md rounded-lg border border-brand-gold/30 shadow-lg">
              {portalLinks.map((link, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.07
          }} className="hover:bg-white/15 transition-colors">
                  <Link to={link.url} className="w-full p-4 flex items-center space-x-4 text-white">
                    <span className="text-brand-gold bg-white/10 p-2 rounded-full">{link.icon}</span>
                    <div className="text-left">
                      <div className="font-medium">{link.title}</div>
                      <div className="text-xs text-white/80">{link.description}</div>
                    </div>
                  </Link>
                </motion.div>)}
            </motion.div>}
        </AnimatePresence>
      </motion.div>
    </section>;
};
export default Hero;
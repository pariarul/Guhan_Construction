"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ThumbsUp, ShieldCheck, MapPin, Phone, Mail, Briefcase, Hammer, Star, Home as HomeIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ImageGrid from "@/components/ImageGrid";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-primary min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-gold-500 mb-2">Our Story</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Crafting Excellence, <br /> Building Trust.
            </h1>
            <p className="text-gray-400 leading-relaxed mb-6">
              At <strong className="text-white">GUHAN Construction & Developers</strong>, under the visionary leadership of <strong className="text-white">Raja S</strong>, we redefine the art of construction. With a commitment to quality, transparency, and innovation, we transform complex challenges into enduring structures.
            </p>
            <div className="flex space-x-8 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-500">10+</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-500">50+</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-500">100%</h3>
                <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800"
          >
            {/* Placeholder for About Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-900/20 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Construction Site"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-secondary py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="What We Do" title="Our Expertise" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={HomeIcon}
              title="Residential Construction"
              description="From luxury villas to modern apartments, we build homes that reflect your lifestyle and aspirations."
            />
            <ServiceCard
              icon={Briefcase}
              title="Commercial Development"
              description="Creating functional, inspiring spaces for businesses to thrive, blending aesthetics with utility."
            />
            <ServiceCard
              icon={Hammer}
              title="Renovation & Remodeling"
              description="Breathing new life into existing structures with modern upgrades and structural enhancements."
            />
            <ServiceCard
              icon={MapPin}
              title="Lead Property Development"
              description="Identifying prime locations and developing them into high-value assets for future growth."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Turnkey Projects"
              description="End-to-end project management, from concept to keys, ensuring a seamless experience."
            />
            <ServiceCard
              icon={Star}
              title="Brand & Design Direction"
              description="Consulting on architectural aesthetics and brand integration for commercial spaces."
            />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="container mx-auto px-6 py-24 md:py-32">
        <SectionTitle subtitle="Our Portfolio" title="Featured Projects" className="mb-16" />
        <ImageGrid />
        <div className="text-center mt-12">
          <a href="/projects" className="inline-block px-8 py-3 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-colors font-bold uppercase tracking-widest text-sm">
            View All Projects
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/noise.png')] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <SectionTitle subtitle="Why Choose Us" title="Built on Integrity" className="text-left mb-8" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black border border-gold-500/30 rounded-full text-gold-500">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Unwavering Quality</h4>
                    <p className="text-gray-400 text-sm">We never compromise on materials or workmanship. Our standards exceed industry norms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black border border-gold-500/30 rounded-full text-gold-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Timely Delivery</h4>
                    <p className="text-gray-400 text-sm">We respect your time. Our project management ensures milestones are met on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black border border-gold-500/30 rounded-full text-gold-500">
                    <ThumbsUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Transparent Process</h4>
                    <p className="text-gray-400 text-sm">No hidden costs. We maintain clear communication throughout the entire lifecycle.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gold-500/10 transform rotate-3 rounded-lg z-0" />
              <div className="relative bg-black p-8 md:p-12 border border-gray-800 rounded-lg shadow-2xl z-10 flex flex-col justify-center h-full text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">Ready to Build Your Dream?</h3>
                <p className="text-gray-400 mb-8">
                  Contact us today for a consultation on your next residential or commercial project. Let's create something extraordinary together.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                  <a href="tel:+919340000400" className="flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-black font-bold uppercase text-sm hover:bg-gold-400 transition-colors">
                    <Phone size={18} /> Call Now
                  </a>
                  <a href="/contact" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-white font-bold uppercase text-sm hover:border-gold-500 hover:text-gold-500 transition-colors">
                    <Mail size={18} /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section (simplified placeholder) */}
      <section className="h-[400px] w-full bg-gray-900 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.176460662287!2d78.1368936758655!3d9.919293474419515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c64188b021%3A0xe53a316b23023e9f!2s80%20Feet%20Rd%2C%20Anna%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1707223456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-80 hover:opacity-100 transition-opacity duration-500"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent to-black/80" />
      </section>

      <Footer />
    </div>
  );
};

export default Home;

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ThumbsUp, ShieldCheck, MapPin, Phone, Mail, Briefcase, Hammer, Star, Home as HomeIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ImageGrid from "@/components/ImageGrid";
import PricingTable from "@/components/PricingTable";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Story</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-tight mb-8 text-slate-900">
              Crafting Excellence, <br /> Building Trust.
            </h1>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg font-medium">
              At <strong className="text-primary tracking-tight font-black">GUHAN CONSTRUCTION</strong>, we redefine the art of development. With a commitment to quality, transparency, and innovation, we transform complex challenges into enduring landmarks.
            </p>
            <div className="flex space-x-12 mt-10">
              <div className="text-center">
                <h3 className="text-4xl font-black text-primary">20+</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-black text-primary">100+</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-black text-primary">100%</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-2">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[550px] w-full bg-slate-50 rounded-3xl overflow-hidden border border-gray-100 shadow-2xl"
          >
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Construction Site"
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105 opacity-90"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-24 md:py-36 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="What We Do" title="Our Expertise" className="mb-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        <div className="text-center mt-16">
          <a href="/projects" className="inline-block px-12 py-5 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase tracking-widest text-[10px] rounded-full">
            View All Projects
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* Why Choose Us */}
    <section className="bg-white py-24 relative overflow-hidden border-t border-gray-100">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-5 bg-[url('/noise.png')] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Content */}
          <div className="space-y-10">
            <SectionTitle
              subtitle="Why Choose Us"
              title="Built on Integrity"
              className="text-left mb-8"
            />

            <div className="space-y-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Unwavering Quality",
                  desc: "We never compromise on materials or workmanship. Our standards exceed industry norms for every project.",
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  desc: "We respect your time. Our rigorous project management ensures all milestones are met with precision.",
                },
                {
                  icon: ThumbsUp,
                  title: "Transparent Process",
                  desc: "No hidden costs. We maintain clear, honest communication throughout the entire project lifecycle.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="p-5 bg-primary/10 border border-primary/20 rounded-2xl text-primary flex-shrink-0 shadow-lg shadow-primary/5">
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 -rotate-2 rounded-3xl" />

            <div className="relative bg-slate-900 p-10 md:p-16 rounded-3xl shadow-2xl z-10 flex flex-col justify-center h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-3xl" />

              <h3 className="text-4xl font-serif font-black text-primary mb-8">
                Ready to Build Your Dream?
              </h3>

              <p className="text-slate-300 mb-10 text-lg font-medium">
                Contact us today for a consultation on your next residential or
                commercial project. Let’s create something extraordinary together.
              </p>

              <div className="flex flex-col md:flex-row gap-5">
                {/* CALL */}
                <a
                  href="tel:+919340000400"
                  className="flex items-center justify-center px-10 py-5 bg-primary text-white font-bold uppercase text-[10px] tracking-widest rounded-full hover:bg-[#A6861B] transition"
                >
                  📞 Call Now
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:guhanconstructionanddevelopments@gmail.com"
                  className="flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-bold uppercase text-[10px] tracking-widest hover:border-primary hover:text-primary transition rounded-full"
                >
                  <Mail size={16} /> Email Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Map Embed Section */}
      <section className="h-[550px] w-full bg-slate-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.176460662287!2d78.1368936758655!3d9.919293474419515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c64188b021%3A0xe53a316b23023e9f!2s80%20Feet%20Rd%2C%20Anna%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1707223456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-90 hover:opacity-100 transition-all duration-1000"
        ></iframe>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      <Footer />
    </div>
  );
};


export default Home;

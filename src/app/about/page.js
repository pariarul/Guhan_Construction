"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { User, Flag, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <Navbar />

      {/* Page Title */}
      <div className="pt-24 pb-12 bg-slate-50 border-b border-gray-100">
        <SectionTitle
          subtitle="About Us"
          title="Building Trust with Integrity"
          className="mt-12"
        />
      </div>

      {/* Vision & Mission */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-black text-primary mb-8 uppercase tracking-[0.2em]">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
              To be the premier development firm in Madurai and beyond, recognized
              for our unwavering commitment to quality, innovation, and client
              success. We aim to reshape the skyline with landmarks that stand the
              test of time.
            </p>

            <h3 className="text-2xl font-serif font-black text-primary mb-8 uppercase tracking-[0.2em]">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
              Delivering exceptional engineering solutions that exceed
              expectations. We blend traditional craftsmanship with modern
              technology to create spaces that inspire.
            </p>

            {/* Icons */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              {[
                { icon: Flag, label: "Premium Quality" },
                { icon: Award, label: "Award Winning" },
                { icon: BookOpen, label: "Transparent" },
                { icon: User, label: "Client Centric" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition shadow-sm">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <span className="font-black tracking-widest uppercase text-[10px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* MD Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-slate-900 rounded-3xl overflow-hidden h-[650px] shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1350&q=80"
              alt="Managing Director"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-12 left-12 z-20">
              <h4 className="text-4xl font-serif font-black text-white">
                Raja S
              </h4>
              <p className="text-primary text-xs uppercase tracking-[0.4em]">
                Managing Director
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-slate-50 py-24 border-t">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h3 className="text-3xl font-serif font-black mb-8">Our Journey</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Founded with a vision to redefine construction standards, we began as
            a passionate team of engineers and architects. Today, we deliver
            residential, commercial, and renovation projects across Madurai.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-24">
        <h3 className="text-center text-3xl font-serif font-black mb-16">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            "15+ Years Experience",
            "Quality Materials",
            "On-Time Delivery",
            "End-to-End Support",
          ].map((title, i) => (
            <div
              key={i}
              className="p-8 bg-white border rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <h4 className="font-black text-lg mb-3">{title}</h4>
              <p className="text-slate-600 text-sm">
                Trusted construction solutions built to last.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: "150+", label: "Projects" },
            { value: "300+", label: "Clients" },
            { value: "50+", label: "Ongoing" },
            { value: "15+", label: "Years" },
          ].map((s, i) => (
            <div key={i}>
              <h4 className="text-5xl font-black text-primary">{s.value}</h4>
              <p className="uppercase text-xs tracking-widest text-slate-300">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-20 text-center text-white">
        <h3 className="text-3xl font-serif font-black mb-6">
          Let’s Build Something Exceptional
        </h3>
        <a
          href="https://wa.me/919340000400"
  target="_blank"
  rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-xs rounded-full hover:bg-slate-100 transition"
        >
          Contact Us
        </a>
      </div>

      <Footer />
    </div>
  );
}

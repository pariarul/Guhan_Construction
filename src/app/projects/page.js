"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ImageGrid from "@/components/ImageGrid";
import { ArrowRight, Building2, Home, Landmark, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-20 bg-slate-50 border-b border-gray-100 shadow-sm">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Showcase of Excellence"
        />
      </div>

      {/* Categories */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Home, label: "Residential" },
            { icon: Building2, label: "Commercial" },
            { icon: Sparkles, label: "Interior" },
            { icon: Landmark, label: "Renovation" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="border rounded-2xl py-8 cursor-pointer hover:shadow-lg transition"
            >
              <cat.icon className="mx-auto mb-4 text-primary" />
              <p className="uppercase font-black text-xs tracking-widest">
                {cat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto px-6 py-16">
        <ImageGrid />
      </div>

      {/* Client Value */}
      <div className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h3 className="text-3xl font-serif font-black mb-8">
            Designed for Quality. Built to Last.
          </h3>
          <p className="text-white/80 leading-relaxed text-lg">
            Every project reflects our dedication to precision, innovation, and
            superior craftsmanship. From concept to completion, we focus on
            delivering lasting value and exceptional design.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Ongoing Projects" },
              { value: "20+", label: "Years of Excellence" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-5xl font-black text-primary mb-3">
                  {stat.value}
                </h4>
                <p className="uppercase tracking-widest text-xs text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
{/* Testimonials */}
<div className="bg-slate-50 py-24 border-t border-gray-100">
  <div className="container mx-auto px-6 max-w-6xl">
    <h3 className="text-3xl font-serif font-black text-center mb-6">
      What Our Clients Say
    </h3>
    <p className="text-center text-slate-500 max-w-3xl mx-auto mb-16">
      Trusted by homeowners, business leaders, and developers for delivering
      quality construction with transparency and professionalism.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          quote:
            "Exceptional quality and professionalism. Our home was delivered exactly as promised with outstanding craftsmanship.",
          name: "S. Karthik",
          role: "Home Owner",
          location: "Madurai",
        },
        {
          quote:
            "Their attention to detail and commitment to timelines impressed us throughout the entire project lifecycle.",
          name: "Priya Enterprises",
          role: "Commercial Client",
          location: "Tamil Nadu",
        },
        {
          quote:
            "From planning to handover, the team maintained clear communication and delivered beyond expectations.",
          name: "R. Mahesh",
          role: "Real Estate Investor",
          location: "Madurai",
        },
      ].map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition relative"
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 -left-6 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full text-3xl font-black shadow">
            “
          </div>

          <p className="italic text-slate-600 mb-6 leading-relaxed">
            {t.quote}
          </p>

          <div className="border-t pt-4">
            <h4 className="font-black text-slate-900">{t.name}</h4>
            <p className="text-xs uppercase tracking-widest text-slate-500">
              {t.role} · {t.location}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Trust footer */}
    <div className="mt-20 text-center">
      <p className="text-slate-500 mb-6">
        Join over <span className="font-black text-slate-900">300+</span> satisfied
        clients who trust us with their projects.
      </p>
      <a
        href="/contact"
        className="inline-block px-12 py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-primary/90 transition"
      >
        Share Your Project With Us
      </a>
    </div>
  </div>
</div>


      {/* CTA */}
      <div className="bg-primary py-20 text-center text-white">
        <h3 className="text-3xl font-serif font-black mb-6">
          Ready to Build with Confidence?
        </h3>
        <p className="mb-10 text-white/80">
          Partner with us to bring your project to life.
        </p>
        <a
          href="https://wa.me/919340000400"
  target="_blank"
  rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-xs rounded-full hover:bg-slate-100 transition"
        >
          Start Your Project <ArrowRight />
        </a>
      </div>

      <Footer />
    </div>
  );
}

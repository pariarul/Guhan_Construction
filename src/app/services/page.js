"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Hammer, Scale, Home, Briefcase, Ruler, Lightbulb, Users, Truck } from "lucide-react";

export default function Services() {
    const allServices = [
        {
            icon: Home,
            title: "Residential New Construction",
            description: "From cozy family homes to expansive luxury estates, we build residences that are a perfect blend of comfort, style, and functionality.",
            details: ["Custom Home Design", "Villa Construction", "Duplex & Triplex", "Sustainable Building Practices"]
        },
        {
            icon: Briefcase,
            title: "Commercial Development",
            description: "We construct state-of-the-art commercial spaces including office complexes, retail centers, and industrial facilities tailored to your business needs.",
            details: ["Office Buildings", "Retail Showrooms", "Warehouses", "Malls & Plazas"]
        },
        {
            icon: Hammer,
            title: "Renovation & Remodeling",
            description: "Transform your existing property with our expert renovation services. We modernize spaces while preserving their structural integrity.",
            details: ["Kitchen & Bath Remodels", "Full Home Renovations", "Office Refurbishment", "Facade Upgrades"]
        },
        {
            icon: Ruler,
            title: "Interior & Exterior Structuring",
            description: "Comprehensive solutions for both the inside and outside of your property, ensuring seamless design and robust construction.",
            details: ["Space Planning", "Structural Modifications", "Landscape Integration", "Facade Design"]
        },
        {
            icon: Users,
            title: "Lead Property Development",
            description: "We identify and develop high-potential land parcels, turning them into lucrative residential or commercial communities.",
            details: ["Land Acquisition", "Master Planning", "Infrastructure Development", "Community Building"]
        },
        {
            icon: Lightbulb,
            title: "Brand & Design Direction",
            description: "Expert consultation to align your physical space with your brand identity, creating immersive environments for your clients.",
            details: ["Architectural Branding", "Interior Themes", "Visual Identity in Space", "Client Experience Design"]
        },
        {
            icon: Truck,
            title: "Turnkey Projects",
            description: "Complete project management from initial concept to final handover. We handle every detail so you don't have to.",
            details: ["End-to-End Management", "Permitting & Approvals", "Procurement", "Quality Control"]
        }
    ];

    return (
        <div className="bg-primary min-h-screen text-white font-sans">
            <Navbar />
            <div className="pt-32 pb-16 bg-gradient-to-b from-secondary to-primary">
                <SectionTitle subtitle="Our Expertise" title="Comprehensive Construction Services" />
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
                  <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "20+", label: "Ongoing Projects" },
              { value: "10+", label: "Years of Excellence" },
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
            {/* Industries */}
      <div className="bg-white text-slate-900 py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-3xl font-serif font-black mb-16">
            Industries We Serve
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              "Residential Housing",
              "Corporate Offices",
              "Retail & Showrooms",
              "Hospitality",
              "Educational Institutions",
              "Healthcare Facilities",
              "Industrial Parks",
              "Mixed-Use Developments",
            ].map((industry, i) => (
              <div
                key={i}
                className="border rounded-xl py-6 font-black text-sm uppercase tracking-widest"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-20 text-center">
        <h3 className="text-3xl font-serif font-black mb-6">
          Ready to Start Your Project?
        </h3>
        <p className="mb-10 text-white/80">
          Let’s discuss your vision and bring it to life.
        </p>
        <a
          href="https://wa.me/919340000400"
  target="_blank"
  rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-xs rounded-full hover:bg-slate-100 transition"
        >
          Request a Consultation
        </a>
      </div>

            <Footer />
        </div>
    );
}

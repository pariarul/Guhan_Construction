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

            <Footer />
        </div>
    );
}

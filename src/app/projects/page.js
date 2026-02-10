"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ImageGrid from "@/components/ImageGrid";
import { ArrowRight } from "lucide-react";

export default function Projects() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans">
            <Navbar />

            <div className="pt-32 pb-16 bg-secondary">
                <SectionTitle subtitle="Our Portfolio" title="Showcase of Excellence" />
            </div>

            <div className="container mx-auto px-6 py-12">
                <ImageGrid />

                <div className="mt-16 text-center text-gray-400 max-w-2xl mx-auto">
                    <p className="mb-8">
                        These are just a few examples of our work. We have successfully delivered over 50 projects across Madurai and Tamil Nadu, ranging from individual residences to large commercial complexes.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors uppercase font-bold text-sm tracking-widest group">
                        Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}

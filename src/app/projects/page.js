"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ImageGrid from "@/components/ImageGrid";
import { ArrowRight } from "lucide-react";

export default function Projects() {
    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans">
            <Navbar />

            <div className="pt-32 pb-16 bg-slate-50 border-b border-gray-100 shadow-sm">
                <SectionTitle subtitle="Our Portfolio" title="Showcase of Excellence" />
            </div>

            <div className="container mx-auto px-6 py-24">
                <ImageGrid />

                <div className="mt-24 text-center text-slate-500 max-w-3xl mx-auto border-t border-gray-100 pt-16">
                    <p className="mb-12 text-lg leading-relaxed font-medium">
                        These are just a few examples of our high-end developments. We have successfully delivered over 50 premier projects across Madurai and Tamil Nadu, ranging from exclusive residences to sophisticated commercial landmarks.
                    </p>
                    <a href="/contact" className="inline-flex items-center gap-4 text-primary hover:text-slate-900 transition-all duration-500 uppercase font-black text-[10px] tracking-[0.4em] group">
                        Start Your Project <ArrowRight className="group-hover:translate-x-3 transition-transform font-black" />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { User, Flag, Award, BookOpen } from "lucide-react";

export default function About() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans">
            <Navbar />

            <div className="pt-24 pb-12 bg-secondary">
                <SectionTitle subtitle="About Us" title="Building Trust with Integrity" className="mt-12" />
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            To be the premier construction and development firm in Madurai and beyond, recognized for our unwavering commitment to quality, innovation, and client satisfaction. We aim to reshape the skyline with structures that stand the test of time.
                        </p>

                        <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Delivering exceptional construction solutions that exceed expectations. We blend traditional craftsmanship with modern technology to create spaces that inspire. Every project is a testament to our dedication to excellence.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="flex items-center gap-3">
                                <Flag className="text-gold-500" />
                                <span className="font-semibold">Premium Quality</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="text-gold-500" />
                                <span className="font-semibold">Award Winning</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <BookOpen className="text-gold-500" />
                                <span className="font-semibold">Transparent</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <User className="text-gold-500" />
                                <span className="font-semibold">Client Centric</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        {/* Placeholder for Leadership / Vision Image */}
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Construction Planning" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h4 className="text-2xl font-bold text-white">Raja S</h4>
                            <p className="text-gold-500 text-sm uppercase tracking-wider">Managing Director</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

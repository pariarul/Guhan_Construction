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

            <div className="pt-24 pb-12 bg-slate-50 border-b border-gray-100">
                <SectionTitle subtitle="About Us" title="Building Trust with Integrity" className="mt-12" />
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-serif font-black text-primary mb-8 uppercase tracking-[0.2em]">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
                            To be the premier development firm in Madurai and beyond, recognized for our unwavering commitment to quality, innovation, and client success. We aim to reshape the skyline with landmarks that stand the test of time.
                        </p>

                        <h3 className="text-2xl font-serif font-black text-primary mb-8 uppercase tracking-[0.2em]">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
                            Delivering exceptional engineering solutions that exceed expectations. We blend traditional craftsmanship with modern technology to create spaces that inspire. Every project is a testament to our dedication to excellence.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mt-16">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all shadow-sm">
                                    <Flag className="text-primary w-6 h-6" />
                                </div>
                                <span className="font-black tracking-widest uppercase text-[10px] text-slate-800">Premium Quality</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all shadow-sm">
                                    <Award className="text-primary w-6 h-6" />
                                </div>
                                <span className="font-black tracking-widest uppercase text-[10px] text-slate-800">Award Winning</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all shadow-sm">
                                    <BookOpen className="text-primary w-6 h-6" />
                                </div>
                                <span className="font-black tracking-widest uppercase text-[10px] text-slate-800">Transparent</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-all shadow-sm">
                                    <User className="text-primary w-6 h-6" />
                                </div>
                                <span className="font-black tracking-widest uppercase text-[10px] text-slate-800">Client Centric</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-slate-900 rounded-3xl overflow-hidden h-[650px] shadow-2xl group"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Construction Planning" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute bottom-12 left-12 z-20">
                            <h4 className="text-4xl font-serif font-black text-white mb-2 tracking-tight">Raja S</h4>
                            <p className="text-primary text-xs uppercase font-black tracking-[0.4em]">Managing Director</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

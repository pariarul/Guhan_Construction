"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-white min-h-screen text-slate-900 font-sans">
            <Navbar />

            <div className="pt-32 pb-16 bg-slate-50 border-b border-gray-100 shadow-sm">
                <SectionTitle subtitle="Get in Touch" title="Let's Build Something Great" />
            </div>

            <div className="container mx-auto px-6 py-24 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-12 rounded-3xl border border-gray-100 shadow-2xl"
                    >
                        <h3 className="text-3xl font-serif font-black text-slate-900 mb-10 tracking-tight">Send Us a Message</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                                    <input type="text" id="name" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-5 text-slate-900 focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 font-medium" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-5 text-slate-900 focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 font-medium" placeholder="+91 93400 00400" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                                <input type="email" id="email" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-5 text-slate-900 focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 font-medium" placeholder="your@email.com" />
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Service Required</label>
                                <div className="relative">
                                    <select id="service" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-5 text-slate-900 focus:border-primary focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer font-medium">
                                        <option>Residential Construction</option>
                                        <option>Commercial Development</option>
                                        <option>Renovation & Remodeling</option>
                                        <option>Turnkey Projects</option>
                                        <option>Other</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">↓</div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Details</label>
                                <textarea id="message" rows="5" className="w-full bg-slate-50 border border-gray-100 rounded-2xl p-5 text-slate-900 focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-300 font-medium" placeholder="Tell us about your project goals..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-6 bg-primary text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#A6861B] transition-all duration-300 flex items-center justify-center gap-4 rounded-2xl shadow-xl transform hover:scale-[1.02]">
                                <Send size={18} /> Send Inquiry
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-between py-6"
                    >
                        <div>
                            <h3 className="text-3xl font-serif font-black text-slate-900 mb-10 tracking-tight">Contact Information</h3>
                            <p className="text-slate-500 leading-relaxed text-lg mb-16 font-medium">
                                Ready to pioneer your next development with <span className="text-primary font-black">GUHAN CONSTRUCTION</span>? Reach out to us for premium consultation.
                            </p>

                            <div className="space-y-12">
                                <div className="flex items-start gap-10 group">
                                    <div className="p-6 bg-primary/10 rounded-3xl text-primary border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/5">
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Our Office</h5>
                                        <p className="text-slate-900 text-xl leading-relaxed font-bold tracking-tight">
                                            No 9A, ARM Complex, 80ft Road,<br /> Annanagar, Madurai – 625020
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-10 group">
                                    <div className="p-6 bg-primary/10 rounded-3xl text-primary border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/5">
                                        <Phone size={32} />
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Direct Line</h5>
                                        <p className="text-slate-900 text-2xl font-black tracking-tighter transition-colors group-hover:text-primary">+91 93400 00400</p>
                                        <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-3">Mon - Sat, 9 AM - 7 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-10 group">
                                    <div className="p-6 bg-primary/10 rounded-3xl text-primary border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/5">
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Email Inquiries</h5>
                                        <a href="mailto:midhunahomes@gmail.com" className="text-slate-900 text-2xl font-black tracking-tighter hover:text-primary transition-colors break-all">
                                            midhunahomes@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed Section */}
                        <div className="mt-20 h-[350px] w-full bg-slate-100 rounded-3xl overflow-hidden border border-gray-100 relative group shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.176460662287!2d78.1368936758655!3d9.919293474419515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c64188b021%3A0xe53a316b23023e9f!2s80%20Feet%20Rd%2C%20Anna%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1707223456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-90 group-hover:opacity-100 transition-all duration-1000"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

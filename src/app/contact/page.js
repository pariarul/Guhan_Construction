"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-primary min-h-screen text-white font-sans">
            <Navbar />

            <div className="pt-32 pb-16 bg-secondary">
                <SectionTitle subtitle="Get in Touch" title="Let's Build Something Great" />
            </div>

            <div className="container mx-auto px-6 py-12 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-black/80 p-8 rounded-lg border border-gray-800"
                    >
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">Send Us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-400">Your Name</label>
                                    <input type="text" id="name" className="w-full bg-secondary border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-gray-400">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full bg-secondary border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-400">Email Address</label>
                                <input type="email" id="email" className="w-full bg-secondary border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-semibold text-gray-400">Service Interested In</label>
                                <select id="service" className="w-full bg-secondary border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:outline-none transition-colors appearance-none">
                                    <option>Residential Construction</option>
                                    <option>Commercial Development</option>
                                    <option>Renovation & Remodeling</option>
                                    <option>Turnkey Projects</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-400">Message</label>
                                <textarea id="message" rows="4" className="w-full bg-secondary border border-gray-700 rounded p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Information</h3>
                            <p className="text-gray-400 leading-relaxed max-w-md mb-8">
                                Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-gray-900 rounded-full text-gold-500 border border-gray-800 group-hover:border-gold-500 transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-1">Our Office</h5>
                                        <p className="text-gray-400 text-sm">
                                            No 9A, ARM Complex, 80ft Road,<br /> Annanagar, Madurai – 625020
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-gray-900 rounded-full text-gold-500 border border-gray-800 group-hover:border-gold-500 transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-1">Phone</h5>
                                        <p className="text-gray-400 text-sm">+91 93400 00400</p>
                                        <p className="text-gray-500 text-xs mt-1">Mon - Fri, 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-gray-900 rounded-full text-gold-500 border border-gray-800 group-hover:border-gold-500 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-white mb-1">Email</h5>
                                        <a href="mailto:guhanconstructionanddevelopers@gmail.com" className="text-gray-400 text-sm hover:text-gold-500 transition-colors break-all">
                                            guhanconstructionanddevelopers@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed - Repurposed here as well for context */}
                        <div className="h-[250px] w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-800 relative group">
                            <div className="absolute inset-0 z-10 bg-transparent group-hover:pointer-events-none" /> {/* Overlay to prevent accidental scroll if needed, or remove for interactivity */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.176460662287!2d78.1368936758655!3d9.919293474419515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c64188b021%3A0xe53a316b23023e9f!2s80%20Feet%20Rd%2C%20Anna%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625020!5e0!3m2!1sen!2sin!4v1707223456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

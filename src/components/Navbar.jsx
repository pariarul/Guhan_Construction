"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(true);

    // useEffect(() => {
    //     const handleScroll = () => setIsScrolled(window.scrollY > 50);
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        {name:"packages", href:"/Pricing"},
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className={`fixed w-full h-28 z-50 duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
                : "bg-transparent"
                }`}
        >
            {/* NORMAL HEIGHT */}
            <div className="container mx-auto px-6 py-3 flex justify-between items-center h-full">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/company_logo.png"
                        alt="Guhan Homes & Renovations"
                        width={130}
                        height={30}
                        priority
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[11px] font-bold uppercase tracking-widest relative group transition-colors ${isScrolled
                                ? "text-slate-900 hover:text-primary"
                                : "text-white hover:text-primary"
                                }`}
                        >
                            {link.name}
                            <span
                                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-primary`}
                            />
                        </Link>
                    ))}

                    <Link
                         href="https://wa.me/919340000400"
  target="_blank"
  rel="noopener noreferrer"
                        className={`px-6 py-2 border text-[11px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${isScrolled
                            ? "border-primary text-primary hover:bg-primary hover:text-white"
                            : "border-white text-white hover:bg-white hover:text-black"
                            }`}
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-2xl"
                    >
                        <div className="flex flex-col space-y-4 p-8 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-slate-800 hover:text-primary uppercase tracking-widest font-bold"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="pt-8 mt-4 border-t border-gray-100 text-sm text-slate-500 space-y-4">
                                <div className="flex justify-center items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-slate-900">+91 93400 00400</span>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary" />
                                    <span className="font-bold text-slate-900">guhanconstructionanddevelopments@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

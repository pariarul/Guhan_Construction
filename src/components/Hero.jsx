"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-30 brightness-110"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-aerial-view-287-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight"
                >
                    BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E5B51D] to-primary drop-shadow-sm">LEGACIES</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto"
                >
                    Premium Residential & Commercial Developments by <span className="font-bold text-primary tracking-tight">GUHAN CONSTRUCTION</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
                >
                    <a
                        href="/projects"
                        className="px-10 py-5 bg-primary text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#A6861B] transition-all duration-500 transform hover:scale-105 shadow-xl rounded-full"
                    >
                        Explore Portfolio
                    </a>
                    <a
                        href="/contact"
                        className="px-10 py-5 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-[0.2em] text-xs hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-full"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

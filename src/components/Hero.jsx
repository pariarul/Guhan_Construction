"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90 z-10" />
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-40 filter grayscale contrast-125"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-aerial-view-287-large.mp4" type="video/mp4" />
                    {/* Fallback image if video fails or for slower connections - handled by poster usually, 
                here using a simple div bg if needed, or just let CSS handle it */}
                </video>
            </div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold text-white tracking-tight leading-tight drop-shadow-2xl"
                >
                    BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">LEGACIES</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl mx-auto"
                >
                    Premium Residential & Commercial Developments by <span className="font-semibold text-white">GUHAN Construction</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12"
                >
                    <a
                        href="/projects"
                        className="px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="/contact"
                        className="px-8 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-gold-500 rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;

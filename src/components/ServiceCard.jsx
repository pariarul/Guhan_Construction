"use client";

import { motion } from "framer-motion";
import { Hammer, Scale, Home, Briefcase, Zap, Star } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, details }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-black/80 backdrop-blur border border-white/10 p-8 flex flex-col items-start gap-6 rounded-lg hover:border-gold-500/50 transition-all duration-300 relative overflow-hidden group h-full"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/90 rounded-bl-[100px] -mr-16 -mt-16 transition-all duration-500 group-hover:bg-gold-500/10 opacity-10 group-hover:opacity-20" />

            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border border-white/20 group-hover:border-gold-500 transition-colors">
                <Icon className="w-8 h-8 text-white group-hover:text-gold-500 transition-colors" />
            </div>

            <h3 className="text-2xl font-serif text-white font-bold group-hover:text-gold-500 transition-colors">
                {title}
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm">
                {description}
            </p>

            {details && (
                <ul className="mt-4 space-y-2 text-sm text-gray-500 list-disc list-inside">
                    {details.map((detail, index) => (
                        <li key={index} className="text-gray-400 font-light">{detail}</li>
                    ))}
                </ul>
            )}

            <div className="mt-auto pt-6 flex justify-between w-full border-t border-white/10">
                <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">Explore Service</span>
                <span className="text-gold-500 transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
        </motion.div>
    );
};

export default ServiceCard;

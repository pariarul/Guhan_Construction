"use client";

import { motion } from "framer-motion";
import { Hammer, Scale, Home, Briefcase, Zap, Star } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, details }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white border border-gray-100 p-8 flex flex-col items-start gap-6 rounded-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden group h-full shadow-lg hover:shadow-2xl"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-bl-[100px] -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/20 opacity-5 group-hover:opacity-20" />

            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-gray-100 group-hover:border-primary transition-colors">
                <Icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors" />
            </div>

            <h3 className="text-2xl font-serif text-slate-900 font-bold group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm">
                {description}
            </p>

            {details && (
                <ul className="mt-4 space-y-2 text-sm text-slate-400 list-disc list-inside">
                    {details.map((detail, index) => (
                        <li key={index} className="text-slate-500 font-medium">{detail}</li>
                    ))}
                </ul>
            )}

            <div className="mt-auto pt-6 flex justify-between w-full border-t border-gray-50">
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Explore Service</span>
                <span className="text-primary transform group-hover:translate-x-2 transition-transform font-bold">→</span>
            </div>
        </motion.div>
    );
};

export default ServiceCard;

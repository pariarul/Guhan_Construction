"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ImageGrid = () => {
    const images = [
        { src: "/images/luxury-home-1.jpg", title: "Modern Villa Designs", type: "Residential" },
        { src: "/images/commercial-1.jpg", title: "Corporate Headquarters", type: "Commercial" },
        { src: "/images/interior-1.jpg", title: "Elegant Interiors", type: "Interior" },
        { src: "/images/luxury-home-2.jpg", title: "Skyline Apartments", type: "Residential" },
        { src: "/images/renovation-1.jpg", title: "Heritage Restoration", type: "Renovation" },
        { src: "/images/commercial-2.jpg", title: "Urban Retail Spaces", type: "Commercial" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-[350px]"
                >
                    {/* Placeholder Image Logic - using a colored div if src fails in real env, here assuming src exists or using div */}
                    <div className="w-full h-full bg-slate-100 relative">
                        {/* Using a placeholder service if local images are missing. In real app, use optimized next/image with local assets. */}
                        <img
                            src={`https://source.unsplash.com/800x600/?${img.type.toLowerCase()},architecture,building&sig=${index}`}
                            alt={img.title}
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block">{img.type}</span>
                        <h3 className="text-3xl text-white font-serif font-bold mb-3 tracking-tight">{img.title}</h3>
                        <div className="h-1 w-0 bg-primary group-hover:w-20 transition-all duration-500 delay-100" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;

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
                    <div className="w-full h-full bg-gray-800 relative">
                        {/* Using a placeholder service if local images are missing. In real app, use optimized next/image with local assets. */}
                        <img
                            src={`https://source.unsplash.com/800x600/?${img.type.toLowerCase()},architecture,building&sig=${index}`}
                            alt={img.title}
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2 block">{img.type}</span>
                        <h3 className="text-2xl text-white font-serif font-bold mb-1">{img.title}</h3>
                        <div className="h-0.5 w-0 bg-gold-500 group-hover:w-16 transition-all duration-500 delay-100" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;

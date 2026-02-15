"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ImageGrid = () => {
  const images = [
    { src: "/luxury-home-1.jpg", title: "Modern Villa Designs", type: "Residential" },
    { src: "/commercial-1.jpg", title: "Corporate Headquarters", type: "Commercial" },
    { src: "/interior-1.jpg", title: "Elegant Interiors", type: "Interior" },
    { src: "/luxury-home-2.jpg", title: "Skyline Apartments", type: "Residential" },
    { src: "/renovation-1.jpg", title: "Heritage Restoration", type: "Renovation" },
    { src: "/commercial-2.jpg", title: "Urban Retail Spaces", type: "Commercial" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          className="relative group overflow-hidden rounded-lg shadow-lg h-[350px]"
        >
          <Image
            src={img.src}
            alt={img.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-0 p-6">
            <span className="text-xs text-primary uppercase tracking-widest">
              {img.type}
            </span>
            <h3 className="text-white text-2xl font-bold mt-2">
              {img.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;

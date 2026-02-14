"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const plans = [
    {
        name: "Silver",
        rate: "2199",
        features: [
            { text: "Borewell", value: "As per Actuals" },
            { text: "Bricks", value: "Chamber Bricks" },
            { text: "Flooring", value: "Vitrified Tiles" },
            { text: "Septic Tank", value: "Precast Ring" },
            { text: "Kitchen", value: "Without Modular" },
            { text: "Head Room", value: "Extra Cost" },
            { text: "Water Tank", value: "Single Layer" },
            { text: "Hand Rail", value: "Iron Hand Rail" },
            { text: "Rainwater Harvesting", value: false },
        ],
        highlight: false,
    },
    {
        name: "Gold",
        rate: "2349",
        features: [
            { text: "Borewell", value: "As per Actuals" },
            { text: "Bricks", value: "Chamber Bricks" },
            { text: "Flooring", value: "Vitrified Tiles" },
            { text: "Septic Tank", value: "Precast Ring" },
            { text: "Kitchen", value: "Modular Kitchen" },
            { text: "Head Room", value: "Incl. Staircase" },
            { text: "Water Tank", value: "Three Layer" },
            { text: "Hand Rail", value: "Iron Hand Rail" },
            { text: "Rainwater Harvesting", value: true },
            { text: "T-Angle Provision", value: true },
        ],
        highlight: true,
    },
    {
        name: "Platinum",
        rate: "2649",
        features: [
            { text: "Borewell", value: "200' Free" },
            { text: "Bricks", value: "Chamber Bricks" },
            { text: "Flooring", value: "Vitrified Tiles" },
            { text: "Septic Tank", value: "Brick Work" },
            { text: "Kitchen", value: "Semi Furnished" },
            { text: "Head Room", value: "Incl. Staircase" },
            { text: "Water Tank", value: "Three Layer" },
            { text: "Hand Rail", value: "SS Hand Rail" },
            { text: "Weathering Course", value: "Cooling Tiles" },
            { text: "UPVC Windows", value: true },
        ],
        highlight: false,
    },
    {
        name: "Diamond",
        rate: "2849",
        features: [
            { text: "Borewell", value: "300' Free" },
            { text: "Bricks", value: "Wirecut Bricks" },
            { text: "Flooring", value: "Granite Flooring" },
            { text: "Septic Tank", value: "Brick Work" },
            { text: "Kitchen", value: "Semi Furnished" },
            { text: "Head Room", value: "Incl. Staircase" },
            { text: "Hand Rail", value: "SS Hand Rail" },
            { text: "False Ceiling", value: "Only for Hall" },
            { text: "Mosquito Net", value: "Provided" },
            { text: "Screen Rod", value: "Provided" },
        ],
        highlight: false,
    },
];

const PricingTable = () => {
    return (
        <section id="quotation" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('/noise.png')] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2 text-center w-full">Detailed Quotation</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 text-center w-full">Project Estimations</h3>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-center font-medium">
                        Our transparent pricing model ensures you get exactly what you pay for with zero hidden costs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative p-8 rounded-2xl border ${plan.highlight
                                ? "border-primary bg-primary/5 shadow-2xl scale-105 z-10"
                                : "border-gray-100 bg-white shadow-sm"
                                } flex flex-col h-full group hover:translate-y-[-8px] transition-all duration-500`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className={`text-2xl font-serif font-bold mb-2 ${plan.highlight ? "text-primary" : "text-slate-900"}`}>
                                    {plan.name}
                                </h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-slate-900">₹{plan.rate}</span>
                                    <span className="text-slate-500 text-sm font-medium">/ sq.ft</span>
                                </div>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-3 border-b border-gray-50 pb-2 last:border-0">
                                        {typeof feature.value === "boolean" ? (
                                            feature.value ? (
                                                <Check size={14} className="text-primary mt-1 shrink-0" />
                                            ) : (
                                                <Minus size={14} className="text-slate-300 mt-1 shrink-0" />
                                            )
                                        ) : (
                                            <Check size={14} className="text-primary mt-1 shrink-0" />
                                        )}
                                        <div className="flex flex-col">
                                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{feature.text}</p>
                                            <p className={`text-sm font-medium ${typeof feature.value === "boolean" && !feature.value ? "text-slate-300" : "text-slate-700"}`}>
                                                {typeof feature.value === "boolean"
                                                    ? (feature.value ? "Included" : "N/A")
                                                    : feature.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 ${plan.highlight
                                ? "bg-primary text-white hover:bg-[#A6861B] shadow-xl"
                                : "bg-slate-50 border border-gray-100 text-slate-900 hover:border-primary hover:text-primary shadow-sm"
                                }`}>
                                Inquire Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;

"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import PricingPlans from "@/components/PricingTable";

export default function Pricing() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-secondary to-primary">
        <SectionTitle
          subtitle="Transparent Pricing"
          title="Detailed Quotation & Project Estimations"
        />
      </div>

      {/* Pricing Section */}
      <div className="bg-white text-slate-900">
        <PricingPlans />
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "50+", label: "Ongoing Projects" },
              { value: "20+", label: "Years of Excellence" },
              { value: "100%", label: "Transparent Pricing" },
            ].map((stat, i) => (
              <div key={i}>
                <h4 className="text-5xl font-black text-primary mb-3">
                  {stat.value}
                </h4>
                <p className="uppercase tracking-widest text-xs text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-20 text-center">
        <h3 className="text-3xl font-serif font-black mb-6">
          Need a Custom Quotation?
        </h3>
        <p className="mb-10 text-white/80">
          Get a detailed cost breakdown tailored to your project requirements.
        </p>
        <a
          href="https://wa.me/919340000400"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-xs rounded-full hover:bg-slate-100 transition"
        >
          Get Free Consultation
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

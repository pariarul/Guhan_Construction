import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-gray-100 text-slate-600">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 text-center md:text-left">

          {/* Logo */}
{/* Logo */}
<div className="flex flex-col items-center md:items-start space-y-6">
  <Link href="/" className="inline-flex items-center">
    <Image
      src="/company_logo.png"
      alt="Guhan Homes & Renovations"
      width={140}
      height={40}
      priority
      className="object-contain"
    />
  </Link>

    {/* Small Company Content */}
  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
    Building premium homes with quality craftsmanship,
    modern design, and trusted excellence.
  </p>

  {/* Social Media Icons */}
  <div className="flex items-center gap-5">
    <a
      href="https://www.facebook.com/share/17rasg6kx4/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-blue-600 transition-colors"
    >
      <Facebook size={20} />
    </a>

    <a
      href="https://www.instagram.com/guhan_construction_developers/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-pink-500 transition-colors"
    >
      <Instagram size={20} />
    </a>

    <a
      href="https://x.com/Guhandevelopers"
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-500 hover:text-black transition-colors"
    >
      <Twitter size={20} />
    </a>
  </div>
</div>


          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-sm sm:text-lg font-serif font-bold text-slate-900 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              {["Home", "About Us", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "Home" ? "" : item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-primary transition-colors inline-block py-1"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-sm sm:text-lg font-serif font-bold text-slate-900 uppercase tracking-widest">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Residential Construction</li>
              <li>Commercial Development</li>
              <li>Renovation & Remodeling</li>
              <li>Interior & Exterior Solutions</li>
              <li>Turnkey Projects</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-sm sm:text-lg font-serif font-bold text-slate-900 uppercase tracking-widest">
              Contact Us
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              No 9A, ARM Complex, 80ft Road,<br />
              Annanagar, Madurai – 625020
            </p>

            <a
              href="tel:+919340000400"
              className="block text-base sm:text-lg font-extrabold text-slate-900 tracking-tight"
            >
              +91 93400 00400
            </a>

<a
  href="mailto:guhanconstructionanddevelopments@gmail.com"
  className="block text-xs sm:text-sm  md:text-[12px] font-bold text-primary hover:underline break-all leading-relaxed"
>
  guhanconstructionanddevelopments@gmail.com
</a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6 text-center px-4">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
          © {currentYear} Guhan Homes and Renovations Pvt. Ltd. <br className="sm:hidden" />
          All Rights Reserved.
        </p>
        <p className="mt-3 text-[9px] text-slate-900 font-serif italic tracking-widest ">
          premium luxury series
        </p>
      </div>
    </footer>
  );
}

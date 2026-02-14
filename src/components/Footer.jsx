import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-50 border-t border-gray-100 text-slate-600 pt-20 pb-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                {/* Logo */}
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-1">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/company_logo.png"
                            alt="Guhan Homes & Renovations"
                            width={130}
                            height={30}
                            priority
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h3 className="text-lg font-serif font-bold text-slate-900 uppercase tracking-widest">Quick Links</h3>
                    <ul className="space-y-3 text-sm font-bold">
                        <li><a href="/" className="hover:text-primary transition-colors text-slate-600">Home</a></li>
                        <li><a href="/about" className="hover:text-primary transition-colors text-slate-600">About Us</a></li>
                        <li><a href="/services" className="hover:text-primary transition-colors text-slate-600">Services</a></li>
                        <li><a href="/projects" className="hover:text-primary transition-colors text-slate-600">Projects</a></li>
                        <li><a href="/contact" className="hover:text-primary transition-colors text-slate-600">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-6">
                    <h3 className="text-lg font-serif font-bold text-slate-900 uppercase tracking-widest">Our Services</h3>
                    <ul className="space-y-3 text-sm font-medium text-slate-600">
                        <li className="hover:text-primary transition-colors cursor-default">Residential Construction</li>
                        <li className="hover:text-primary transition-colors cursor-default">Commercial Development</li>
                        <li className="hover:text-primary transition-colors cursor-default">Renovation & Remodeling</li>
                        <li className="hover:text-primary transition-colors cursor-default">Interior & Exterior Solutions</li>
                        <li className="hover:text-primary transition-colors cursor-default">Turnkey Projects</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-lg font-serif font-bold text-slate-900 uppercase tracking-widest">Contact Us</h3>
                    <div className="space-y-4">
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            No 9A, ARM Complex, 80ft Road,<br /> Annanagar, Madurai – 625020
                        </p>
                        <p className="text-lg font-black text-slate-900 tracking-tight">+91 93400 00400</p>
                        <a href="mailto:midhunahomes@gmail.com" className="block text-sm text-primary font-bold hover:underline break-all">
                            midhunahomes@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-gray-100 text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">&copy; {currentYear} GUHAN HOMES AND RENOVATIONS PVT.LTD. All Rights Reserved.</p>
                <p className="mt-4 text-[9px] text-slate-300 font-serif italic tracking-widest opacity-60">premium luxury series</p>
            </div>
        </footer>
    );
}

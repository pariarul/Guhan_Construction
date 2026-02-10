export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black border-t border-gray-800 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                {/* About */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-serif font-bold text-white tracking-widest">
                        GUHAN
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Pioneering premium construction and development with integrity, quality, and innovation. Building dreams into reality.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-serif font-semibold text-gold-500">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-gold-400 transition-colors">Home</a></li>
                        <li><a href="/about" className="hover:text-gold-400 transition-colors">About Us</a></li>
                        <li><a href="/services" className="hover:text-gold-400 transition-colors">Services</a></li>
                        <li><a href="/projects" className="hover:text-gold-400 transition-colors">Projects</a></li>
                        <li><a href="/contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h3 className="text-lg font-serif font-semibold text-gold-500">Our Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Residential Construction</li>
                        <li>Commercial Development</li>
                        <li>Renovation & Remodeling</li>
                        <li>Interior & Exterior Solutions</li>
                        <li>Turnkey Projects</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-serif font-semibold text-gold-500">Contact Us</h3>
                    <p className="text-sm text-gray-400">
                        No 9A, ARM Complex, 80ft Road,<br /> Annanagar, Madurai – 625020
                    </p>
                    <p className="text-sm font-semibold text-white">+91 93400 00400</p>
                    <a href="mailto:guhanconstructionanddevelopers@gmail.com" className="text-sm text-gold-500 hover:underline break-all">
                        guhanconstructionanddevelopers@gmail.com
                    </a>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                <p>&copy; {currentYear} GUHAN Construction & Developers. All Rights Reserved.</p>
                <p className="mt-2">Designed with Passion & Precision</p>
            </div>
        </footer>
    );
}

import WhatsAppChat from "@/components/WhatsAppChat";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.guhanconstruction.in"),

  title: {
    default: "Guhan Construction - Premium Builders & Developers",
    template: "%s | Guhan Construction",
  },

  description:
    "Guhan Construction is a leading construction and development company specializing in luxury residential and commercial projects with premium quality and timely delivery.",

  keywords: [
    "Guhan Construction",
    "Builders in Tamil Nadu",
    "Luxury Homes",
    "Commercial Construction",
    "Residential Projects",
    "Real Estate Developers",
  ],

  authors: [{ name: "Guhan Construction" }],
  creator: "Guhan Construction",
  publisher: "Guhan Construction",

  // ✅ LOGO FOR BROWSER TAB
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  // ✅ LOGO FOR WHATSAPP / FACEBOOK
  openGraph: {
    title: "Guhan Construction - Premium Builders & Developers",
    description:
      "Leading construction company delivering premium residential and commercial projects with excellence.",
    url: "https://www.guhanconstruction.in",
    siteName: "Guhan Construction",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.guhanconstruction.in/logo.png", // FULL URL
        width: 1200,
        height: 630,
        alt: "Guhan Construction Logo",
      },
    ],
  },

  // ✅ LOGO FOR TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Guhan Construction - Premium Builders",
    description:
      "Premium residential & commercial construction company delivering excellence.",
    images: ["https://www.guhanconstruction.in/logo.png"],
  },

  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-black selection:bg-primary selection:text-white">
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}

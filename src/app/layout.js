import "./globals.css";

export const metadata = {
  title: "Guhan Construction - Premium Builders & Developers",
  description: "Leading construction and development company specializing in luxury residential and commercial projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white text-black selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

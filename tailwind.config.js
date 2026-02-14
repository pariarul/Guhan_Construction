/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: "#C5A022", // Premium Gold
                accent: {
                    400: "#f8fafc", // Very Light Slate
                    500: "#f1f5f9", // Light Slate
                    600: "#000000", // pure Black
                },
                secondary: "#f8fafc", // Light Background
                background: "#ffffff",
                foreground: "#000000",
                muted: "#64748b",
            },
            fontFamily: {
                serif: ["Cinzel", "serif"],
                sans: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'hero-pattern': "url('/noise.png')", // Suggest creating a noise texture later or remove if strict
            },
            boxShadow: {
                'glow': '0 0 20px rgba(212, 175, 55, 0.5)',
            }
        },
    },
    plugins: [],
};

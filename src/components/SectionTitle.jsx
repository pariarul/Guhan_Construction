export default function SectionTitle({ title, subtitle, className = "" }) {
    return (
        <div className={`space-y-4 mb-16 text-center ${className}`}>
            <h3 className="text-gold-500 font-bold uppercase tracking-widest text-sm relative inline-block">
                <span className="relative z-10 px-4 bg-black">{subtitle}</span>
                <span className="absolute w-full h-[1px] bg-gold-500/30 left-0 top-1/2 -z-0"></span>
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">
                {title}
            </h2>
        </div>
    );
}

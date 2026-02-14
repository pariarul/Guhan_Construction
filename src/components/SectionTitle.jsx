export default function SectionTitle({ title, subtitle, className = "" }) {
    return (
        <div className={`space-y-4 mb-16 text-center ${className}`}>
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm relative inline-block">
                <span className="relative z-10 px-4 bg-white">{subtitle}</span>
                <span className="absolute w-full h-[1px] bg-primary/20 left-0 top-1/2 -z-0"></span>
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-wide">
                {title}
            </h2>
        </div>
    );
}

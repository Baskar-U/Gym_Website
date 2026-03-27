import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeading({ title, subtitle, alignment = "center", light = false }: SectionHeadingProps) {
  const alignClass = 
    alignment === "center" ? "text-center items-center" : 
    alignment === "right" ? "text-right items-end" : 
    "text-left items-start";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 mb-12 ${alignClass}`}
    >
      {subtitle && (
        <span className="text-primary font-bold uppercase tracking-widest text-sm flex items-center gap-2">
          {alignment !== "left" && <span className="w-8 h-[2px] bg-primary block" />}
          {subtitle}
          {alignment !== "right" && <span className="w-8 h-[2px] bg-primary block" />}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black uppercase ${light ? 'text-white' : 'text-white'}`}>
        {title.split(' ').map((word, i, arr) => (
          <span key={i} className={i === arr.length - 1 ? "text-primary" : ""}>
            {word}{" "}
          </span>
        ))}
      </h2>
    </motion.div>
  );
}

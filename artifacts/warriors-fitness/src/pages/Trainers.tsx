import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { TRAINERS } from "@/lib/data";

export default function Trainers() {
  return (
    <div className="pt-24 pb-24 bg-card bg-grid-pattern border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Expert Coaches" subtitle="Meet the Team" alignment="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {TRAINERS.map((trainer, idx) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-2xl bg-background border border-white/10"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-primary font-bold text-xs uppercase tracking-widest mb-1">
                  {trainer.experience} Experience
                </div>
                <h3 className="text-3xl font-black text-white font-display uppercase tracking-tight mb-1">
                  {trainer.name}
                </h3>
                <p className="text-gray-300 font-medium mb-4">{trainer.role}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <p className="text-sm text-gray-400 border-t border-white/10 pt-4 mt-4">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

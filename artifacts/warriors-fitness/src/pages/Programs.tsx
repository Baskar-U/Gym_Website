import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PROGRAMS } from "@/lib/data";
import { Dumbbell, Activity, Music, User } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell size={32} />,
  Activity: <Activity size={32} />,
  Music: <Music size={32} />,
  User: <User size={32} />,
};

export default function Programs() {
  return (
    <div className="pt-24 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Training Programs" subtitle="Choose Your Path" alignment="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col sm:flex-row bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                <div className="text-primary mb-4 bg-primary/10 w-fit p-3 rounded-xl border border-primary/20">
                  {iconMap[program.icon]}
                </div>
                <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {program.description}
                </p>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider group-hover:underline underline-offset-4 cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

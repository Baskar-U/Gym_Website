import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { PROGRAMS } from "@/lib/data";
import { Dumbbell, Activity, Music, User, X, Clock, Calendar, BarChart3, CheckCircle2, UserCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Link } from "wouter";

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell size={32} />,
  Activity: <Activity size={32} />,
  Music: <Music size={32} />,
  User: <User size={32} />,
};

type Program = typeof PROGRAMS[number];

function ProgramModal({ program, onClose }: { program: Program; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 bg-[#111111] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/80"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header image */}
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/50 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-xl flex items-center justify-center text-primary">
                {iconMap[program.icon]}
              </div>
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest">{program.level}</p>
                <h2 className="text-2xl font-black text-white font-display uppercase tracking-tight">{program.title}</h2>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center text-center border border-white/5">
                <Clock size={18} className="text-primary mb-1" />
                <span className="text-xs text-gray-400">Duration</span>
                <span className="text-sm font-bold text-white mt-0.5">{program.duration}</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center text-center border border-white/5">
                <Calendar size={18} className="text-primary mb-1" />
                <span className="text-xs text-gray-400">Frequency</span>
                <span className="text-sm font-bold text-white mt-0.5">{program.frequency}</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 flex flex-col items-center text-center border border-white/5">
                <UserCheck size={18} className="text-primary mb-1" />
                <span className="text-xs text-gray-400">Trainer</span>
                <span className="text-sm font-bold text-white mt-0.5">{program.trainer.split('/')[0].trim()}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">About This Program</h3>
              <p className="text-gray-300 leading-relaxed">{program.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">What's Included</h3>
              <ul className="space-y-2">
                {program.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                <BarChart3 size={16} /> Key Benefits
              </h3>
              <p className="text-gray-300 text-sm">{program.benefits}</p>
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2">
              <Link href="/membership" onClick={onClose} className="flex-1">
                <Button size="md" className="w-full" isSkewed={false}>Join Now</Button>
              </Link>
              <Link href="/contact" onClick={onClose} className="flex-1">
                <Button size="md" variant="outline" className="w-full" isSkewed={false}>Enquire</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

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
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="text-sm font-bold text-primary uppercase tracking-wider hover:underline underline-offset-4 cursor-pointer flex items-center gap-1 group/btn"
                  >
                    Learn More 
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProgram && (
        <ProgramModal program={selectedProgram} onClose={() => setSelectedProgram(null)} />
      )}
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { TRAINERS } from "@/lib/data";
import { X, Award, Calendar, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/Button";
import { Link } from "wouter";

type Trainer = typeof TRAINERS[number];

function TrainerModal({ trainer, onClose }: { trainer: Trainer; onClose: () => void }) {
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
          className="relative z-10 bg-[#111111] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/80"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with image */}
          <div className="relative h-64 overflow-hidden rounded-t-2xl">
            <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-6 space-y-5">
            {/* Name & role */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{trainer.experience} Experience</p>
                <h2 className="text-3xl font-black text-white font-display uppercase tracking-tight">{trainer.name}</h2>
                <p className="text-gray-400 font-medium mt-1">{trainer.role}</p>
              </div>
              <div className="w-14 h-14 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center text-primary">
                <Award size={26} />
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-4">
              <p className="text-gray-300 leading-relaxed">{trainer.bio}</p>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                <Zap size={14} /> Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {trainer.specializations.map((s, i) => (
                  <span key={i} className="bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                <Award size={14} /> Certifications
              </h3>
              <ul className="space-y-2">
                {trainer.certifications.map((c, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span className="text-gray-300 text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
              <Calendar size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Available</p>
                <p className="text-white text-sm font-medium">{trainer.schedule}</p>
              </div>
            </div>

            {/* Achievement */}
            <div className="text-sm text-gray-400 italic border-l-2 border-primary/40 pl-4">
              {trainer.achievements}
            </div>

            {/* CTA */}
            <Link href="/contact" onClick={onClose}>
              <Button size="md" className="w-full mt-2" isSkewed={false}>Book a Session with {trainer.name.split(' ')[0]}</Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

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
              onClick={() => setSelectedTrainer(trainer)}
              className="relative group overflow-hidden rounded-2xl bg-background border border-white/10 cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
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
                  <p className="text-sm text-primary font-bold uppercase tracking-wider border-t border-white/10 pt-3">
                    View Profile →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedTrainer && (
        <TrainerModal trainer={selectedTrainer} onClose={() => setSelectedTrainer(null)} />
      )}
    </div>
  );
}

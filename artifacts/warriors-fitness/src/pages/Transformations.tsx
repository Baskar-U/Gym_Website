import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "wouter";
import { Button } from "@/components/Button";
import { TRANSFORMATIONS } from "@/lib/data";
import { X, User, Dumbbell } from "lucide-react";

type Transformation = typeof TRANSFORMATIONS[number];

function TransformationModal({ item, onClose }: { item: Transformation; onClose: () => void }) {
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
          {/* Image */}
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-black/60 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
            >
              <X size={18} />
            </button>
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded shadow-lg">
                {item.tag}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-5">
            {/* Member info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center text-primary font-black text-xl font-display">
                {item.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-black text-white font-display uppercase">{item.name}</h2>
                <p className="text-gray-400 text-sm">{item.program} · {item.duration}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {item.stats.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-white font-black text-sm font-display">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Story */}
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                <User size={14} /> Their Story
              </h3>
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <p className="text-gray-300 leading-relaxed italic">"{item.story}"</p>
              </div>
            </div>

            {/* Program highlight */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
              <Dumbbell size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Program Used</p>
                <p className="text-white font-medium text-sm">{item.program}</p>
              </div>
            </div>

            {/* CTA */}
            <Link href="/contact" onClick={onClose}>
              <Button size="md" className="w-full mt-2" isSkewed={false}>Start My Transformation</Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Transformations() {
  const [selected, setSelected] = useState<Transformation | null>(null);

  return (
    <div className="pt-24 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Transformations" subtitle="Results Speak Louder" alignment="center" />
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-4">
          Real people, real hard work, and unbelievable results. See what happens when you combine dedication with our expert guidance.
        </p>
        <p className="text-center text-primary text-sm font-bold uppercase tracking-widest mb-16">Click any photo to read their story</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {TRANSFORMATIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelected(item)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-white/5 cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={`Transformation ${item.id}`} 
                className="w-full h-full object-cover filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-lg inline-block">
                    {item.tag}
                  </span>
                  <p className="text-white text-sm font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {item.name}
                  </p>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Tap to read story →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <Button size="lg">Start Your Transformation</Button>
          </Link>
        </div>
      </div>

      {selected && (
        <TransformationModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

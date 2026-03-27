import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { PLANS } from "@/lib/data";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Membership() {
  return (
    <div className="pt-24 pb-24 bg-card bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Membership Plans" subtitle="Invest in Yourself" alignment="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-card to-background border-primary shadow-2xl shadow-primary/20 scale-100 md:scale-105 z-10' 
                  : 'bg-background border-white/10 hover:border-white/30'
              } transition-all`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black text-white font-display">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest">{plan.duration}</p>
                {plan.save && (
                  <p className="text-primary text-xs font-bold mt-2 bg-primary/10 inline-block px-2 py-1 rounded">{plan.save}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button 
                  variant={plan.isPopular ? "primary" : "outline"} 
                  className="w-full"
                  isSkewed={false}
                >
                  Choose Plan
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

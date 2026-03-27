import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Warriors" subtitle="Our Story" alignment="center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* dark gym equipment */}
            <img 
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80" 
              alt="Gym Facility" 
              className="rounded-xl shadow-2xl border border-white/10"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 text-lg"
          >
            <p>
              Founded in 2020, <strong>Warriors Fitness Center</strong> was built on a simple philosophy: fitness is not a hobby, it's a lifestyle. Located in the heart of Perungudi, Chennai, we set out to create a sanctuary for those serious about self-improvement.
            </p>
            <p>
              We're more than just rows of treadmills and dumbbells. We are a community of athletes, beginners, professionals, and everyday people striving to become better versions of themselves. 
            </p>
            
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4 font-display uppercase tracking-wide">Our Core Values</h3>
              <ul className="space-y-3">
                {["Discipline over Motivation", "Community & Respect", "Science-backed Training", "Uncompromising Quality"].map((val, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-white font-medium">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

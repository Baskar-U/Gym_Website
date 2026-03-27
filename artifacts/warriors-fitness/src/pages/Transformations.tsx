import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Link } from "wouter";
import { Button } from "@/components/Button";

const TRANSFORMATIONS = [
  { id: 1, image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80", tag: "Lost 15kg" },
  { id: 2, image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80", tag: "Muscle Gain" },
  { id: 3, image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80", tag: "Shredded" },
  { id: 4, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", tag: "Powerlifting" },
  { id: 5, image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80", tag: "Lost 20kg" },
  { id: 6, image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80", tag: "Toned" },
];

export default function Transformations() {
  return (
    <div className="pt-24 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Transformations" subtitle="Results Speak Louder" alignment="center" />
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Real people, real hard work, and unbelievable results. See what happens when you combine dedication with our expert guidance.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {TRANSFORMATIONS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-white/5"
            >
              <img 
                src={item.image} 
                alt={`Transformation ${item.id}`} 
                className="w-full h-full object-cover filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-lg">
                  {item.tag}
                </span>
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
    </div>
  );
}

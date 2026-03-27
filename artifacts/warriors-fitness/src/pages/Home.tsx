import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote, ChevronRight } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { PROGRAMS, TESTIMONIALS } from "@/lib/data";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* bg dark gym athlete lifting */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80" 
            alt="Gym background" 
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">
              Welcome to Perungudi's Best
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-display uppercase italic leading-[0.9] tracking-tighter mb-6">
              Train Like A <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-700 text-shadow-glow">Warrior.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl border-l-2 border-primary pl-4">
              Top-Rated Gym in Perungudi with Expert Trainers, Premium Equipment, and Affordable Plans. Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/membership">
                <Button size="lg" className="w-full sm:w-auto">Start Your Journey</Button>
              </Link>
              <Link href="/programs">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white hover:text-white">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Stats Banner */}
      <div className="bg-primary/10 border-y border-primary/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white font-display">400+</h3>
              <div className="flex justify-center text-primary mt-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Happy Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white font-display">10+</h3>
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">Expert Trainers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white font-display">5K+</h3>
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">Sq.Ft Space</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white font-display">24/7</h3>
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">Gym Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Preview Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Our Core Programs" subtitle="What We Offer" alignment="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {PROGRAMS.slice(0, 3).map((program, idx) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative h-96 overflow-hidden rounded-xl bg-card"
              >
                <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm flex items-center justify-center rounded-lg mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={24} className="-rotate-45" />
                  </div>
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-wide mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/programs">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-card border-y border-white/5 bg-grid-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <SectionHeading title="Why Choose Warriors" subtitle="The Best in Perungudi" alignment="left" />
              
              <div className="space-y-8 mt-8">
                {[
                  { title: "Premium Equipment", desc: "State-of-the-art machines from top global brands." },
                  { title: "Expert Coaching", desc: "Certified trainers dedicated to your personal goals." },
                  { title: "Clean & Safe", desc: "Highest standards of hygiene and sanitization daily." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary mt-1 border border-primary/20">
                      <ChevronRight size={20} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
              {/* fit gym space */}
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" 
                alt="Gym Interior" 
                className="rounded-2xl shadow-2xl shadow-black/50 border border-white/10 relative z-10"
              />
              <div className="absolute -inset-4 bg-primary/20 blur-[50px] -z-10 rounded-full" />
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-xl shadow-xl w-48 animate-[bounce_5s_infinite]">
                <div className="text-3xl font-black text-primary font-display mb-1">500+</div>
                <div className="text-sm font-bold text-white uppercase leading-tight">Transformations<br/>Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Success Stories" subtitle="Real Members, Real Results" alignment="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <Quote className="text-white/10 w-12 h-12 absolute top-6 right-6" />
                <p className="text-gray-300 italic mb-6 relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary font-display text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* athletic crossfit background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=1920&q=80" 
            alt="CTA bg" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white font-display uppercase tracking-tight mb-6">
            Ready to <span className="text-red text-shadow-none">Start?</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Join Perungudi's most elite fitness community today. Your first workout is on us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <Button size="xl" variant="white" className="w-full sm:w-auto">View Pricing</Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black hover:border-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

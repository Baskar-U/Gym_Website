import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitEnquiry, enquirySchema, type EnquiryInput } from "@/hooks/use-enquiry";
import { Button } from "./Button";

export function FreeTrialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const { mutate: submitEnquiry, isPending } = useSubmitEnquiry();

  const { register, handleSubmit, formState: { errors } } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { goal: "Free Trial" }
  });

  useEffect(() => {
    // Show modal after 3 seconds on first visit
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem("warriors_freetrial_seen");
      if (!hasSeenModal) {
        setIsOpen(true);
        localStorage.setItem("warriors_freetrial_seen", "true");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data: EnquiryInput) => {
    submitEnquiry(data, {
      onSuccess: () => {
        setHasSubmitted(true);
        setTimeout(() => setIsOpen(false), 3000);
      }
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card border border-white/10 shadow-2xl shadow-primary/20"
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 text-muted-foreground hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row h-full">
            <div className="hidden md:block w-2/5 relative">
              {/* fitness intense gym modal image */}
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80" 
                alt="Gym trial"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
            
            <div className="w-full md:w-3/5 p-6 sm:p-8">
              {hasSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">You're All Set!</h3>
                  <p className="text-muted-foreground">Our team will call you shortly to schedule your free trial session.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black text-white font-display uppercase italic tracking-tight mb-2">
                    Claim Your <span className="text-primary">Free Trial</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Experience the Warriors Fitness facility for 1 day. No commitment required.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <input 
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                      {errors.name && <p className="text-primary text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <input 
                        {...register("phone")}
                        placeholder="Phone Number"
                        type="tel"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                      {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    
                    <input type="hidden" {...register("goal")} value="Free Trial" />

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isPending}
                      isSkewed={false}
                    >
                      {isPending ? "Processing..." : "Get Free Pass"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

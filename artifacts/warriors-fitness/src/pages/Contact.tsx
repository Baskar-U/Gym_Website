import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitEnquiry, enquirySchema, type EnquiryInput } from "@/hooks/use-enquiry";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const { mutate: submitEnquiry, isPending } = useSubmitEnquiry();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema)
  });

  const onSubmit = (data: EnquiryInput) => {
    submitEnquiry(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent Successfully!",
          description: "Our team will contact you within 24 hours.",
          variant: "default", // Custom style would be better, but default works with Shadcn setup
        });
        reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or call us directly.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="pt-24 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get in Touch" subtitle="Join the Warriors" alignment="center" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-16">
          
          {/* Contact Form */}
          <div className="bg-card p-8 sm:p-10 rounded-2xl border border-white/5 shadow-xl">
            <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name <span className="text-primary">*</span></label>
                <input 
                  {...register("name")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-primary text-xs">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number <span className="text-primary">*</span></label>
                <input 
                  {...register("phone")}
                  type="tel"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-primary text-xs">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Primary Goal <span className="text-primary">*</span></label>
                <select 
                  {...register("goal")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                >
                  <option value="" className="bg-card text-white">Select a goal</option>
                  <option value="Weight Loss" className="bg-card text-white">Weight Loss</option>
                  <option value="Muscle Gain" className="bg-card text-white">Muscle Gain</option>
                  <option value="General Fitness" className="bg-card text-white">General Fitness</option>
                  <option value="Personal Training" className="bg-card text-white">Personal Training</option>
                </select>
                {errors.goal && <p className="text-primary text-xs">{errors.goal.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message (Optional)</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us more about your fitness journey..."
                />
              </div>

              <Button type="submit" className="w-full" disabled={isPending} isSkewed={false}>
                {isPending ? "Sending..." : "Submit Enquiry"}
              </Button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide mb-8">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Location</h4>
                    <p className="text-gray-400 mt-1">123 OMR IT Expressway,<br/>Perungudi, Chennai, Tamil Nadu 600096</p>
                  </div>
                </li>
                
                <li className="flex gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Phone</h4>
                    <p className="text-gray-400 mt-1"><a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a></p>
                  </div>
                </li>

                <li className="flex gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Email</h4>
                    <p className="text-gray-400 mt-1"><a href="mailto:info@warriorsfitness.com" className="hover:text-primary transition-colors">info@warriorsfitness.com</a></p>
                  </div>
                </li>

                <li className="flex gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Hours</h4>
                    <p className="text-gray-400 mt-1">Mon-Sat: 5:00 AM - 10:00 PM<br/>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps Embed (Static/Iframe representation) */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8763567789417!2d80.2443048!3d12.9644026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d12a6479f63%3A0xc3f60d655f4bc5bc!2sPerungudi%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Warriors Fitness Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

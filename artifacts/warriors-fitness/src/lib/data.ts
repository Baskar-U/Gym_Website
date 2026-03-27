// Static data layer to keep components clean

export const TRAINERS = [
  {
    id: "1",
    name: "Arjun Kumar",
    role: "Strength & Conditioning",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80",
    bio: "Specializes in powerlifting, hypertrophy, and functional strength. Arjun pushes you beyond your perceived limits.",
    specializations: ["Powerlifting", "Hypertrophy", "Functional Strength", "Muscle Building"],
    certifications: ["NSCA-CSCS Certified", "ACE Personal Trainer", "Olympic Weightlifting Coach"],
    schedule: "Mon, Wed, Fri – 6 AM to 8 PM",
    achievements: "Trained 300+ athletes. National-level competitive powerlifter with a 250kg squat."
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Zumba & Cardio Expert",
    experience: "5+ Years",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80",
    bio: "High-energy sessions that feel like a party. Priya makes burning calories the best part of your day.",
    specializations: ["Zumba", "Cardio Dance", "HIIT", "Aerobics"],
    certifications: ["Zumba Gold Licensed Instructor", "ACE Group Fitness", "AFAA Certified"],
    schedule: "Tue, Thu, Sat – 7 AM to 7 PM",
    achievements: "Conducted 1000+ group sessions. Helped 200+ members achieve their weight loss goals."
  },
  {
    id: "3",
    name: "Vikram Singh",
    role: "Personal Training & Fat Loss",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    bio: "Science-based approach to body recomposition. Vikram has transformed over 500+ physiques.",
    specializations: ["Fat Loss", "Body Recomposition", "Nutrition Planning", "Metabolic Conditioning"],
    certifications: ["ISSA Certified Personal Trainer", "Precision Nutrition L1", "FMS Specialist"],
    schedule: "Mon to Sat – 5 AM to 9 PM",
    achievements: "500+ transformations completed. Featured in Fitness India Magazine 2023."
  }
];

export const PROGRAMS = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Build power, increase bone density, and develop lean muscle mass with our heavy lifting and functional strength programs.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    icon: "Dumbbell",
    duration: "45–60 mins per session",
    frequency: "3–5 days/week",
    level: "All Levels",
    highlights: [
      "Progressive overload programming",
      "Free weights, barbells & cables",
      "Personalized workout plans",
      "1-on-1 form coaching available",
      "Monthly progress tracking"
    ],
    benefits: "Increases metabolism, builds lean muscle, improves posture and bone health.",
    trainer: "Arjun Kumar"
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "High-intensity metabolic conditioning and scientifically designed fat-burning circuits to shred calories fast.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    icon: "Activity",
    duration: "30–45 mins per session",
    frequency: "4–6 days/week",
    level: "Beginner to Intermediate",
    highlights: [
      "HIIT & metabolic circuits",
      "Cardio zone with treadmills & bikes",
      "Diet guidance included",
      "Weekly weigh-in & tracking",
      "Group sessions available"
    ],
    benefits: "Burns up to 600 calories per session, boosts metabolism, improves cardiovascular health.",
    trainer: "Vikram Singh"
  },
  {
    id: "zumba",
    title: "Zumba Classes",
    description: "Fun, energetic dance fitness sessions combining Latin and international music with dance moves.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800&q=80",
    icon: "Music",
    duration: "60 mins per class",
    frequency: "Mon, Wed, Fri – 7 AM & 6 PM",
    level: "All Levels – No experience needed",
    highlights: [
      "Latin, Bollywood & international beats",
      "Fun group atmosphere",
      "Burns 400–600 calories/class",
      "No prior dance experience needed",
      "Expert licensed Zumba instructor"
    ],
    benefits: "Improves coordination, burns fat, reduces stress, and boosts mood.",
    trainer: "Priya Sharma"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one customized coaching tailored perfectly to your body type, lifestyle, and fitness goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    icon: "User",
    duration: "60 mins per session",
    frequency: "Flexible – your schedule",
    level: "Custom for all levels",
    highlights: [
      "100% customized program",
      "Dedicated certified trainer",
      "Nutrition & diet planning",
      "Progress photos & body composition",
      "Flexible time slots"
    ],
    benefits: "Fastest path to your goals with expert accountability and zero wasted effort.",
    trainer: "Arjun Kumar / Vikram Singh"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ravi M.",
    text: "The trainers here are absolutely amazing! Lost 15kg in 3 months. The atmosphere pushes you to work harder.",
    rating: 5,
    role: "Member since 2023"
  },
  {
    id: 2,
    name: "Anitha K.",
    text: "Best gym in Perungudi! Friendly environment, top-notch equipment, and the lowest price for this level of quality.",
    rating: 5,
    role: "Zumba Enthusiast"
  },
  {
    id: 3,
    name: "Suresh R.",
    text: "Clean equipment, motivating atmosphere. Totally transformed my physique with Arjun's strength program.",
    rating: 5,
    role: "Powerlifter"
  },
  {
    id: 4,
    name: "Deepika S.",
    text: "Excellent guidance from trainers. Worth every rupee! The personal training sessions are incredibly structured.",
    rating: 5,
    role: "Member since 2024"
  }
];

export const TRANSFORMATIONS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80",
    tag: "Lost 15kg",
    name: "Ravi Moorthy",
    duration: "3 Months",
    program: "Weight Loss + Personal Training",
    story: "I had tried many gyms before Warriors, but nothing worked. Within the first month, Vikram redesigned my entire diet and training plan. The results were visible within weeks. I lost 15kg in 3 months and feel like a completely different person.",
    stats: [{ label: "Lost", value: "15 kg" }, { label: "Duration", value: "3 months" }, { label: "Program", value: "Weight Loss" }]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80",
    tag: "Muscle Gain",
    name: "Karthik Raj",
    duration: "6 Months",
    program: "Strength Training",
    story: "Started at 58kg and felt weak. After 6 months of Arjun's strength program with progressive overload, I'm now at 72kg with visible muscle definition. The coaches genuinely care about your progress.",
    stats: [{ label: "Gained", value: "14 kg muscle" }, { label: "Duration", value: "6 months" }, { label: "Program", value: "Strength Training" }]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80",
    tag: "Shredded",
    name: "Anand Nair",
    duration: "4 Months",
    program: "Strength + Weight Loss",
    story: "I always wanted a shredded physique but didn't know how to combine cardio and lifting. Warriors gave me a perfect combination program. I went from 22% body fat down to 12% in just 4 months.",
    stats: [{ label: "Body Fat", value: "22% → 12%" }, { label: "Duration", value: "4 months" }, { label: "Program", value: "Strength + Cut" }]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    tag: "Powerlifting",
    name: "Dinesh Kumar",
    duration: "8 Months",
    program: "Strength Training",
    story: "I came in as a complete beginner. Now I'm squatting 120kg, deadlifting 150kg, and bench pressing 90kg. Arjun's coaching turned me into a competitive powerlifter. Best investment of my life.",
    stats: [{ label: "Squat", value: "120 kg" }, { label: "Deadlift", value: "150 kg" }, { label: "Duration", value: "8 months" }]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80",
    tag: "Lost 20kg",
    name: "Meena Devi",
    duration: "5 Months",
    program: "Weight Loss + Zumba",
    story: "After my second pregnancy, I struggled with weight for 2 years. Priya's Zumba classes made fitness fun again and Vikram's diet plan sealed the deal. I lost 20kg without feeling like I was on a diet.",
    stats: [{ label: "Lost", value: "20 kg" }, { label: "Duration", value: "5 months" }, { label: "Program", value: "Zumba + Diet" }]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80",
    tag: "Toned",
    name: "Preethi Anand",
    duration: "3 Months",
    program: "Personal Training + Zumba",
    story: "I never felt comfortable in a gym before. The friendly, non-judgmental atmosphere at Warriors changed everything. My personal trainer built my confidence while the Zumba classes helped me tone up. Absolutely love this place.",
    stats: [{ label: "Toned", value: "Full body" }, { label: "Duration", value: "3 months" }, { label: "Confidence", value: "100%" }]
  }
];

export const PLANS = [
  {
    id: "monthly",
    name: "Monthly Pass",
    price: "₹999",
    duration: "per month",
    features: [
      "Access to all gym equipment",
      "Free initial fitness assessment",
      "Locker room access",
      "1 Group class per week"
    ],
    isPopular: false
  },
  {
    id: "annual",
    name: "Annual Warrior",
    price: "₹7,999",
    duration: "per year",
    features: [
      "Unlimited 24/7 gym access",
      "Unlimited group classes (Zumba, Yoga)",
      "Free customized diet plan",
      "2 Personal Training sessions/month",
      "Guest pass (1 per month)"
    ],
    isPopular: true,
    save: "Save 33%"
  },
  {
    id: "quarterly",
    name: "Quarterly Hustle",
    price: "₹2,499",
    duration: "for 3 months",
    features: [
      "Access to all gym equipment",
      "Basic diet consultation",
      "Locker room access",
      "Unlimited group classes"
    ],
    isPopular: false,
    save: "Save 17%"
  }
];

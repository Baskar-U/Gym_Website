// Static data layer to keep components clean

export const TRAINERS = [
  {
    id: "1",
    name: "Arjun Kumar",
    role: "Strength & Conditioning",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80",
    bio: "Specializes in powerlifting, hypertrophy, and functional strength. Arjun pushes you beyond your perceived limits."
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Zumba & Cardio Expert",
    experience: "5+ Years",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80",
    bio: "High-energy sessions that feel like a party. Priya makes burning calories the best part of your day."
  },
  {
    id: "3",
    name: "Vikram Singh",
    role: "Personal Training & Fat Loss",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    bio: "Science-based approach to body recomposition. Vikram has transformed over 500+ physiques."
  }
];

export const PROGRAMS = [
  {
    id: "strength",
    title: "Strength Training",
    description: "Build power, increase bone density, and develop lean muscle mass with our heavy lifting and functional strength programs.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    icon: "Dumbbell"
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    description: "High-intensity metabolic conditioning and scientifically designed fat-burning circuits to shred calories fast.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80",
    icon: "Activity"
  },
  {
    id: "zumba",
    title: "Zumba Classes",
    description: "Fun, energetic dance fitness sessions combining Latin and international music with dance moves.",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800&q=80",
    icon: "Music"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one customized coaching tailored perfectly to your body type, lifestyle, and fitness goals.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    icon: "User"
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

export interface Education {
  degree: string;
  institution: string;
  year: number;
}

export interface Position {
  institution: string;
  role: string;
  period: string;
}

export interface Membership {
  name: string;
  year: number;
}

export interface Training {
  title: string;
  institution: string;
  period: string;
}

export interface Award {
  name: string;
  organization: string;
  year: number;
}

export interface OpdTiming {
  type: string;
  days: string;
  time: string;
  location: string;
}

export interface Fee {
  type: string;
  amount: number;
}

export interface Testimonial {
  patientName: string;
  condition: string;
  feedback: string;
  type: "Cosmetic" | "Reconstructive" | "Hand" | "General";
  rating: number;
}

export interface DoctorProfile {
  name: string;
  designation: string;
  specialty: string;
  department: string;
  email: string;
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  imageUrl: string;
  languages: string[];
  education: Education[];
  positions: Position[];
  memberships: Membership[];
  trainings: Training[];
  awards: Award[];
  opdTimings: OpdTiming[];
  fees: Fee[];
  bio: string;
  skills: string[];
  testimonials: Testimonial[];
}

export const doctorData: DoctorProfile = {
  name: "Dr. Gourav Siwas",
  designation: "Associate Hony. Active Visiting Consultant",
  specialty: "Plastic, Cosmetic & Hand Microsurgery",
  department: "Department of Plastic, Cosmetic & Hand Microsurgery",
  email: "siwasgourav@gmail.com",
  phone: "+91 11 4225 4000",
  whatsapp: "+91 9999088497",
  mapsUrl: "https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+New+Delhi",
  imageUrl: "/images/doctor.png",
  languages: ["English", "Hindi", "Punjabi"],
  bio: "Dr. Gourav Siwas is an esteemed Plastic, Cosmetic, and Hand Microsurgeon at Sir Ganga Ram Hospital, New Delhi. Renowned for his surgical precision and expertise in limb salvage, complex hand replantation, aesthetic facial surgery, and advanced reconstructive microsurgery, Dr. Siwas combines cutting-edge clinical techniques with compassionate patient-centered care to achieve natural, functional, and aesthetically harmonious outcomes.",
  skills: [
    "Hand & Wrist Microsurgery & Replantation",
    "Cosmetic & Aesthetic Facial Surgery",
    "Body Contouring & Liposuction",
    "Microvascular & Free Flap Reconstruction",
    "Maxillofacial & Trauma Reconstruction",
    "Burn Deformity Correction & Scar Revision"
  ],
  education: [
    {
      degree: "MBBS",
      institution: "Renowned Medical College & Hospital",
      year: 2012
    },
    {
      degree: "MS (General Surgery)",
      institution: "Premier Medical Institute, Delhi NCR",
      year: 2016
    },
    {
      degree: "DrNB / DNB (Plastic & Reconstructive Surgery)",
      institution: "Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi (NBEMS)",
      year: 2021
    },
    {
      degree: "Fellowship in Hand & Reconstructive Microsurgery",
      institution: "Specialized Hand & Microsurgical Unit, New Delhi",
      year: 2022
    },
    {
      degree: "Advanced Training in Aesthetic & Cosmetic Surgery",
      institution: "Indian Association of Aesthetic Plastic Surgeons (IAAPS)",
      year: 2023
    }
  ],
  positions: [
    {
      institution: "Sir Ganga Ram Hospital, New Delhi",
      role: "Associate Hony. Active Visiting Consultant, Dept of Plastic, Cosmetic & Hand Microsurgery",
      period: "Present"
    },
    {
      institution: "Max Super Speciality Hospital, Saket, New Delhi",
      role: "Associate Consultant, Hand, Wrist & Reconstructive Microsurgery",
      period: "Recent"
    },
    {
      institution: "Sir Ganga Ram Hospital, New Delhi",
      role: "Senior Resident / Registrar, Plastic & Reconstructive Surgery",
      period: "2018 - 2021"
    }
  ],
  memberships: [
    {
      name: "Association of Plastic Surgeons of India (APSI) - Full Life Member",
      year: 2021
    },
    {
      name: "Indian Society for Surgery of the Hand (ISSH)",
      year: 2022
    },
    {
      name: "Indian Association of Aesthetic Plastic Surgeons (IAAPS)",
      year: 2023
    },
    {
      name: "Delhi Medical Council (DMC) & National Medical Commission (NMC)",
      year: 2012
    }
  ],
  trainings: [
    {
      title: "Advanced Microvascular Anastomosis & Hand Replantation",
      institution: "Sir Ganga Ram Hospital Microsurgical Skills Lab",
      period: "2021 - 2022"
    },
    {
      title: "Advanced Trauma Life Support (ATLS) Certified",
      institution: "American College of Surgeons / ATLS India",
      period: "2022"
    }
  ],
  awards: [
    {
      name: "Excellence in Complex Microsurgical Replantation & Limb Salvage",
      organization: "SGRH Surgical Department",
      year: 2023
    },
    {
      name: "Best Paper Presentation in Reconstructive Hand Surgery",
      organization: "National Plastic Surgery Conference (APSI)",
      year: 2022
    }
  ],
  opdTimings: [
    {
      type: "Sir Ganga Ram Hospital (OPD)",
      days: "Monday - Saturday",
      time: "09:00 AM - 11:00 AM & 04:00 PM - 06:00 PM",
      location: "Room No. F-52, Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi"
    },
    {
      type: "Emergency Hand Trauma / Casualty",
      days: "24/7 Available on Call",
      time: "24 Hours Emergency",
      location: "Casualty / Emergency Dept., Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi"
    },
    {
      type: "Evening Specialty Clinic",
      days: "Tuesday, Thursday, Saturday",
      time: "05:00 PM - 07:00 PM",
      location: "Consultation Suite, Delhi NCR"
    }
  ],
  fees: [
    {
      type: "Direct Hospital OPD Consultation",
      amount: 1500
    },
    {
      type: "Follow-up Consultation",
      amount: 1200
    },
    {
      type: "Online Video Consultation",
      amount: 1400
    }
  ],
  testimonials: [
    {
      patientName: "Aman Gupta",
      condition: "Emergency Severed Hand Replantation",
      feedback: "I suffered an industrial machine injury with near-total hand amputation. Dr. Gourav Siwas and his team conducted a marathon 8-hour emergency microsurgery reconnecting my blood vessels and tendons at Sir Ganga Ram Hospital. Today, I have regained my hand movements and sensation. Lifesaver!",
      type: "Hand",
      rating: 5
    },
    {
      patientName: "Meenakshi Verma",
      condition: "Aesthetic Rhinoplasty & Facial Contouring",
      feedback: "Dr. Gourav Siwas listened to my concerns patiently and designed a subtle, natural nose reshaping that perfectly complements my face. The recovery was smooth with minimal swelling. He is a truly skilled surgeon with great artistic insight.",
      type: "Cosmetic",
      rating: 5
    },
    {
      patientName: "Rakesh Malhotra",
      condition: "Complex Soft Tissue Trauma & Microvascular Flap",
      feedback: "Following a high-velocity road accident, my leg had severe compound tissue loss. Dr. Siwas performed a microvascular tissue transfer that saved my limb from amputation. Forever indebted to his surgical precision and compassionate bedside manner.",
      type: "Reconstructive",
      rating: 5
    }
  ]
};

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
  hospital: string;
  hospitalAddress: string;
  email: string;
  phone: string;
  phoneAlt: string;
  emergencyPhone: string;
  casualtyPhone: string;
  ambulancePhone: string;
  whatsapp: string;
  bookingUrl: string;
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
  interests: string[];
  testimonials: Testimonial[];
}

export const doctorData: DoctorProfile = {
  name: "Dr. Gourav Siwas",
  designation: "Associate Hony. Active Visiting Consultant",
  specialty: "Plastic, Cosmetic & Hand Microsurgery",
  department: "Department of Plastic, Cosmetic & Hand Microsurgery",
  hospital: "Sir Ganga Ram Hospital, New Delhi",
  hospitalAddress: "Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi, Delhi - 110060",
  email: "siwasgourav@gmail.com",
  phone: "+91 11-4225 4000",
  phoneAlt: "+91 11-351-256-00",
  emergencyPhone: "+91 11-4225 4000",
  casualtyPhone: "+91 11-4225 1097 / 1098 / 1099",
  ambulancePhone: "+91 11-4225 3030",
  whatsapp: "+91 9999088497",
  bookingUrl: "https://appointment.sgrh.com",
  mapsUrl: "https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+Marg+Rajinder+Nagar+New+Delhi+110060",
  imageUrl: "/images/dr_gourav_official.jpg",
  languages: ["English", "Hindi", "Punjabi"],
  bio: "Dr. Gourav Siwas is an Associate Hony. Active Visiting Consultant in the Department of Plastic, Cosmetic & Hand Microsurgery at Sir Ganga Ram Hospital, New Delhi. Renowned for his surgical precision and expertise in complex hand trauma & replantations, aesthetic and cosmetic enhancements, microvascular tissue transfers, and post-oncological reconstruction, Dr. Siwas delivers state-of-the-art surgical care following international safety protocols with compassionate, patient-centered focus.",
  skills: [
    "Emergency Hand & Finger Replantation",
    "Microvascular Free Flap Reconstruction",
    "Aesthetic Facial & Rhinoplasty Surgery",
    "Body Contouring & Advanced Liposuction",
    "Breast Aesthetic & Oncoplastic Reconstruction",
    "Burn Deformity Correction & Scar Revision",
    "Maxillofacial & Polytrauma Reconstruction",
    "Peripheral Nerve & Tendon Surgery"
  ],
  interests: [
    "Hand & Wrist Microsurgery & Replantation",
    "Cosmetic & Aesthetic Facial Surgery",
    "Breast Aesthetic & Oncoplastic Surgery",
    "Microvascular Free Tissue Transfers",
    "Post-Burn Contracture & Scar Management",
    "Maxillofacial Trauma & Soft Tissue Reconstruction"
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
      role: "Associate Hony. Active Visiting Consultant, Dept. of Plastic, Cosmetic & Hand Microsurgery",
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
      type: "General OPD",
      days: "Monday - Saturday",
      time: "09:00 AM - 11:00 AM",
      location: "Room No. F-52, Department of Plastic Surgery, Sir Ganga Ram Hospital, New Delhi"
    },
    {
      type: "Private OPD",
      days: "Monday - Saturday",
      time: "04:00 PM - 06:00 PM",
      location: "Private OPD Suite / Room F-52, Sir Ganga Ram Hospital, New Delhi"
    },
    {
      type: "Other Clinic / Emergency",
      days: "24/7 On-Call Emergency",
      time: "Round the Clock (24 Hours)",
      location: "Casualty / Emergency Dept., Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi"
    }
  ],
  fees: [
    {
      type: "Direct (Hospital OPD)",
      amount: 1500
    },
    {
      type: "Follow-up (Direct)",
      amount: 1200
    },
    {
      type: "Video Consultation",
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

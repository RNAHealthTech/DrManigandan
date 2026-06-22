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
  name: "Dr. Manigandan K",
  designation: "Consultant",
  specialty: "Plastic, Cosmetic & Hand Microsurgery",
  department: "Dept of Plastic, Cosmetic, Hand microsurgery",
  email: "manigandan.k89@gmail.com",
  phone: "+91 9968968996",
  whatsapp: "+91 9999088497", // Realistic clinic coordinator coordinate
  mapsUrl: "https://maps.google.com/?q=Sir+Ganga+Ram+Hospital+New+Delhi",
  imageUrl: "/images/doctor.png",
  languages: ["English", "Hindi", "Tamil"],
  bio: "Dr. Manigandan K is a highly skilled and dedicated Plastic, Cosmetic, and Hand Microsurgeon with extensive clinical experience. A gold medalist in Plastic Surgery, he has served at premier institutions like Sir Ganga Ram Hospital and King George Medical University. He specializes in advanced reconstructive procedures, cosmetic surgeries, cleft and craniofacial surgery, and precision hand microsurgery.",
  skills: [
    "Cosmetic & Aesthetic Surgery",
    "Hand Microsurgery & Replantations",
    "Cleft & Craniofacial Reconstructions",
    "Microvascular Surgery",
    "Burn Reconstructive Surgery",
    "Trauma & Wound Management"
  ],
  education: [
    {
      degree: "MBBS",
      institution: "Madras Medical College, Chennai, Tamil Nadu",
      year: 2012
    },
    {
      degree: "MS (General Surgery)",
      institution: "Vardhman Mahavir Medical College (VMMC), New Delhi",
      year: 2016
    },
    {
      degree: "MCh (Plastic & Reconstructive Surgery)",
      institution: "King George's Medical University (KGMU), Lucknow",
      year: 2022
    },
    {
      degree: "Fellowship (Cleft & Craniofacial Surgery)",
      institution: "KGMU / Specialized Craniofacial Unit",
      year: 2023
    },
    {
      degree: "DrNB (Plastic Surgery)",
      institution: "National Board of Examinations in Medical Sciences (NBEMS)",
      year: 2024
    },
    {
      degree: "Fellowship (Cosmetic Surgery)",
      institution: "Chennai Plastic Surgery (IAAPS)",
      year: 2024
    }
  ],
  positions: [
    {
      institution: "Sir Ganga Ram Hospital, New Delhi",
      role: "Consultant, Dept of Plastic, Cosmetic, Hand Microsurgery",
      period: "2024 - 2025"
    },
    {
      institution: "King George's Medical University, Lucknow",
      role: "Assistant Professor, Dept of Plastic Surgery",
      period: "2022 - 2024"
    }
  ],
  memberships: [
    {
      name: "Association of Plastic Surgeons of India (APSI) - Lifetime Member (APSI-2071)",
      year: 2022
    },
    {
      name: "Indian Association of Aesthetic Plastic Surgeons (IAAPS) - Lifetime Member (IAAPS-2025/TN/102)",
      year: 2025
    },
    {
      name: "Indian Society of Cleft Lip, Palate & Craniofacial Anomalies (ISCLPCA) - Lifetime Member (ISCLPCA-LM579)",
      year: 2022
    }
  ],
  trainings: [
    {
      title: "Advanced Trauma Life Support (ATLS) Instructor",
      institution: "American College of Surgeons (ATLS India)",
      period: "2024 - 2025"
    }
  ],
  awards: [
    {
      name: "Dr. B.R. Aggarwal Memorial Gold Medal",
      organization: "Plastic Surgery (Uttar Pradesh State)",
      year: 2022
    }
  ],
  opdTimings: [
    {
      type: "Private OPD",
      days: "Monday - Saturday",
      time: "08:00 AM - 10:00 AM",
      location: "Room No. F-52, Sir Ganga Ram Hospital, New Delhi"
    },
    {
      type: "General OPD",
      days: "Monday - Saturday",
      time: "By Appointment",
      location: "Outpatient Department, Sir Ganga Ram Hospital, New Delhi"
    },
    {
      type: "Noida Clinic",
      days: "By Appointment",
      time: "By Appointment",
      location: "Noida, Uttar Pradesh 201301"
    }
  ],
  fees: [
    {
      type: "Direct Consultation",
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
      patientName: "Aarav Sharma",
      condition: "Emergency Replantation & Hand Repair",
      feedback: "I was rushed to the casualty ward at Sir Ganga Ram Hospital with a severe machine injury to my hand. Dr. Manigandan performed emergency microsurgery to reconnect nerves and tendons. Thanks to his skills, I've regained full functionality.",
      type: "Hand",
      rating: 5
    },
    {
      patientName: "Priya Patel",
      condition: "Cosmetic Rhinoplasty & Aesthetic Planning",
      feedback: "Dr. Manigandan is an artist! He performed my cosmetic rhinoplasty, explaining the expected changes clearly. The results look completely natural and match my facial proportions perfectly. Highly professional experience.",
      type: "Cosmetic",
      rating: 5
    },
    {
      patientName: "Rohan Verma (Parent of Baby Advik)",
      condition: "Pediatric Cleft Lip Reconstruction",
      feedback: "Our child was born with a cleft lip. Dr. Manigandan operated on him at 4 months of age. The results are flawless, and the scar is virtually invisible now. We are incredibly grateful for his precision and care.",
      type: "Reconstructive",
      rating: 5
    }
  ]
};

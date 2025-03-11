interface PlacementData {
  id: number;
  name: string;
  company: string;
  role: string;
  package: number;
  bond: number;
  month: string;
  year: number;
  domain:string;
  internship: {
    duration: number;
    stipend: number;
    hasInternship: boolean;
  };
}

export const placements: PlacementData[] = [
  {
    id: 1,
    name: "Vishu Rana",
    company: "Motherson Technology",
    role: "Graduate Engineer Trainee",
    package: 3.5,
    bond: 2,
    month: "March",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Tech"
  },
  {
    id: 2,
    name: "Dhruv Kumar",
    company: "Successive Technologies",
    role: "Trainee Engineer",
    package: 5.5,
    bond: 1.5,
    month: "February",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 25000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 3,
    name: "Chahat Ladani",
    company: "Instant Systems",
    role: "Mobile Developer",
    package: 4.5,
    bond: 0,
    month: "February",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 4,
    name: "Pragya Chaudhary",
    company: "Instant Systems",
    role: "Mobile Developer",
    package: 4.5,
    bond: 0,
    month: "February",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 5,
    name: "Akshit Negi ",
    company: "Instant Systems",
    role: "Mobile Developer",
    package: 4.5,
    bond: 0,
    month: "February",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },

  {
    id: 6,
    name: "Ansh Singh",
    company: "AlgoCircus",
    role: "Salesforce Developer Trainee",
    package: 3.0,
    bond: 2.5,
    month: "February",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 12000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 7,
    name: "Anushka Sharma",
    company: "AlgoCircus",
    role: "Salesforce Developer Trainee",
    package: 3.0,
    bond: 2.5,
    month: "February",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 12000,
      hasInternship: true,
    },
    domain:"Tech"
  },

  {
    id: 8,
    name: "Rohit Sharma",
    company: "EDS India",
    role: "Android Developer  ",
    package: 2.9,
    bond: 2,
    month: "January",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 18000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 9,
    name: " Bhumika Pal",
    company: "EDS India",
    role: "Embedded Developer  ",
    package: 2.9,
    bond: 2,
    month: "January",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 18000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 10,
    name: " Rakesh Kumar",
    company: "EDS India",
    role: "Embedded Developer  ",
    package: 2.9,
    bond: 2,
    month: "January",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 18000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 11,
    name: "Priya kumari",
    company: "TechTree",
    role: "Ios Developer",
    package: 3.5,
    bond: 1.5,
    month: "January",
    year: 2024,
    internship: {
      duration: 4,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 12,
    name: "Saurabh kumar Jha",
    company: "TechTree",
    role: "Ios Developer",
    package: 3.5,
    bond: 1.5,
    month: "January",
    year: 2024,
    internship: {
      duration: 4,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 13,
    name: "Sweta Mishra ",
    company: "TechTree",
    role: "Ios Developer",
    package: 3.5,
    bond: 1.5,
    month: "January",
    year: 2024,
    internship: {
      duration: 4,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 14,
    name: "Shubham Vishwakarma ",
    company: "Cloudconic Consulting",
    role: "Software Engineer Trainee",
    package: 3.5,
    bond: 2,
    month: "January",
    year: 2024,
    internship: {
      duration: 4,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 15,
    name: "Satyam singh Kushwaha ",
    company: "Cloudconic Consulting",
    role: "Software Engineer Trainee",
    package: 3.5,
    bond: 2,
    month: "January",
    year: 2024,
    internship: {
      duration: 4,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 16,
    name: "Suraj Kumar Prasad  ",
    company: "Cloudconic Consulting",
    role: "Software Engineer Trainee",
    package: 3.5,
    bond: 2,
    month: "January",
    year: 2024,
    internship: {
      duration: 4,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },

  {
    id: 17,
    name: "Sachin Kumar ",
    company: "Satyam Software System ",
    role: "  Trainee",
    package: 3,
    bond: 1.5,
    month: "October",
    year: 2024,
    internship: {
      duration: 3,
      stipend: 11000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 18,
    name: "Kartikey Keshari ",
    company: "Satyam Software System ",
    role: "  Trainee",
    package: 3,
    bond: 1.5,
    month: "October",
    year: 2024,
    internship: {
      duration: 3,
      stipend: 11000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 19,
    name: "Aaditya  ",
    company: "Learning Routes ",
    role: "Sales Associative  ",
    package: 5.7,
    bond: 0,
    month: "November",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },

  {
    id: 20,
    name: "Nityanav  ",
    company: "Learning Routes ",
    role: "Sales Associative  ",
    package: 5.7,
    bond: 0,
    month: "November",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 21,
    name: "Satyam  ",
    company: "Learning Routes ",
    role: "Sales Associative  ",
    package: 5.7,
    bond: 0,
    month: "November",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 22,
    name: "Mukul Negi ",
    company: "Fincart",
    role: "Software Developer",
    package: 4,
    bond: 1,
    month: "January",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 20000,
      hasInternship: true,
    },
    domain:"Tech"
  },

  {
    id: 23,
    name: "Abhishek Yadav ",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 24,
    name: "Adarsh Kumar Jha",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 25,
    name: "Aditya Dagar",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 26,
    name: "Afzal Ansari",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 27,
    name: "Ankul Kumar",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 28,
    name: "Mohd Saad",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 29,
    name: "Nishant Kumar Dubey ",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 30,
    name: "Nitin Yadav",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 31,
    name: "Uttapal Kant",
    company: "Indus Tower",
    role: "Associate",
    package: 3,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 32,
    name: "gungun Saluja",
    company: "Credex Technology",
    role: "Full Stack Java Developer",
    package: 5,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 33,
    name: "Somil Bhargawaj",
    company: "Credex Technology",
    role: "Full Stack Java Developer",
    package: 5,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 10000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 34,
    name: "Aditi Deshwal",
    company: "Integer Telecom",
    role: "Project Management",
    package: 3,
    bond: 2,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 35,
    name: "Ayush",
    company: "Integer Telecom",
    role: "Project Management",
    package: 3,
    bond: 2,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"non-Tech"
  },
  {
    id: 36,
    name: "Sonu",
    company: "Integer Telecom",
    role: "Project Management",
    package: 3,
    bond: 2,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 35,
    name: "Shushant",
    company: "Integer Telecom",
    role: "Project Management",
    package: 3,
    bond: 2,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 36,
    name: "Himanshi",
    company: "Hike Education",
    role: "Buisness Development Manager",
    package: 7,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 1,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Non-Tech"
  },
  {
    id: 37,
    name: "Saiba",
    company: "Hike Education",
    role: "Buisness Development Manager",
    package: 7,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 1,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Non-Tech"
  },
  {
    id: 38,
    name: "Sagar",
    company: "Hike Education",
    role: "Buisness Development Manager",
    package: 7,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 1,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Non-Tech"
  },
  {
    id: 39,
    name: "Nityanav",
    company: "Centilytics",
    role: "Operation ",
    package: 7.6,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Non-Tech"
  },
  {
    id: 40,
    name: "Shivansh Sharma",
    company: "Centilytics",
    role: "Data Analyst ",
    package: 7.6,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Semi-Tech"
  },
  {
    id: 40,
    name: "Shivansh Seth",
    company: "Centilytics",
    role: "Network Security ",
    package: 7.6,
    bond: 0,
    month: "December",
    year: 2024,
    internship: {
      duration: 0,
      stipend: 0,
      hasInternship: false,
    },
    domain:"Tech"
  },
  {
    id: 41,
    name: "Krish Verma ",
    company: "Fincart",
    role: "Junior Software Engineer",
    package: 4,
    bond: 1,
    month: "December",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 20000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 42,
    name: "Mrityunjay rai",
    company: "Prutor.ai",
    role: "SDE",
    package: 4,
    bond: 0,
    month: "September",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 43,
    name: "Vikash Tiwari",
    company: "Prutor.ai",
    role: "SDE",
    package: 4,
    bond: 0,
    month: "September",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 44,
    name: "Harsh kumar Patel",
    company: "CodingWorkx",
    role: "Software Trainee",
    package: 5,
    bond: 0,
    month: "August",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 45,
    name: "Krishna Mahto",
    company: "CodingWorkx",
    role: "Software Trainee",
    package: 5,
    bond: 0,
    month: "August",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },
  {
    id: 45,
    name: "Aryan Jha",
    company: "CodingWorkx",
    role: "Software Trainee",
    package: 5,
    bond: 0,
    month: "August",
    year: 2024,
    internship: {
      duration: 6,
      stipend: 15000,
      hasInternship: true,
    },
    domain:"Tech"
  },
];

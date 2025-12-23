import { UserProfile, Project, Experience, Skill } from './types';

// =========================================================================
// INSTRUCTIONS FOR CONNECT ME:
// 1. Go to https://formspree.io/
// 2. Create a free account and a new form.
// 3. Copy the ID from the "Endpoint" (it looks like: https://formspree.io/f/mwkgvjzo)
// 4. Paste ONLY the ID (e.g., "mwkgvjzo") in the formspreeId field below.
// =========================================================================

export const PORTFOLIO_DATA: UserProfile & { formspreeId: string } = {
  name: "Nirmalya Chatterjee",
  title: "BCA Student & Frontend Developer",
  tagline: "Building clean, user-friendly websites and bringing ideas to life with new technologies.",
  email: "nirmalyachatterjee617@gmail.com",
  location: "Kolkata, India",
  formspreeId: "mwkgvjzo", // REPLACE THIS with your own Formspree ID to receive real emails
  avatarUrl: "nirmalya.jpeg", 
  about: `Hello! I'm Nirmalya Chatterjee, a passionate and curious Bachelor of Computer Applications (BCA) student at Sister Nivedita University, Kolkata. I enjoy building clean, user-friendly websites and learning new technologies that bring ideas to life. I'm currently looking for opportunities to apply my skills in real-world projects and grow as a developer and team contributor.`,
  
  socials: [
    { platform: "GitHub", url: "https://github.com/Nirmalya-alt", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/nirmalya-chatterjee-01046b28a/", icon: "Linkedin" },
    { platform: "Email", url: "mailto:nirmalyachatterjee617@gmail.com", icon: "Mail" },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Frontend Intern",
      company: "Octanet Services Pvt Ltd",
      period: "1 Month",
      description: [
        "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Collaborated with design team to implement pixel-perfect UI components.",
        "Optimized website performance for cross-browser compatibility."
      ]
    },
    {
      id: "exp-2",
      role: "Frontend Web Development Intern",
      company: "Chipherbytechnology",
      period: "1 Month",
      description: [
        "Designed and developed a fully functional event planner website using HTML, CSS, and JavaScript.",
        "Implemented interactive features and ensured mobile responsiveness.",
        "Showcased projects on GitHub and practiced effective documentation."
      ]
    },
    {
      id: "exp-3",
      role: "Frontend Intern",
      company: "ShulaTech Solutions",
      period: "1 Month",
      description: [
        "Contributed to front-end development tasks and worked on UI components.",
        "Implemented modern layouts and improved website accessibility.",
        "Practiced version control using Git and GitHub for team collaboration."
      ]
    },
    {
      id: "exp-4",
      role: "DevOps Intern",
      company: "Employability.life",
      period: "1 Month",
      description: [
        "Learned and implemented basic DevOps practices and deployment strategies.",
        "Gained hands-on experience with GitHub, version control, and CI/CD concepts.",
        "Worked with cloud deployment pipelines and Linux CLI."
      ]
    },
  ],

  projects: [
    {
      id: "proj-1",
      title: "Crop Sense AI",
      description: "An AI-powered agricultural tool helping farmers identify crop diseases and providing smart recommendations for better yield.",
      technologies: ["Python", "AI/ML", "Web Tech"],
      imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
      repoUrl: "https://github.com/Nirmalya-alt/Crop-sense-ai"
    },
    {
      id: "proj-2",
      title: "SecureBank",
      description: "A secure banking simulation application demonstrating secure transaction handling and user authentication mechanisms.",
      technologies: ["Java", "SQL", "Security"],
      imageUrl: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=800",
      repoUrl: "https://github.com/Nirmalya-alt/securebank"
    },
    {
      id: "proj-3",
      title: "Stock Analysis",
      description: "A financial tool for analyzing stock market trends, providing users with data visualization and insights.",
      technologies: ["Python", "Data Analysis", "API"],
      imageUrl: "https://images.unsplash.com/photo-1611974714851-48206138473c?auto=format&fit=crop&q=80&w=800",
      repoUrl: "https://github.com/Nirmalya-alt/Stock"
    },
    {
      id: "proj-4",
      title: "Travel Companion",
      description: "A travel planning application to help users discover destinations, plan itineraries, and organize trips effectively.",
      technologies: ["React", "HTML/CSS", "JS"],
      imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800",
      repoUrl: "https://github.com/Nirmalya-alt/travel"
    },
    {
      id: "proj-5",
      title: "PetApp",
      description: "A dedicated application for pet owners offering care tips, tracking, and resources for better pet health management.",
      technologies: ["React", "JavaScript", "UI/UX"],
      imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
      repoUrl: "https://github.com/Nirmalya-alt/petapp"
    },
    {
      id: "proj-6",
      title: "Fruit Marketplace",
      description: "An interactive web application for browsing and purchasing fresh fruits with a vibrant and user-friendly interface.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800",
      repoUrl: "https://github.com/Nirmalya-alt/fruit"
    },
    {
      id: "proj-7",
      title: "Retired Planning",
      description: "A comprehensive tool designed to assist with retirement planning, financial calculations, and lifestyle management.",
      technologies: ["Web Tech", "Calculators", "Planning"],
      imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=800",
      repoUrl: "https://github.com/Nirmalya-alt/Retired"
    }
  ],

  skills: [
    { name: "HTML5", level: 95, category: "frontend" },
    { name: "CSS3", level: 90, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "Python", level: 85, category: "backend" },
    { name: "Java", level: 75, category: "backend" },
    { name: "SQL", level: 75, category: "backend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "UI/UX Design", level: 85, category: "design" },
    { name: "Figma", level: 80, category: "design" },
    { name: "Communication", level: 95, category: "soft-skills" },
    { name: "Problem Solving", level: 90, category: "soft-skills" },
  ]
};

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
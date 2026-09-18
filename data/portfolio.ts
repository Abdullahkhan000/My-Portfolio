export type Project = {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string | null;
  imagePlaceholder: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
};

export const portfolioLinks = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "ai8526304@gmail.com",
  github: "https://github.com/Abdullahkhan000",
  linkedin: "https://linkedin.com/in/hafiz-muhammad-abdullah-ibrahim-38b586243",
  instagram: "https://instagram.com/code2encoder",
  x: "X_URL_HERE",
  cv: "CV_URL_HERE",
  vitoencodesYoutube: "https://www.youtube.com/@VITOENCODES",
  vitoencodesFacebook: "https://www.facebook.com/VITOENCODES",
  cybercarnage: "https://cybercarnage.online",
  cybercarnageGithub: "CYBERCARNAGE_GITHUB_URL_HERE",
  project02: "PROJECT_02_URL_HERE",
  project02Github: "https://github.com/Abdullahkhan000/Linkify-Media-Complete",
  project03: "PROJECT_03_URL_HERE",
  project03Github: "PROJECT_03_GITHUB_URL_HERE",
} as const;

export const portfolioImages = {
  profile: "/abdullah.png",
  vitoencodes: "/vitoencodes-poster.jpg",
} as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "VITOENCODES", href: "#vitoencodes" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects: Project[] = [
  {
    title: "CyberCarnage",
    description:
      "A gaming intelligence and AI database platform combining discovery, AI assistance, quizzes, reviews, comparisons, upcoming games, tier lists, and developer/API functionality.",
    category: "Gaming intelligence • AI • API • SaaS",
    technologies: [
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JavaScript",
      "Tailwind CSS",
      "AI Integration",
      "APIs",
    ],
    image: "/cybercarnage.png",
    imagePlaceholder: "CYBERCARNAGE IMAGE — INSERT HERE",
    liveUrl: portfolioLinks.cybercarnage,
    githubUrl: portfolioLinks.cybercarnageGithub,
    featured: true,
    year: "2026",
  },
  {
    title: "Linkify Media",
    description: "A high-performance, developer-first RESTful API platform and SaaS dashboard for media search, metadata aggregation, API key management, rate limiting, and monetization.",
    category: "Media • AI • API • SaaS",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Lemon Squeezy"],
    image: null,
    imagePlaceholder: "PROJECT 02 IMAGE — INSERT HERE",
    liveUrl: portfolioLinks.project02,
    githubUrl: portfolioLinks.project02Github,
    featured: false,
    year: "[YEAR]",
  },
  {
    title: "[PROJECT 03 TITLE]",
    description: "[PROJECT 03 DESCRIPTION]",
    category: "[PROJECT 03 CATEGORY]",
    technologies: ["[ADD TECHNOLOGIES]"],
    image: null,
    imagePlaceholder: "PROJECT 03 IMAGE — INSERT HERE",
    liveUrl: portfolioLinks.project03,
    githubUrl: portfolioLinks.project03Github,
    featured: false,
    year: "[YEAR]",
  },
];

export const services = [
  { title: "Backend Development", detail: "Production-minded server foundations for web applications, business logic, databases, and digital products.", code: "01" },

  { title: "Django / DRF", detail: "Structured Django applications, admin systems, authentication, serializers, and maintainable REST interfaces.", code: "02" },

  { title: "API Development", detail: "Clear API contracts built for reliable integration, authentication, security, rate limiting, and long-term use.", code: "03" },

  { title: "AI Integration", detail: "Practical AI capabilities integrated into products, APIs, assistants, automation systems, and real workflows.", code: "04" },

  { title: "Automation", detail: "Repeatable systems using background tasks, scheduled workflows, APIs, and integrations to reduce manual work.", code: "05" },

  { title: "Media Processing", detail: "Professional video workflows for encoding, transcoding, compression, format conversion, quality optimization, and cinematic media delivery.", code: "06" },
] as const;

export const technologies = [
  { name: "Python", detail: "Backend systems, automation, and data workflows" },
  { name: "Django", detail: "Web applications and dependable server architecture" },
  { name: "Django REST Framework", detail: "Structured, scalable API delivery" },
  { name: "PostgreSQL", detail: "Relational data modeling and persistence" },
  { name: "AI API Integration", detail: "Practical intelligence inside product flows" },
  { name: "Media Encoding & Post-Production", detail: "Video encoding, transcoding, restoration, regrading, and cinematic media workflows" },
  { name: "JavaScript", detail: "Responsive product interfaces" },
  { name: "Tailwind CSS", detail: "Consistent, maintainable interface systems" },
] as const;

export const isPlaceholderLink = (value: string) => /(_HERE|EMAIL_HERE)/.test(value);

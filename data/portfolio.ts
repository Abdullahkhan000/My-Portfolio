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
  processDiscover: null,
  processArchitect: null,
  processBuild: null,
  processRefine: null,
} as const;

export const navigation = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Process", href: "#approach" },
  { label: "Projects", href: "#work" },
  { label: "VITOENCODES", href: "#vitoencodes" },
  { label: "Résumé", href: "#resume" },
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
  { name: "PyCharm", detail: "Python development and project navigation" },
  { name: "Visual Studio Code", detail: "Flexible daily code editor" },
  { name: "Git", detail: "Version control and collaboration" },
  { name: "GitHub", detail: "Repositories, issues, and delivery" },
  { name: "Redis", detail: "Caching, queues, and fast data access" },
  { name: "Celery", detail: "Background jobs and scheduled workflows" },
  { name: "Docker", detail: "Reproducible development and delivery" },
  { name: "AI API Integration", detail: "Practical intelligence inside product flows" },
  { name: "Media Encoding & Post-Production", detail: "Video encoding, transcoding, restoration, regrading, and cinematic media workflows" },
  { name: "JavaScript", detail: "Responsive product interfaces" },
  { name: "Tailwind CSS", detail: "Consistent, maintainable interface systems" },
] as const;

export const approach = [
  {
    number: "01",
    title: "Understand",
    text: "Turn the initial idea into clear requirements, priorities, and a practical technical direction.",
  },
  {
    number: "02",
    title: "Architect",
    text: "Design the underlying structure, data models, API contracts, and system boundaries before building.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the product with maintainable code, reliable integrations, and production-minded foundations.",
  },
  {
    number: "04",
    title: "Refine",
    text: "Test, optimize, polish, and improve the system until the final experience feels dependable.",
  },
] as const;

export const capabilities = [
  {
    title: "Backend Systems",
    text: "Reliable server-side foundations for applications and digital products.",
    tone: "backend",
    code: "PY",
  },
  {
    title: "REST APIs",
    text: "Structured APIs designed for integrations, authentication, and long-term use.",
    tone: "api",
    code: "API",
  },
  {
    title: "AI Integration",
    text: "Practical AI capabilities connected to real product workflows.",
    tone: "ai",
    code: "AI",
  },
  {
    title: "Automation",
    text: "Background jobs, workflows, and integrations that reduce repetitive work.",
    tone: "automation",
    code: "AUTO",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the problem, requirements, users, and desired outcome.",
    placeholder: "Discovery / Project scope",
    focus: "Requirements • User needs • Project scope",
    output: "Clear project direction and priorities",
  },
  {
    number: "02",
    title: "Architect",
    text: "Shape the technical architecture, data models, APIs, and implementation plan.",
    placeholder: "Architecture / Data + APIs",
    focus: "System design • Database structure • API contracts",
    output: "Practical architecture and development roadmap",
  },
  {
    number: "03",
    title: "Build",
    text: "Turn the architecture into a functional product with clean and maintainable code.",
    placeholder: "Build / Code + integrations",
    focus: "Backend logic • Integrations • Core features",
    output: "Working product foundation",
  },
  {
    number: "04",
    title: "Refine",
    text: "Test, optimize, polish, and prepare the product for dependable release.",
    placeholder: "Refine / Test + release",
    focus: "Testing • Performance • Security • Deployment",
    output: "Stable and production-ready system",
  },
] as const;

export const systemRisks = [
  ["Complexity", "Clear structure"],
  ["Fragility", "Reliable foundations"],
  ["Repetition", "Useful automation"],
  ["Unclear interfaces", "Explicit API contracts"],
] as const;

export const isPlaceholderLink = (value: string) => /(_HERE|EMAIL_HERE)/.test(value);

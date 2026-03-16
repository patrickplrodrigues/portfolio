export const data = {
  name: "Patrick Rodrigues",
  role: "Fullstack Developer",
  location: "Portugal",
  email: "patrick_rodrigues@outlook.pt",
  linkedin: "https://www.linkedin.com/in/patrickplrodrigues/",
  website: "https://patrickrodrigues.vercel.app",
  tagline: "Open to remote & on-site",
  description:
    "Building production-grade systems in fintech and enterprise software. 3+ years shaping payment infrastructure and banking platforms in Portugal.",
  about: [
    "Fullstack Developer with 3+ years of experience building production-grade systems in fintech and enterprise software — from payment gateways to banking platforms.",
    "My background isn't typical: I started in Management, moved through Digital Marketing, then went all-in on software through the SWitCH programme (ISEP + Porto Tech Hub) — one of Portugal's most rigorous tech conversion programmes.",
    "That path gives me something most developers don't have: a product and business mindset built from real-world experience across different industries.",
  ],
  stats: [
    { value: "3+", label: "Years in production" },
    { value: "2", label: "Fintech companies" },
    { value: "4+", label: "Ecommerce platforms" },
    { value: "PT", label: "Based in Portugal" },
  ],
  stack: [
    { name: "Java", highlight: true },
    { name: "Spring Boot", highlight: true },
    { name: "React", highlight: true },
    { name: "Next.js", highlight: true },
    { name: "Tailwind CSS", highlight: true },
    { name: "PHP", highlight: false },
    { name: "MongoDB", highlight: false },
    { name: "SQL", highlight: false },
    { name: "Azure DevOps", highlight: false },
  ],
  experience: [
    {
      company: "ITSector",
      role: "Software Developer",
      period: "Jul 2025 — Present",
      location: "Braga",
      active: true,
      bullets: [
        "Working on enterprise digital transformation projects for the financial sector",
        "Integrated into a Java Spring Boot + React project with CI/CD managed via Azure DevOps",
        "Currently onboarding a new project in Next.js + Tailwind CSS",
      ],
      tags: ["Java", "Spring Boot", "React", "Next.js", "Tailwind CSS", "Azure DevOps"],
    },
    {
      company: "Eupago",
      role: "Fullstack Developer",
      period: "Sep 2022 — Jul 2025",
      location: "Porto",
      active: false,
      bullets: [
        "Built an internal affiliate platform from scratch — Java Spring Boot backend + React + Tailwind CSS frontend — integrated with the company's payment gateway",
        "Developed and maintained payment method plugins for PrestaShop, WooCommerce, Shopify and Joomla",
        "Maintained core payment services and transaction infrastructure at a Banco de Portugal-regulated institution",
      ],
      tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "PHP", "MongoDB", "SQL", "AWS"],
    },
    {
      company: "ADN Agency",
      role: "Digital Marketing",
      period: "Feb 2021 — Oct 2021",
      location: "Braga",
      active: false,
      bullets: [
        "Managed digital campaigns and content strategy before transitioning into software development",
      ],
      tags: ["Digital Marketing", "Content Strategy"],
    },
  ],
  skills: [
    {
      category: "Backend",
      items: [
        { name: "Java", main: true },
        { name: "Spring Boot", main: true },
        { name: "PHP", main: false },
        { name: "REST APIs", main: false },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", main: true },
        { name: "Next.js", main: true },
        { name: "Tailwind CSS", main: true },
        { name: "TypeScript", main: false },
      ],
    },
    {
      category: "Data & Infrastructure",
      items: [
        { name: "MongoDB", main: false },
        { name: "SQL", main: false },
        { name: "AWS", main: false },
        { name: "Azure DevOps", main: false },
      ],
    },
    {
      category: "Platforms & Methods",
      items: [
        { name: "PrestaShop", main: false },
        { name: "WooCommerce", main: false },
        { name: "Shopify", main: false },
        { name: "Scrum", main: false },
        { name: "Git", main: false },
      ],
    },
  ],
  education: [
    {
      school: "ISEP — Instituto Superior de Engenharia do Porto",
      degree: "Postgraduate in Software Development · SWitCH Programme (ISEP + Porto Tech Hub)",
      period: "2021 — 2022",
    },
    {
      school: "Universidade do Minho",
      degree: "Postgraduate in Digital Marketing & E-Business",
      period: "2019 — 2020",
    },
    {
      school: "Instituto Politécnico de Viana do Castelo",
      degree: "Bachelor's in Management",
      period: "2015 — 2018",
    },
  ],
};

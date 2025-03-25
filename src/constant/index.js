import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  aimtechInnovate,
  threejs,
  live_logo,
} from "../assets";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About Me" },
  { id: "work", title: "My Work" },
  { id: "contact", title: "Contact Me" },
];

const services = [
  {
    title: "Full-Stack JavaScript Developer",
    icon: web,
    description:
      "Building scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and modern JavaScript technologies.",
  },
  {
    title: "Front-End Developer",
    icon: mobile,
    description:
      "Crafting responsive, interactive user interfaces with React.js, Three.js, and Tailwind CSS for seamless user experiences.",
  },
  {
    title: "Back-End Developer",
    icon: backend,
    description:
      "Designing robust server-side solutions with Node.js, Express.js, and PostgreSQL using Prisma ORM for efficient data management.",
  },
  {
    title: "C++ Basics",
    icon: creator,
    description:
      "Applying foundational C++ knowledge to solve algorithmic problems and enhance full-stack development skills.",
  },
];

const technologies = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript (ES6+)", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks (Freelance Project)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained dynamic web applications using React.js, enhancing customer-facing interfaces.",
      "Collaborated with designers and product teams to deliver responsive, user-friendly solutions.",
      "Ensured cross-browser compatibility and optimized front-end performance.",
      "Contributed to code reviews, improving team efficiency and code quality.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla (Freelance Project)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Built mobile-friendly web applications with React Native and integrated APIs for real-time data.",
      "Worked with cross-functional teams to create intuitive, high-performance interfaces.",
      "Implemented responsive designs compatible across devices and browsers.",
      "Provided feedback in code reviews to maintain high coding standards.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify (Freelance Project)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Created e-commerce web solutions using React.js and integrated third-party APIs.",
      "Collaborated with designers and managers to deliver scalable, visually appealing platforms.",
      "Optimized websites for responsiveness and cross-browser functionality.",
      "Participated in peer code reviews to ensure robust and maintainable codebases.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Meta (Freelance Project)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed full-stack applications using MERN stack and Three.js for interactive 3D features.",
      "Partnered with cross-functional teams to build innovative, high-quality web solutions.",
      "Ensured responsive design and seamless performance across all platforms.",
      "Led code reviews to foster collaboration and elevate development standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Himanshu transformed our vision into a stunning website with his MERN stack expertise.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His dedication as a web developer shines through in every project—truly client-focused.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Himanshu’s optimization skills boosted our site traffic by 50% with his full-stack solutions.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AttainX",
    description:
      "A Next.js-powered website for AttainX, showcasing AI/ML, cloud services, and cybersecurity solutions for U.S. federal agencies. Features modern animations with GSAP, a Strapi CMS backend, and Cloudinary for optimized media. Highlights my skills in full-stack development and responsive design.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "GSAP", color: "pink-text-gradient" },
      { name: "Strapi", color: "orange-text-gradient" },
      { name: "Cloudinary", color: "teal-cyan-text-gradient" },
    ],
    live: live_logo,
    live_link: "https://atxdev.codemarks.in/",
    image: "Portfolio/hkwmy5dhaapsplo62si2",
    source_code_link: "https://github.com/codemarks/attainx-website-frontend",
  },
  {
    name: "Discord Chat Application",
    description:
      "A full-stack chat platform built with Next.js, MySQL, and WebRTC, featuring text, audio, and video channels. Users can create servers, manage members, and communicate in real-time using Socket.IO. Demonstrates my expertise in MERN stack and real-time web technologies.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "WebRTC", color: "orange-text-gradient" },
      { name: "Socket.IO", color: "teal-cyan-text-gradient" },
    ],
    live: live_logo,
    live_link: "https://discord-chat-application.vercel.app",
    image: "Portfolio/pvpgj77oxub4klk8mxci",
    source_code_link: "https://github.com/Theknight-1/Chat-App",
  },
  {
    name: "Aimtech Innovate | Social Media Marketing",
    description:
      "A Next.js web application for Aimtech Innovate, leveraging Tailwind CSS, Shadcn/UI, and EmailJS for real-time email functionality. Optimized for performance and SEO, this project showcases my front-end development and UI design skills.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "EmailJS", color: "orange-text-gradient" },
      { name: "Shadcn/UI", color: "teal-cyan-text-gradient" },
    ],
    live: live_logo,
    live_link: "https://www.aimtechinnovate.com",
    image: "Portfolio/grhvyc2xngoqul5oe27v",
    source_code_link: "https://github.com/Theknight-1/Aimtech-Innovate",
  },
  {
    name: "NetNest - Social Media Application",
    description:
      "A MERN stack social media app with React.js for the front-end, Node.js/Express.js for the backend, and MongoDB for data storage. Features include user authentication, post creation, likes, and comments. Highlights my full-stack development and database management skills.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "yellow-green-text-gradient" },
    ],
    live: live_logo,
    live_link: "https://net-nest-socialmedia.vercel.app/",
    image: "Portfolio/uzijxhassqx35kuk4arq",
    source_code_link: "https://github.com/Theknight-1/NetNest",
  },
  {
    name: "Bubble Game",
    description:
      "An interactive Bubble Game built with HTML5, CSS3, and JavaScript, where players click numbers in bubbles to score points within a minute. Showcases my skills in DOM manipulation, event handling, and responsive web design.",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    live: live_logo,
    live_link: "https://bubble-game-roan-rho.vercel.app/",
    image: "Portfolio/ruexiszda1btqyxy1fel",
    source_code_link: "https://github.com/Theknight-1/Bubble_Game",
  },
];

export { services, technologies, experiences, testimonials, projects };

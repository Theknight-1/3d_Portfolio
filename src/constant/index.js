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
  threejs,
  live_logo,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack JS Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ basics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Himanshu proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Himanshu does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Himanshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
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
      "The AttainX website showcases its capabilities in delivering innovative solutions, including AI/ML, cloud services, and cybersecurity, primarily for U.S. federal agencies. It highlights client trust, a focus on modernization, and tailored services. The site includes sections for team, services, news, career opportunities, and a contact form, promoting its commitment to collaboration and excellence.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Gsap",
        color: "pink-text-gradient",
      },
      {
        name: "Strapi",
        color: "orange-text-gradient",
      },
      {
        name: "cloudinary",
        color: "teal-cyan-text-gradient",
      },
    ],

    live: live_logo,
    live_link: "https://atxdev.codemarks.in/",
    image: "Portfolio/hkwmy5dhaapsplo62si2",
    source_code_link: "https://github.com/codemarks/attainx-website-frontend",
  },
  {
    name: "Discord Chat Application",
    description:
      "Web-based platform that allows users to create servers. Inside server user can create 3 different type of channel such as TEXT AUDIO VIDEO. Admin/Moderator can manage members/channels. User can talk on chat, voice and video.",
    tags: [
      {
        name: "NEXT",
        color: "blue-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "webRTC",
        color: "orange-text-gradient",
      },
      {
        name: "socket.io",
        color: "teal-cyan-text-gradient",
      },
    ],
    live: live_logo,
    live_link: "https://chat-app-production-c2ad.up.railway.app",
    image: "Portfolio/pvpgj77oxub4klk8mxci",
    source_code_link: "https://github.com/Theknight-1/Chat-App",
  },
  {
    name: "Aimtech Innovate | Social Media Marketing",
    description:
      "Web application which is created using JavaScript framework like Next js. For styling used tailwind css and shadcn/ui. Utilize functionality like email js for sending real time email.",
    tags: [
      {
        name: "NEXT",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailjs",
        color: "orange-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "teal-cyan-text-gradient",
      },
    ],
    live: live_logo,
    live_link: "https://www.aimtechinnovate.com",
    image: "Portfolio/grhvyc2xngoqul5oe27v",
    source_code_link: "https://github.com/Theknight-1/Aimtech-Innovate",
  },
  {
    name: "NetNest - Social Media application",
    description:
      "A Social media application where user can interact with each other by liking and commenting the posts. Implemetd login, signup, upload post, like post functionalities. Used React for front end, Nodejs for the backend and mongodb for the database.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "yellow-green-text-gradient",
      },
    ],
    live: live_logo,
    live_link: "https://net-nest-socialmedia.vercel.app/",
    image: "Portfolio/uzijxhassqx35kuk4arq",
    source_code_link: "https://github.com/Theknight-1/NetNest",
  },
  {
    name: "Bubble Game",
    description:
      "Created an interactive bubble game using HTML, CSS, and JavaScript, where players click on changing numbers within bubbles.Goal is to identify and click the maximum number within 1 minute, earning 10 points per correct click. Enhanced my skills in DOM manipulation, event handling, and responsive design, demonstrating my ability to build engaging, user-friendly & responsive web applications.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],

    live: live_logo,
    live_link: "https://bubble-game-roan-rho.vercel.app/",
    image: "Portfolio/ruexiszda1btqyxy1fel",
    source_code_link: "https://github.com/Theknight-1/Bubble_Game",
  },
];

export { services, technologies, experiences, testimonials, projects };

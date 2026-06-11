import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  
  jobit,
  tripguide,
  threejs,
  dstore,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Full stack Web Developer",
    icon: web,
  },
  {
    title: "frontend React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend node.js Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: "html.png",
  },
  {
    name: "CSS 3",
    icon: "css.png",
  },
  {
    name: "JavaScript",
    icon: "javascript.png",
  },
  {
    name: "TypeScript",
    icon: "typescript.png",
  },
  {
    name: "React JS",
    icon: "reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind.png",
  },
  {
    name: "Node JS",
    icon: "nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "mongodb.png",
  },
  
  {
    name: "git",
    icon: "git.png",
  },
  {
    name: "figma",
    icon: "figma.png",
  },
  {
    name: "docker",
    icon: "docker.png",
  },
];

const experiences: TExperience[] = [
  {
    title: "Jnr Mernstack Developer",
    companyName: "DRUV 360",
    icon: creator,
    iconBg: "#383E56",
    date: "October 2025 - April 2026",
    points: [
      " Developed and maintained scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    "Designed responsive and mobile-friendly user interfaces using React.js, Tailwind CSS, and reusable UI components.",
   "Built and integrated RESTful APIs for frontend and backend communication.",
    "Optimized API calls and improved application performance, reducing loading time and enhancing user experience.",
    "Collaborated with cross-functional teams to develop frontend and backend features in an agile development environment.",
   " Worked on authentication systems, database operations, API integration, and application debugging.",
   "Used Git and GitHub for version control, code management, and team collaboration"
    ],
  },
  {
    title: "FullStack web Developer",
    companyName: "Techmaghi",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "April 2024 - January 2025",
    points: [
      " Gained hands-on experience in frontend and backend development methodologies during internship training.",
      " Developed and maintained full-stack web applications using React.js, SQL, .NET, and Tailwind CSS.",
      " Built dynamic, responsive, and user-friendly web interfaces using modern frontend technologies.",
      " Implemented backend functionalities, database integration, and API connectivity for web applications.",
      " Collaborated on developing scalable application features and improving overall user experience.",
      " Used Git and GitHub for version control and project collaboration"
    ],
  },
  {
    title: "freelance Web Developer",
    companyName: "",
    icon: creator,
    iconBg: "#383E56",
    date: "May 2022 - curr",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "D-Store",
    description:
      "Web-based e-commerce platform that allows users to search, order and pay from the shop by online, providing a convenient and efficient solution for buying favourite products through your mobile.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: dstore,
    sourceCodeLink: "https://github.com/DHANOOP-P/e--commerce-d-store",
  },
  {
    name: "Gameplan",
    description:
      "Web application that enables users to turf booking ,coach consultation,tournament scheduling , can host view nearby tournaments ,can book a coaches consultation and training ,can book nearby tufs  .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/DHANOOP-P/gameplan",
  },
  {
    name: "Pragati",
    description:
      "official web page handling proshow bookings,event registration,workshop slot booking related to pragati-the biggest fest hosted by Government Engineering College Wayanad ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/DHANOOP-P/Pragati",
  },
];

export { services, technologies, experiences, testimonials, projects };

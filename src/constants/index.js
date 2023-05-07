import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  threejs,
  microsoft,
  freelance,
  gericht,
  gpt3,
  hoo,
} from "../assets";

export const navLinks = [
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fully responsive UI/UX",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Self Employed/Freelancer",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working alongside Mohamed during our time at Microsoft, I witnessed their exceptional technical abilities, strong work ethic, and collaborative spirit in delivering successful software projects.",
    name: "Sayed Omari",
    designation: "Co-Worker",
    company: "Microsoft 21st Century Skills Lab AppFactory",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Mohamed has consistently demonstrated a passion for software engineering, a strong aptitude for problem-solving, and a commitment to producing high-quality work that has made them a pleasure to mentor.",
    name: "Sebastian",
    designation: "Mentor",
    company: "Microsoft 21st Century Skills Lab AppFactory",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "I had the pleasure of working closely with Mohamed on numerous projects, and I can attest to their excellent teamwork skills, creative problem-solving abilities, and dedication to achieving outstanding results.",
    name: "Lisa Mwikali",
    designation: "Co-Worker",
    company: "Microsoft 21st Century Skills Lab AppFactory",
    image: "https://media.licdn.com/dms/image/D4E03AQFFdDmnaxCupA/profile-displayphoto-shrink_200_200/0/1680004075227?e=1689206400&v=beta&t=YMtBVmb2-XXqft4T1nfqjR3pPXJslfhjNa_vJbXkZjw",
  },
];

const projects = [
  {
    name: "Gericht Restaurant",
    description: "Fully Responsive Modern React GPT3 UI/UX Restaurant App",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/JustGetAClass/Gericht",
  },
  {
    name: "GPT3",
    description: "Fully Responsive Website with modern React UI/UX",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/JustGetAClass/GPT3/",
  },
  {
    name: "HooBank",
    description:
      "Fully Responsive Bank Website with modern React UI/UX with TailwindCSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-icons",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: hoo,
    source_code_link: "https://github.com/JustGetAClass/HooBank",
  },
];

export { services, technologies, experiences, testimonials, projects };

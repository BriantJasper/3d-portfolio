import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  reactjs,
  tailwind,
  git,
  vuejs,
  figma,
  immanuel,
  cvhost,
  laravel,
  hostcctv,
  catatanbelanja,
  blogwebsite,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Computer Technician",
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
    name: "Bootstrap 5",
    icon: bootstrap,
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Computer Network Engineering Vocational High School ",
    company_name: "Immanuel Vocational High School",
    icon: immanuel,
    iconBg: "#383E56",
    date: "June 2021 - May 2024",
    points: [
      "Learning Web Development from HTML, CSS, JavaScript, and PHP to Object Oriented Programming, Relational Database, Front-end framework and Back-end framework such as Laravel and VueJs.",
      "Learning UI/UX using Figma, Design Thinking, UX Research and made school projects of mobile applications using Figma.",
      "Learning Computer Networking from the basics of IP Address, DNS, Firewall using Cisco Packet Tracer to learning how to configure a MikroTik for bandwidth limitation, static and dynamic IP Address allocation and etc.",
    ],
  },
  {
    title: "Computer Technician",
    company_name: "CV Host",
    icon: cvhost,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - May 2022",
    points: [
      "Providing Computer Hardware Services, Network Services, CCTV Services, Printer Services",
      "Installing and configuring CCTV for other businesses and clients home",
      "Learning softskill such as communication with clients in the practical field.",
      "Making a responsive profile website for the Shop.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "laravel",
    icon: laravel,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Developing web applications using Laravel and other related technologies .",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "Shop Profile Website",
    description:
      "Shop profile website with interactive designs, scrolling animations, services provided, about section and company profile.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: hostcctv,
    source_code_link: "https://github.com/BriantJasper/cvhost",
  },
  {
    name: "Catatan Belanjaku",
    description:
      "Interactive shopping list app using react, tracks the completion of the shopping list in percentage, filter based on name, checked/not, or the input order.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: catatanbelanja,
    source_code_link: "https://github.com/BriantJasper/catatan-belanja",
  },
  {
    name: "Blog Website",
    description:
      "A simple blogwebsite, website with CRUD Functions using laravel, mainly focused on the backend and relational database implementation.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: blogwebsite,,
    source_code_link: "https://github.com/BriantJasper/blogwpu",
  },
];

export { services, technologies, experiences, testimonials, projects };

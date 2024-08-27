import {
  backend,
  bootstrap,
  codedrops,
  creator,
  css,
  figma,
  git,
  html,
  jQuery,
  javascript,
  mobile,
  redux,
  tailwind,
  typescript,
  web,
  c,
  googleapi,
  heroku,
  java,
  js,
  mongodb,
  mui,
  mysql,
  nextjs,
  postman,
  reactjs,
  sass,
  sequelize,
  ts,
  vercel,
  vite,
  vscode,
  nodejs,
  vue,
  tailwindcss,
  EazyMock,
  eazyrest,
  ladle,
} from "@/assets/images";
import { RiLinkedinLine } from "react-icons/ri";
import { RiFacebookCircleLine, RiFacebookCircleFill } from "react-icons/ri";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { MdOutlineEmail, MdEmail } from "react-icons/md";
import { TbBrandGithub, TbBrandGithubFilled } from "react-icons/tb";
export const navLinks = [
  {
    id: "home",
    desktop: "",
    title: "Home",
  },
  {
    id: "work",
    desktop: "work",
    title: "Work",
  },
  {
    id: "contact",
    desktop: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Languages",
    icon: web,
  },
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Tools & Services",
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "git",
    icon: git,
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
    name: "figma",
    icon: figma,
  },
];

const EXPERIENCES = [
  {
    title: "Web Developer",
    companyName: "Teqnological Asisa",
    icon: codedrops,
    iconBg: "#383E56",
    date: "October 2023 - Current",
    points: [
      "I am a developer at Front end position. I trained for 2 months",
      "In December 2023, I joined the NowCast HrogWageNow project (Japanese human resources project), this is my first project at Teq Company",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Freelance",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Jan 2023 - October 2023",
    points: [
      "I used to graduated from University of Technology and Education HCM.",
      "I am finding a job and a freelancer.",
      "I know Frontend, Backend and Design UI/UX with Figma",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "Pixelcent Company",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "I became a full-time employee at Pixelcent company with the position of Frontend Developer and joined actual project",
      "Developing responsive web apps with React, Redux Toolkit, and TypeScript.",
      "Creating efficient UIs with Material UI for web apps.",
      "Collaborating with cross-functional teams to deliver quality web apps on time and within budget.",
      "Improving React development practices within the team to boost efficiency and quality.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    companyName: "Pixelcent Company",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Jun 2022 - Sep 2022",
    points: [
      "I found a job Frontend Developer Inter and git hired by Pixelcent company",
      "I learned something: created responsive and user-friendly websites using HTML, CSS, and JavaScript.",
      "I learned something: implemented advanced features such as animations and modal windows using CSS and JavaScript.",
      "I learned something: streamlined workflow with SASS to improve project efficiency and maintainability.",
    ],
  },
  {
    title: "Information of Technology",
    companyName: "University of Technology and Education",
    icon: codedrops,
    iconBg: "#383E56",
    date: "Sep 2019 - Sep 2023",
    points: [
      "I was taught to become a software engineer. I studied a lot in software and become web develop",
    ],
  },
];

const LANGUAGES = [
  {
    title: "C++",
    logo: c,
  },
  {
    title: "JAVA",
    logo: java,
  },
  {
    title: "JAVASCRIPT",
    logo: js,
  },
  {
    title: "TYPESCRIPT",
    logo: ts,
  },
];

const FRONT_END = [
  {
    title: "REACT",
    logo: reactjs,
  },
  {
    title: "NEXT.JS",
    logo: nextjs,
  },
  {
    title: "VUE",
    logo: vue,
  },
  {
    title: "HTML5",
    logo: html,
  },
  {
    title: "SASS",
    logo: sass,
  },
  {
    title: "TAILWIND",
    logo: tailwindcss,
  },
  {
    title: "FIGMA",
    logo: figma,
  },
  {
    title: "BOOTSTRAP",
    logo: bootstrap,
  },
  {
    title: "VITE",
    logo: vite,
  },
  {
    title: "MUI",
    logo: mui,
  },
  {
    title: "LADLE",
    logo: ladle,
  },
];

const BACK_END = [
  {
    title: "NODEJS",
    logo: nodejs,
  },
  {
    title: "MYSQL",
    logo: mysql,
  },
  {
    title: "MONGODB",
    logo: mongodb,
  },
  {
    title: "GOOGLE API",
    logo: googleapi,
  },
  {
    title: "SEQUELIZE",
    logo: sequelize,
  },
];

const TOOL_SERVICE = [
  {
    title: "GIT",
    logo: git,
  },
  {
    title: "POSTMAN",
    logo: postman,
  },
  {
    title: "VS CODE",
    logo: vscode,
  },
  {
    title: "VERCEL",
    logo: vercel,
  },
  {
    title: "HEROKU",
    logo: heroku,
  },
  {
    title: "Eazy Mock",
    logo: EazyMock,
  },
  {
    title: "Eazy Rest",
    logo: eazyrest,
  },
];
const PROJECTS = [
  {
    name: "Travelix",
    icon: "🚌",
    description:
      "This is a website that helps users to book tours and reservations. The system has multi-language integration, online payment, and essential functions for the management department.",
    responsibility:
      "Undertake work related to the setup and deployment of the project Design project in figma, take on the front-end of the project and support the back-end",
    tags: [mui, sass, nextjs, typescript, nodejs],
    openSource: true,
    source_code_link: "https://github.com/khoiyahoo/travelix",
  },
  // {
  //   name: "Accommodation",
  //   description:
  //     "Website helps users to find accommodation and reservations. Helps users post and manage accommodations.",
  //   responsibility:
  //     "Undertake work related to the setup and deployment of the project Design project in figma, take on the front-end of the project and  the back-end",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript reactjs",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "nodejs expressjs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: accomadation,
  //   openSource: true,
  //   source_code_link: "https://github.com/khoiyahoo/accomadation-project",
  // },
  // {
  //   name: "Furniture app",
  //   description:
  //     "This is a app that helps users to book, register, login, search, furniture. Take control and find your ideal match quickly and easily.",
  //   responsibility:
  //     "Undertake work related to the setup and deployment of the project Design project in figma, take on the front-end of the project and  the back-end",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "react native",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: furniture,
  //   openSource: true,
  //   source_code_link: "https://github.com/khoiyahoo/furniture-app",
  // },
  {
    name: "Rapid survey",
    icon: "💻",
    description:
      "A website that allows users to set up market surveys related to packaging reviews, advertising video reviews, brand tracking. ",
    responsibility:
      "Maintain existing features. Develop a new survey solution - ad video choice. Update UI/UX pack choice solution.",
    tags: [mui, sass, typescript, reactjs],
    openSource: false,
    source_code_link: "https://rapidsurvey.cimigo.com/",
  },
  {
    name: "ITE Education",
    icon: "💻",
    description:
      "ITE is a principal provider of career and technical education and key developer of national occupational skills certification and standards to enhance workforce competitiveness",
    responsibility:
      "Maintain existing features in admin dashboard. Develop UI/UX and update ITEES Prodcut, Strategic plan module at Dashboard of Admin.",
    tags: [html, bootstrap, vue],
    openSource: false,
    source_code_link: "https://www.ite.edu.sg/",
  },
  {
    name: "NowCast HrogWageNow",
    icon: "💻",
    description:
      "Hrog is a Japanese company providing HR services. They have a service that helps customers look up data about employee salaries in different industries, helping to see what job boards are offering to people who are changing jobs within the salary range.",
    responsibility:
      "Build landing page, Recommend System Page, Privacy Policy Page, Inquiry Page, Release Schedule Page, Handle Logic for Pagination for page",
    tags: [nextjs, typescript, tailwind, ladle],
    openSource: false,
    source_code_link: "https://hrogwagenow.com/",
  },
];

const SOCIALS = [
  {
    iconLight: RiLinkedinLine,
    iconDark: BiLogoLinkedinSquare,
    link: "https://www.linkedin.com/in/kh%C3%B4i-%C4%91inh/",
  },
  {
    iconLight: TbBrandGithub,
    iconDark: TbBrandGithubFilled,
    link: "https://github.com/khoiyahoo",
  },
  {
    iconLight: RiFacebookCircleLine,
    iconDark: RiFacebookCircleFill,
    link: "https://www.facebook.com/khoidynh/",
  },
  {
    iconLight: MdOutlineEmail,
    iconDark: MdEmail,
    link: "mailto:khoiyahoo@gmail.com",
  },
];

export {
  services,
  technologies,
  EXPERIENCES,
  PROJECTS,
  SOCIALS,
  LANGUAGES,
  FRONT_END,
  BACK_END,
  TOOL_SERVICE,
};

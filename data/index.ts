export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];


export const projects = [
  {
    id: 1,
    title: "Carbon Credits Market Dashboard",
    des: "A Carbon Credit Market Dashboard brings together buyers, sellers of carbon credits and facilitates the trading of carbon credits.",
    img: "/cc.png",
    iconLists: ["/languages/react.svg", "/languages/tailwindcss.svg", "/languages/typescript.svg", "/languages/antd.svg", "/languages/redux.svg"],
    link: "https://github.com/Cynthia-Isutsa/Carbon-credits",
  },
  {
    id: 2,
    title: "CraftAI- A social media content generator",
    des: "A social media content generator that can create content for social media platforms like Instagram, Facebook, and LinkedIn. It uses Gemini AI to generate content based on the user's input.",
    img: "/p2.svg",
    iconLists: ["/languages/nextjs.png", "/languages/tailwindcss.svg", "/languages/typescript.svg"],
    
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "STIHelpDesK",
    des: "An app that connects experts and researchers to help them with their research and projects.",
    img: "/sti.png",
    iconLists: ["/languages/nextjs.png", "/languages/tailwindcss.svg", "/languages/typescript.svg", "/languages/firebase.svg"],
    link: "http://54.147.144.156/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/languages/nextjs.png", "/languages/tailwindcss.svg", "/languages/typescript.svg", "/languages/firebase.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  
];

 export const skills = [
  {
    id: 1,
    title: "Programming Languages",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    description: "/gsap.svg",
    image: "/b4.jpg",
    items: [
      {
        title: "JavaScript",
        level:"Expert",
        icon: "/languages/javascript.svg",
      },
      {
        title: "TypeScript",
        level: "Expert",
        icon: "/languages/typescript.svg",
      },
      {
        title: "Python",
        level: "Beginner",
        icon: "/languages/python.svg",
      },
      {
        title: "Dart",
        level: "Beginner",
        icon: "/languages/dart.svg",
      },
    ],
  },
  {
    id: 2,
    description: "",
    title: "Frontend Development",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    items: [
      {
        title: "React.js",
        level: "Expert",
        icon: "/languages/react.svg",
      },
      {
        title: "Next.js",
        level: "Expert",
        icon: "/languages/nextjs.png",
      },
      
      {
        title: "Ant Design",
        level: "Expert",
        icon: "/languages/antd.svg",
      },
      {
        title: "Redux Toolkit",
        level: "Expert",
        icon: "/languages/redux.svg",
      },
     
      {
        title: "Framer Motion",
        level:"Expert",
        icon: "/languages/framer.svg",
      },
      {
        title: "TailwindCSS",
        level: "Expert",
        icon: "/languages/tailwindcss.svg",
      },
     
      {
        title: "Shadcn",
        level:"Beginner",
        icon: "/languages/shadcn.svg",
      },
    ],
  },
  {
    id:3,
    title: "Backend Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    items: [
      {
        title: "Node.js",
        level:"Intermidiate",
        icon: "/languages/nodejs.svg",
      },
      {
        title: "Express.js",
        level: "Intermidiate",
        icon: "/languages/express.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    items: [
      {
        title: "flutter",
        level:"Intermidiate",
        icon: "/languages/flutter.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Database Management/Devops",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    items: [
      // {
      //   title: "MongoDB",
      //   level: "Beginner",
      //   icon: "/languages/mongodb.svg",
      // },
      {
        title: "PostgreSQL",
        level:"Intermidiate",
        icon: "/languages/postgresql.svg",
      },
      {
        title: "Firebase",
        level:"Intermidiate",
        icon: "/languages/firebase.svg",
      },
      {
        title: "MySQL",
        level: "Beginner",
        icon: "/languages/mysql.svg",
      },
      {
        title: "Docker",
        level: "Beginner",
        icon: "/languages/docker.png",
      },
      
      {
        title: "Git",
        level:"Expert",
        icon: "/languages/git.svg",
      },
      {
        title: "GitHub",
        level: "Expert",
        icon: "/languages/github.svg",
      },
    ],
  },
  // {
  //   id: 6,
  //   title: "DevOps/VCS",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   items: [
      
  //   ],
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    employer: `Pathways Technologies - Nov 2023 - Present`,
    //period: 2023 Nov - Present,
    desc: "Part of a team that developed  the front-end of a web-based insurance broker (Minet) platform using React.js and ant-design",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Freelance NextJs/Firebase Project",
    employer: " Aug 2024 - Present",
    desc: "Leading the development of a web app for a client, from initial concept to deployment on vercel. The app was built using Next.js and Firebase, and Clerk for authentication.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    employer: "Afya Health - Aug 2024 - Oct 2024",
    desc: "Part of a team that developed of a web-based hospital platform using React.js and ant-design",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
 
  {
    id: 4,
    title: "Freelance Technical Writer/Front End Developer,",
    employer: " Upwork - July  2022- Sept  2023",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/languages/github.svg",
    link:"https://github.com/Cynthia-Isutsa"
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://wa.me/+254727035487"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/cynthia-isutsa/"
  },
];
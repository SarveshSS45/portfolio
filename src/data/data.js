// Skils.jsx
import HTMLIcon from "../assets/HTML.png";
import CSSIcon from "../assets/CSS.png";
import JavaScriptIcon from "../assets/JavaScript.png";
import CSharp from "../assets/Csharp.png";
import ReactIcon from "../assets/React.png";
import TailwindIcon from "../assets/Tailwind.png";
import NodeJSIcon from "../assets/NodeJS.png";
import ExpressIcon from "../assets/Express.png";
import MySQLIcon from "../assets/MySQL.png";
import MongoDBIcon from "../assets/MongoDB.png";
import GitIcon from "../assets/Git.png";
import GitHubIcon from "../assets/Github.png";
import VSCodeIcon from "../assets/VSCode.png";
import PostmanIcon from "../assets/Postman.png";
import MongoDBCompassIcon from "../assets/MongoDBCompass.png";
import ASPNetCoreIcon from "../assets/DotNetFramework.png";
import EntityFrameworkIcon from "../assets/EntityFrameworkCore.png";
import VSIcon from "../assets/VisualStudio2026.png";

// Home.jsx
import GithubIcon from "../assets/Github.png";
import LinkedInIcon from "../assets/linkedIn.png";
import ProfileImage from "../assets/profilepic.png";

// Education.jsx
import MumbaiImage from "../assets/MUMBAI.jpg";
import BSCImage from "../assets/GNKHALSA.png";

export const homeData = {
  name: "Sarvesh Sonawane",
  roles: ["Software Developer", "Frontend Developer", "Gamer"],
  bio: `Motivated fresher with a strong passion for web and mobile development. 
Skilled in building dynamic and efficient applications using modern frameworks. 
Eager to embrace new challenges, enhance problem-solving abilities, and collaborate 
with innovative teams. Adaptable, driven, and committed to continuous learning 
and growth as a Full Stack Developer, aiming to become a Software Development Engineer.`,

  resumeUrl:
    "https://drive.google.com/file/d/1oCFV6ZnCzT8a_1199kad9OSQ6isE1H4i/view?usp=sharing",

  socialLinks: [
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/SarveshSS45",
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/sarvesh-sonawane-hesvras/",
    },
  ],

  profileImage: ProfileImage,
};


// Experience Data

export const experienceData = [
  {
    role: "Software Developer",
    company: "Domex Technical Information Pvt Ltd",
    duration: "08/2025 – Present",
    points: [
      "Developed psychometric assessment modules for the Psychometrica platform using ASP.NET Core, C#, and MSSQL.",
      "Built a secure payment integration module for online test purchases with end-to-end transaction handling.",
      "Implemented RESTful APIs for test management, user administration, and result processing.",
      "Worked on full-stack projects using React.js front-end with .NET back-end, integrating RESTful APIs and SQL Server.",
    ],
  },
];

// Project Data
export const projectsData = [
  {
    name: "E-Commerce App",
    description:
      "A full-stack e-commerce platform built with React and ASP.NET Core Web API (.NET 8) using Clean Architecture. Includes product catalog with image galleries, cart and checkout, Razorpay payments, JWT authentication with refresh tokens, wishlist, reviews, coupons, and an admin dashboard with analytics and role-based access.",
    techStack: ["React", "ASP.NET Core Web API", "SQL Server", "Tailwind CSS"],
    github: "https://github.com/SarveshSS45/ECommerceApp",
  },

  {
    name: "NewsInsight",
    description:
      "News-Insight is a modern news website built with React, using APIs to deliver real-time updates and a smooth user experience. I developed user-friendly interfaces and added features to make accessing and engaging with news easier.",
    techStack: ["React", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/SarveshSS45/NewsInsights",
  },
  {
    name: "Hotel Management System",
    description:
      "The Hotel Management System is a web-based application built using ASP.NET Core MVC. It leverages Entity Framework (Database-First Approach) and LINQ to interact with a SQL database. The system enables customers to place orders, generate bills, and manage menu items dynamically.",
    techStack: ["ASP.NET Core MVC", "Entity Framework", "MSSQL"],
    github: "https://github.com/SarveshSS45/HotelManagement",
  },
];

// Skills data
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: HTMLIcon },
      { name: "CSS", icon: CSSIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "React", icon: ReactIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "ASP.NET Core MVC", icon: ASPNetCoreIcon },
      { name: "Node JS", icon: NodeJSIcon },
      { name: "Express JS", icon: ExpressIcon },
      { name: "Entity Framework Core", icon: EntityFrameworkIcon },
      { name: "MySQL", icon: MySQLIcon },
      { name: "MongoDB", icon: MongoDBIcon },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "C#", icon: CSharp },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GitHubIcon },
      { name: "VS Code", icon: VSCodeIcon },
      { name: "Visual Studio", icon: VSIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "MongoDB Compass", icon: MongoDBCompassIcon },
    ],
  },
];

// Education.jsx

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    university: "Mumbai University",
    universityImage: MumbaiImage,
    batch: "2023-25",
    grade: "8.2 CGPA",
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    university: "Guru Nanak Khalsa College of Arts, Science & Commerce",
    universityImage: BSCImage,
    batch: "2020-24",
    grade: "7.5 CGPA",
  },
];

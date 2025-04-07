// Skils.jsx
import HTMLIcon from '../assets/HTML.png';
import CSSIcon from '../assets/CSS.png';
import JavaScriptIcon from '../assets/JavaScript.png';
import CSharp from '../assets/Csharp.png';
import ReactIcon from '../assets/React.png';
import TailwindIcon from '../assets/Tailwind.png';
import NodeJSIcon from '../assets/NodeJS.png';
import ExpressIcon from '../assets/Express.png';
import MySQLIcon from '../assets/MySQL.png';
import MongoDBIcon from '../assets/MongoDB.png';
import GitIcon from '../assets/Git.png';
import GitHubIcon from '../assets/Github.png';
import VSCodeIcon from '../assets/VSCode.png';
import PostmanIcon from '../assets/Postman.png';
import MongoDBCompassIcon from '../assets/MongoDBCompass.png';



// Home.jsx
import GithubIcon from '../assets/Github.png';
import LinkedInIcon from '../assets/linkedIn.png';
import ProfileImage from '../assets/profilepic.png';

// Education.jsx
import MumbaiImage from '../assets/MUMBAI.jpg';
import BSCImage from '../assets/GNKHALSA.png';

export const homeData = {
  name: "Sarvesh Sonawane",
  roles: ["Software Developer", "Frontend Developer", "Gamer"],
  bio: `Motivated fresher with a strong passion for web and mobile development. 
Skilled in building dynamic and efficient applications using modern frameworks. 
Eager to embrace new challenges, enhance problem-solving abilities, and collaborate 
with innovative teams. Adaptable, driven, and committed to continuous learning 
and growth as a Full Stack Developer, aiming to become a Software Development Engineer.`,

  resumeUrl: "https://drive.google.com/file/d/1kuE1xCjin-OuKyUtfh7AOlGaf-_27o56/view?usp=sharing",

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


// Project Data
export const projectsData = [
    { 
      name: "NewsInsight", 
      description: "News-Insight is a modern news website built with React, using APIs to deliver real-time updates and a smooth user experience. I developed user-friendly interfaces and added features to make accessing and engaging with news easier.",
      techStack: ["React", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/yourusername/newsinsight",
      live: "https://newsinsight-demo.com",
    },
    { 
      name: "Doc-Classifier", 
      description: "Doc-Classifier is a project developed using Python and Django to categorize documents efficiently. I worked on creating a robust backend to handle document classification and ensure seamless user interactions.",
      techStack: ["Python", "Django"],
    },
    { 
      name: "Property Management", 
      description: "An online property management solution for real estate and physical property management. This can include residential, commercial, and land real estate. A software developed to connect property managers and potential buyers.",
      techStack: ["Angular", "Fastify"],
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
    ]
  },
  { 
    category: "Backend", 
    skills: [
      { name: "Node JS", icon: NodeJSIcon },
      { name: "Express JS", icon: ExpressIcon },
      { name: "MySQL", icon: MySQLIcon },
      { name: "MongoDB", icon: MongoDBIcon },
    ]
  },
  { 
    category: "Languages", 
    skills: [
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "C#", icon:CSharp },
    ]
  },
  { 
    category: "Tools", 
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GitHubIcon },
      { name: "VS Code", icon: VSCodeIcon },
      { name: "Postman", icon: PostmanIcon },
      { name: "MongoDB Compass", icon: MongoDBCompassIcon },
    ]
  },
];

// Education.jsx

export const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      university: "Mumbai University",
      universityImage: MumbaiImage,
      batch: "2023-25",
      grade: "8.1 CGPA",
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      university: "Guru Nanak Khalsa College of Arts, Science & Commerce",
      universityImage: BSCImage,
      batch: "2020-24",
      grade: "7.5 CGPA",
    },
  ];
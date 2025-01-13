"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// Experience data
const experince = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "lorem",
  items: [
    {
      company: "Tech solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "FrontEnd Developer",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelace Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2019",
    },
    {
      company: "Digital Agency",
      position: "UX/UI Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "Here are the details of my academic background.",
  items: [
    {
      institution: "University of Tech Valley",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018",
    },
    {
      institution: "Code Masters Bootcamp",
      degree: "Full-Stack Web Development Certification",
      duration: "Spring 2019",
    },
    {
      institution: "Creative Design Academy",
      degree: "Diploma in UX/UI Design",
      duration: "2016 - 2017",
    },
    {
      institution: "Tech High School",
      degree: "High School Diploma",
      duration: "2010 - 2014",
    },
  ],
};

// Skills data
const skills = {
  icon: "/assets/resume/badge.svg",
  title: "My skills",
  description:
    "These are some of the key skills I have acquired over my career.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNode />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

//About data
const about = {
  title: "About me",
  description: "lorem",
  info: [
    { fieldName: "Name", fieldValue: "Like Coleman" },
    { fieldName: "Phone", fieldValue: "583 985 3945" },
    { fieldName: "Experience", fieldValue: "12+ years" },
    { fieldName: "Skype", fieldValue: "luke.92" },
    { fieldName: "Email", fieldValue: "le@mail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Spanish" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return <div>Resume</div>;
};

export default Resume;

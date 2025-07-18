"use client"
import { title } from 'process'
import React from 'react'
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs} from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
    title: "About Me",
    description: [
        "Hi, I'm Jeremiah Bankole, a passionate Full-Stack Web Developer with a strong focus on creating clean, user-friendly, and performance-driven websites and web applications.",
        "Over the years, I’ve gained hands-on experience building responsive frontend interfaces with tools like React.js, Tailwind CSS, and Framer Motion, while also working with Node.js, Express, MongoDB, and RESTful APIs to bring ideas to life on the backend.",
        "I enjoy turning complex problems into elegant, scalable solutions and love collaborating with teams or clients to build products that are not just functional, but impactful."
    ],
    info: [
        {
            fieldName: "Name",
            fieldValue: "Jeremiah Bankole"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+234) 916 0338 996"
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nigerian"
        },
        {
            fieldName: "Email",
            fieldValue: "jeremiahiasngu@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Language",
            fieldValue: "English, French (Beginner)"
        },
    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "Over the years, I’ve contributed to diverse projects as a developer and team lead, delivering scalable solutions and intuitive user experiences across web platforms.",
    items: [
        {
            company: "Telex",
            position: "Frontend Developer",
            duration: "Jan 2025 - Present",
        },
        {
            company: "Freelance",
            position: "Full Stack Developer",
            duration: "Aug 2022 - Present",
        },
        {
            company: "HNG Tech",
            position: "Frontend Developer (Top 3.8%)",
            duration: "Jan 2025 - Apr 2025",
        },
        {
            company: "Programmify",
            position: "Frontend Web Developer",
            duration: "Jul 2024 - Oct 2024",
        },
        {
            company: "Zidio Development",
            position: "Web Developer (Intern)",
            duration: "Feb 2024 - Mar 2024",
        },
        {
            company: "Covenant University || Carovee Tech",
            position: "IT Support Specialist",
            duration: "Jul 2020 - Jan 2022",
        },
    ]
}


const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "My academic journey has provided me with the technical knowledge and problem-solving skills that support my work as a developer.",
    items: [
        {
            institution: "University of the People",
            degree: "Bsc Computer Science",
            duration: "2025",
        },
        {
            institution: "Federal University of Technology, Akure",
            degree: "BTech Building Technology",
            duration: "2025",
        },
        {
            institution: "HNG Tech Institute",
            degree: "Certified Frontend Developer",
            duration: "2025",
        },
        {
            institution: "Coursera - Google",
            degree: "Google IT Support Professional Certification",
            duration: "2020",
        }
    ]
}


const skills = {
    title: "My Skills",
    description: "I’ve developed a strong technical foundation across modern web technologies, tools, and best practices—enabling me to build performant, user-friendly, and maintainable applications.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "Html 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React Js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next Js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node Js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
    ]
}


const Resume = () => {
    return (
        <motion.div
            initial= {{opacity: 0}}
            animate= {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {
                                            experience.items.map((item, index) => (
                                                <li className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className="h-[420px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {
                                            education.items.map((item, index) => (
                                                <li className="bg-[#232329] h-[195px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[350px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {
                                        skills.skillList.map((skill, index) => (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                        {/* <TabsContent value="about" className="w-full text-center xl:text-left"> */}
                        <div className="flex flex-col gap-[30px]">
                            <TabsContent value="about" className="w-full text-center xl:text-left">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                                    <div className='max-w-[800px] text-white/60 mx-auto xl:mx-0 flex flex-col gap-2'>
                                        {about.description.map((desc, idx) => (
                                            <p key={idx}>{desc}</p>
                                        ))}
                                    </div>
                                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0'>
                                        {
                                            about.info.map((item, index) => (
                                                <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                    <span className='text-white/60'>{item.fieldName}</span>
                                                    <span className='text-xl'>{item.fieldValue}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </div>    
        </motion.div>
    )
}

export default Resume
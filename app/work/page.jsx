"use client"
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import Image from 'next/image'
import WorkSliderBtns from '@/components/WorkSliderBtns'

const projects = [
    {
        num: "01",
        category: "Telex (Full Stack)",
        title: "project 1",
        description: "Get real time notifications, monitor your apps, and communicate with your team, using Telex app.",
        stack: [
            {name: "Next Js"}, {name: "Tailwind CSS"},
        ],
        image: "/assets/work/telex.jpg",
        live: "https://telex.im/",
        github: "https://github.com/telexorg/telex_fe",
    },
    {
        num: "02",
        category: "CareSync (Full Stack)",
        title: "project 2",
        description: "A platform that helps patients book appointments with doctors and specialists.",
        stack: [
            {name: "React Js"}, {name: "Tailwind CSS"}, {name: "Node Js"}
        ],
        image: "/assets/work/caresync.jpg",
        live: "https://caresync-frontend.onrender.com/",
        github: "https://github.com/Adeoye-J/CareSync"
    },
    {
        num: "03",
        category: "Tinka (Full Stack)",
        title: "project 3",
        description: "A website that helps one Reclaim his or her Mental Health Stability",
        stack: [
            {name: "React Js"}, {name: "Tailwind CSS"}, {name: "Shadcn"}
        ],
        image: "/assets/work/tinka.jpg",
        live: "https://tinkahealthservices.com/",
        github: "https://github.com/kinglove58/Tiinka/tree/main/Tinka"
    },
    {
        num: "04",
        category: "Care Dental (Full Stack)",
        title: "project 4",
        description: "A user-friendly platform that connects individuals with affordable dental care solutions.",
        stack: [
            {name: "React Js"}, {name: "Tailwind CSS"}
        ],
        image: "/assets/work/caredental.jpg",
        live: "https://caredentalsavings.com/",
        github: "https://github.com/kinglove58/CareDental"
    },
    {
        num: "05",
        category: "VBookStore (FrontEnd)",
        title: "project 5",
        description: "Online bookstore with categories, favorites, and seamless cart/purchase options.",
        stack: [
            {name: "React Js"}, {name: "Tailwind CSS"}
        ],
        image: "/assets/work/vbook.jpg",
        live: "https://v-book-one.vercel.app/",
        github: "https://github.com/Adeoye-J/VBook"
    },
    {
        num: "06",
        category: "BlogSphere (FrontEnd)",
        title: "project 6",
        description: "A blog hub for reading, commenting, and discovering similar books from favorite authors.",
        stack: [
            {name: "React Js"}, {name: "Tailwind CSS"}
        ],
        image: "/assets/work/elevate.jpg",
        live: "https://elevate-lemon.vercel.app",
        github: "https://github.com/Adeoye-J/Elevate"
    },
    {
        num: "07",
        category: "TraTour (FrontEnd)",
        title: "project 7",
        description: "Tour booking site with details, search, and favorites for a personalized experience.",
        stack: [
            {name: "React Js"}, {name: "Tailwind CSS"}
        ],
        image: "/assets/work/tratour.jpg",
        live: "https://tratour.vercel.app",
        github: "https://github.com/Adeoye-J/TraTour"
    },
]



const Work = () => {

    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1, 
                // transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
                            <p className='text-white/60'>{project.description}</p>
                            <ul className='flex gap-4'>
                                {
                                    project.stack.map((item, index) => (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                            {
                                projects.map((project, index) => (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full  z-10"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className='object-cover h-full w-full' alt='' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <WorkSliderBtns 
                                btnStyles={"bg-accent hover:bg-accent-hover text-primary w-[44px] h-[44px] flex justify-center items-center cursor-pointer transition-all"}
                                containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"}
                                iconStyles={"text-[22px]"}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work
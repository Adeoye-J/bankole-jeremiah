"use client"
import React from 'react'
import {BsArrowDownRight} from "react-icons/bs"
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
    {
        number: "01",
        title: "Web Development",
        description: "I build responsive, fast, and scalable web applications using modern technologies like React.js, Node.js, and more to deliver clean and functional digital experiences.",
        href: ""
    },
    {
        number: "02",
        title: "SEO Optimization",
        description: "Improve your website’s visibility and ranking on search engines with clean code, performance tuning, and structured content practices.",
        href: ""
    },
    {
        number: "03",
        title: "Web Development Tutoring",
        description: "I provide hands-on, beginner-to-advanced training in web development, helping students and enthusiasts learn HTML, CSS, JavaScript, and popular frameworks.",
        href: ""
    },
    {
        number: "04",
        title: "IT Support Services",
        description: "Offering general IT support including system setup, troubleshooting, network diagnostics, and ensuring smooth day-to-day technical operations.",
        href: ""
    },
    // {
    //     number: "05",
    //     title: "Freelance Web Development",
    //     description: "From landing pages to full-stack solutions, I collaborate with businesses and individuals to deliver tailor-made freelance web development services.",
    //     href: ""
    // },
]


const Services = () => {

    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div
                    initial= {{
                        opacity: 0
                    }}
                    animate= {{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {
                        services.map((service, index) => {
                            return (
                                <div className="flex-1 flex flex-col justify-center gap-6 group" key={index}>
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                            {service.number}
                                        </div>
                                        <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                            <BsArrowDownRight className='text-primary text-3xl' />
                                        </Link>
                                    </div>
                                    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                                    <p className='text-white/60'>{service.description}</p>
                                    <div className="border-b border-white/20 w-full"></div>
                                </div>
                            )
                        })
                    }
                </motion.div>
            </div>
        </section>
    )
}

export default Services
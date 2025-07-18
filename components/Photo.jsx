"use client"
import React from 'react'
import { easeInOut, motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
    return (
        <div className='w-full h-full relative'>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2, ease: "easeIn" }}
                className='w-full h-full relative flex items-center justify-center'
            >
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"}
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full mix-blend-lighten absolute"
                >

                    <Image
                        src={"/assets/jeremiah-bankole (1).png"}
                        priority
                        quality={100}
                        fill
                        alt="Jeremiah Bankole"
                        className='object-contain rounded-full'
                    />
                </motion.div>

                <motion.svg 
                    className={"w-312px] xl:w-[518px] h-[312px] xl:h-[518px]"}
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http:www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo
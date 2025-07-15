"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import {FiDownload} from 'react-icons/fi'
import Socials from '@/components/Socials'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Home = () => {

    const route = useRouter()

    const handleCvDownload = () => {
        route("/assets/resume/Jeremiah Bankole Resume - Frontend.pdf")
    }

    return (
        <section className='h-full'>
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span>Software Developer</span>
                        <h1 className='h1 mb-6'>
                            Hello I'm <br /> <span className='text-accent'>Jeremiah Bankole</span><span className='text-accent'>.</span>
                        </h1>
                        <p className='max-w-[500px] mb-9 text-white/80'>
                            I am a Full Stack Developer with a passion for building web applications.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
                            <a href="/assets/resume/Jeremiah Bankole Resume - Frontend.pdf" target='_blank'>
                                <Button className='uppercase flex items-center gap-2' variant={"outline"} size={"lg"}>
                                    <FiDownload className='text-xl' />
                                    Download Resume
                                </Button>
                            </a>

                            <div className="mb-8 xl:mb-0">
                                <Socials containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"} />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    )
}

export default Home
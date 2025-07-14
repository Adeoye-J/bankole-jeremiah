"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
import Stairs from './Stairs'

const StairEffect = () => {

    const pathname = usePathname()

    return (
        <>
            <AnimatePresence node="wait">
                <div key={pathname} className="">
                    <div className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-40 flex">
                        <Stairs />
                    </div>

                    <motion.div
                        initial={{
                            opacity: 1
                        }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                        }}
                        className='h-screen w-screen fixed top-0 bg-primary pointer-events-none z-30'
                    />
                </div>
            </AnimatePresence>
        </>
    )
}

export default StairEffect
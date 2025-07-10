import React from 'react'
import { motion } from 'framer-motion'


const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: "100%",
    },
}

const reverseIndex = (index) => {
    const totalStairs = 6;
    return totalStairs - index - 1;
}

const Stairs = () => {
    return (
        <>
            {
                [...Array(6)].map((_, index) => {
                    return (
                        <motion.div
                            key={index}
                            className={`w-full h-full bg-white relative`}
                            // style={{ zIndex: reverseIndex(index) }}
                            variants={stairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                // repeatType: "reverse",
                                delay: reverseIndex(index) * 0.2,
                            }}
                        />
                    )
                })
            }
        </>
    )
}

export default Stairs
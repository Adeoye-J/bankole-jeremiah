"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" }
]

const Navbar = () => {

    return (
        <nav className='flex items-center gap-6 xl:gap-8'>
            {
                links.map((link, index) => {
                    const pathname = usePathname();
                    const isActive = pathname === link.path;

                    return (
                        <Link
                            key={index}
                            href={link.path}
                            className={`${isActive && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Navbar
"use client";
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

const MobileNav = () => {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center cursor-pointer">
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-24 text-center text-2xl">
                    <Link href={"/"}>
                        <h1 className='text-4xl font-semibold'>Jeremiah<span className='text-accent'>.</span></h1>
                    </Link>
                </div>

                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) => {
                        const isActive = pathname === link.path;
                        return (
                            <Link
                                key={index}
                                href={link.path}
                                className={`text-xl capitalize hover:text-accent transition-all ${isActive && 'text-accent border-b-2 border-accent'}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
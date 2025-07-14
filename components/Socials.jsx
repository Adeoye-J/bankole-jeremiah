import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'


const socials = [
    {
        id: 1,
        icon: <FaGithub />,
        link: "https://github.com/Adeoye-J/"
    },
    {
        id: 2,
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/jeremiah-bankole/"
    },
    {
        id: 3,
        icon: <FaYoutube />,
        link: "https://www.youtube.com/@jeremiah-bankole"
    },
    // {
    //     id: 4,
    //     icon: <FaTwitter />,
    //     link: ""
    // }
]

const Socials = ({containerStyles, iconStyles}) => {

    return (
        <div className={containerStyles}>
            {
                socials.map((social) => (
                    <Link
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        className={iconStyles}
                    >
                        {social.icon}
                    </Link>
                ))
            }
        </div>
    )
}

export default Socials
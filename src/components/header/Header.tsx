import React, { useState, useEffect } from 'react'
import { useMediaQuery } from "@uidotdev/usehooks"
import { HiX, HiOutlineMenu } from "react-icons/hi"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    const [showMenu, setMenu] = useState(false)

    const isDesktop = useMediaQuery("(min-width: 1028px)");

    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global" >
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="text-sm font-semibold leading-6 text-gray-900">Portfolio</span>
                        </a>
                    </div>
                    {isDesktop ? (<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-12">
                        <AnchorLink href="#home" className="text-sm font-semibold leading-6 text-gray-900">Home</AnchorLink>
                        <AnchorLink href="#skill" className="text-sm font-semibold leading-6 text-gray-900">Skill</AnchorLink>
                        {/* <AnchorLink href="#project" className="text-sm font-semibold leading-6 text-gray-900">Project</AnchorLink> */}
                        {/* <AnchorLink href="#contact" className="text-sm font-semibold leading-6 text-gray-900">Contact</AnchorLink> */}

                    </div>
                    ) : (
                        <div
                            className="cursor-pointer lg:hidden"
                            onClick={() => setMenu((prev) => !prev)}
                        >
                            {showMenu ? <HiX size={36} /> : <HiOutlineMenu size={36} />}
                        </div>
                    )}
                </div>
                {!isDesktop && showMenu && (
                    <div
                        className="absolute top-0 z-10 mt-20 flex w-full flex-col items-center bg-white lg:hidden"
                        onClick={() => {
                            setMenu(false);
                        }}
                    >
                        <AnchorLink href="#home" className="flex h-16 w-full cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500">Home</AnchorLink>
                        <AnchorLink href="#skill" className="flex h-16 w-full cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500">Skill</AnchorLink>
                        {/* <AnchorLink href="#project" className="flex h-16 w-full cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500">Project</AnchorLink> */}
                        {/* <AnchorLink href="#contact" className="flex h-16 w-full cursor-pointer items-center justify-center text-neutral-700 transition-colors hover:text-blue-500">Contact</AnchorLink> */}
                    </div>
                )}
            
        </div>

    );
}

export default Header
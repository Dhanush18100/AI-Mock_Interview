"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false)
    const togleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src={'/logo.svg'} width={120} height={50} alt='logo' />

            <ul className='hidden md:flex gap-6'>
                <li>
                    <Link href="/dashboard" className={`cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard' ? 'text-blue-500 font-bold' : ''}`}>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/features" className={`cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard/features' ? 'text-blue-500 font-bold' : ''}`}>
                        Features
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/upgrade" className={`cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard/upgrade' ? 'text-blue-500 font-bold' : ''}`}>
                        Upgrade
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/howitworks" className={`cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard/howitworks' ? 'text-blue-500 font-bold' : ''}`}>
                        How it Works?
                    </Link>
                </li>
            </ul>
            <button
                onClick={togleNavbar}
            >
                <RxHamburgerMenu className='md:hidden absolute right-15 sm:w-2/3 h-10 w-10 top-5' />

            </button>

            <div className={`bg-white fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full shadow-lg transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                
                <div className='absolute top-10 right-4'>
                    <button onClick={togleNavbar}>
                        <IoCloseOutline className='h-10 w-10 text-gray-600' />
                    </button>
                </div>

              
                <div className='mt-20 px-6 text-center'>
                    <ul className='flex flex-col gap-6 items-center'>
                        <li className='w-full'>
                            <Link href="/dashboard" className={`block w-full cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard' ? 'text-blue-500 font-bold' : ''}`}>
                                Dashboard
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/dashboard/features" className={`block w-full cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard/features' ? 'text-blue-500 font-bold' : ''}`}>
                                Features
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/dashboard/upgrade" className={`block w-full cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard/upgrade' ? 'text-blue-500 font-bold' : ''}`}>
                                Upgrade
                            </Link>
                        </li>
                        <li className='w-full'>
                            <Link href="/dashboard/howitworks" className={`block w-full cursor-pointer transition-all hover:text-blue-500 hover:font-bold ${path === '/dashboard/howitworks' ? 'text-blue-500 font-bold' : ''}`}>
                                How it Works?
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            <UserButton />
        </div>
    )
}

export default Header;

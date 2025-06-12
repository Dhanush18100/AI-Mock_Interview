"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const path = usePathname();

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

            <UserButton />
        </div>
    )
}

export default Header;

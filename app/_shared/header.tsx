'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

const Header = () => {

    const {user} = useUser()

    const HeaderItems = [
        { itemId: 'home', name: 'Home', link: '/', activeURL: '/' },
        { itemId: 'pricing', name: 'Pricing', link: '/pricing', activeURL: '/pricing' },
    ];

  return (
    <div className='flex items-center justify-between p-4'>
        <div className='flex gap-2 items-center'>
        <Image src="/logo.png" alt="company_logo" width={40} height={40} />
        <h3 className='text-xl font-semibold'>Framezy</h3>
        </div>
        <ul className='flex gap-8 items-center'>
            {HeaderItems.map((item) => (
                <li key={item.itemId} className='text-md font-medium hover:text-primary cursor-pointer'>   
                    <Link href={item.link}>{item.name}</Link>
                </li>
            ))}
            {
                !user ? (
                    <SignInButton mode='modal'>
                        <Button className='cursor-pointer'>Get Started</Button>
                    </SignInButton>
                ) : (
                    <UserButton />
                )
            }
        </ul>
    </div>
  )
}

export default Header
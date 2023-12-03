'use client'

import { SafeUser } from '@/types';
import Link from 'next/link' ;
import { signOut } from "next-auth/react"

interface UserMenuProps {
    currentUser: SafeUser | null
}

export default function Navbar({ currentUser }:UserMenuProps) {
  return (
    <header>
        <nav className='mx-auto max-w-7xl flex justify-between items-center py-4 px-4 md:px-4'>
            <div className="">
                <span>Jasper.Dev</span>
            </div>
                <ul className='flex flex-row gap-x-3'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/create'>Create</Link>
                    </li>
                    <li>
                        <span>{currentUser?.name}</span>
                    </li>

                    {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
                </ul>
        </nav>
    </header>
  )
}

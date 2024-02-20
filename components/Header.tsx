'use client'

import {BellIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Header () {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      
      if(window.scrollY > 0){
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])


  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex space-x-2 items-center md:space-x-10">
        <Link href='/'>
          <img src="/images/logo.png" alt="logo" className="cursor-pointer h-6" />
        </Link>
        
        <ul className="hidden md:flex space-x-6">
          <li className="headerLink ">Home</li>
          <li className="headerLink ">TV Shows</li>
          <li className="headerLink ">Movies</li>
          <li className="headerLink ">New & Popular</li>
          <li className="headerLink ">My List</li>
        </ul>
      </div>

      <div className='flex space-x-4 sm:space-x-6 text-sm items-center'>
        <MagnifyingGlassIcon className='h-6 w-6'/>
        <p className='hidden lg:inline'>Children</p>
        <BellIcon className='w-6 h-6' />
        <Link href='/account'>
          <img src="/images/account.jpg" alt="profileIcon" className='w-8 rounded'/>
        </Link>
      </div>
    </header>
  )
}
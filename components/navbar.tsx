import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignIn, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Navitems from './Navitems'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href="/">
        <div className='flex items-center gap-2.5 cursor-pointer'>
            <Image 
                src="/icons/cap.svg"
                alt="Converso Logo"
                width={46}
                height={46} 
                />
                <h1>PathWise</h1>
        </div>
        {/* <p className=' ml-5 font-bold'>Your personlaize learning management app</p> */}
        </Link>
        <div className="flex items-center gap-8">
          <Navitems/>
          <SignedOut>
            
              <SignInButton>

              <button className='btn-signin cursor-pointer'>Sign In</button>
                </SignInButton>
            
          </SignedOut>
          <SignedIn>
            <div className="flex item-center gap-2">
              <UserButton />
            </div>
          </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar

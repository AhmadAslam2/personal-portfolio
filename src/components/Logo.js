import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'


let MotionLink = motion(Link);

const Logo = () => {

  return (
    <div
     className='flex flex-col items-center justify-center mt-2'>
        <MotionLink href="/" 
    className='flex items-center justify-center rounded-full w-16 h-16 overflow-hidden dark:border-2 dark:border-solid dark:border-light'
    whileHover={{
      scale: 1.1,
      transition:{duration:0.2}
    }}
    >
      <Image 
        src="/Profile_closeup.jpg" 
        alt="Profile" 
        width={64} 
        height={64} 
        className="rounded-full object-cover w-full h-full"
      />
    </MotionLink>
    </div>
  )
}

export default Logo
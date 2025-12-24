import Link from "next/link";
import React from "react";

const RotatingText = ({ text, className = "" }) => {
  // Radius for the circular path - matches CircularText positioning
  // Both mobile and desktop use the same 192x192 viewBox
  // Mobile: w-48 = 192px, center at 96,96, radius ~58px (30% of 192px)
  // Desktop: w-24 = 96px (scaled), center at 96,96, radius ~29px (scaled proportionally)
  const radiusDesktop = 58;
  const radiusMobile = 58; // Same radius in viewBox coordinates
  const centerDesktop = 96;
  const centerMobile = 96; // Same center in viewBox coordinates (192x192)
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="192"
      height="192"
      viewBox="0 0 192 192"
      className={`w-48 h-48 md:w-24 md:h-24 ${className} animate-spin-slow`}
    >
      <defs>
        <path
          id="circlePathDesktop"
          d={`M ${centerDesktop},${centerDesktop} m -${radiusDesktop},0 a ${radiusDesktop},${radiusDesktop} 0 1,1 ${radiusDesktop * 2},0 a ${radiusDesktop},${radiusDesktop} 0 1,1 -${radiusDesktop * 2},0`}
        />
        <path
          id="circlePathMobile"
          d={`M ${centerMobile},${centerMobile} m -${radiusMobile},0 a ${radiusMobile},${radiusMobile} 0 1,1 ${radiusMobile * 2},0 a ${radiusMobile},${radiusMobile} 0 1,1 -${radiusMobile * 2},0`}
        />
      </defs>
      <text className="fill-dark dark:fill-light font-bold">
        <textPath
          href="#circlePathDesktop"
          startOffset="0%"
          className="md:hidden"
          style={{
            fontFamily: 'var(--font-mont), sans-serif',
            fontWeight: 'bold',
            fontSize: '17px',
          }}
        >
          {text}
        </textPath>
        <textPath
          href="#circlePathMobile"
          startOffset="0%"
          className="hidden md:inline"
          style={{
            fontFamily: 'var(--font-mont), sans-serif',
            fontWeight: 'bold',
            fontSize: '17px',
          }}
        >
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0 
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <RotatingText
          text="Web Developer . Mobile App Developer ."
          className="fill-dark dark:fill-light"
        />
        <Link
          href="mailto:codebucks27@gmail.com"
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid
bg-dark rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark
dark:hover:text-light dark:hover:border-light dark:shadow-light/25 md:w-12 md:h-12 md:text-[10px] z-10
"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

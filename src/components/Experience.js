import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Frontend & Mobile Developer"
              company="Tkxel"
              companyLink="https://tkxel.com"
              time="March 2024 - Present"
              address="Lahore, Pakistan"
              work="Developed offline support for a security mobile application, significantly improving usability and performance. Designed and implemented an SVG rendering and editing module. Optimized state management and caching to enhance app responsiveness. Actively participated in scrum meetings and collaborated with backend and QA teams to deliver high-quality features."
            />

            <Details
              position="Frontend & Mobile Developer"
              company="Staunch"
              companyLink="#"
              time="August 2022 - March 2024"
              address="Lahore, Pakistan"
              work="Developed 3 web projects from scratch using React and Next.js. Independently developed 2 mobile applications using React Native. Actively participated in architectural meetings to devise optimal solutions. Developed and integrated complex standalone modules, such as a CSV parser with type checking. Collaborated with clients, design, and backend teams to ensure smooth project delivery."
            />

            <Details
              position="Frontend Developer"
              company="Educative"
              companyLink="https://educative.io"
              time="August 2021 - May 2022"
              address="Lahore, Pakistan"
              work="Designed and developed a beginner-friendly project on the Educative platform, enabling users to gain hands-on learning experience. Actively contributed to sprint planning and agile workflows. Implemented complex features, including setting up a cloud-based IDE using Docker, enhancing the platform's development and learning experience."
            />

            <Details
              position="Frontend Developer"
              company="Helpling"
              companyLink="https://helpling.com"
              time="January 2021 - July 2021"
              address="Berlin, Germany"
              work="Developed and optimized 10+ reusable UI components, enhancing the application's overall user experience. Integrated a custom chat SDK, enabling real-time messaging and improving communication features within the app. Successfully deployed the web application to test users, gathering feedback and refining the product for full-scale release."
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;

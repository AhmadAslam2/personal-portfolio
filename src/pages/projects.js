import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/helpling-cover-image.png";
import proj2 from "../../public/images/projects/enforce-app-cover-image.png";
import proj3 from "../../public/images/projects/integrating-reflexes-cover-image.png";
import proj4 from "../../public/images/projects/emerald-data-cover-image.png";
import proj5 from "../../public/images/projects/sonar-rx-cover-image.png";
import proj6 from "../../public/images/projects/the-couch-cover-image.png";
import proj7 from "../../public/images/projects/rei-blackbook-cover-image.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target={"_blank"}
            className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label={title}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link }) => {
  return (
    <article
      className="relative flex w-full h-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg aspect-video"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-1 flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-start mt-auto">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Ahmad Aslam | Projects - Full Stack Developer</title>
        <meta
          name="description"
          content="Discover the latest web and mobile projects created by Ahmad Aslam, a Full Stack Developer with 
        expertise in React, React Native, Next.js, and AI engineering. Explore innovative applications and solutions."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Built, Shipped, and Used."
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 items-stretch">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Helpling"
                summary="An online platform that connects users with professional cleaners. Helpling makes it easy to find and book cleaning services online, providing a seamless experience for both customers and service providers across multiple markets."
                img={proj1}
                link="https://www.helpling.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Mobile Application"
                title="Enforce App"
                img={proj2}
                link="https://enforceapp.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Mobile Application"
                title="Integrating Reflexes App"
                img={proj3}
                link="https://www.integratingreflexes.com/app/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Web Platform"
                title="SonarRx"
                summary="A comprehensive 340B Program Management Platform that helps healthcare organizations maximize pharmacy savings opportunities. The platform includes intelligent opportunity identification, compliance auditing, and streamlined pharmacy network management to optimize drug savings programs."
                img={proj5}
                link="https://sonarscripts.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Platform"
                title="Emerald Data"
                img={proj4}
                link="https://emeralddata.io/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Mobile Application"
                title="The Couch"
                img={proj6}
                link="https://thecouch.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Mobile Application"
                title="REI Blackbook"
                img={proj7}
                link="https://www.reiblackbook.com/download-mobile-app/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import { ToptalBadge } from "@/components/ToptalBadge";
import Head from "next/head";
import Link from "next/link";
import StripeAnimation from "@/components/StripeAnimation";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmad Aslam - Full Stack Developer | Portfolio</title>
        <meta
          name="description"
          content="Ahmad Aslam - Full Stack Developer with 4+ years of experience in React, React Native, Next.js, and AI engineering. 
        Building scalable web & mobile applications with expertise in frontend, backend, and intelligent systems."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`relative flex min-h-[calc(100vh-6rem)] items-center overflow-hidden text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 !pb-4 md:!pt-16 md:!pb-4 sm:!pt-8 sm:!pb-4 -translate-y-10 md:translate-y-0">
          <div className="flex w-full items-start justify-between gap-8 md:flex-col md:gap-6 sm:gap-6">
            <div className="w-[45%] lg:hidden md:inline-block md:w-full h-[400px] md:h-[350px] sm:h-[280px] mb-8 md:mb-8 sm:my-6 flex items-center justify-center">
              <StripeAnimation />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center md:w-full">
              <AnimatedText
                // text="Building mobile experiences that work."
                text="Turning ideas into mobile experiences."
                className="!text-left !text-[58px] xl:!text-5xl lg:!text-center lg:!text-[58px] md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs md:my-3 sm:my-2">
                React Native mobile app developer with 5+ years of experience
                building production-ready iOS and Android apps for startups. I
                work across the entire product lifecycle, from architecture and
                development to AI feature integration, with a focus on
                performance, usability, and long-term maintainability.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center md:flex-col md:items-center md:w-full md:gap-3 sm:gap-2">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/cv.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base sm:p-1.5 sm:px-3 sm:text-sm
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4 sm:!w-3" />
                </Link>

                <Link
                  href="mailto:ahmadaslam1999@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base md:ml-0 sm:text-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe /> — kept in components for later reuse */}
        <div
          className="fixed left-10 bottom-6 z-10 md:hidden cursor-pointer"
          href="https://www.toptal.com/developers/resume/ahmad-a#vZ8md3"
        >
          <ToptalBadge scale={0.65} />
        </div>
      </article>
    </>
  );
}

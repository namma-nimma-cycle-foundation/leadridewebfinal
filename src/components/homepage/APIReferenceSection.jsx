import React from 'react';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Head from '@docusaurus/Head';

export default function APIReferenceSection() {
  const { colorMode } = useColorMode();

  return (
    <section className="relative mb-20 px-6">
      <Head>
        <link rel="prefetch" href="/static/landing-page/api-ref-light.png" />
        <link rel="prefetch" href="/static/landing-page/api-ref-dark.png" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:py-32 lg:text-left">
        <Link
          href="/api"
          target="_blank"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowTopRightIcon className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">What is Lead Ride </h2>
          <p className="text-zinc-400">
          A Movement to bring together leaders, communities and decision makers to
immersively CYCLE TOGETHER and connect to each other and the urban
spaces, so as to transform their neighborhoods into happy and healthy
places.        </p>
         
          <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            <li className="flex flex-col gap-2">
            <div className="flex-1">
        <h2 className="text-4xl">Vision  </h2>
          <p className="text-2xl text-zinc-400">
          Lead, ride and shape the future
of mobility by cycling together  </p>
          </div>
            <h2 className="text-4xl">Mission   </h2>
              <h1 className="text-2xl">Lead Ride For Cities </h1>             
              <div className="text-zinc-400 text-1xl">
                
 Lead ride is a communities-centric movement designed to empower citizens to transform cities and places into active mobility spaces. 
 The movement  supports citizens and leaders to relaim spaces and reimagine mobility.<br></br  >
 <br></br  >Let us Co-create, Co-operate, and Co-design Shared Healthy and Happy Spaces in Cities.<br></br  > <Link href="/city/main" className="text-primary-100 dark:text-primary">
            Get started Making Cities Happy and Healthy &rarr;
                </Link>
              </div>
            
            </li>
            <li className="flex flex-col gap-2">
            <h1 className="text-2xl">                Lead Ride For Companies  </h1>   
              
              <div className="text-zinc-400 py-1 text-1xl">
              Build the momentum towards active mobility
future by creating a change maker  across the corporate
world, thereby supporting wellbeing and active lifestyle of employees. 
              </div>
              <div className="text-zinc-400 text-1xl">
                  <Link href="/company/main" className="text-primary-100 dark:text-primary">
            Get started with Employee Wellbeing, Agility and Productivity &rarr;
                </Link>
              </div>
            </li>
            <li className="flex flex-col gap-2">
            <h1 className="text-2xl">     Lead Ride For Campus</h1>
              
              <div className="text-zinc-400">
                Enable Active Mobility by Empowering youth to
build livable spaces, thriving & healthy campuses and
conscious community of youth.
              </div>
              <Link href="/campus/main" className="text-primary-100 dark:text-primary">
            Get started with  Student Wellbeing & Sustainable Campus &rarr;
                </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
       
        <img
            src={`/static/landing-page/api-ref-${colorMode}.png`}
            alt="API Reference Preview"
          />
        </div>
      </div>
    </section>
  );
}

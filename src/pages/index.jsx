import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';

export default function Homepage() {
  return (
    <Layout
      description="Lead Ride - Cycling Together 🚴🏻"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <HeroSection />
      <div className="relative">
        <APIReferenceSection />
        <div className="absolute top-1/2 bottom-0 -z-10 w-full bg-secondary-800 dark:bg-secondary-900"></div>
        <div className="absolute top-0 bottom-1/2 -z-10 w-full bg-secondary-1000"></div>
      </div>
      <SDKsSection />

    

      <div className="z-0 bg-secondary-800 dark:bg-secondary-900">
       

        <section className="px-4 pt-16">
          <div className="mx-auto -mb-48 max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20">
            <h2 className="mb-12 text-center lg:text-3xl">
              Lead Ride Framework
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <img
                  src="/static/landing-page/calendar.svg"
                  alt="Book a demo"
                />
                <h4 className="my-3">Architecture</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  We have created an Architecture that shall enable Active Mobility at Scale.

                </p>
                <Link
                  href="/guides"
                  className="text-primary dark:text-primary-100"
                >
                  View Architecture  &rarr;
                </Link>
              </div>

              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <img
                  src="/static/landing-page/customer.svg"
                  alt="Book a demo"
                />
                <h4 className="my-3">Principles</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                Lead Ride requires the adoption of certain principles in enabling active mobility to help quicker adoption.
                
                </p>
                <Link
                  href="/principles"
                  className="darktext-primary-100 :text-primary"
                >
                  View Principles &rarr;
                </Link>
              </div>

               

              <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
                <img src="/static/landing-page/chat.svg" alt="Book a demo" />
                <h4 className="my-3">FAQs</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Browse through our FAQs to find answers to commonly asked
                  questions.
                </p>
                <Link
                  href="/faq"
                  className="text-primary dark:text-primary-100"
                >
                  View FAQs &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <CommunitySection />

      <HomeFooter />
    </Layout>
  );
}

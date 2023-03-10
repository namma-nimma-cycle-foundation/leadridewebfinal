import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';
import {
  AngularIcon,
  // ElectronIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
  VueIcon
} from '../../icons';
import Head from '@docusaurus/Head';
import { useState } from 'react';

function SDKLink({ href, Icon, label, disabled = false }) {
  // yes, this is a weird way to do it :)
  const props = {
    ...(!disabled && { href }),
  };

  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black dark:hover:text-white',
        disabled && 'cursor-not-allowed'
      )}
      {...props}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const { colorMode } = useColorMode();
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <Head>
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-light.png" />
        <link rel="prefetch" href="/static/landing-page/plugin-sdk-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="dyte-badge mb-4">Categories</div>

        <div className="sticky top-14 mb-20 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between">
          <h2 className="my-0 font-jakarta lg:text-3xl">
            We support everyone to cycle together !
          </h2>
          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="flex max-w-sm flex-1 items-center rounded-full border border-solid border-text-400 text-sm lg:text-base">
              <div
                className={clsx(
                  'flex-1 cursor-pointer py-1 text-center',
                  visibleSection === 'web' &&
                    'rounded-full border-2 border-solid'
                )}
                onClick={() => {
                  document
                    .getElementById('web')
                    .scrollIntoView({ block: 'center' });
                }}
              >
                City
              </div>
              <div
                className={clsx(
                  'flex-1 cursor-pointer py-1 text-center',
                  visibleSection === 'mobile' &&
                    'rounded-full border-2 border-solid'
                )}
                onClick={() => {
                  document
                    .getElementById('mobile')
                    .scrollIntoView({ block: 'center' });
                }}
              >
               Company
              </div>
              <div
                className={clsx(
                  'flex-1 cursor-pointer py-1 text-center',
                  visibleSection === 'plugin' &&
                    'rounded-full border-2 border-solid'
                )}
                onClick={() => {
                  document
                    .getElementById('plugin')
                    .scrollIntoView({ block: 'center' });
                }}
              >
                 Institution
              </div>
            </div>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="web"
          id="web"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-3xl">City</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Change the reputation of your city from Traffic City to cycling city.  Build a culture of walking & cycling. 
             
            </p>
            <Link href="https://sprw.io/stt-bAHzYEC8vfVZHWkXcgE263">Sign In Here </Link> <br></br>
            
            {/* <Link className="text-sm">Learn More &rarr;</Link> */}
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Convene & Connect </h4>
            <p className="text-sm leading-relaxed text-text-400">
              Convene the critical ecosystem players and stakeholder &apos;s . Pledge and Plan Lead Ride across the city.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="/city/ecosystem" Icon={ReactIcon} label="Ecosystem Map" />
                </li>
                <li>
                  <SDKLink
                    href="/city/champion"
                    Icon={AngularIcon}
                    label="Lead Ride Champions"
                  />
                </li>
                <li>
                  <SDKLink href="/city/main" Icon={VueIcon} label="Commitment" />
                </li>
                <li>
                  <SDKLink
                    href="/city/main"
                    Icon={HTMLIcon}
                    label="Buddy Network"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Celebrate</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Everyone gets together and cycles to celebrate  the spirit of moving together.
            </p>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="#" Icon={JSIcon} label="World Bicycle Day" />
              </li>
              
            </ul>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mobile"
          id="mobile"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-3xl">Company</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
             Improve Employee Wellbeing and Increase Productivity with Active Mobility.
             Transform your neighborhood to support walking and cycling.
             Bring in the culture of active lifestyle.
             We help you design your company for active mobility.
            </p>
            <Link href="/company/main">Sign In Here </Link> 
            {/* <Link className="text-sm" href="#">
              Learn More &rarr;
            </Link> */}
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Wellness </h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate health  and wellness with walking and cycling and other interventions. We design plays and 
              experiences for companies.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="/company/bikeweek" Icon={KotlinIcon} label="Bike Week" />
              </li>
            
              <li>
                <SDKLink
                  href="/company/tours"
                  Icon={ReactIcon}
                  label="Bicycle Tours"
                />
              </li>
              <li>
                <SDKLink href="/company/rivers" Icon={FlutterIcon} label="Nature Connect" />
              </li>
            </ul>
            {/* <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0"></ul>
              </div>
            </div> */}
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Active Mobility</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Enable Active Mobility within  your campus and in your neighborhood.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="/company/experience"
                  Icon={KotlinIcon}
                  label="Immersive Experience"
                />
              </li>

              
             
              <li>
                <SDKLink href="/company/buddy" Icon={ReactIcon} label="Lead Ride Buddy" />
              </li>
            </ul>
            <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
              <h5 className="text-center text-xs text-text-400">COMING SOON</h5>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink disabled Icon={SwiftIcon} label="Lead Ride Studio" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="plugin"
          id="plugin"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-3xl">Institution</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
            Enabling students and young people  to learn, grow and develop through cycling.
            Join us to build a strong and enduring movement for active mobility.
            </p>
            <Link className="text-sm" href="/campus/main">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex flex-[3] items-center justify-center rounded-3xl p-6 px-8 lg:justify-end">
            <img
              src={`/static/landing-page/plugin-sdk-${colorMode}.png`}
              alt="Plugin SDK Usage Preview"
            />
          </div>
        </div>

        {/* <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="desktop"
          id="desktop"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <div className="mb-4 text-xs font-semibold">COMING SOON</div>
            <h3 className="text-3xl">Desktop</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Take Dyte for a spin to build real-time communication solutions
              for Electron. Read the docs to get started with your desktop
              applications.
            </p>
            <Link href="#" className="text-sm">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 rounded-3xl bg-secondary-800 p-6 px-8">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="#"
                  Icon={ElectronIcon}
                  label="Electron"
                  disabled
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 p-6 px-8">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="#"
                    disabled
                    Icon={ElectronIcon}
                    label="Electron"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="text-center">
          <p>
            Don&apos;t see your   stack here?{' '}
            <Link href="/city/contact">Contact Us</Link>
          </p>
        </div>
      </div>
    </section>
  );
}



   
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import FeatureCaptain from './components/FeatureCaptain';
import CaptainStepsFeature from './components/CaptainStepsFeature';


export const Header = () => {

    const myStyle1 = {
        height: "400px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      };
  return (
    <div>      
	<div className="bg-green-800 bg-left-top bg-auto bg-repeat-x"  style={myStyle1}>
	</div>

      <div className="mt-6 ">
        <div className="w-full text-center">
          <p className="text-sm tracking-widest text-black">An Immersive Experience between Urban Planners and Corporate Companies</p>
          <h1 className="font-bold text-5xl text-black">
          Lead Ride - Improving Neighborhoods through Cycling
          </h1>
          <p>The program is designed to be immersive and hands-on, allowing participants to see the impact of their ideas in real-time. 
            By the end of each session, participants will have a clearer understanding of the challenges and opportunities facing their communities, and will be better equipped to work together to find solutions.</p>
   
    
      </div>
              
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
  
          <div className="p-2 sm:p-10 text-center cursor-pointer">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                  <div className="space-y-10">
                      <i className="fa fa-spa"  ></i>
                      
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Shared Spaces</div>
                              <p className="text-gray-700 text-base">
                              Lead Ride is a program that brings urban planners and corporate companies together through a shared love of cycling to redesign and reconnect to shared spaces. Our goal is to use this shared passion to improve neighborhoods and create a more sustainable and livable environment for everyone                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="p-2 sm:p-10 text-center cursor-pointer text-white"> 
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-orange-500 hover:bg-orange-600 transition duration-500">
                  <div className="space-y-10">
                    <i className="fa fa-head-side-mask" ></i>
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">Why Cycling</div>
                              <p className="text-base">
                              <p>Cycling is a simple, low-impact way to get around that has numerous benefits for both individuals and communities. By encouraging more people to cycle, we can reduce traffic congestion, improve air quality, and make our neighborhoods safer and more pleasant places to live.</p>

                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
              <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white ">
                  <div className="space-y-10">
                      <i className="fa fa-swimmer" ></i>
                      
                      <div className="px-6 py-4">
                          <div className="space-y-5">
                              <div className="font-bold text-xl mb-2">How It Works ?</div>
                            
                              <p>Lead Ride involves regular group cycling trips that bring urban planners and corporate companies together. During these trips, participants will have the opportunity to engage in discussions and brainstorming sessions, where they can share their ideas and perspectives on how to improve their communities.</p>
   
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
      </div>
      </div>
  
  </div>
  );
};

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick, brown fox jumps over a lazy dog
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Are you passionate about employee  wellbeing? Have you been wanting to help colleagues feel
better at work? Do you want to be a role model of healthy culture within your  company? Well if you do, you can be the lead ride buddy !
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">World</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Sport</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Weather</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Projects</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Fitness</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">News</h6>
        </div>
      </div>
      <div className="text-center">
        
      </div>
    </div>
  );
};


export const Feature2 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Lead inside and outside
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          Lead Ride Buddy at the company
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        <li>Enthusiasm and interest in staff wellbeing and improving the working environments</li>
<li>Being approachable and willing to help others</li>
<li>A basic understanding of healthy lifestyles and health promotion</li>
<li>An interest in attending and contributing to steering meetings</li>
        </p>
      </div>
      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Role Model</h6>
            <p className="mb-3 text-sm text-gray-900">
            Reporting activity and challenges to the Occupational Health and Wellbeing Team
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Role modelling and promoting a healthy culture
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Organising   wellbeing events
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Engaging with leadership
              </li>
            </ul>
          
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Build Network</h6>
            <p className="mb-3 text-sm text-gray-900">
              Teams build culture - everyone joins in the initiatives to make active lifestyle happen
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Active Lifestyle Challenges
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Health Session
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Active Lifestyle Games
              </li>
            </ul>
           
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:mr-4">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
            <p className="mb-3 text-sm text-gray-900">
              The Lead Ride Buddy helps the growth of the active lifestyle culture organically.
            </p>
            <ul className="mb-4 -ml-1 space-y-2">
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                 Active Travel 
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Health Culture
              </li>
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                Sports - to promote team bonding
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default function ExperiencePage() {
   
  
    return (

        <Layout
        description="Real-time audio & video SDKs, ready to launch 🚀"
        wrapperClassName="homepage flex flex-col"
        noFooter
      >
      <div>
  

        <div>
            <Header></Header> 
         </div>     
      </div>
      </Layout>
  
    );
  }
  




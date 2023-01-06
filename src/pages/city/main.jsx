import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import GalleryFeature from "./components/GalleryFeature"; 
import ReasonLeadRideFeature from "./components/ReasonLeadRideFeature"; 
import StepperCitySimple from "./components/StepperCitySimple";
import CityThemes from "./components/CityThemes";

export default function MainPage() {
  const myStyle1 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80')",
  };

  const myStyle2 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1631860995319-c6f47760d2a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80')",
  };
  
  const myStyle3 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1642428899339-db778a4af19a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
  };

  const myStyle4 = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80')",
  };
  
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <div>
        <div>
          <main>
            <section className="bg-white dark:bg-gray-900">
              <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-blue-600 dark:text-white">
                    Building happy and healthy cities <br></br>{" "}
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-700">
                    Lead ride aims to transform your relationship with people
                    and cities by cycling together. Lead Ride connects critical
                    stakeholders in the ecosystem and enables active mobility by
                    multiple interventions .
                  </p>
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a
                      href="https://github.com/themesberg/landwind"
                      className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                      Sign up for lead ride
                    </a>
                    <Link
                      href="https://www.figma.com/community/file/1125744163617429490"
                      className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 300"
                        width="1667"
                        height="2500"
                      >
                        <title>Playbook</title>
                        <desc>Created using Figma</desc>
                        <path
                          id="path0_fill"
                          className="st0"
                          d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                        />
                        <path
                          id="path1_fill"
                          className="st1"
                          d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                        />
                        <path
                          id="path1_fill_1_"
                          className="st2"
                          d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                        />
                        <path
                          id="path2_fill"
                          className="st3"
                          d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
                        />
                        <path
                          id="path3_fill"
                          className="st4"
                          d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                        />
                      </svg>{" "}
                      Get Figma file
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <img
                    src="https://images.unsplash.com/photo-1565963014685-7fca4251962e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80"
                    alt="hero image"
                  ></img>
                </div>
              </div>
            </section>

            <ReasonLeadRideFeature></ReasonLeadRideFeature>

            {/* A JSX comment 
       
       <div className="p-5 sm:px-10 md:px-20" id="companies">
          <div className="max-w-screen-xl mx-auto">
            <img className="mx-auto" src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png"></img>
          </div>
        </div>
        */}

            <div
              className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100"
              id="features"
            >
              <div className="max-w-screen-xl mx-auto">
             
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"> 
                 Lead Ride  <br></br> How it works </h1>

            <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>

                <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
                  <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                    <div className="p-4 inline-block bg-indigo-200 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                        />
                      </svg>
                    </div>
                    <div className="mt-4 font-extrabold text-2xl tracking-wide">
                      Envision
                    </div>
                    <div className="text-sm">
                      Lead Ride maps the critical players in the active mobility
                      and creates a consortium with working groups to contribute
                      and commit to enable Active Mobility. Lead Ride in
                      association with the city envisions programs and projects
                      to demonstrate success.
                    </div>
                  </div>

                  <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                    <div className="p-4 inline-block bg-green-200 rounded-lg">
                      <svg
                        className="text-green-500 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <div className="mt-4 font-extrabold text-2xl tracking-wide">
                      Align
                    </div>
                    <div className="text-sm">
                      The city commits the funding for the program. <br></br>The
                      city facilitates relevant organizational and the resources
                      required for the enablement of Lead Ride.
                      <br></br> The city ensures stakeholder alignment.{" "}
                      <br></br>Identify capability gaps and cross-organizational
                      dependencies.
                    </div>
                  </div>

                  <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                    <div className="p-4 inline-block bg-red-200 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                        />
                      </svg>
                    </div>
                    <div className="mt-4 font-extrabold text-2xl tracking-wide">
                      Launch
                    </div>
                    <div className="text-sm">
                      City & NNCF & Stakeholders jointly organize the Lead Ride
                      on World Cycle Day June 3.
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>

              <br></br>
             
                <StepperCitySimple></StepperCitySimple>
         
            </div>
            <div
              className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-gray-100"
              id="cards"
            >
              <div className="max-w-screen-xl mx-auto">
                <h3 className="leading-none font-black text-3xl">
                  Lead Ride City - Structure
                </h3>

                <div className="lg:flex justify-between lg:mt-8">
                  <div className="lg:mx-2 flex flex-col items-center">
                    <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                      <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                        <div className="text-lg font-bold text-gray-700 leading-tight">
                          Structure
                        </div>
                        <div>
                          <div className="flex justify-between mt-6 text-xs font-bold">
                            <div className="flex items-start">
                              <svg
                                className="text-gray-400 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span className="ml-1 text-gray-500">
                                City Champions
                              </span>
                            </div>

                            <div className="flex items-start ml-4">
                              <svg
                                className="text-gray-400 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="2"
                                  y="7"
                                  width="20"
                                  height="14"
                                  rx="2"
                                  ry="2"
                                />
                                <path
                                  xmlns="http://www.w3.org/2000/svg"
                                  d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                />
                              </svg>
                              <span className="ml-1 text-gray-500">
                                Consortium
                              </span>
                            </div>
                          </div>
                          <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-green-200 text-green-600">
                              Buddy Network
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                              {" "}
                              Stakeholders
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                              City Leadership
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                              Lead Ride team{" "}
                            </span>
                          </div>
                          <div className="mt-12 flex items-center">
                            <div
                              className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
                              alt=""
                            ></div>
                            <div className="ml-5">
                              <div className="font-bold text-gray-800">
                                Enable active mobility
                              </div>
                              <div className="text-xs text-gray-500">
                                by cycling together
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:mx-2 flex flex-col items-center">
                    <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                      <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                        <div className="text-lg font-bold text-gray-700 leading-tight">
                          Delivery
                        </div>
                        <div>
                          <div className="flex justify-between mt-6 text-xs font-bold">
                            <div className="flex items-start">
                              <svg
                                className="text-gray-400 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span className="ml-1 text-gray-500">
                                Your city
                              </span>
                            </div>

                            <div className="flex items-start ml-4">
                              <svg
                                className="text-gray-400 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="2"
                                  y="7"
                                  width="20"
                                  height="14"
                                  rx="2"
                                  ry="2"
                                />
                                <path
                                  xmlns="http://www.w3.org/2000/svg"
                                  d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                />
                              </svg>
                              <span className="ml-1 text-gray-500">
                                World Cycle Day June 3{" "}
                              </span>
                            </div>
                          </div>
                          <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                              Communication{" "}
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                              Information
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                              {" "}
                              Operation{" "}
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                              Experiences
                            </span>
                          </div>
                          <div className="mt-12 flex items-center">
                            <div
                              className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
                              alt=""
                            ></div>
                            <div className="ml-4">
                              <div className="font-bold text-gray-800">
                                World cycle day
                              </div>
                              <div className="text-xs text-gray-500">
                                Bicycle Momentum - begin the movement
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:mx-2 flex flex-col items-center">
                    <div className="flex-1 flex w-full max-w-sm pt-16 lg:pt-0">
                      <div className="w-full p-8 sm:p-12 lg:px-8 xl:px-12 shadow-lg rounded bg-gray-100 relative">
                        <div className="text-lg font-bold text-gray-700 leading-tight">
                          Design Events & Spaces
                        </div>
                        <div>
                          <div className="flex justify-between mt-6 text-xs font-bold">
                            <div className="flex items-start">
                              <svg
                                className="text-gray-400 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                              </svg>
                              <span className="ml-1 text-gray-500">
                                Your city
                              </span>
                            </div>

                            <div className="flex items-start ml-4">
                              <svg
                                className="text-gray-400 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="2"
                                  y="7"
                                  width="20"
                                  height="14"
                                  rx="2"
                                  ry="2"
                                />
                                <path
                                  xmlns="http://www.w3.org/2000/svg"
                                  d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                />
                              </svg>
                              <span className="ml-1 text-gray-500">
                                Branding{" "}
                              </span>
                            </div>
                          </div>
                          <div className="text-center flex flex-row justify-between flex-wrap justify-between items-center text-xs font-bold">
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-yellow-200 text-yellow-600">
                              Participatory Design
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-indigo-200 text-indigo-600">
                              Human Centered Design
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-blue-200 text-blue-600">
                              {" "}
                              Place Making
                            </span>
                            <span className="w-5/12 mt-6 mx-1 p-1 rounded bg-purple-200 text-purple-600">
                              Active Mobility Integration{" "}
                            </span>
                          </div>
                          <div className="mt-12 flex items-center">
                            <div
                              className="w-16 h-16 bg-cover rounded-full border-2 border-gray-700"
                              alt=""
                            ></div>
                            <div className="ml-4">
                              <div className="font-bold text-gray-800">
                                Design for Impact
                              </div>
                              <div className="text-xs text-gray-500">
                                Transforming Spaces by collective intelligence
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100"
              id="blog-posts"
            >
              <div className="max-w-screen-xl mx-auto">
                <div className="xl:flex">
                  <div>
                    <h3 className="leading-none font-black text-3xl">
                      Lead ride - A Catalyst
                    </h3>
                    Dedicated to creating a more equitable and sustainable world
                    by Cycling Together.
                    <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                      <a
                        href="#"
                        className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8"
                      >
                        <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                          <div
                            className="w-full h-48 bg-cover rounded-t-lg"
                            style={myStyle1}
                          ></div>
                          <div className="p-6">
                            <div className="text-lg font-bold">
                              Public Health
                            </div>
                            <div className="mt-2 text-gray-900 text-sm">
                              Cities will be significantly improve the health of
                              the citizens with Lead Ride Awareness and
                              Activation Framework.
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://timerse.com"
                        className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8"
                      >
                        <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                          <div
                            className="w-full h-48 bg-cover rounded-t-lg"
                            style={myStyle2}
                          ></div>
                          <div className="p-6">
                            <div className="text-lg font-bold">
                              Urban Mobility
                            </div>
                            <div className="mt-2 text-gray-900 text-sm">
                              Boosting Active mobility Integration with Public
                              Transport will reduce traffic - save money and
                              enhance the branding of the city.
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-12 xl:mt-0 xl:ml-8">
                    <h3 className="leading-none font-black text-3xl">
                      Sustainable mobility Innovation
                    </h3>
                    <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col">
                      <a href="#" className="flex w-full max-w-sm mt-6 lg:mt-8">
                        <div
                          className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                        >
                          <div
                            className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"
                            style={myStyle3}
                          ></div>
                          <div className="p-6 xl:p-0">
                            <div className="text-lg font-bold">
                              Active Mobility Innovation
                            </div>
                            <div className="mt-2 text-gray-900 text-sm ">
                              Augment the work of design and innovation in
                              Cycling and E-bikes.
                            </div>
                          </div>
                        </div>
                      </a>

                      <a href="#" className="flex w-full max-w-sm mt-6 lg:mt-8">
                        <div
                          className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                    bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8"
                        >
                          <div
                            className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"
                            style={myStyle4}
                          ></div>
                          <div className="p-6 xl:p-0">
                            <div className="text-lg font-bold">
                              Holistic and Systemic approach{" "}
                            </div>
                            <div className="mt-2 text-gray-900 text-sm  ">
                              Streamlined approach to Active Mobility futures by
                              System Thinking and People Integration
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </main>
        </div>
      </div>
    </Layout>
  );
}

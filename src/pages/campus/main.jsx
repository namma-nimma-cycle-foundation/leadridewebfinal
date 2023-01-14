import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import ReasonLeadRideCampusFeature from "./components/ReasonLeadRideCampusFeature"; 
import StepperCampusSimple from "./components/StepperCampusSimple";
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
              <div className="grid max-w-screen-xl px-4 pt-20 pb-3 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-18">
                <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-blue-600 dark:text-white">
                  Energise, refocus and develop wellbeing in your students <br></br>{" "}
                  </h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-700">
                  Create a wellness  movement to  create happy and healthy student community                  </p>
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
                       Pathways for Engagement
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1612006564829-34fd2219e8e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""></img>

                </div>
              </div>
            </section>

            <ReasonLeadRideCampusFeature></ReasonLeadRideCampusFeature>

            {/* A JSX comment 
       
       <div className="p-5 sm:px-10 md:px-20" id="companies">
          <div className="max-w-screen-xl mx-auto">
            <img className="mx-auto" src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png"></img>
          </div>
        </div>
        */}

            <div className="px-5 sm:px-3 md:px-3 lg:px-3 xl:px-3 py-8 bg-blue-300"  id="features">
              <div className="max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"> 
                 Lead Ride Campus  <br></br> How it works </h1>

            <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
            </div>

                <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
                
 
                </div>
              </div>
              
             
                <StepperCampusSimple></StepperCampusSimple>
         
            </div>
            

            <div
              className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-yellow-100"
              id="blog-posts"
            >
              <div className="max-w-screen-xl mx-auto">
                <div className="xl:flex">
                  <div>
                    <h3 className="leading-none font-black text-3xl">
                      Lead Ride Campus- A Catalyst
                    </h3>
                    Cycling Together to make students life green.
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
                              Student Wellbeing
                            </div>
                            <div className="mt-2 text-gray-900 text-sm">
                              Students  will be significantly improving the health and fitness
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
                              Sustainable Campus
                            </div>
                            <div className="mt-2 text-gray-900 text-sm">
                              
                              Enhance the branding of the campus - measure and mitigate emission on campus.
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-12 xl:mt-0 xl:ml-8">
                    <h3 className="leading-none font-black text-3xl">
                      Sustainable Mobility Innovation
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
                              Deploy sustainability solutions for students to be competetent.
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
                              Green Jobs & Entrepeunership{" "}
                            </div>
                            <div className="mt-2 text-gray-900 text-sm  ">
                              Green Jobs that fit into the  Active Mobility futures by showcasing the technologies and possibilities.
                              
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

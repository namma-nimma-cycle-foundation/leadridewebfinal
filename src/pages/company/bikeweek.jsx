 
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link'; 

export const Header = () => {
  return (
    <div>
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <div className="relative z-30 p-5 text-2xl text-white bg-blue-700 bg-opacity-50 rounded-xl">
Bike Week    </div>
    <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
      <source src="/static/videos/bikeweek.mp4" type="video/mp4" />Your browser does not support the video tag.
    </video>
  </header>
  <div className="max-w-lg m-auto">
     
  </div>
  </div>


  );
};

export const Feature = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Bike Week
        <span className="text-blue-500"> What Can you expect ?</span></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-blue-700 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 className="text-2xl font-semibold  text-white capitalize dark:text-white">Engage - with Employees</h1>

                <p className="text-white dark:text-gray-300">
                Bike Week is an event which seeks to raise awareness of the benefits of cycling and aims to get people on their bikes.                </p>

              
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-blue-700 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">Explore Cycling Universe  </h1>

                <p className="text-white dark:text-gray-300">
                chance for people to come out and get riding, with community groups,  combining exploration of the world of cycling                 </p>

            
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-blue-700  rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-2xl font-semibold  text-white capitalize dark:text-white">Encourage - cycling </h1>

                <p className="text-white  dark:text-gray-300">
                Imagine how your community could look if everyone cycled, how much quieter it could be, how much cleaner it could be,
                 how much happier people could be. Lead Ride helps you to  make this a reality. 

</p>

            
            </div>
        </div>
    </div>
</section>
  );
};


export const Feature2 = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Active Mobility Importance</h1>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Climate Change</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                        A switch of one journey per day reduces a person’s carbon footprint by approximately 0.5 tonnes over a year – your climate:                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Health</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Cycling to work can mean you have a 45% lower risk of developing cancer, and a 46% lower risk of cardiovascular disease – your health;  Lead Ride Today                          </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Liveable City</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt=""></img>
            </div>
        </div>


        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                  </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
             </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
             </div>

            <div className="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
              </div>
        </div>
    </div>
</section>

  );
};
export default function CompanyTourPage() {
   
  
    return (

        <Layout
        description="Real-time audio & video SDKs, ready to launch 🚀"
        wrapperClassName="homepage flex flex-col"
        noFooter
      >
      <div>
  

  <div>
  <Header></Header>
  
  <Feature></Feature> 

  <Feature2></Feature2> 


</div>     
      </div>
      </Layout>
  
    );
  }
  



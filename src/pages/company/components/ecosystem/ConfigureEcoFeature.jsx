
import React from 'react';   

import './ecosystem.css'; // Tell webpack that Button.js uses these styles


export default function ConfigureEcoFeature() {
   
  
    return (
  


      <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div className="lg:col-start-2">
         <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Configuring</h3>
         <p className="mt-3 text-lg dark:text-gray-400"> What kind of partners do you need and why? What capabilities does each of the partners bring to the table?
            How will these partners interact with each other? What is the governance structure going to look like? How will these partners be attracted? What motivates them? In what order should they be onboarded?
         </p>
         <div className="mt-12 space-y-12">
            <div className="flex">
               <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                     </svg>
                  </div>
               </div>
               <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Simplifying</h4>
                  <p className="mt-2 dark:text-gray-400"> Sectors and partners. the lead ride ecosystem is cross-sectoral - 
                     we need to be  selecting, connecting, and leveraging the relevant resources and knowledge to manage the transformation of the city.
                  </p>
               </div>
            </div>
            <div className="flex">
               <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                     </svg>
                  </div>
               </div>
               <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Structuring</h4>
                  <p className="mt-2 dark:text-gray-400">Defining and executing each step on the road to achieving a project’s objectives, while allowing for flexibility and sensitivity to changing circumstances..</p>
               </div>
            </div>
            <div className="flex">
               <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                     </svg>
                  </div>
               </div>
               <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Sign Off </h4>
                  <p className="mt-2 dark:text-gray-400"> Sign off - Lead Ride with a Pledge and a Commitment to &quot;Ride Safe &quot; </p>
               </div>
            </div>
         </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
     

      <img  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              src={`/static/ecosystem/icons.gif`}
              alt="Plugin SDK Usage Preview"
            ></img>
      </div>
   </div>



);
  };
  
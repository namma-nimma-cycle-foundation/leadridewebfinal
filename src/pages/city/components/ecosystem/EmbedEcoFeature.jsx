
import React from 'react';   

import './ecosystem.css'; // Tell webpack that Button.js uses these styles


export default function EmbedEcoFeature () {
   
  
    return (
  


      <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div className="lg:col-start-2">
         <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Embedding Culture </h3>
         <p className="mt-3 text-lg dark:text-gray-400">    culture matters for transport policy: build the culture with 1% change in the habits.
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
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Embracing</h4>
                  <p className="mt-2 dark:text-gray-400"> Culture and behaviours to be demonstrated, by the leaders.  Stimulating widespread organizational commitment to strategic outcomes, and to the design approach utilised during the project.
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
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Educating</h4>
                  <p className="mt-2 dark:text-gray-400"> Encourage a culture where everyone cycles  together - creating lasting impact by teaching the ins and outs of design, and thus building design capacity within organizations.</p>
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
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Evangelizing</h4>
                  <p className="mt-2 dark:text-gray-400">Continous  Advocacy, Continous Community engagement, Lasting Design Impact Through Capacity Building.</p>
               </div>
            </div>
         </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
         
         <img  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              src={`/static/ecosystem/embed.png`}
              alt="Plugin SDK Usage Preview"
            ></img>
      </div>
   </div>



);
  };
  
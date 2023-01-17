
import React from 'react';   

import './ecosystem.css'; // Tell webpack that Button.js uses these styles


export default function EnvisionEcoFeature() {
   
  
    return (
  


        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
        <div>
           <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Setting objectives </h3>
           <p className="mt-3 text-lg dark:text-gray-400"> A bold vision for cycling and walking</p>
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
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Envision </h4>
                    <p className="mt-2 dark:text-gray-400"> Healthier, happier and
greener communities - Safer streets- Convenient and
accessible travel</p>
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
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Inspire</h4>
                    <p className="mt-2 dark:text-gray-400"> Actions, not just words.  Sets out the actions required at all levels of society to make this vision a reality,</p>
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
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Communicate</h4>
                    <p className="mt-2 dark:text-gray-400"> Walking and Bikers belong here. Communicate about Context, Structure, Goals - Spark Motivation , Make your presence felt</p>
                 </div>
              </div>
           </div>
        </div>
        <div aria-hidden="true" className="mt-10 lg:mt-0">
          
           <img  className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
              src={`/static/ecosystem/boldvision.png`}
              alt="Plugin SDK Usage Preview"
            ></img>
        </div>
     </div>



);
  };
  
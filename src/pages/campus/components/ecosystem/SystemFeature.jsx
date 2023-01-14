
import React from 'react';   

import './ecosystem.css'; // Tell webpack that Button.js uses these styles
import EcosystemHeader from "./EcosystemHeader";
import EnvisionEcoFeature from "./EnvisionEcoFeature"
import ConfigureEcoFeature from "./ConfigureEcoFeature"
import AlignEcoFeature from "./AlignEcoFeature"
import EmbedEcoFeature from "./EmbedEcoFeature"


export default function SystemFeature() {
   
  
    return (
  


        <div className="dark:bg-gray-800 dark:text-gray-100">
        <EcosystemHeader/>
       
        <div>
           <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
              <div>
                 <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50"> Lead Ride Ecosystem Design </h2>
                 <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
                    The new ecosystem design will need to start with the citizens  view and deliver on the &quot;move people first&quot;
                    value proposition and experience..</p>
              </div>
              <EnvisionEcoFeature></EnvisionEcoFeature>
              <ConfigureEcoFeature></ConfigureEcoFeature>
              <AlignEcoFeature></AlignEcoFeature>
              <EmbedEcoFeature></EmbedEcoFeature>
           </div>
        </div>
     </div>



);
  };
  
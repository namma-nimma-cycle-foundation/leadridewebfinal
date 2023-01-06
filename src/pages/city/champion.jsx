 
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import FeatureBuddy from './components/FeatureBuddy';
export default function ChampionPage() {
   
  
    return (

        <Layout
        description="Real-time audio & video SDKs, ready to launch 🚀"
        wrapperClassName="homepage flex flex-col"
        noFooter
      >
      <div>
  

  <div>
 
 <section className="mb-40">
    

   <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
     <div className="container mx-auto xl:px-32">
       <div className="grid lg:grid-cols-2 gap-12 flex items-center">
         <div className="mt-12 lg:mt-0">
           <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Lead Ride Champion <br /><span className="text-blue-600">for enabling Active Mobility</span></h1>
           <h3 className="leading-none font-black text-3xl">
          leading and championing  the transformation to a cleaner, safer, healthier city
                    </h3>  <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                   
          
         </div>
         <div className="mb-12 lg:mb-0">
           <img
             src="https://images.ctfassets.net/pjshm78m9jt4/2QwrpzbV1AAERPXS1dd9hL/597ec9af45fd53a27a2ffe2001836645/2.54705102.jpg"
             className="w-full rounded-lg shadow-lg"
             alt=""
           />
         </div>
         
       </div>
     </div>
   </div>
 </section> 

<FeatureBuddy></FeatureBuddy>
</div>     
      </div>
      </Layout>
  
    );
  }
  



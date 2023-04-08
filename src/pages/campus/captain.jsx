 
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import FeatureCaptain from './components/FeatureCaptain';
import CaptainStepsFeature from './components/CaptainStepsFeature';
export default function CaptainPage() {
   
  
    return (

        <Layout
        description="Lead Ride - Cycling Together 🚴🏻"
        wrapperClassName="homepage flex flex-col"
        noFooter
      >
      <div>
  

  <div>
 
 <section  >
    

   <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
     <div className="container mx-auto xl:px-32">
       <div className="grid lg:grid-cols-2 gap-12 flex items-center">
         <div className="mt-12 lg:mt-0">
           <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Lead Ride Captain <br /><span className="text-blue-600">for Campus</span></h1>
           <a className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
           <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
         </div>
         <div className="mb-12 lg:mb-0">
           <img
             src="https://images.unsplash.com/photo-1506809597993-2bfd54686d37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
             className="w-full rounded-lg shadow-lg"
             alt=""
           />
         </div>
         
       </div>
     </div>
   </div>
 </section> 

 <CaptainStepsFeature></CaptainStepsFeature>
<FeatureCaptain></FeatureCaptain>
</div>     
      </div>
      </Layout>
  
    );
  }
  



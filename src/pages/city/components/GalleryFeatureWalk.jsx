
import React from 'react';   

  

export default function GalleryFeatureWalk() {
   
  
    return (
  
  
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
    
    

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
  
      <a href="#" className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="https://img.freepik.com/free-vector/public-city-transport-isometric-flowchart-with-images-different-municipal-private-vehicles-with-text-captions_1284-27299.jpg?w=2000" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <span className="inline-block text-yellow-400  text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3"> Public Transport</span>
      </a>
      
      <a href="#" className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="https://img.freepik.com/free-vector/flat-public-transport-round-concept_1284-46935.jpg?w=2000" loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <span className="inline-block text-yellow-400 text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">Public Transport  & Active Mobility Integration</span>
      </a>
   
      <a href="#" className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <img src="https://www.edf-feph.org/content/uploads/2021/09/Public-transport-icons.jpg" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

        <span className="inline-block text-yellow-400  text-xs md:text-sm border border-gray-500 rounded-lg backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">Last Mile Connectivity</span>
      </a>
     
    </div>
  </div>
</div> 



);
  };
  
import React from 'react';   
import './ecosystem.css'; // Tell webpack that Button.js uses these styles
export default function EcosystemHeader() {
return (
<div className="dark:bg-gray-800 dark:text-gray-100">
   <div>
      <div className="ecosystem">
         <div className="circle"><a><span className="text-center">Lead Ride Ecosystem</span></a>
            <span>
            <img className="mt-3" src="/static/landing-page/sdk-icons/friends.png" height="50px" width="60px"></img>
            </span>
         </div>
         <div className="circle"><span className="text-center">Cycle Industry</span></div>
         <div className="circle"><span className="text-center">Urban Planning</span></div>
         <div className="circle"><span className="text-center">City Leadership</span></div>
         <div className="circle"><span className="text-center">Transport Planning </span></div>
         <div className="circle"><span className="text-center">Health Planning</span></div>
         <div className="circle"><span className="text-center">Active Travel & Tourism </span></div>
         <div className="circle"><span className="text-center">Cycle Sports </span></div>
      </div>
   </div>
</div>
);
};
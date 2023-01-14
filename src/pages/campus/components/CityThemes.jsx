import React from "react";
export default function CityThemes() {

 

    return ( 
    
     
<div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src="https://www.bbvaopenmind.com/wp-content/uploads/2017/01/city-3047722.jpeg" className="w-full relative z-10" alt=""></img>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5">Themes  <br></br>for the future cities</h1>
                    <p className="text-sm">  We explore multiple themes for future cities - which will be cycling and walking </p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                      
                      
                    </div>
                    <br>
                    </br>
                    <div className="inline-block align-bottom">
                        <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i>Join Lead Ride Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};
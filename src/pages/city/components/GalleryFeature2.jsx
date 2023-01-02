 
import React from 'react';  

export default function GalleryFeature2() {
  const myStyle1={
    backgroundImage: 
"url('https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80')",
   
};
  
    return (
  
   
<div className="flex justify-center">
<div className="flex flex-col lg:flex-row items-center max-w-7xl w-[90%] m-4">
    <div style={myStyle1} 
        className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
            <div className="flex flex-col items-center justify-center p-2 text-red-100">
                <div className="font-bold text-lg m-2 mt-[30%]"> <a href="">Everything has beauty, but not everyone sees
                        it.</a></div>
                <div className=" m-2 text-sm"><a href="">There is no one definition of beauty. Beauty standards vary
                        from culture to culture and change over time. In Western cultures, beauty standards have
                        traditionally been based on ideals of youth and femininity. </a></div>
            </div>
        </div>
    </div>
    <div style={myStyle1} 
        className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
            <div className="flex flex-col items-center justify-left p-10 text-white">
                <div className="font-bold text-lg m-2 mt-[30%]">  There is no Wi-Fi in the forest, but I
                        promise you will find a better connection </div>
                <div className=" m-2 text-sm"> There is something about mountains that is both humbling and
                        invigorating. Their very presence seems to demand respect and even a certain amount of
                        reverence. </div>
            </div>
        </div>
    </div>
    <div style={myStyle1} 
        className="bg-no-repeat bg-cover bg-center lg:bg-left flex flex-col w-[90%] lg:w-[40%] h-96 m-2 brightness-110 hover:brightness-90 ">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
            <div className="flex flex-col items-center justify-center p-2 text-gray-300">
                <div className="font-bold text-lg m-2 mt-[30%]"> <a href="">The twinkle in your eyes is light the
                        brightest stars on the clearest night.</a></div>
                <div className=" m-2 text-sm"><a href="">There is something magical about the universe. It is so vast
                        and mysterious, and it is always expanding. Every day, we are learning more about it and
                        discovering new things.</a></div>
            </div>
        </div>
    </div>
</div>
</div>
 

);
  };
  
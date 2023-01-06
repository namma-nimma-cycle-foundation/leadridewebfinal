import React from 'react'; 
import { useColorMode } from '@docusaurus/theme-common'; 

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component  {
  render() {
      return (
          <Carousel>
             <div>
                  <img src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1672680222/leadride/homepage/2_bcj0mu.png" width={960} />
                 
                  <a className="legend"   href="/leadride" >
                  Cities Join Here 
                                         </a> 
              </div>
               <div>
                  <img src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1672680222/leadride/homepage/3_mixj5u.png" />
                
                  <a className="legend"   href="/docs/she-cycles/vision" >
                        Institutions Join Here
                        </a> 
              </div>

              <div>
                  <img src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1672680222/leadride/homepage/4_anbsh8.png" />
                                  
                        <a className="legend"   href="/bob" >
                          Companies Join here
                        </a> 
              </div>           
             
          </Carousel>
      );
  }
}; 
export default function HeroSection() {
   

  return (
    <div>

<DemoCarousel /> 
  
    </div>

  );
}

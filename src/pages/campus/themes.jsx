import React from "react";
import Layout from "@theme/Layout"; 
import CampusGalleryFeature2 from "./components/CampusGalleryFeature2";    
import CampusGalleryFeatureWalk from "./components/CampusGalleryFeatureWalk"
import FashionGalleryFeature from "./components/FashionGalleryFeature";
export default function ThemePage() {
   
  
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <div>
        <div>
          <main> 
           
            <CampusGalleryFeature2></CampusGalleryFeature2> 
            <CampusGalleryFeatureWalk></CampusGalleryFeatureWalk>
            <FashionGalleryFeature></FashionGalleryFeature>
          </main>
        </div>
      </div>
    </Layout>
  );
}

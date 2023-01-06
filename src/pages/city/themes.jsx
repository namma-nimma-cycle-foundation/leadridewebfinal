import React from "react";
import Layout from "@theme/Layout"; 
import GalleryFeature from "./components/GalleryFeature";  
import CityThemes from "./components/CityThemes";
import GalleryFeatureWalk from "./components/GalleryFeatureWalk";

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
            <CityThemes></CityThemes>
            <GalleryFeature></GalleryFeature>
            <GalleryFeatureWalk></GalleryFeatureWalk>
          </main>
        </div>
      </div>
    </Layout>
  );
}

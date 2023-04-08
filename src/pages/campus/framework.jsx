import React from "react";
import Layout from "@theme/Layout";  
import FrameworkHero from "./components/FrameworkHero";
export default function FrameworkPage() {
   
  
  return (
    <Layout
      description="Lead Ride - Cycling Together 🚴🏻"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <div>
        <div>
          <main> 
           
            <FrameworkHero></FrameworkHero>  
          </main>
        </div>
      </div>
    </Layout>
  );
}

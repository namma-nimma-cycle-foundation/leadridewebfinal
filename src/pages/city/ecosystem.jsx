import React from "react";
import Layout from "@theme/Layout";  
import SystemFeature from "./components/ecosystem/SystemFeature";

export default function EcosystemPage() {
   
  
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <div>
        <div>
          <main> 
        
          <SystemFeature></SystemFeature>
          </main>
        </div>
      </div>
    </Layout>
  );
}

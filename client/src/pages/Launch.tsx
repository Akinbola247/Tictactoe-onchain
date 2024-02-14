import React from "react";
import Layout from "../components/Layout";
import Sidepan from "../components/Sidepan";
import Infoboard from "../components/Infoboard";

const Launch = () => {
  return (
    <Layout>
    <div className="bg-[#DDDEF1] w-[100%] h-[1000px]">
          <div className="flex space-x-4 w-[90%] mx-auto h-[100%]">
            <Sidepan />
            <Infoboard />
      </div>
    </div>
  </Layout>
  );
};

export default Launch;

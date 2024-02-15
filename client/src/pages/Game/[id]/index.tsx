import React from "react";
import Tictactoe from "../../Tictactoe";
import Layout from "../../../components/Layout";

const Gamepage = () => {
  return (
    <Layout>
      <div className="bg-[#DDDEF1] w-[100%] md:h-screen">
        <Tictactoe />
      </div>
    </Layout>
  );
};

export default Gamepage;

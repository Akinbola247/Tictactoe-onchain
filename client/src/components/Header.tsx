/* eslint-disable no-unsafe-optional-chaining */
import React from "react";
import frame from "../assets/Frame202.png";
import "../index.css";
import { IoRocketSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDojo } from "../DojoContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const {
    setup: {
      systemCalls: { initiate, spawnavatar, registerPlayer, restart },
      components: { Moves, Board, Game, Gate, Players, Fixed },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();

  // const address = isDeploying ? "deploying burner" : (list()[0]?.address?.toString()?.slice(0, 9) || "0x0");
  const handleDeploy = () => {
    // if(list()[0]?.address?.toString() != ''){
    //   toast.error('burner already deployed')
    // }else {
    create();
    toast("Burner deployed");
    // }
  };
  return (
    <div className="w-[100%] border border-b-[#000000] py-4">
      <ToastContainer />

      <div className="flex flex-row gap-2 md:gap-0 md:flex-row justify-between items-center md:w-[85%] mx-auto">
        <Link to={"/"}>
          <div className="flex w-[200px] my-[10px]">
            <img src={frame} alt="logo" />
          </div>
        </Link>
        <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
          <h1 className="press text-[12px]">About us</h1>

          <div
            className="flex space-x-1 bg-[#FF3D00] w-[160px] h-[40px] border border-[#000000] rounded-lg items-center p-2"
            onClick={handleDeploy}
          >
            <IoRocketSharp className="text-[#FFFFFF]" />
            <h1 className="press text-[9px] text-[#FFFFFF] w-[100%] cursor-pointer">
              Deploy burner
            </h1>
          </div>

          <div className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2">
            <h1 className="press text-[10px] text-[#FF3D00] flex mx-auto">
              {" "}
              {(account?.address).slice(0, 6) ?? "0x0"}
            </h1>
          </div>
          <div className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2">
            <button
              onClick={clear}
              className="press text-[8px] text-center text-[#FF3D00] flex mx-auto"
            >
              clear burners
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// onClick={create}

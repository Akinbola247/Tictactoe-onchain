/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from "react";
import frame from "../assets/Frame202.png";
import "../index.css";
import { IoRocketSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDojo } from "../DojoContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect, disconnect } from "get-starknet";
import openIcon from "../assets/icon.png";

const Header = () => {
  const [connection, setConnection] = useState<any>("");
  const [accounte, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const starknetConnect = async () => {
      const connection = await connect();
      if (connection && connection.isConnected) {
        setConnection(connection);
        setAccount(connection.account);
        setAddress(connection.selectedAddress);
      }
    };
    if (!accounte) {
      starknetConnect();
    }
  }, []);

  const connectWallet = async () => {
    const connection = await connect();

    if (connection && connection.isConnected) {
      setConnection(connection);
      setAccount(connection.account);
      setAddress(connection.selectedAddress);
    }
  };

  const disconnectWallet = async () => {
    await disconnect();
    setConnection(undefined);
    setAddress("");
  };
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

      <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center md:w-[85%] mx-auto">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex w-[200px] my-[10px]">
              <img src={frame} alt="logo" />
            </div>
          </Link>
          <div className="md:hidden" onClick={() => setShow(!show)}>
            <img src={openIcon} alt="icon" width={40} height={40} />
          </div>
        </div>
        {show ? (
          <div className="flex flex-col items-center md:gap-4">
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
              {connection ? (
                <div
                  onClick={disconnectWallet}
                  className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2"
                >
                  <h1 className="press text-[10px] text-[#FF3D00] flex mx-auto">
                    {" "}
                    Disconnect
                  </h1>
                </div>
              ) : (
                <div
                  onClick={connectWallet}
                  className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2"
                >
                  <h1 className="press text-[10px] text-center text-[#FF3D00] flex mx-auto">
                    Connect Wallet
                  </h1>
                </div>
              )}

              <div className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2">
                <button
                  onClick={clear}
                  className="press text-[8px] text-center text-[#FF3D00] flex mx-auto"
                >
                  clear burners
                </button>
              </div>
            </div>
            {connection && (
              <span className="font-bold">
                Connected Address: {address.slice(0, 8) ?? "0x0"}
              </span>
            )}
          </div>
        ) : (
          <div className="hidden md:flex flex-col items-center md:gap-4">
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
              {connection ? (
                <div
                  onClick={disconnectWallet}
                  className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2"
                >
                  <h1 className="press text-[10px] text-[#FF3D00] flex mx-auto">
                    {" "}
                    Disconnect
                  </h1>
                </div>
              ) : (
                <div
                  onClick={connectWallet}
                  className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2"
                >
                  <h1 className="press text-[10px] text-center text-[#FF3D00] flex mx-auto">
                    Connect Wallet
                  </h1>
                </div>
              )}

              <div className="flex w-[140px] border border-[#FF3D00] h-[40px]  rounded-lg items-center p-2">
                <button
                  onClick={clear}
                  className="press text-[8px] text-center text-[#FF3D00] flex mx-auto"
                >
                  clear burners
                </button>
              </div>
            </div>
            {connection && (
              <span className="font-bold">
                Connected Address: {address.slice(0, 8) ?? "0x0"}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

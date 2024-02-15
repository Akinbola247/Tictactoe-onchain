import React, { useEffect, useState } from "react";
import purple from "../assets/purple.png";
import blue from "../assets/blue.png";
import yellow from "../assets/yellow.png";
import zero from "../assets/zero.png";
import ex from "../assets/ex.png";
import Register from "../components/Register";
import Creategame from "../components/Creategame";
import Chooseavatar from "../components/Chooseavatar";
import JoinChooseavatar from "../components/Joinchooseavatar";
import Joingame from "../components/Joingame";
import Result from "../components/Result";
import { useDojo } from "../DojoContext";
import { useAppContext } from "../context/Appcontext";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useComponentValue } from "@dojoengine/react";
import { Entity, Type } from "@dojoengine/recs";
import { MdContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CopyButtonProps {
  textToCopy: string;
}

const Tictactoe = () => {
  const [reg, setReg] = useState(true);
  const [playerAddress, setPlayerAddress] = useState("");
  const {
    setup: {
      systemCalls: {
        initiate,
        spawnavatar,
        registerPlayer,
        restart,
        getplayerdet,
        play,
        balance,
      },
      components: {
        Moves,
        Board,
        Response,
        Game,
        Ercbalance,
        Gate,
        Players,
        Fixed,
      },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();
  const {
    sharedavatar,
    setCreategame,
    creategame,
    avatardialog,
    sharedgameID,
    setjoindialog,
    joindialog,
    joinInputdilog,
    A1,
    A2,
    A3,
    B1,
    B2,
    B3,
    C1,
    C2,
    C3,
    setA1,
    setA2,
    setA3,
    setB1,
    setB2,
    setB3,
    setC1,
    setC2,
    setC3,
    resultdialog,
    setresultdialog,
    setwinningresult,
    playerone,
    playertwo,
  } = useAppContext();

  const moves = [];

  const handlecopyClick = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log(textToCopy);
      toast("Address copied");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // entity id we are syncing
  const entityId = getEntityIdFromKeys([BigInt(sharedgameID ?? 0)]) as Entity;
  // const entityIdtwo : Type.BigInt = BigInt(list()[0].address)
  const tokencontractaddress =
    "0x300629f97a13bfe0575f59dd966260496e97caf3ab1944698a1773b3867845";
  const playercontractaddress =
    "0x402bde05ceac555f7dc60d7d2dcba74ce1802359bd4d7e1efde3a3975a737cd";
  // const entityBalanceId = getEntityIdFromKeys([tokencontractaddress,playercontractaddress]) as Entity;

  const addressentityId = getEntityIdFromKeys([
    BigInt(tokencontractaddress),
    BigInt(playercontractaddress),
  ]) as Entity;

  // get current component values
  const boardstat = useComponentValue(Board, entityId);
  // console.log(boardstat)

  const response = useComponentValue(Response, entityId);
  // console.log(response)

  const ercbalance = useComponentValue(Ercbalance, addressentityId);
  console.log("balance is here", ercbalance);

  useEffect(() => {
    // balance(account,account?.address);
    if (boardstat?.a_1 == 88n) {
      setA1("X");
    }
    if (boardstat?.a_1 == 79n) {
      setA1("O");
    }
    if (boardstat?.a_2 == 88n) {
      setA2("X");
    }
    if (boardstat?.a_2 == 79n) {
      setA2("O");
    }
    if (boardstat?.a_3 == 88n) {
      setA3("X");
    }
    if (boardstat?.a_3 == 79n) {
      setA3("O");
    }
    if (boardstat?.b_1 == 88n) {
      setB1("X");
    }
    if (boardstat?.b_1 == 79n) {
      setB1("O");
    }
    if (boardstat?.b_2 == 88n) {
      setB2("X");
    }
    if (boardstat?.b_2 == 79n) {
      setB2("O");
    }
    if (boardstat?.b_3 == 88n) {
      setB3("X");
    }
    if (boardstat?.b_3 == 79n) {
      setB3("O");
    }
    if (boardstat?.c_1 == 88n) {
      setC1("X");
    }
    if (boardstat?.c_1 == 79n) {
      setC1("O");
    }
    if (boardstat?.c_2 == 88n) {
      setC2("X");
    }
    if (boardstat?.c_2 == 79n) {
      setC2("O");
    }
    if (boardstat?.c_3 == 88n) {
      setC3("X");
    }
    if (boardstat?.c_3 == 79n) {
      setC3("O");
    }
    if (
      boardstat?.a_1 != 0n &&
      boardstat?.a_2 != 0n &&
      boardstat?.a_3 != 0n &&
      boardstat?.b_1 != 0n &&
      boardstat?.b_2 != 0n &&
      boardstat?.b_3 != 0n &&
      boardstat?.c_1 != 0n &&
      boardstat?.c_2 != 0n &&
      boardstat?.c_3 != 0n &&
      boardstat != undefined
    ) {
      setwinningresult("DRAW");
      setresultdialog(true);
    }
    if (
      response?.gameresponse == 6361852863635204326893629820499n &&
      response != undefined
    ) {
      setwinningresult("PLAYER X WINS");
      setresultdialog(true);
    }
    if (
      response?.gameresponse == 6361852863635204316998025170515n &&
      response != undefined
    ) {
      setwinningresult("PLAYER 0 WINS");
      setresultdialog(true);
    }
    if (
      boardstat?.a_1 == 0n &&
      boardstat?.a_2 == 0n &&
      boardstat?.a_3 == 0n &&
      boardstat?.b_1 == 0n &&
      boardstat?.b_2 == 0n &&
      boardstat?.b_3 == 0n &&
      boardstat?.c_1 == 0n &&
      boardstat?.c_2 == 0n &&
      boardstat?.c_3 == 0n &&
      boardstat != undefined
    ) {
      setA1(null);
      setA2(null);
      setA3(null);
      setB1(null);
      setB2(null);
      setB3(null);
      setC1(null);
      setC2(null);
      setC3(null);
    }
    setPlayerAddress(account?.address);
  }, [boardstat, response, account?.address]);

  const handleA1 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 0, list()[0].address.toString());
      // setA1("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 0, list()[0].address.toString());
      // setA1("O");
    }
  };

  const handleA2 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 1, list()[0].address.toString());
      // setA2("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 1, list()[0].address.toString());
      // setA2("O");
    }
  };

  const handleA3 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 2, list()[0].address.toString());
      // setA3("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 2, list()[0].address.toString());
      // setA3("O");
    }
  };

  const handleB1 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 3, list()[0].address.toString());
      // setB1("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 3, list()[0].address.toString());
      // setB1("O");
    }
  };

  const handleB2 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 4, list()[0].address.toString());
      // setB2("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 4, list()[0].address.toString());
      // setB2("O");
    }
  };

  const handleB3 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 5, list()[0].address.toString());
      // setB3("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 5, list()[0].address.toString());
      // setB3("O");
    }
  };

  const handleC1 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 6, list()[0].address.toString());
      // setC1("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 6, list()[0].address.toString());
      // setC1("O");
    }
  };

  const handleC2 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 7, list()[0].address.toString());
      // setC2("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 7, list()[0].address.toString());
      // setC2("O");
    }
  };

  const handleC3 = async () => {
    console.log(sharedavatar);
    if (sharedavatar == "X") {
      await play(account, sharedgameID, 8, list()[0].address.toString());
      // setC3("X");
    } else if (sharedavatar == "O") {
      await play(account, sharedgameID, 8, list()[0].address.toString());
      // setC3("O");
    }
  };

  const handlerestart = async () => {
    restart(account, sharedgameID, playerone, playertwo);
    setresultdialog(false);
  };

  return (
    <>
      <div className="w-[100%] h-full bg-cover custom">
        <ToastContainer />
        {/* <Register /> */}
        {creategame && <Creategame />}
        {avatardialog && <Chooseavatar />}
        {joindialog && <Joingame />}
        {joinInputdilog && <JoinChooseavatar />}
        {resultdialog && <Result />}
        <div className="w-[90%] mx-auto pt-[8%] justify-center md:justify-end flex">
          <div className="press md:mt-0 flex flex-col gap-2 md:flex-row space-x-4 border border-[#000000]  rounded-xl w-[350px] justify-between p-3 items-center text-center">
            <div className="w-[35%] space-y-2">
              <h1 className="text-[14px]">Token</h1>
              <p className="text-[10px]">$345,096</p>
            </div>

            <div className="w-[35%] space-y-2">
              <h1 className="text-[14px]">Wallet</h1>
              <p
                className="text-[10px] flex space-x-2 cursor-pointer"
                onClick={() => handlecopyClick(account.address)}
              >
                <MdContentCopy style={{ width: "40px", height: "15px" }} />
                {playerAddress.slice(0, 6)}..
              </p>
            </div>

            <div className="w-[30%] space-y-2">
              <h1 className="text-[14px]">Avatar</h1>
              <p className="text-[10px]">
                {sharedavatar ? sharedavatar : "load"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[90%] space-x-10 my-4 mx-auto p-4">
          <div className="w-[30%] h-[80%] p-2 flex">
            <h1 className="press text-[14px] text-center">Moves</h1>

            <p className="nova text-[14px] text-center mt-2">
              {A1 === "X"
                ? "X played to A1"
                : A1 === "O"
                ? "O played to A1"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {" "}
              {A2 === "X"
                ? "X played to A2"
                : A2 === "O"
                ? "O played to A2"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {" "}
              {A3 === "X"
                ? "X played to A3"
                : A3 === "O"
                ? "O played to A3"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {" "}
              {B1 === "X"
                ? "X played to B1"
                : B1 === "O"
                ? "O played to B1"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {B2 === "X"
                ? "X played to B2"
                : B2 === "O"
                ? "O played to B2"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {B3 === "X"
                ? "X played to B3"
                : B3 === "O"
                ? "O played to B3"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {C1 === "X"
                ? "X played to B1"
                : C1 === "O"
                ? "O played to C1"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {C2 === "X"
                ? "X played to C2"
                : C2 === "O"
                ? "O played to C2"
                : null}
            </p>
            <p className="nova text-[14px] text-center mt-2">
              {C3 === "X"
                ? "X played to C3"
                : C3 === "O"
                ? "O played to C3"
                : null}
            </p>
          </div>
          <div className="flex w-[100%] h-[100%] space-x-12">
            <div className="w-[60%]">
              <div className="flex flex-col md:flex-row justify-between">
                <div
                  className="h-[50px] items-center flex cursor-pointer"
                  onClick={() => setCreategame(true)}
                >
                  <img src={purple} alt="purple" />
                  <h1 className="press text-[12px]">Create Game</h1>
                </div>
                <div
                  className="flex h-[50px] items-center cursor-pointer"
                  onClick={() => handlerestart()}
                >
                  <img src={yellow} alt="yellow" />
                  <h1 className="press text-[12px]">Restart Game</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-4 md:items-center md:gap-8 h-[100%] px-2 my-4 md:my-0">
          <div className="md:w-[500px] flex flex-col md:mx-auto md:h-[500px] border-[8px] h-[300px] border-[#FF3D00] customimage">
            <div className="w-[90%] mt-3 flex h-[30%] mx-auto">
              <div
                className="w-[33.3%] border-r-[8px] border-b-[8px] border-b-[#555555] border-r-[#555555] h-[100%] flex items-center"
                id="0"
                onClick={handleA1}
              >
                {A1 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : A1 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}{" "}
              </div>
              <div
                className="w-[33.3%] border-b-[8px] border-b-[#555555] h-[100%] flex items-center"
                id="1"
                onClick={handleA2}
              >
                {A2 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : A2 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
              <div
                className="w-[33.3%] border-l-[8px] border-l-[#555555] border-b-[8px] border-b-[#555555]  h-[100%] flex items-center"
                id="2"
                onClick={handleA3}
              >
                {A3 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : A3 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
            </div>
            <div className="w-[90%] flex h-[30%] mx-auto">
              <div
                className="w-[33.3%] border-r-[8px] border-b-[8px] border-b-[#555555] border-r-[#555555] h-[100%] flex items-center"
                id="0"
                onClick={handleB1}
              >
                {B1 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : B1 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
              <div
                className="w-[33.3%] border-b-[8px] border-b-[#555555] h-[100%] flex items-center"
                id="1"
                onClick={handleB2}
              >
                {B2 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : B2 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
              <div
                className="w-[33.3%] border-l-[8px] border-l-[#555555] border-b-[8px] border-b-[#555555]  h-[100%] flex items-center"
                id="2"
                onClick={handleB3}
              >
                {B3 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : B3 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
            </div>

            <div className="w-[90%] flex h-[30%] mx-auto">
              <div
                className="w-[33.3%] border-r-[8px]  border-r-[#555555] h-[100%] flex items-center"
                id="0"
                onClick={handleC1}
              >
                {C1 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : C1 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
              <div
                className="w-[33.3%]  h-[100%] flex items-center"
                id="1"
                onClick={handleC2}
              >
                {C2 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : C2 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
              <div
                className="w-[33.3%] border-l-[8px] border-l-[#555555] h-[100%] flex items-center"
                id="2"
                onClick={handleC3}
              >
                {" "}
                {C3 === "X" ? (
                  <img src={ex} alt="avatar" className="w-[80%] mx-auto" />
                ) : C3 === "O" ? (
                  <img src={zero} alt="avatar" className="w-[80%] mx-auto" />
                ) : null}
              </div>
            </div>
          </div>

          <div className="w-full md:w-[30%]">
            <div className="flex gap-4 flex-col justify-center items-center  md:justify-start">
              <h1 className="p-1 press">Game ID: {sharedgameID}</h1>
              <div
                className="flex items-center  md:justify-start gap-2 cursor-pointer p-1"
                onClick={() => setjoindialog(true)}
              >
                <div className="flex bg-[#FF3D00] w-[40px] h-[40px] border border-black rounded-full items-center cursor-pointer "></div>
                <h1 className="press text-[12px]">Join Game</h1>
              </div>
              <div className="flex gap-2 items-center  md:justify-start">
                <img src={blue} alt="blue" />
                <h1 className="press text-[12px]">Change Background</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tictactoe;

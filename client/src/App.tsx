/* eslint-disable prefer-const */
import { useDojo } from "./DojoContext";
import { useComponentValue } from "@dojoengine/react";
import { Entity } from "@dojoengine/recs";
import { useEffect, useState } from "react";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Gamepage from "./pages/Game/[id]";
import { ChakraProvider } from "@chakra-ui/react";
import AppProvider from "./context/Appcontext";

function App() {
  const [gaemeid, setGameID] = useState("");

  //USE DOJO OPTION

  const {
    setup: {
      systemCalls: { initiate, spawnavatar, registerPlayer, restart },
      components: { Moves, Board, Game, Gate, Players, Fixed },
    },
    account: { create, list, select, account, isDeploying, clear },
  } = useDojo();

  // entity id we are syncing
  // const entityId = getEntityIdFromKeys([BigInt(account.address)]) as Entity;

  // get current component values
  // const position = useComponentValue(components.Position, entityId as Entity);
  // const moves = useComponentValue(components.Moves, entityId as Entity);

  // use graphql to current state data
  // useEffect(() => {
  //   if (!entityId) return;

  //   const fetchData = async () => {
  //     try {
  //       const { data } = await getEntities();
  //       if (data && data.entities) {
  //         setComponentsFromGraphQLEntities(
  //           contractComponents,
  //           data.entities.edges
  //         );
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [entityId, contractComponents]);

  //FUNCTION CALLS

  // const handleCreateGame = async () =>{
  //   let res = await initiate(account,'0x224e0ce0521f5852a6c6ae019b08110e87a41c817a7043ed37348527bf18d62','0x10eb95ecb88d7cb71309c7688391f7b2dd1ec74bc094a7dbe796ce9ed00112d')
  //   // console.log(res);
  //   // setGameID(res);
  // }
  // const handleAvatarSpawn = async () =>{
  //   spawnavatar(account,"2","0x3d99f21ab95d0dd28a261b3bef9fa2dab35b1f4fe0fd8dd10421b6a1a7ebfef", account.address)
  // }

  // const handleregisterplayer = async () =>{
  //   registerPlayer(account, 'kenny')
  // }
  // const handlerestart = async () =>{
  //   restart(account,gaemeid,'0x224e0ce0521f5852a6c6ae019b08110e87a41c817a7043ed37348527bf18d62','0x10eb95ecb88d7cb71309c7688391f7b2dd1ec74bc094a7dbe796ce9ed00112d')
  // }
  return (
    <>
      <div>
        <ChakraProvider>
          <AppProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Gamepage />} />
              </Routes>
            </BrowserRouter>
          </AppProvider>
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;

//CONTENT WORKING
{
  /* <div>
<button onClick={create}>
  {isDeploying ? "deploying burner" : "create burner"}
</button>
<button onClick={clear}>clear burners</button>
</div>

<div className="card">
select signer:{" "}
<select onChange={(e) => select(e.target.value)}>
  {list().map((account, index) => {
    return (
      <option value={account.address} key={index}>
        {account.address}
      </option>
    );
  })}
  i
</select>
</div>
<div className="card">
<button onClick={handleCreateGame}>Create game</button> 
{/* <button onClick={() => move(account, Direction.Down)}>Move Down</button> */
}
// </div>
// <div className="card">
// <button onClick={handleAvatarSpawn}>Spawn</button>

// </div>

// <div className="card">
// <button onClick={handleregisterplayer}>Register</button>
// </div>

// <div className="card">
// <button onClick={handlerestart}>Restart game</button>
// </div> */}

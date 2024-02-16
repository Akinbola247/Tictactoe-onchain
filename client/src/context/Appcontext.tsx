/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useMemo, useState, ReactNode } from 'react';


interface IAppContext {
  sharedavatar: null | any;
  sharedgameID: null | any;
  creategame: null | any;
  avatardialog : null | any;
  joindialog : null | any;
  joininput : null | any;
  joinInputdilog : null | any;
  resultdialog : null | any;
  winningresult : null | any;
  playerone : null | any;
  playertwo : null | any;
  A1 : null | any;
  A2 : null | any;
  A3 : null | any;
  B1 : null | any;
  B2 : null | any;
  B3 : null | any;
  C1 : null | any;
  C2 : null | any;
  C3 : null | any;
  tokenbalance: null | any;
  setSharedavatar: React.Dispatch<React.SetStateAction<any>>;
  setSharedgameID: React.Dispatch<React.SetStateAction<any>>;
  setCreategame: React.Dispatch<React.SetStateAction<any>>;
  setavatardialog: React.Dispatch<React.SetStateAction<any>>;
  setjoindialog: React.Dispatch<React.SetStateAction<any>>;
  setjoininput: React.Dispatch<React.SetStateAction<any>>;
  setjoininputdialog: React.Dispatch<React.SetStateAction<any>>;
  setA1: React.Dispatch<React.SetStateAction<any>>;
  setA2: React.Dispatch<React.SetStateAction<any>>;
  setA3: React.Dispatch<React.SetStateAction<any>>;
  setB1: React.Dispatch<React.SetStateAction<any>>;
  setB2: React.Dispatch<React.SetStateAction<any>>;
  setB3: React.Dispatch<React.SetStateAction<any>>;
  setC1: React.Dispatch<React.SetStateAction<any>>;
  setC2: React.Dispatch<React.SetStateAction<any>>;
  setC3: React.Dispatch<React.SetStateAction<any>>;
  setresultdialog: React.Dispatch<React.SetStateAction<any>>;
  setwinningresult: React.Dispatch<React.SetStateAction<any>>;
  setplayerone: React.Dispatch<React.SetStateAction<any>>;
  setplayertwo: React.Dispatch<React.SetStateAction<any>>;
  setTokenbalance: React.Dispatch<React.SetStateAction<any>>;

}

const initialData: IAppContext = {
  sharedavatar: null,
  sharedgameID: null,
  creategame: null,
  avatardialog : null,
  joindialog : null,
  joininput : null,
  joinInputdilog : null,
  resultdialog : null,
  winningresult : null,
  playerone : null,
  playertwo : null,
  A1 : null,
  A2 : null,
  A3 : null,
  B1 : null,
  B2 : null,
  B3 : null,
  C1 : null,
  C2 : null,
  C3 : null,
  tokenbalance: null,
  setSharedavatar: () => {},
  setSharedgameID: () => {},
  setCreategame: () => {},
  setavatardialog: () => {},
  setjoindialog: () => {},
  setjoininput: () => {},
  setjoininputdialog: () => {},
  setA1: () => {},
  setA2: () => {},
  setA3: () => {},
  setB1: () => {},
  setB2: () => {},
  setB3: () => {},
  setC1: () => {},
  setC2: () => {},
  setC3: () => {},
  setresultdialog: () => {},
  setwinningresult: () => {},
  setplayerone: () => {},
  setplayertwo: () => {},
  setTokenbalance: () => {},
};

export const AppContext = createContext<IAppContext>(initialData);

export const useAppContext = () => {
  return useContext(AppContext);
};

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  const [sharedavatar, setSharedavatar] = useState<null | any>(null);
  const [sharedgameID, setSharedgameID] = useState<null | any>(null);
  const [creategame, setCreategame] = useState<null | any>(null);
  const [avatardialog, setavatardialog] = useState<null | any>(null);
  const [joindialog, setjoindialog] = useState<null | any>(null);
  const [joininput, setjoininput] = useState<null | any>(null);
  const [joinInputdilog, setjoininputdialog] = useState<null | any>(null);
  const [A1, setA1] = useState<null | any>(null);
  const [A2, setA2] = useState<null | any>(null);
  const [A3, setA3] = useState<null | any>(null);
  const [B1, setB1] = useState<null | any>(null);
  const [B2, setB2] = useState<null | any>(null);
  const [B3, setB3] = useState<null | any>(null);
  const [C1, setC1] = useState<null | any>(null);
  const [C2, setC2] = useState<null | any>(null);
  const [C3, setC3] = useState<null | any>(null);
  const [resultdialog, setresultdialog] = useState<null | any>(null);
  const [winningresult, setwinningresult] = useState<null | any>(null);
  const [playerone, setplayerone] = useState<null | any>(null);
  const [playertwo, setplayertwo] = useState<null | any>(null);
  const [tokenbalance, setTokenbalance] = useState<null | any>(null);

  const contextValue = useMemo(() => ({
    sharedavatar,
    sharedgameID,
    creategame,
    avatardialog,
    joindialog,
    joininput,
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
    resultdialog,
    winningresult,
    playerone,
    playertwo,
    tokenbalance,
    setSharedavatar,
    setSharedgameID,
    setCreategame,
    setavatardialog,
    setjoindialog,
    setjoininput,
    setjoininputdialog,
    setA1,
    setA2,
    setA3,
    setB1,
    setB2,
    setB3,
    setC1,
    setC2,
    setC3,
    setresultdialog,
    setwinningresult,
    setplayerone,
    setplayertwo,
    setTokenbalance
  }), [sharedavatar, sharedgameID,creategame,avatardialog,joindialog,joininput,joinInputdilog,A1,A2,A3,B1,B2,B3,C1,C2,C3,resultdialog,winningresult,playerone,playertwo,tokenbalance]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

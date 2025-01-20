import React, { createContext, useContext, useState } from 'react';

type GlobalContextType = {
  name: string;
  matricNumber: string;
  handleSetMatricNumber: (matricNumber: string) => void;
  handleSetName: (name: string) => void;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);
const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('');
  const [matricNumber, setMatricNumber] = useState('');
  const handleSetMatricNumber = (matricNumber: string) => {
    setMatricNumber(matricNumber);
  };
  const handleSetName = (name: string) => {
    setName(name);
  };
  return (
    <GlobalContext.Provider
      value={{
        name,
        handleSetMatricNumber,
        handleSetName,
        matricNumber,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const values = useContext(GlobalContext) as GlobalContextType;
  return values;
};

export default GlobalContextProvider;

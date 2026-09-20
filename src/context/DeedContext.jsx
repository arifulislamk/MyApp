import React, {createContext, useState} from 'react';


// Create Context
export const DeedContext = createContext();


export function DeedProvider({children}) {

  const [deeds, setDeeds] = useState([]);


  const addDeed = (deedText) => {

    const newDeed = {
      id: Date.now(),
      text: deedText,
    };

    setDeeds(prevDeeds => [
      ...prevDeeds,
      newDeed,
    ]);
  };


  return (
    <DeedContext.Provider
      value={{
        deeds,
        addDeed,
      }}
    >
      {children}
    </DeedContext.Provider>
  );
}
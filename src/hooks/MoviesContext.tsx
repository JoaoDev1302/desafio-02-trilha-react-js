import { useState, createContext, ReactNode } from "react";


  interface MoviesProviderProps {
    children: ReactNode;
  }

  interface MoviesContextData {
    selectedGenreId: Number;
    handleClickButton: (id: number) => void;
  }

  export const MoviesContextCreate = createContext(
    {} as MoviesContextData
  );

export function MoviesContext({ children } : MoviesProviderProps){

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
    
  return(
    <MoviesContextCreate.Provider value={{selectedGenreId,handleClickButton}}>
      {children}
    </MoviesContextCreate.Provider>
  )

}
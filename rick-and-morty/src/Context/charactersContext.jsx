import { createContext, useEffect, useState } from "react";
import Axios from 'axios'

export const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        if (response.status === 200) {
          const {results} = response.data;
          setCharacters(results);
        }
      })
    }, [])

    return (
      <CharacterContext.Provider value={{
        characters
      }}>
        {children}
      </CharacterContext.Provider>
    )
  }
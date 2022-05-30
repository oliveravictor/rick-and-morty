import { CharactersContextProvider } from './context/charactersContext';
import { Characters } from './Components/Characters';

export const App = () => {
  return (
    <div className="container">
      <h2 className="alert alert-success text-center">Rick and Morty</h2>
      <CharactersContextProvider>
        <Characters />
      </CharactersContextProvider>
    </div>
  )
}



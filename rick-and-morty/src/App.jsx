import { CharacterContextProvider } from './Context/charactersContext';
import { Characters } from './Components/Characters'

export const App = () => {
  return (
    <div className="container">
      <h2 className="alert alert-success text-center">Rick and Morty</h2>
      <CharacterContextProvider>
        <Characters />
      </CharacterContextProvider>
    </div>
  )
}



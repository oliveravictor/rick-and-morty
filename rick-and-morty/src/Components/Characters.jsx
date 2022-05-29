import {  useContext } from "react"
import {CharacterContext} from '../Context/charactersContext'

export const Characters = () => {
const {characters} = useContext(CharacterContext)

  return (
    <div className="row">
      {characters.map((character, idx) => {
        return (
          <div className="col-4" key={idx}>
            <div className="card mb-5">
              <img src={character.image} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Nombre: {character.name}</h5>
                <b>Status: {character.status}</b><br />
                <b>Species: {character.species}</b>
              </div>
            </div>
          </div>
        )}
      )}
    </div>
  )
}

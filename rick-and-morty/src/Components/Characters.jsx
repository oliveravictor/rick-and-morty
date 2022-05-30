import {  useContext } from "react";
import { CharactersContext } from '../context/charactersContext';
import { Pagination } from "./Pagination";

export const Characters = () => {
const { characters } = useContext(CharactersContext);

  return (
    <div className="row">
      <Pagination />
      {characters.map((character, idx) => {
        return (
          <div className="col-3" key={idx}>
            <div className="card mt-4">
              <img src={character.image} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
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

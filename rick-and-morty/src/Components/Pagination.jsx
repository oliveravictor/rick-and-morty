import { useContext } from "react";
import { CharactersContext } from "../context/charactersContext";

export const Pagination = () => {
   const {totalResults, pages, actualPage, prevPage, nextPage, goToPage} = useContext(CharactersContext);
   
  return (
    <>
      <div className="col-3 d-flex align-items-center">
        <b>Total results: </b>  { totalResults}
      </div>
      <div className="col-3 d-flex align-items-center">
        <b>Page: </b>  { actualPage} of {pages}
      </div>
      <div className="col-3 d-flex align-items-center">
        <b>Go to page: </b>
        <select name="goTo" className="form-select w-auto mx-1">
          <option value="1">1</option>
        </select>
      </div>
      <div className="col-3 text-end">
        {prevPage && (<button onClick={e => goToPage(prevPage, e)} className="btn btn-success mx-2" data-type="prev">Prev</button>)}
        {nextPage && (<button onClick={e => goToPage(nextPage, e)} className="btn btn-success" data-type="next">Next</button>)}    
      </div>
    </>
  )
}

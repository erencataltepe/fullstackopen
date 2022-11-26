import React from "react";

function Search({ id, searchText, handleSearchTextChannge }) {
  return (
    <div>
      <label htmlFor={id}>Find countries: </label>
      <input id={id} value={searchText} onChange={handleSearchTextChannge} />
    </div>
  );
}

export default Search;

import React from "react";
import Show from "./Show";

function Result({ resultList, handleShowButton, showCountry }) {
  if (showCountry !== "") {
    return <Show country={showCountry} />;
  }

  if (resultList.length === 1) {
    const country = resultList[0];
    return <Show country={country} />;
  } else if (resultList.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else {
    return (
      <div>
        {resultList.map((country) => (
          <div key={country.area}>
            {country.name.common}{" "}
            <button onClick={handleShowButton} data-key={country.area}>
              Show
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Result;

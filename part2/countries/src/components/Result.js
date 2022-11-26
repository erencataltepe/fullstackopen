import React from "react";

function Result({ resultList }) {
  if (resultList.length === 1) {
    const country = resultList[0];
    const countryName = country.name.common;
    const capital = country.capital;
    const area = country.area;
    const languages = Object.values(country.languages);
    const flag = country.flags.png;
    console.log(flag);

    return (
      <div>
        <h2>{countryName}</h2>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <h3>Languages: </h3>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <div>
          <img src={flag} alt="country flag" />
        </div>
      </div>
    );
  } else if (resultList.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else {
    return (
      <div>
        {resultList.map((country) => (
          <div key={country.area}>{country.name.common}</div>
        ))}
      </div>
    );
  }
}

export default Result;

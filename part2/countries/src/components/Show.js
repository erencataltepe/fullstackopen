import React from "react";

function Show({ country }) {
  const countryName = country.name.common;
  const capital = country.capital;
  const area = country.area;
  const languages = Object.values(country.languages);
  const flag = country.flags.png;

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
}

export default Show;

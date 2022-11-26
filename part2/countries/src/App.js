import { useState, useEffect } from "react";
import Result from "./components/Result";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleSearchTextChannge = (e) => {
    setSearchText(e.target.value);
    if (e.target.value !== "") {
      const newList = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setResult(newList);
    } else {
      setResult([]);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="countries">Find countries: </label>
        <input
          id="countries"
          value={searchText}
          onChange={handleSearchTextChannge}
        />
      </div>
      <div>
        <Result resultList={result} />
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Result from "./components/Result";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);
  const [showCountry, setShowCountry] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleSearchTextChannge = (e) => {
    setShowCountry("");
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

  const handleShowButton = (e) => {
    const country = result.find(
      (data) => data.area === Number(e.target.dataset.key)
    );
    setShowCountry(country);
  };

  return (
    <div>
      <Search
        id="countries"
        searchText={searchText}
        handleSearchTextChannge={handleSearchTextChannge}
      />
      <div>
        <Result
          resultList={result}
          handleShowButton={handleShowButton}
          showCountry={showCountry}
        />
      </div>
    </div>
  );
}

export default App;

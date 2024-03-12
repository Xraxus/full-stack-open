import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import SearchList from "./components/SearchList";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/";

  useEffect(() => {
    axios.get(`${baseUrl}/all`).then((res) => setAllCountries(res.data));
  }, []);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <SearchList searchQuery={searchQuery} allCountries={allCountries} />
    </>
  );
}

export default App;

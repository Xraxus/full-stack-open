import { useState } from "react";

import CountryCard from "./CountryCard";

export default function CountrySearchResult({ country }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="country-search-result">
      <p>{country.name.common}</p>
      <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
        {open ? "hide" : "show"}
      </button>
      {open && <CountryCard country={country} />}
    </div>
  );
}

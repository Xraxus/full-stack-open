import CountryCard from "./CountryCard";
import CountrySearchResult from "./CountrySearchResult";

export default function SearchList({ searchQuery, allCountries }) {
  const filteredCountries = allCountries.filter((item) =>
    item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (searchQuery) {
    if (filteredCountries.length === 1) {
      return <CountryCard country={filteredCountries[0]} />;
    } else if (filteredCountries.length <= 10) {
      return (
        <>
          {filteredCountries.map((country) => (
            <CountrySearchResult country={country} key={country.name.common} />
          ))}
        </>
      );
    } else if (filteredCountries.length > 10) {
      return <p>Too much countries matched, specify further</p>;
    }
    return <p>No countries found</p>;
  } else {
    return <p>Start searching</p>;
  }
}

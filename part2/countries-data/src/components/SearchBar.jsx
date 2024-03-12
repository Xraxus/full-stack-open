export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div
      style={{
        borderBottom: "1px solid white",
        paddingBottom: "1em",
        width: "100%",
      }}
    >
      <label>
        find countries:{" "}
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Poland"
        ></input>
      </label>
    </div>
  );
}

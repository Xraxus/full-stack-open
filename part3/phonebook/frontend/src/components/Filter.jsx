/* eslint-disable react/prop-types */
export default function Filter({ filterName, setFilterName }) {
  return (
    <label>
      filter by name:{" "}
      <input
        type="text"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
    </label>
  );
}

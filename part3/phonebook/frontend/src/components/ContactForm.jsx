/* eslint-disable react/prop-types */
export default function ContactForm({
  handleSubmit,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) {
  return (
    <form onSubmit={handleSubmit} className="flex-column">
      <label>
        name:{" "}
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Leia Skywalker"
        />
      </label>
      <label>
        number:{" "}
        <input
          type="tel"
          pattern="[0-9]{9}"
          placeholder="123456789"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </label>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

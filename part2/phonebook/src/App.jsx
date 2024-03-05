import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Arto Hellas", tel: 123456789 },
    { name: "Ada Lovelace", tel: 394453235 },
    { name: "Dan Abramov", tel: 12432343 },
    { name: "Mary Poppendieck", tel: 392364231 },
  ]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");
  const [filterName, setFilterName] = useState("");

  const filteredConcats = filterName
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : contacts;

  function handleSubmit(e) {
    e.preventDefault();
    if (contacts.some((contact) => contact.name === newName))
      alert(`${newName} is already in the phonebook`);
    else setContacts([...contacts, { name: newName, tel: newTel }]);
    setNewName("");
    setNewTel("");
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <label>
        filter by name:{" "}
        <input
          type="text"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </label>
      <h2>Add new contact</h2>
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
            value={newTel}
            onChange={(e) => setNewTel(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredConcats.map((contact) => (
          <li key={contact.name}>
            {contact.name} - {contact.tel}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

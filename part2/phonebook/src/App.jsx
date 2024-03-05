import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Arto Hellas", tel: 123456789 },
  ]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");

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
      <h2>Phonebook</h2>
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
        {contacts.map((contact) => (
          <li key={contact.name}>
            {contact.name} - {contact.tel}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

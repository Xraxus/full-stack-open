import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setContacts([...contacts, { name: newName }]);
    setNewName("");
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          name: <input type="text" value={newName} onChange={handleChange} />
        </label>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.name}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

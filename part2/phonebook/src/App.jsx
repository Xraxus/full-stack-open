import { useState } from "react";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

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
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <h2>Add new contact</h2>
      <ContactForm
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newTel={newTel}
        setNewTel={setNewTel}
      />
      <h2>Numbers</h2>
      <ContactList filterName={filterName} contacts={contacts} />
    </div>
  );
}

export default App;

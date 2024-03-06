import { useEffect, useState } from "react";

import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

import contactService from "./services/contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    contactService
      .getAll()
      .then((initialContacts) => setContacts(initialContacts));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (contacts.some((contact) => contact.name === newName))
      alert(`${newName} is already in the phonebook`);
    else {
      contactService
        .create({ name: newName, tel: newTel })
        .then((returnedContact) => {
          setContacts(contacts.concat(returnedContact));
        });
    }
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

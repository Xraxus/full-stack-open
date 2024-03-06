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
    renderContacts();
  }, []);

  function renderContacts() {
    contactService
      .getAll()
      .then((initialContacts) => setContacts(initialContacts));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const duplicated = contacts.find(
      (contact) => contact.name.toLowerCase() === newName.toLowerCase()
    );

    if (duplicated) {
      if (
        window.confirm(
          `${newName} is already in the phonebook, replace the old number with a new one?`
        )
      ) {
        contactService
          .update(duplicated.id, {
            id: duplicated.id,
            tel: newTel,
            name: newName,
          })
          .then(renderContacts);
      }
    } else {
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
      <ContactList
        filterName={filterName}
        contacts={contacts}
        remove={contactService.remove}
        renderContacts={renderContacts}
      />
    </div>
  );
}

export default App;

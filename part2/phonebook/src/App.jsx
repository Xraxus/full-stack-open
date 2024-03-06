import { useEffect, useState } from "react";

import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Notification from "./components/Notification";

import contactService from "./services/contact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");
  const [filterName, setFilterName] = useState("");
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    renderContacts();
  }, []);

  function renderContacts() {
    contactService
      .getAll()
      .then((initialContacts) => setContacts(initialContacts));
  }

  function renderTemporaryStatus(message, type) {
    setStatusMessage({ message, type });
    setTimeout(() => {
      setStatusMessage(null);
    }, 3000);
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
          .then(renderContacts)
          .then(renderTemporaryStatus(`Modified ${newName}`, "status"));
      }
    } else {
      contactService
        .create({ name: newName, tel: newTel })
        .then((returnedContact) => {
          setContacts(contacts.concat(returnedContact));
        })
        .then(renderTemporaryStatus(`Added ${newName}`, "status"));
    }
    setNewName("");
    setNewTel("");
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={statusMessage?.message} type={statusMessage?.type} />
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
        renderTemporaryStatus={renderTemporaryStatus}
        setContacts={setContacts}
      />
    </div>
  );
}

export default App;

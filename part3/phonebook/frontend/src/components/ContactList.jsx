/* eslint-disable react/prop-types */
export default function ContactList({
  filterName,
  contacts,
  remove,
  renderContacts,
  renderTemporaryStatus,
  setContacts,
}) {
  const filteredContacts = filterName
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.number}{" "}
          <button
            onClick={() => {
              if (
                window.confirm(`Do you really want to delete ${contact.name}?`)
              ) {
                remove(contact.id)
                  .then(renderContacts)
                  .catch(() => {
                    renderTemporaryStatus(
                      `Data of ${contact.name} has already been deleted from the server`,
                      "error"
                    );
                    setContacts(contacts.filter((c) => c.id !== contact.id));
                  });
              }
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

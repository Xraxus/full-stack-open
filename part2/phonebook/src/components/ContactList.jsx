export default function ContactList({
  filterName,
  contacts,
  remove,
  renderContacts,
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
          {contact.name} - {contact.tel}{" "}
          <button
            onClick={() => {
              if (
                window.confirm(`Do you really want to delete ${contact.name}?`)
              ) {
                remove(contact.id).then(renderContacts);
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

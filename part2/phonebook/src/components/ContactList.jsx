export default function ContactList({ filterName, contacts }) {
  const filteredContacts = filterName
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.name}>
          {contact.name} - {contact.tel}
        </li>
      ))}
    </ul>
  );
}

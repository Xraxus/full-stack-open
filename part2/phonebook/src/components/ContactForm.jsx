export default function ContactForm({
  handleSubmit,
  newName,
  setNewName,
  newTel,
  setNewTel,
}) {
  return (
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
  );
}

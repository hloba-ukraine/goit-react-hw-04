export default function Contact({ contact, OnDeleteContact }) {
  return (
    <>
      <p>🙎🏼‍♂️{contact.name}</p>
      <p>📱{contact.number}</p>

      <button type="button" onClick={() => OnDeleteContact(contact.id)}>
        Delete
      </button>
    </>
  );
}

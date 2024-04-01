import Contact from "../Contact/Contact";
export default function ContactList({ contacts, OnDeleteContact }) {
  return (
    <div>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} OnDeleteContact={OnDeleteContact} />
          </li>
        );
      })}
    </div>
  );
}

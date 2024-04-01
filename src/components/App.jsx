import { useEffect, useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
const initialContact = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export default function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(stringifiedContacts) ?? initialContact;
    return parsedContacts;
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const OnDeleteContact = (event) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== event)
    );
  };
  const [filter, setFilter] = useState("");
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onAddContact = (formData) => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, finalContact]);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filter} onChangeFilter={onChangeFilter} />
      <ContactList
        contacts={filterContacts}
        OnDeleteContact={OnDeleteContact}
      />
    </div>
  );
}

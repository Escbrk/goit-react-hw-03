import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";

import contacts from "./contacts.json";

const App = () => {
  const [contacList, setContactList] = useState(() => {
    const savedData = localStorage.getItem("data");

    return savedData !== null ? JSON.parse(savedData) : contacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(contacList));
  });

  const addContact = (newContact) => {
    setContactList((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContact = (id) => {
    setContactList((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const filteredContacts = contacList.filter((filtered) =>
    filtered.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBar value={filter} onFilter={setFilter} />
      <ContactList value={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
export default App;

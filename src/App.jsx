import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";

import contacts from "./contacts.json";

const App = () => {
  const [contact, setContact] = useState(() => {
    const savedData = localStorage.getItem("data");

    return savedData !== null ? JSON.parse(savedData) : contacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(contacts));
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};
export default App;

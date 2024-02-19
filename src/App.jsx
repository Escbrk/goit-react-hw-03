import { useState } from "react";
import "./App.css";
import phonebook from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [contactsList, setContactsList] = useState(phonebook);
  const [searchValue, setSearchValue] = useState("")

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBar />
      <ContactList contacts={contactsList} />
    </div>
  );
};
export default App;

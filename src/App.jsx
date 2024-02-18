import { useState } from "react";
import "./App.css";
import phonebook from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [contactsList, setContactsList] = useState(phonebook);

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList contacts={contactsList} />
    </div>
  );
};
export default App;

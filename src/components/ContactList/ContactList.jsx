import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";


export default function ContactList({ value, onDelete }) {
  return (
    <ul>
      {value.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact value={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

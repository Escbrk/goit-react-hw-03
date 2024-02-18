import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {/* <RiContactsFill /> */}
            <h2>{name}</h2>
            {/* <FaPhone /> */}
            <span>{number}</span>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

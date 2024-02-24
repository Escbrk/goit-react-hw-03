import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import css from './Contact.module.css'

export default function Contacts({ value: { name, number, id }, onDelete }) {
  return (
    <>
      <div>
        <p>
          <RiContactsFill />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => {
        onDelete(id)
      }}>Delete</button>
    </>
  );
}

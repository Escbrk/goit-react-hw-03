import { Field, Form, Formik } from "formik";
import { useId } from "react";

export default function SearchBar() {
  const id = useId();
  return (
    // <>
    //   <label htmlFor={id} style={{display: "block"}}>Find contacts by name</label>
    //   <input id={id} type="text" style={{width: '97%'}}></input>
    // </>
    <Formik
      initialValues={{ username: "Mango", email: "mango@mail.com" }}
      onSubmit={() => {}}
    >
      <Form>
        <Field type="text" name="username" />
        <Field type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

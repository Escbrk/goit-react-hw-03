import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'

const validationSchema = () =>
  Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("This field is required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("This field is required"),
  });

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ name: "", number: "", id: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({
          ...values,
          id: nanoid(4),
        });
        actions.resetForm();
      }}
    >
      <Form className={css.container}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field id={nameFieldId} name="name" />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field id={numberFieldId} name="number" />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

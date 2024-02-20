import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./SearchBar.module.css";

export default function SearchBar() {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    message: Yup.string()
      .min(3, "Too short")
      .max(256, "Too long")
      .required("Required"),
    level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required"),
  });

  const nameFieldId = useId();
  const emailFieldId = useId();
  const textId = useId();
  const selectId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik>
      <Form>
        <label>Find contacts by name</label>
        <br />
        <Field />
      </Form>
    </Formik>
  );
}

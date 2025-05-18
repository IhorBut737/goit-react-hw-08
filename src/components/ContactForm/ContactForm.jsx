import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is too short")
    .max(50, "Name is too long")
    .required("Required"),
  number: Yup.string()

    .min(3, "Number is too short")
    .max(50, "Number is too long")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label>
          Name
          <Field name="name" id={nameId} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>

        <label>
          Number
          <Field name="number" id={numberId} />
          <ErrorMessage name="number" component="div" className={s.error} />
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

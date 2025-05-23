import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import toast from "react-hot-toast";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short")
      .max(50, "Name is too long")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too short").required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(register(values)).unwrap();
      toast.success("Registration successful!");
      actions.resetForm();
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>
          Name
          <Field name="name" placeholder="Name" id={nameFieldId} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label htmlFor={emailFieldId}>
          Email
          <Field
            name="email"
            type="email"
            placeholder="Email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="div" className={s.error} />
        </label>
        <label htmlFor={passwordFieldId}>
          Password
          <Field
            name="password"
            type="password"
            placeholder="Password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" component="div" className={s.error} />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import toast from "react-hot-toast";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Too short").required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(logIn(values)).unwrap();
      toast.success("Login successful!");
      actions.resetForm();
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <label>
          Email
          <Field
            name="email"
            type="email"
            placeholder="Email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="div" className={s.error} />
        </label>

        <label>
          Password
          <Field
            name="password"
            type="password"
            placeholder="Password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" component="div" className={s.error} />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
const INITIAL_FORM_VALUES = {
  name: "",
  number: "",
};

const personSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={handleSubmit}
      validationSchema={personSchema}
    >
      <Form>
        <label>
          <span>Name</span>
          <br />
          <Field type="text " name="name" />
          <br />
          <ErrorMessage component="p" name="name" />
        </label>
        <br />
        <label>
          <span>Number</span>
          <br />
          <Field type="tel " name="number" />
          <ErrorMessage component="p" name="number" />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

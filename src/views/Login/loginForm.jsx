import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Please Enter a correct Email")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values) => {
        props.onSubmit(values);
      }}
    >
      {({ values, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
                <span className="text-red-500 pl-1">*</span>
              </label>
              <Field
                name="email"
                type="text"
                placeholder="Email"
                className={
                  "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control  login-form-box-field" +
                  (errors.email && touched.email
                    ? " is-invalid error-text-color"
                    : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback text-red-500 text-sm "
              />
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="password">
                Password
                <span className="text-red-500 pl-1">*</span>
              </label>
              <Field
                name="password"
                type="text"
                placeholder="Enter your Password"
                className={
                  "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control  login-form-box-field" +
                  (errors.password && touched.password
                    ? " is-invalid error-text-color"
                    : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback text-red-500 text-sm "
              />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <button
              type="submit"
              disabled={props.isSubmitting}
              className={`px-6 py-2 mt-4 text-white ${
                props.isSubmitting
                  ? "bg-blue-300 rounded-lg hover:bg-blue-300"
                  : "bg-blue-600 rounded-lg hover:bg-blue-900"
              }  `}
            >
              Login
            </button>
            <a
              href={"/signup"}
              className={`px-6 py-2 mt-4 text-white bg-yellow-600 rounded-lg hover:bg-yellow-900 `}
            >
              Sign up
            </a>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const PreferenceForm = (props) => {
  const { options } = props;

  return (
    <Formik
      initialValues={{
        start_year: options.start_year || 2002,
        end_year: options.end_year || 2020,
        min_imdb: options.min_imdb || 1,
        max_imdb: options.max_imdb || 9,
        genre: options.genre || "",
        language: options.language || "",
        type: options.type || "",
      }}
      validationSchema={Yup.object().shape({
        start_year: Yup.number().positive().integer().min(2000).max(2020),
        end_year: Yup.number().positive().integer().min(2000).max(2020),
        min_imdb: Yup.number().positive().min(0).max(10),
        max_imdb: Yup.number().positive().min(0).max(10),
      })}
      onSubmit={(values) => {
        console.log(values);
        props.onSubmit(values);
      }}
    >
      {({ values, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="start_year">
                Start Year
              </label>
              <Field
                name="start_year"
                min="2000"
                max="2020"
                type="number"
                className={
                  "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control  login-form-box-field" +
                  (errors.start_year && touched.start_year
                    ? " is-invalid error-text-color"
                    : "")
                }
              />
              <ErrorMessage
                name="start_year"
                component="div"
                className="invalid-feedback text-red-500 text-sm "
              />
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="end_year">
                End Year
              </label>
              <Field
                name="end_year"
                min="2000"
                max="2020"
                type="number"
                className={
                  "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control  login-form-box-field" +
                  (errors.end_year && touched.end_year
                    ? " is-invalid error-text-color"
                    : "")
                }
              />
              <ErrorMessage
                name="end_year"
                component="div"
                className="invalid-feedback text-red-500 text-sm "
              />
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="min_imdb">
                Min IMDB Rating
              </label>
              <Field
                name="min_imdb"
                type="number"
                className={
                  "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control  login-form-box-field" +
                  (errors.min_imdb && touched.min_imdb
                    ? " is-invalid error-text-color"
                    : "")
                }
              />
              <ErrorMessage
                name="min_imdb"
                component="div"
                className="invalid-feedback text-red-500 text-sm "
              />
            </div>
          </div>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="max_imdb">
                Max IMDB Rating
              </label>
              <Field
                name="max_imdb"
                type="number"
                className={
                  "w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 form-control  login-form-box-field" +
                  (errors.max_imdb && touched.max_imdb
                    ? " is-invalid error-text-color"
                    : "")
                }
              />
              <ErrorMessage
                name="max_imdb"
                component="div"
                className="invalid-feedback text-red-500 text-sm "
              />
            </div>
          </div>
          <div className="mt-4">
            <div id="genre">
              Genre
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="flex gap-6 pb-2 items-center"
              >
                <label>
                  <Field type="radio" name="genre" value="horror" />
                  <span className="pl-1"> Horror </span>
                </label>
                <label>
                  <Field type="radio" name="genre" value="action" />
                  <span className="pl-1"> Action </span>
                </label>
                <label>
                  <Field type="radio" name="genre" value="Comedy" />
                  <span className="pl-1"> Comedy </span>
                </label>
                <label>
                  <Field type="radio" name="genre" value="Biography" />
                  <span className="pl-1"> Biography </span>
                </label>
                <label>
                  <Field type="radio" name="genre" value="Drama" />
                  <span className="pl-1"> Drama </span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div id="language">
              Language
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="flex gap-6 pb-2 items-center"
              >
                <label>
                  <Field type="radio" name="language" value="hindi" />
                  <span className="pl-1"> Hindi </span>
                </label>
                <label>
                  <Field type="radio" name="language" value="english" />
                  <span className="pl-1"> English </span>
                </label>
                <label>
                  <Field type="radio" name="language" value="german" />
                  <span className="pl-1"> German </span>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div id="type" name="type">
              Type
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className="flex gap-6 pb-2 items-center"
              >
                <label>
                  <Field type="radio" name="type" value="movie" />
                  <span className="pl-1"> Movie</span>
                </label>
                <label>
                  <Field type="radio" name="type" value="show" />
                  <span className="pl-1"> Show </span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-baseline justify-center">
            <button
              type="submit"
              disabled={props.loader}
              className={`px-6 py-2 mt-4 text-white ${
                props.loader
                  ? "bg-blue-300 rounded-lg hover:bg-blue-300"
                  : "bg-blue-600 rounded-lg hover:bg-blue-900"
              }  `}
            >
              Set
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default PreferenceForm;

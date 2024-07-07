import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./PlaceForm.css";

const PlaceForm = ({ onSearch, mapRef }) => {
  const initialValues = {
    latitude: "",
    longitude: "",
    radius: "",
  };

  const validationSchema = Yup.object({
    latitude: Yup.string()
      .matches(
        /^-?([1-8]?[0-9]\.\d+|90\.0+)$/,
        "Invalid latitude format. Please enter a value between -90.0 and 90.0."
      )
      .required("Latitude field is required."),
    longitude: Yup.string()
      .matches(
        /^-?((([1]?[0-7][0-9]|[1-9]?[0-9])\.\d+)|180\.0+)$/,
        "Invalid longitude format. Please enter a value between -180.0 and 180.0."
      )
      .required("Longitude field is required."),
    radius: Yup.number()
      .typeError("Radius must be a number. Please enter a valid number.")
      .positive("Radius must be a positive number.")
      .required("Radius field is required."),
  });

  const handleSubmit = (values) => {
    onSearch(values);
    if (mapRef.current) {
      mapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="search-form">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
    >
      {(formik) => (
        <Form>
          <h3 style={{ textAlign: "center" }}>Search Nearby Places</h3>
          <label htmlFor="latitude">Latitude</label>
          <Field
            id="latitude"
            name="latitude"
            type="text"
            placeholder="Enter latitude (e.g., 40.9901)"
          />
          <ErrorMessage
            name="latitude"
            component="div"
            className="errorMessage"
          />

          <label htmlFor="longitude">Longitude</label>
          <Field
            id="longitude"
            name="longitude"
            type="text"
            placeholder="Enter longitude (e.g., 28.7799)"
          />
          <ErrorMessage
            name="longitude"
            component="div"
            className="errorMessage"
          />

          <label htmlFor="radius">Radius (m)</label>
          <Field id="radius" name="radius" type="text" 
          placeholder="Enter search radius in meters (e.g., 500)" />
          <ErrorMessage
            name="radius"
            component="div"
            className="errorMessage"
          />

          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default PlaceForm;

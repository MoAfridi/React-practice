import React from "react";
import * as yup from "yup";
import {useFormik} from 'formik';

export default function Signup() {
    const formik = useFormik({
        initialValues : {
            name : "",
            email : "",
            password : ""
        },
        validationSchema : yup.object({
            name :yup.string().min(2).required("Name is required"),
            email :yup.string().email().required("Name is required"),
            password :yup.string().min(8).required("Password is required")
        }),
            onSubmit : (values , {resetForm}) => {
            console.log(values);
            resetForm({values : ""});
        }
    });

    const nameError = formik.errors.name && formik.touched.name ? <p style={{color : "red"}}>{formik.errors.name}</p> : null;
    const emailError =  formik.errors.email && formik.touched.email ? <p style={{color : "red"}}>{formik.errors.email}</p> : null;
    const passwordError =  formik.errors.password && formik.touched.password ? <p style={{color : "red"}}>{formik.errors.password}</p> : null;

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
          {nameError}
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {emailError}
        </div>
        <div>
          <label htmlFor="password,">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          {passwordError}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

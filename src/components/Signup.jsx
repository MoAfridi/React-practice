import React, { useState } from "react";
import {useFormik} from 'formik';

export default function Signup() {
    const formik = useFormik({
        initialValues : {
            name : "",
            email : "",
            password : ""
        },
        onSubmit : (values , {resetForm}) => {
            console.log(values);
            resetForm({values : ""});
        }
    });

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
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password,">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

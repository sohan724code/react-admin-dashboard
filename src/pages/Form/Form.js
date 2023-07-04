import { Box, Button, Grid } from "@mui/material";
import React from "react";
import * as yup from "yup";
import Header from "../../components/Header/Header";
import { Formik } from "formik";

const Form = () => {
  const initialValues = {};
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box sx={{ m: "20px" }}>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <Box
              sx={{
                label: {
                  width: "100%",
                  color: "#666666",
                },
                input: {
                  width: "100%",
                  padding: "10px 5px",
                  border: "1px solid #666666",
                  outline: "none",
                  borderRadius: "4px",
                },
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={0.5}>
                  <Grid item md={6} sm={12} xs={12}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={values?.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.firstName && touched.firstName && errors.firstName}
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={values?.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.lastName && touched.lastName && errors.lastName}
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <label htmlFor="email">Enter Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      value={values?.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email && errors.email}
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <label htmlFor="contact">Contact</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="Contact"
                      value={values?.contact}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.contact && touched.contact && errors.contact}
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <label htmlFor="address1">Enter Address1</label>
                    <input
                      type="text"
                      id="address1"
                      name="address1"
                      placeholder="Enter Address1"
                      value={values?.address1}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.address1 && touched.address1 && errors.address1}
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <label htmlFor="address2">Enter Address2</label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      placeholder="Enter Address2"
                      value={values?.address2}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.address2 && touched.address2 && errors.address2}
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New User
                  </Button>
                </Box>
              </form>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Form;

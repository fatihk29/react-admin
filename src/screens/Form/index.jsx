import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Yup from "yup";

import Header from "../../components/Header";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("FirstName")
    .transform((x) => x.trim())
    .min(3, "En az 3 karakter olmalidir"),
  lastName: Yup.string()
    .required("Last Name")
    .transform((x) => x.trim())
    .min(3, "En az 3 karakter olmalidir"),
  email: Yup.string()
    .required("Email")
    .transform((x) => x.trim())
    .min(3, "En az 3 karakter olmalidir")
    .email(),
  contact: Yup.string()
    .required("Contact")
    .transform((x) => x.trim())
    .matches(
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
      "Not ideal phone"
    )
    .min(3, "En az 3 karakter olmalidir"),
  address1: Yup.string()
    .required("Address")
    .transform((x) => x.trim())
    .min(3, "En az 3 karakter olmalidir"),
  address2: Yup.string()
    .transform((x) => x.trim())
    .min(3, "En az 3 karakter olmalidir"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 900px)");

  const handleFormSubmit = (values) => {
    console.log("values :>> ", values);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      address1: "",
      address2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setErrors, setStatus, setSubmitting }) => {
      console.log("values", values);
    },
  });
  const { errors, handleSubmit, isSubmitting, touched, values } = formik;

  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Create a New User Profile" />
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{ "& > div": { gridColumn: isNonMobile ? "span 2" : "span 4" } }}
      >
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="First Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={values.firstName}
          name="firstName"
          error={Boolean(touched.firstName && errors.firstName)}
          helperText={touched.firstName && errors.firstName}
          sx={{ gridColumn: "span 1" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Last Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={values.lastName}
          name="lastName"
          error={Boolean(touched.lastName && errors.lastName)}
          helperText={touched.lastName && errors.lastName}
          sx={{ gridColumn: "span 1" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={values.email}
          name="email"
          error={Boolean(touched.email && errors.email)}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Contact Number"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={values.contact}
          name="contact"
          error={Boolean(touched.contact && errors.contact)}
          helperText={touched.contact && errors.contact}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address 1"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={values.address1}
          name="address1"
          error={Boolean(touched.address1 && errors.address1)}
          helperText={touched.address1 && errors.address1}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address 2"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={values.address2}
          name="address2"
          error={Boolean(touched.address2 && errors.address2)}
          helperText={touched.address2 && errors.address2}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>
      <Box display="flex" justifyContent="end" sx={{ mt: "20px" }}>
        <Button onClick={handleSubmit} color="secondary" variant="contained">
          New User
        </Button>
      </Box>
    </Box>
  );
};

export default Form;

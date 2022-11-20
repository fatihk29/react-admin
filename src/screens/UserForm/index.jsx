import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";

// project imports
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

const UserForm = () => {
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
  const { errors, handleSubmit, touched, values } = formik;

  return (
    <Grid container sx={{ p: "20px 20px 0px 20px" }}>
      <Grid item xs={12} sm={10} md={8}>
        <Header title="Create User" subtitle="Create a New User Profile" />
        <Grid container sx={{ mt: 3 }} gap="30px">
          <Grid container flexDirection="column">
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
              sx={{ mb: 3 }}
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
              sx={{}}
            />
          </Grid>
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
          />
        </Grid>
        <Box display="flex" justifyContent="end" sx={{ mt: "20px" }}>
          <Button onClick={handleSubmit} color="secondary" variant="contained">
            New User
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserForm;

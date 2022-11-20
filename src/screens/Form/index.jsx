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
  const isNonMobile = useMediaQuery("(min-width: 600px)");

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
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
  } = formik;

  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Create a New User Profile" />
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span" } }}
      ></Box>
    </Box>
  );
};

export default Form;

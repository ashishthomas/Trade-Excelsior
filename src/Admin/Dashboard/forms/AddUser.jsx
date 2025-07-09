
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, MenuItem } from "@mui/material";

const validationSchema = Yup.object({
  fname: Yup.string().required("First Name is required"),
  lname: Yup.string().required("Last Name is required"),
  occupation: Yup.string().required("Occupation is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/\d/, "Must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Must contain at least one special character (!@#$%^&*)"
    )
    .required("Password is required"),
  role: Yup.string().required("Role is required"),
  license: Yup.string().required("License is required"),
  address: Yup.string().required("Address is required"),
  subscriptionDuration: Yup.string()
    .min(1, "Minimum 1 year required")
    .required("Subscription Duration is required"),
  SubScriptionStartDate: Yup.date()
    .typeError("Invalid date")
    .required("Subscription Start Date is required"),

    SubScriptionEndDate: Yup.date()
      .required("Subscription End Date is required")
      .nullable()
      .min(
        Yup.ref("SubScriptionStartDate"),
        "Subscription End Date must be after Start Date"
      ),
});

function AddUser() {
  const [submittedData, setSubmittedData] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      occupation: "",
      phoneNumber: "",
      email: "",
      password: "",
      role: "",
      license: "",
      address: "",
      subscriptionDuration: "",
      SubScriptionStartDate: "",
      SubScriptionEndDate: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      setSubmittedData(values); // ⬅️ display in UI
      formik.resetForm();
      alert("User registered successfully");
    },
  });

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        width="100%"
      >
        <TextField
          fullWidth
          id="fname"
          name="fname"
          label={
            <>
              First Name <span style={{ color: "red" }}>*</span>
            </>
          }
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.fname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fname && Boolean(formik.errors.fname)}
          helperText={formik.touched.fname && formik.errors.fname}
        />

        <TextField
          fullWidth
          id="lname"
          name="lname"
          label={
            <>
              Last Name <span style={{ color: "red" }}>*</span>
            </>
          }
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.lname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lname && Boolean(formik.errors.lname)}
          helperText={formik.touched.lname && formik.errors.lname}
        />

        <TextField
          fullWidth
          id="occupation"
          name="occupation"
          label={
            <>
              Occupation <span style={{ color: "red" }}>*</span>
            </>
          }
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.occupation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.occupation && Boolean(formik.errors.occupation)}
          helperText={formik.touched.occupation && formik.errors.occupation}
        />

        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          label={
            <>
              Phone Number <span style={{ color: "red" }}>*</span>
            </>
          }
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label={
            <>
              Email ID <span style={{ color: "red" }}>*</span>
            </>
          }
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label={
            <>
              Password <span style={{ color: "red" }}>*</span>
            </>
          }
          type="password"
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <TextField
          fullWidth
          id="role"
          name="role"
          select
          label={
            <>
              Role <span style={{ color: "red" }}>*</span>
            </>
          }
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </TextField>

        <TextField
          fullWidth
          id="license"
          name="license"
          select
          label={
            <>
              License <span style={{ color: "red" }}>*</span>
            </>
          }
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.license}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.license && Boolean(formik.errors.license)}
          helperText={formik.touched.license && formik.errors.license}
        >
          <MenuItem value="basic">Basic</MenuItem>
          <MenuItem value="premium">Premium</MenuItem>
        </TextField>

        <TextField
          fullWidth
          id="address"
          name="address"
          label={
            <>
              Address <span style={{ color: "red" }}>*</span>
            </>
          }
          multiline
          rows={4}
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />

        <TextField
          fullWidth
          id="subscriptionDuration"
          name="subscriptionDuration"
          label={
            <>
              Subscription Duration (in years){" "}
              <span style={{ color: "red" }}>*</span>
            </>
          }
          type="text"
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.subscriptionDuration}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.subscriptionDuration &&
            Boolean(formik.errors.subscriptionDuration)
          }
          helperText={
            formik.touched.subscriptionDuration &&
            formik.errors.subscriptionDuration
          }
        />

        <TextField
          fullWidth
          id="SubScriptionStartDate"
          name="SubScriptionStartDate"
          label={
            <>
              Subscription Start Date <span style={{ color: "red" }}>*</span>
            </>
          }
          type="date"
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.SubScriptionStartDate || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.SubScriptionStartDate &&
            Boolean(formik.errors.SubScriptionStartDate)
          }
          helperText={
            formik.touched.SubScriptionStartDate &&
            formik.errors.SubScriptionStartDate
          }
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          id="SubScriptionEndDate"
          name="SubScriptionEndDate"
          label={
            <>
              Subscription End Date <span style={{ color: "red" }}>*</span>
            </>
          }
          type="date"
          variant="outlined"
          sx={{ width: "100%", mb: 1 }}
          value={formik.values.SubScriptionEndDate || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.SubScriptionEndDate &&
            Boolean(formik.errors.SubScriptionEndDate)
          }
          helperText={
            formik.touched.SubScriptionEndDate &&
            formik.errors.SubScriptionEndDate
          }
          InputLabelProps={{ shrink: true }}
        />

        <Box sx={{ display: "flex", justifyContent: "end", width: "90%" }}>
          <Button
            type="submit"
            sx={{ mr: 2, width: "40%" }}
            variant="contained"
          >
            Register
          </Button>
          <Button
            type="button"
            onClick={() => formik.resetForm()}
            variant="contained"
            sx={{ bgcolor: "#9e9e9e", width: "40%" }}
          >
            Cancel
          </Button>
        </Box>
      </Box>

      {submittedData && (
        <Box
          sx={{
            mt: 4,
            width: "100%",
            bgcolor: "#f5f5f5",
            p: 2,
            borderRadius: 2,
          }}
        >
          <h3>Submitted User Data:</h3>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </Box>
      )}
    </>
  );
}

export default AddUser;

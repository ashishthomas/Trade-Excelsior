import { useState } from "react";
import { useFormik } from "formik";
import ProfileNavbar from "./components/ProfileNavbar";
import SubscriptionCard from "./components/SubscriptionCard";
import PersonalInfoForm from "./components/PersonalInfoForm";
import ActionButtons from "./components/ActionButtons";
import ProfileFormWrapper from "./components/ProfileFormWrapper";
import { profileValidationSchema } from "./validation/profileValidation";
import { Grid } from "@mui/material";

export default function Profilemain() {
  const [isEditing, setIsEditing] = useState(false);

  const storedProfile = JSON.parse(localStorage.getItem("profileData"));

  const formik = useFormik({
    initialValues: storedProfile || {
      firstName: "Aakas",
      lastName: "W",
      occupation: "Developer",
      mobile: "6274039142",
      email: "mailtojoh.doe@gmail.com",
      address: "123 Main Street, New York",
      instagramUrl: "",
      facebookUrl: "",
      linkedInUrl: "",
      xUrl: "",
    },
    validationSchema: profileValidationSchema,
    onSubmit: (values) => {
      localStorage.setItem("profileData", JSON.stringify(values));
      alert("Profile Updated Successfully!");
      setIsEditing(false);
    },
  });

  return (
    <>
      <ProfileNavbar />

      <form onSubmit={formik.handleSubmit}>
        <ProfileFormWrapper>
          <Grid item xs={12} sm={6} md={4}>
            <SubscriptionCard formik={formik} isEditing={isEditing} />
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <PersonalInfoForm formik={formik} isEditing={isEditing} />
          </Grid>
        </ProfileFormWrapper>
      </form>

      <ActionButtons
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        formik={formik}
      />
    </>
  );
}

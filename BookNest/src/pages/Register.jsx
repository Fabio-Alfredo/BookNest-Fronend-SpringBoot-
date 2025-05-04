import { Avatar, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import AuthLayout from "../layouts/AuthLayout";
import { LockOutlined } from "@mui/icons-material";

const Register = () => {
  return (
    <AuthLayout>
      <Avatar
        sx={{
          mx: "auto",
          mb: 2,
          bgcolor: "primary.main",
          textAlign: "center",
        }}
      >
        <LockOutlined />
      </Avatar>
      <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
        Registrarse
      </Typography>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;

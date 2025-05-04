import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import { LockOutlined } from "@mui/icons-material";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
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
        Iniciar Sesión
      </Typography>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;

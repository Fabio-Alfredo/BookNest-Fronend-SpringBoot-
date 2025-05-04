import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import PasswordField from "./PasswordField";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <TextField
        fullWidth
        label="Nombre de usuario"
        type="text"
        margin="normal"
        name="name"
        variant="outlined"
        autoComplete="name"
        required
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        name="email"
        variant="outlined"
        autoComplete="email"
        required
      />
      <PasswordField
        name="password"
        value=""
        onChange={() => {}}
        showPassword={showPassword}
        toggleShowPassword={setShowPassword}
        label="Contraseña"
        required
      />
      <PasswordField
        name="confirmPassword"
        value=""
        onChange={() => {}}
        showPassword={showPassword}
        toggleShowPassword={setShowPassword}
        label="Confirmar Contraseña"
        required
      />
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{ mt: 3, borderRadius: 2, py: 1.5 }}
      >
        Registrarse
      </Button>
      <Grid
        container
        spacing={2}
        sx={{ mt: 2, justifyContent: "right", px: 2 }}
      >
        <Grid item xs={6}>
          <Link href="/ " variant="body2">
            <Typography variant="body2" color="primary">
              Ya tienes cuenta? Inicia Sesión
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterForm;

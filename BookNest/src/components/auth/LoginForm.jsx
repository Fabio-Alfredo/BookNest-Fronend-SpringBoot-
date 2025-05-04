import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PasswordField from "./PasswordField";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box>
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        type="email"
        name="email"
        required
        autoComplete="email"
        autoFocus
      />
      <PasswordField
        name="password"
        value=""
        onChange={() => {}}
        showPassword={showPassword}
        toggleShowPassword={() => setShowPassword(!showPassword)}
        label="Contraseña"
        required
      />
      <Button
        fullWidth
        variant="contained"
        type="submit"
        sx={{ mt: 3, borderRadius: 2, py: 1.5 }}
      >
        Iniciar Sesión
      </Button>
      <Grid
        container
        spacing={2}
        sx={{ mt: 2, justifyContent: "space-between", px: 2 }}
      >
        <Grid item xs={6}>
          <Link href="#" variant="body2">
            <Typography variant="body2" color="primary">
              Olvidaste tu contraseña?
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Link href="/register" variant="body2">
            <Typography variant="body2" color="primary">
              No tienes cuenta? Registrate
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;

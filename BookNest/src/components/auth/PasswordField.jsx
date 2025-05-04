import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordField = ({
  showPassword,
  toggleShowPassword,
  label = "Contraseña",
  name,
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      margin="normal"
      type={showPassword ? "text" : "password"}
      name={name}
      value={value}
      onChange={onChange}
      required
      autoComplete="current-password"
      autoFocus
      slotProps={{
        input: {
          endAdornment: (
            <IconButton onClick={toggleShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        },
      }}
    />
  );
};

export default PasswordField;

import React from "react";
import { Box, TextField, Button } from "@mui/material";

const FormContact = () => {
  return (
    <>
      <form className="flex flex-col items-center justify-center w-full">
        <h3 className="text-2xl font-bold text-center">Contact Us</h3>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            maxWidth: 400,
            margin: "0 auto",
            padding: 2,
          }}
        >
          <TextField
            fullWidth
            label="name"
            variant="outlined"
            margin="normal"
            type="text"
            name="name"
            required
            autoFocus
          />
          <TextField
            fullWidth
            label="email"
            variant="outlined"
            margin="normal"
            type="email"
            name="email"
            required
            autoComplete="email"
            autoFocus
          />
          <TextField
            fullWidth
            label="message"
            variant="outlined"
            margin="normal"
            type="multiline"
            rows={4}
            name="message"
            required
            autoFocus
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 3, borderRadius: 2, py: 1.5 }}
          >
            Send
          </Button>
        </Box>
      </form>
    </>
  );
};

export default FormContact;

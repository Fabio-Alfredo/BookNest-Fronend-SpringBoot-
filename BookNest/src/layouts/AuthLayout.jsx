import React from "react";
import { Box, Container, Paper } from "@mui/material";

const AuthLayout = ({children}) => {
  return (
    <Container maxWidth="sm">
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 3,
            width: "100%",
          }}
        >
          {children}
        </Paper>
      </Box>
    </Container>
  );
};

export default AuthLayout;

import React from "react";
import { Box, Chip, Paper, TextField } from "@mui/material";
import PasswordField from "../components/PasswordField";
import LoginIcon from "@mui/icons-material/Login";

const RegisterPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: "400px",
        margin: "0 auto",
        mt: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
        }}
      >
        <Chip
          sx={{
            fontSize: "16px",
          }}
          label="Login"
          color="primary"
          variant="outlined"
          icon={<LoginIcon />}
        />
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          <TextField
            fullWidth
            id="username"
            label="Username"
            variant="standard"
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="standard"
          />
          <PasswordField id="password" label="Password " />
          <PasswordField id="repeat-password" label="Repeat password " />
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;

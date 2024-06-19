import React from "react";
import PasswordField from "../components/PasswordField";
// Import icon
import LoginIcon from "@mui/icons-material/Login";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
// Import Mui Components
import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
// Import Link
import { Link } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          width: "400px",
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
            label="Username or Email"
            variant="standard"
          />
          <PasswordField id="password" label="Password " />
          <Button sx={{ mt: 1 }} variant="contained">
            Login
          </Button>
          <Typography variant="subtitle1">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>

          <Divider sx={{ fontSize: "13px" }}>OR</Divider>

          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
              ":hover": {
                borderColor: theme.palette.text.primary,
                bgcolor: theme.palette.action.hover,
              },
            }}
          >
            Continue with Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
              ":hover": {
                borderColor: theme.palette.text.primary,
                bgcolor: theme.palette.action.hover,
              },
            }}
          >
            Continue with Facebook
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;

import { useState } from "react";
import PasswordField from "../components/PasswordField";
import ThirdPartyLoginSignUp from "../components/ThirdPartyLoginSignUp";
// Import icon
import LoginIcon from "@mui/icons-material/Login";
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
  const [userNameEmail, setUserNameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userNameEmail === "") {
      setError({
        type: "username",
        info: "Please fill out this field",
      });
      return;
    }
    if (password === "") {
      setError({
        type: "password",
        info: "Please fill out this field",
      });
      return;
    }
    if (!error) {
      console.log("FetchAPI");
    }
  };

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
        elevation={5}
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
          {/* Email Username field */}
          <TextField
            error={error && error.type === "username"}
            helperText={error && error.type === "username" ? error.info : ""}
            fullWidth
            id="username"
            label="Username or Email"
            variant="standard"
            value={userNameEmail}
            onChange={(e) => {
              // Update username state
              setUserNameEmail(e.target.value);
              // If error is from username set error to null when user input into username
              if (error && error.type === "username") {
                setError(null);
              }
            }}
          />
          {/* End Email Username field */}

          {/* Password Field */}
          <PasswordField
            error={error && error.type === "password"}
            helperText={error && error.type === "password" ? error.info : ""}
            id="password"
            label="Password"
            value={password}
            onChange={(e) => {
              // Update password state
              setPassword(e.target.value);
              // If error is from password set error to null when user input into password
              if (error && error.type === "password") {
                setError(null);
              }
            }}
          />
          {/* End Password Field */}

          <Button sx={{ mt: 1 }} variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Typography variant="subtitle1">
            Don&apos;t have an account?{" "}
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
          <ThirdPartyLoginSignUp></ThirdPartyLoginSignUp>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;

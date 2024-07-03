import { useState } from "react";
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
import PasswordField from "../components/PasswordField";
import ThirdPartyLoginSignUp from "../components/ThirdPartyLoginSignUp";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  function isValidEmail(email) {
    return emailRegex.test(email);
  }

  const handelRegister = (e) => {
    e.preventDefault();
    if (username === "") {
      setError({
        type: "username",
        info: "Please fill out this field",
      });
      return;
    }
    if (email === "") {
      setError({
        type: "email",
        info: "Please fill out this field",
      });
      return;
    }
    if (!isValidEmail(email)) {
      setError({
        type: "email",
        info: "Email is not valid",
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
          label="Sign Up"
          color="primary"
          variant="outlined"
          icon={<PersonIcon />}
        />
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* Username Field */}
          <TextField
            error={error && error.type === "username"}
            helperText={error && error.type === "username" ? error.info : ""}
            fullWidth
            id="username"
            label="Username"
            variant="standard"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (error && error.type === "username") {
                setError(null);
              }
            }}
          />
          {/* End Username Field */}

          {/* Email Field */}
          <TextField
            error={error && error.type === "email"}
            helperText={error && error.type === "email" ? error.info : ""}
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error && error.type === "email") {
                setError(null);
              }
            }}
          />
          {/* End Email Field */}

          {/* Password and Repeat Password */}
          <PasswordField
            error={error && error.type === "password"}
            helperText={error && error.type === "password" ? error.info : ""}
            id="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error && error.type === "password") {
                setError(null);
                return;
              }
              // Check if current password is equal to repeat password
              if (e.target.value !== repeatPassword) {
                setError({ type: "system", info: "Password do not match" });
              } else {
                setError(null);
              }
            }}
          />
          <PasswordField
            id="repeat-password"
            label="Repeat password"
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
              // Check if current repeate password is equal to password
              if (e.target.value !== password) {
                setError({ type: "system", info: "Password do not match" });
              } else {
                setError(null);
              }
            }}
          />
          {/* End Password and Repeat Password */}
          {error && error.type === "system" && (
            <Typography
              textAlign="left"
              variant="body2"
              display="block"
              color="error"
            >
              {error.info}
            </Typography>
          )}

          <Button sx={{ mt: 1 }} variant="contained" onClick={handelRegister}>
            Sign Up
          </Button>
          <Typography variant="subtitle1">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </Typography>

          <Divider sx={{ fontSize: "13px" }}>OR</Divider>
          <ThirdPartyLoginSignUp></ThirdPartyLoginSignUp>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterPage;

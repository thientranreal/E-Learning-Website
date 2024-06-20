import { Button } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTheme } from "@emotion/react";

const ThirdPartyLoginSignUp = () => {
  const theme = useTheme();

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<GoogleIcon fontSize="large" sx={{ color: "#DB4437" }} />}
        sx={{
          color: theme.palette.text.primary,
          borderColor: theme.palette.text.primary,
          ":hover": {
            borderColor: theme.palette.text.primary,
            bgcolor: "#0000001a",
          },
        }}
      >
        Continue with Google
      </Button>
      <Button
        variant="outlined"
        startIcon={<FacebookIcon fontSize="large" sx={{ color: "#1877F2" }} />}
        sx={{
          color: theme.palette.text.primary,
          borderColor: theme.palette.text.primary,
          ":hover": {
            borderColor: theme.palette.text.primary,
            bgcolor: "#0000001a",
          },
        }}
      >
        Continue with Facebook
      </Button>
    </>
  );
};

export default ThirdPartyLoginSignUp;

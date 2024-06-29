import { Box } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const MobileSearchBar = ({ theme, handleClear }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        bgcolor: theme.palette.background.default,
        zIndex: 2,
      }}
    >
      <SearchBar
        mobile
        sx={{ width: "100vw" }}
        handleClear={handleClear}
      ></SearchBar>
    </Box>
  );
};

export default MobileSearchBar;

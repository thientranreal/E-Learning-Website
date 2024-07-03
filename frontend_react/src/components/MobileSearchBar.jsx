import { Box, useTheme } from "@mui/material";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

const MobileSearchBar = ({ handleClear }) => {
  const theme = useTheme();
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

MobileSearchBar.propTypes = {
  handleClear: PropTypes.func,
};

export default MobileSearchBar;

import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import PropTypes from "prop-types";

const SearchBar = ({ sx, mobile, handleClear }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: mobile ? (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ) : null,
        sx: sx,
      }}
    />
  );
};

SearchBar.propTypes = {
  sx: PropTypes.object,
  mobile: PropTypes.bool,
  handleClear: PropTypes.func,
};

export default SearchBar;

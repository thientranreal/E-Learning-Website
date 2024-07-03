import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import SearchBar from "./SearchBar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import MobileSearchBar from "./MobileSearchBar";

const pages = ["Categories"];

const Navbar = () => {
  const theme = useTheme();
  const [isSearchMobile, setIsSearchMobile] = useState(false);

  const handleOpenNavMenu = () => {};

  const handleCloseNavMenu = () => {};

  const handleSearchMobile = () => {
    setIsSearchMobile(true);
  };

  const handleClearSearchMobile = () => {
    setIsSearchMobile(false);
  };

  return (
    <>
      {isSearchMobile ? (
        <MobileSearchBar theme={theme} handleClear={handleClearSearchMobile} />
      ) : (
        <AppBar
          position="static"
          sx={{ bgcolor: theme.palette.background.default, py: 1 }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              {/* Menu Mobile section */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon color="primary" />
                </IconButton>
              </Box>
              {/* End Menu Mobile section */}

              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <IconButton
                size="large"
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={handleSearchMobile}
              >
                <SearchIcon color="primary" />
              </IconButton>

              {/* Menu fullscreen section */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {pages.map((page) => (
                  <Typography
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      cursor: "pointer",
                      ":hover": { color: theme.palette.primary.main },
                    }}
                  >
                    {page}
                  </Typography>
                ))}
                <SearchBar
                  sx={{
                    height: "50px",
                    width: { md: "450px", lg: "750px" },
                    borderRadius: "25px",
                    ml: 3,
                  }}
                />

                <Box>
                  <Link to="/login">
                    <Button variant="outlined" sx={{ mr: 3, borderRadius: 0 }}>
                      Log in
                    </Button>
                  </Link>

                  <Link to="register">
                    <Button
                      variant="contained"
                      sx={{ borderRadius: 0, boxShadow: "none" }}
                    >
                      Sign up
                    </Button>
                  </Link>
                </Box>
              </Box>
              {/* End Menu fullscreen section */}
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
};

export default Navbar;

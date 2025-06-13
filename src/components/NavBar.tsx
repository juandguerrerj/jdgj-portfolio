"use client";

import {
  AppBar,
  Box,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { MouseEvent, useState, useContext, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import {
  DarkMode,
  LightMode,
  GitHub,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "@/app/MuiCssProvider";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
];

function NavBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  const linkUnderLineColor =
    theme.palette.mode === "dark" ? "text-white" : "text-black";
  const linkStyles = `my-2 block mr-4 hover:opacity-100 hover:bg-blue ${linkUnderLineColor}`;
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(16, 20, 24, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          transition: "ease-in-out",
          borderBottom: "1px solid lightgray",
        }}
        className={scrolled ? "scrolled" : ""}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ width: "80%", margin: "0 auto" }}>
            {/* Small size rendering */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Logo />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                width: "100%",
                flexDirection: "row-reverse",
              }}
            >
              <IconButton
                size="large"
                aria-label="portfolio menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Link href={page.link}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                <Divider />
                <MenuItem>
                  <Link href="https://www.linkedin.com/in/juandguerreroj/">
                    <LinkedIn /> LinkedIn
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="https://github.com/juandguerrerj">
                    <GitHub /> Github
                  </Link>
                </MenuItem>
                <MenuItem>
                  <IconButton
                    sx={{ padding: 0, color: "text.primary" }}
                    onClick={colorMode.toggleColorMode}
                  >
                    {theme.palette.mode === "dark" ? (
                      <LightMode />
                    ) : (
                      <DarkMode />
                    )} <Typography sx={{ ml: '0.5rem' }}> Mode </Typography>
                  </IconButton>
                </MenuItem>
              </Menu>
            </Box>
            {/* Medium and Large size rendering */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Logo />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                width: "100%",
                flexDirection: "row-reverse",
              }}
            >
              <IconButton
                sx={{ padding: 0, color: "text.primary" }}
                onClick={colorMode.toggleColorMode}
              >
                {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>

              <Link
                href="https://www.instagram.com/juandguerreroj/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton sx={{ color: "text.primary" }}>
                  <Instagram />
                </IconButton>
              </Link>

              <Link
                href="https://www.linkedin.com/in/juandguerreroj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton sx={{ color: "text.primary" }}>
                  <LinkedIn />
                </IconButton>
              </Link>

              <Link
                href="https://github.com/juandguerrerj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton sx={{ color: "text.primary" }}>
                  <GitHub />
                </IconButton>
              </Link>

              {pages
                .slice()
                .reverse()
                .map((page) => (
                  <Link
                    key={page.title}
                    href={page.link}
                    className={
                      activeLink === page.title
                        ? `active-navbar-link ${linkStyles}`
                        : `navbar-link ${linkStyles}`
                    }
                    onClick={() => onUpdateActiveLink(page.title)}
                  >
                    <Typography
                      sx={[
                        { color: "text.primary" },
                        (theme) => ({
                          "&:hover": {
                            opacity: 0.5,
                          },
                        }),
                      ]}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Offset />
    </>
  );
}

export default NavBar;

import { useNavigate } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NightModeButton } from "./styled/Atom";
import { useContext } from "react";
import { ThemeContext } from "../utils/context";
import { useMediaQuery, Theme } from "@mui/material";
import { Work } from "@mui/icons-material";
import useLogin from "../utils/hooks/useLogin";

const pages = [
  { name: "Profils", link: "/profil" },
  { name: "Freelances", link: "/freelances" },
  { name: "Survey", link: "/survey/1" },
];
const notLogedMenus = [
  {
    linkName: "Se connecter",
    link: "/login"
  },
  {
    linkName: "S'inscrire",
    link: "/register"
  }
];

const loggedMenus = [
  {
    linkName: "Mon compte",
    link: "/myprofil"
  },
  {
    linkName: "Déconnexion",
    link: "/logout"
  }
]  


const Header = () => {

  const { isLogged , currentUser } = useLogin();

  console.log("currentUser photpUrl", currentUser()?.photoURL);
  
  
  const isSmorDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickMenu = (link: string) => {
    handleCloseUserMenu();
    navigate(link);
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth={"xl"}>
        <Toolbar disableGutters>
          <Work
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h6"
            noWrap
            component="p"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              mt: 0.3,
              cursor: "pointer",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MYC.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page.name} onClick={() => navigate(page.link)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Work
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            onClick={() => navigate("/")}
          />
          <Typography
            onClick={() => navigate("/")}
            variant="h5"
            noWrap
            component="p"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MYC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.link)}
                sx={{ color: "white", display: "block", pt: "12px" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }} display="flex" alignItems="center" gap={2}>
            <NightModeButton
              onClick={() => toggleTheme()}
              data-testid="night-mode-btn"
            >
              {isSmorDown ? "" : "Changer de mode :"}{" "}
              {theme === "light" ? "☀️" : "🌙"}
            </NightModeButton>

            <Tooltip title="Open menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={currentUser()?.photoURL?.toString()} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {(isLogged() ? loggedMenus : notLogedMenus).map((menu) => (
                <MenuItem key={menu.linkName} onClick={() => handleClickMenu(menu.link)}>
                  <Typography textAlign="center">{menu.linkName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

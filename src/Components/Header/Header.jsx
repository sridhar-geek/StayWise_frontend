import { useContext, useState } from "react";
import {
  Box,
  List,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  ListItemText,
  Drawer,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import Login_Signup from "./Login_Signup";

import Logo from "../../assests/logo.jpg";
import { Context } from "../../App";

const sections = ["Home", "About Us", "Services", "Contact"];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

 const [anchorEl, setAnchorEl] = useState(null);
 const open = Boolean(anchorEl);
 const handleClick = (event) => {
   setAnchorEl(event.currentTarget);
 };
 const handleClose = () => {
   setAnchorEl(null);
 };
    const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { user } = useContext(Context);

  const drawerContent = (
    <div>
      <List>
        {sections.map((section) => (
          <MenuItem key={section}>
            <ListItemText
              primary={section}
              sx={{ ":hover": { backgroundColor: "#071a45", color: "white" } }}
            />
          </MenuItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        <Login_Signup />
      ) : (
        <Box sx={{ backgroundColor: "#053e5c", padding: "15px" }}>
          <Box display="flex" alignItems="center" sx={{ margin: "0px 5%" }}>
            <IconButton
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            >
              <MenuIcon sx={{ color: "white", fontSize: "2rem" }} />
            </IconButton>
            <Box>
              <IconButton
                onClick={() => navigate("/")}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <img src={Logo} alt="app_logo" style={{ height: "50px" }} />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {sections.map((section) => (
                <Typography
                  sx={{ marginLeft: "10px", color: "white", cursor: "pointer" }}
                  key={section}
                >
                  {section}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "1.6rem",
                  userSelect: "none",
                }}
              >
                Stay Wise
              </Typography>
            </Box>
            <Box>
              {user ? (
                <>
                  <Button
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "20px" }}
                  >
                    My Account
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}   
                  >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: "20px" }}
                >
                  Login
                </Button>
              )}
            </Box>
            <Drawer
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": { width: 140 },
              }}
            >
              {drawerContent}
            </Drawer>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;

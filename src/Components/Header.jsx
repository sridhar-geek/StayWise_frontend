// This is the Header component for the whole application
import {
  Box,
  Button,
  IconButton,
  Typography,
  styled,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
// Imports from anthor files
import Logo from "../../public/logo.jpg";
import { Context } from "../App";

//component Styles
const NavLinks = styled(Typography)`
  text-decoration: none;
  margin-right: 10px;
  color: white;
  cursor: pointer;
  font-weight: lighter;
  &::after {
    content: "";
    color: #53a9c6;
    transform-origin: left;
  }
`;
const Items = styled(Typography)`
  padding-bottom: 20px;
  cursor: pointer;
  &:hover{
    transform: scale(1.2);
  }
`
const Header = () => {

  const [open, setOpen] = useState(false)
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();


    const drawerContent = (
      <div style={{ padding: "2rem" }}>
        <List>
          <Items>Home</Items>
          <Items>About</Items>
          <Items>Contact us</Items>
          <Items>Learn More</Items>
          {user ? (
            <>
              <Button variant="contained"  sx={{marginBottom:'1rem', display:'block'}}>My Bookings</Button>
              <Button variant="contained" >
                Logout
              </Button>
            </>
          ) : (
            <Button variant="contained">Login</Button>
          )}
        </List>
      </div>
    );
  return (
    <Box bgcolor="#053E5C">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="0 5%"
      >
        <Box>
          <img
            alt="logo"
            src={Logo}
            style={{ height: "60px", width: "60px" }}
          />{" "}
        </Box>
        <Box>
          {location.pathname === "/login" || location.pathname === "/signup" ? (
            <Button variant="contained" onClick={() => navigate("/")}>
              Back Home
            </Button>
          ) : (
            <>
              <Box
                justifyContent="space-between"
                alignItems="center"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                <NavLinks>Home</NavLinks>
                <NavLinks>About</NavLinks>
                <NavLinks>Contact Us</NavLinks>
                <NavLinks>Learn More</NavLinks>
                {user ? (
                  <Button variant="outlined">Account</Button>
                ) : (
                  <Button variant="contained">Login</Button>
                )}
              </Box>
              <IconButton
                sx={{ display: { md: "none" } }}
                onClick={() => setOpen(!open)}
              >
                <MenuIcon sx={{ fontSize: "2rem", color: "white" }} />
              </IconButton>
              <Drawer
                open={open}
                anchor="right"
                onClose={() => setOpen(false)}
                sx={{ display: { sm: "block", md: "none" } }}
              >
                {drawerContent}
              </Drawer>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

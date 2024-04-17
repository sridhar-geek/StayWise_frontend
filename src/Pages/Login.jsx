/**Login Page to login user by verfying user credentails */
import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
//imports from another files
import { Context } from "../App";
import Logo from "../assests/logo.jpg";
//component styles
const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputFeild = styled(TextField)`
  display: block;
`;
const InputBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  padding: 10px;
`;

const Login = () => {
  const {setUser} = useContext(Context)
  // handles hide and unhide
  const [showPassword, setShowPassword] = useState(false);
  // stores data of user (email, password) and loading animation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  //function for login an user
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const user = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/authUser/login`,{email, password});
      console.log({user})
      setUser(user)
      setLoading(false)
      navigate("/")
      toast.success("Login Successful",{position:'top-center'})
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error?.response?.data?.msg, {position:'top-center'})
    }
  };
  return (
    <>
      <Container height="80vh" width="100%">
        <Box
          border="2px solid #053E5C"
          width="30%"
          padding="10px"
          borderRadius="15px"
          minWidth="400px"
        >
          <Container>
            <img
              src={Logo}
              alt="logo"
              width="40%"
              height="40%"
              style={{ maxWidth: "400px", margin: "20px" }}
            />
          </Container>
          <form onSubmit={handleLogin}>
            <InputBox>
              <MailIcon />
              <InputFeild
                variant="filled"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                placeholder="Email"
              />
            </InputBox>
            <InputBox>
              <KeyIcon />
              <InputFeild
                variant="filled"
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {" "}
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}{" "}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </InputBox>
            <Typography margin="10px">
              New to App ?{" "}
              <Link
                style={{ textDecoration: "none", fontSize: "1.1rem" }}
                to={"/signup"}
              >
                SignUp
              </Link>
            </Typography>

            <Button variant="contained" type="submit" fullWidth>
              {loading ? <CircularProgress color="inherit" /> : "Login"}
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;

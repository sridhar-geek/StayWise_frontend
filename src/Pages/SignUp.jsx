/**Login Page to login user by verfying user credentails */
import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  InputAdornment,
  IconButton,
  CircularProgress
} from "@mui/material";
import { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//imports from another files
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
  // handles hide and unhide
  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  // stores data of user (email, password)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  //function for login an user
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== conformPassword){
      setLoading(false)
      return toast.error("Passwords do not match", { position: "top-center" });
    }
    try {
       await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/authUser/register`, {
        name,
        email,
        password,
      });
      setLoading(false);
      navigate("/login");
      toast.success("Registration Successful", { position: "top-center" });
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.msg, { position: "top-center" });
      console.log(error)
    }
  };
  return (
    <>
      <Container height="90vh" width="100%">
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
          <form onSubmit={handleRegister}>
            <InputBox>
              <PersonIcon />
              <InputFeild
                variant="filled"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                placeholder="Name"
              />
            </InputBox>
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
            <InputBox>
              <KeyIcon />
              <InputFeild
                variant="filled"
                type={showConformPassword ? "text" : "password"}
                fullWidth
                required
                value={conformPassword}
                onChange={(e) => setConformPassword(e.target.value)}
                placeholder="Conform Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {" "}
                      <IconButton
                        onClick={() =>
                          setShowConformPassword(!showConformPassword)
                        }
                      >
                        {showConformPassword ? (
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
              Already have an account ?{" "}
              <Link
                style={{ textDecoration: "none", fontSize: "1.1rem" }}
                to={"/login"}
              >
                Login
              </Link>
            </Typography>

            <Button variant="contained" type="submit" fullWidth>
              {loading ? (
                <>
                  <CircularProgress color="inherit" />
                </>
              ) : (
                "SignUp"
              )}
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;

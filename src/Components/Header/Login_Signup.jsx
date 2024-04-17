import { Box, IconButton,Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

import Logo from '../../assests/logo.jpg'
const Login_Signup = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ backgroundColor: "#053e5c" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ margin: "0px 5%" }}
      >
        <IconButton>
          <img src={Logo} alt="app_logo" style={{ height: "50px" }} />
        </IconButton>
      <Button variant="contained" sx={{margin:'10px '}} onClick={() =>navigate('/')}>
          Back Home
        </Button>
      </Box>
    </Box>
  );
}

export default Login_Signup
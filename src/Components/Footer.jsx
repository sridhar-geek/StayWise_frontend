/**Serves as common footer for all the pages */
import {
  Box,
  Typography,
  styled,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useLocation } from "react-router-dom";
/** Import modules form another files  */
import Microsoft from '../assests/microsoft.png'
import Playstore from '../assests/playstore.png'
import Appstore from '../assests/appStore.png'

//component styles
const Container = styled(Box)`
  background-color: #053e5c;
  padding: 30px;
`;
const IconBtn = styled(IconButton)`
  &:hover {
    transform: scale(1.2);
  }
`;
const FooterImage = styled("img")`
  height: 45px;
  width: 140px;
  margin: 10px;
  user-select: none;
`;

const Heading = styled(Typography)`
  color: white;
  &::after {
    color: red;
  }
  &:hover {
    transform: scale3d(1.4);
  }
`;
const Item = styled(Typography)`
  margin: 10px 0px;
  cursor: pointer;
  color: white;

  &:hover {
    padding-left: 20px;
  }
`;

const Footer = () => {
    const location = useLocation()

  return (
    <>
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        <></>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#F0EBE3",
              padding: "1rem",
            }}
          >
            <IconBtn>
              <FacebookIcon />
            </IconBtn>
            <IconBtn>
              <InstagramIcon />
            </IconBtn>
            <IconBtn>
              <TwitterIcon />
            </IconBtn>
            <IconBtn>
              <LinkedInIcon />
            </IconBtn>
          </Box>
          <Container>
            <Grid container spacing={2}>
              <Grid item textAlign={"center"} xs={6} md={6} lg={3} xl={3}>
                <Heading variant="h4">About Us</Heading>
                <Item>Aim</Item>
                <Item>Who we are</Item>
                <Item>Work with us</Item>
              </Grid>
              <Grid item textAlign={"center"} xs={6} md={6} lg={3} xl={3}>
                <Heading variant="h4">For Hotels</Heading>
                <Item>Patner with us</Item>
                <Item>List Your Hotel</Item>
                <Item>Apps for You</Item>
              </Grid>
              <Grid item textAlign={"center"} xs={6} md={6} lg={3} xl={3}>
                <Heading variant="h4">Learn More</Heading>
                <Item>Privacy</Item>
                <Item>Security</Item>
                <Item>Terms</Item>
              </Grid>
              <Grid item textAlign={"center"} xs={6} md={6} lg={3} xl={3}>
                <Heading variant="h4">App Links</Heading>
                <FooterImage
                  src={Microsoft}
                  style={{ cursor: "pointer" }}
                  alt="playStore"
                />
                <FooterImage
                  src={Playstore}
                  style={{ cursor: "pointer" }}
                  alt="playStore"
                />
                <FooterImage
                  src={Appstore}
                  style={{ cursor: "pointer" }}
                  alt="playStore"
                />
              </Grid>
            </Grid>
            <Divider sx={{ margin: 2 }} />
            <Typography sx={{ color: "white", textAlign: "center", margin: 1 }}>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners.
            </Typography>
            <Typography sx={{ color: "white", textAlign: "center" }}>
              © <span style={{ color: "orangered" }}>Stay Wise™</span> Ltd. All
              rights reserved.
            </Typography>
          </Container>
        </>
      )}
    </>
  );
};

export default Footer;

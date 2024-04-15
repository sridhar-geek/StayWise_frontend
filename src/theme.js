// creating custom theme in material UI

import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#34abd3",
      light: "#40778a",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default Theme
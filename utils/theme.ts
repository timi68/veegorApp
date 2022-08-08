import { createTheme } from "@mui/material";
import { grey, pink } from "@mui/material/colors";

const theme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#f6ad19",
              light: "#f6ad19",
            },
            secondary: {
              main: grey[300],
              light: grey[300],
              dark: "#2c3536",
            },
            background: {
              default: grey[50],
            },
            text: {
              primary: grey[800],
              secondary: grey[800],
            },
          }
        : {
            primary: {
              main: grey[200],
              light: "#660132",
              dark: "#660132",
            },
            secondary: {
              main: grey[300],
              light: grey[100],
              dark: grey[900],
            },
          }),
    },
    typography: {
      fontFamily: "Nunito, calibri",
    },
    shape: {
      borderRadius: 20,
    },
  });

export default theme;

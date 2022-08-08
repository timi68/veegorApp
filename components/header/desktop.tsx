// This is the header content that will be displayed if the window width
// is less than 800px
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

const HeaderOnDesktop = (): JSX.Element => {
  return (
    <React.Fragment>
      <nav className="page-navbar responsive" style={{ height: "100%" }}>
        <Stack
          spacing={5}
          direction="row"
          alignItems="center"
          role="navigation"
        >
          {links.map((link, index) => {
            return (
              <div className="link" key={index}>
                <Link passHref href={"#" + link.url}>
                  <Button
                    color={"inherit"}
                    size={"small"}
                    sx={{
                      textTransform: "none",
                      bgcolor: "#a5a5c938",
                      boxShadow: "0 0 5px #bfbfd1",
                      fontWeight: 600,
                      color: "#69698f",
                      px: 1.7,
                    }}
                  >
                    {link.label}
                  </Button>
                </Link>
              </div>
            );
          })}
        </Stack>
      </nav>
      <div className="launch" id="launch-app-btn-wrap">
        <Link href="/login" passHref>
          <Button style={{ color: "#fff" }} variant="contained">
            Launch DApp
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const links = [
  {
    label: "Features",
    url: "#features",
    submenu: [
      {
        label: "",
        url: "",
      },
    ],
  },
  {
    label: "About us",
    url: "#about-us",
    submenu: [
      {
        label: "",
        url: "",
      },
    ],
  },
  {
    label: "Token",
    url: "#token",
    submenu: [
      {
        label: "",
        url: "",
      },
    ],
  },
  {
    label: "Protocols",
    url: "#protocols",
    submenu: {
      label: "",
      url: "",
    },
  },
];

export default HeaderOnDesktop;

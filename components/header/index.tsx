import React from "react";
import * as Interfaces from "../../utils/interfaces";
import { Button, Container, Paper, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import HeaderOnDesktop from "./desktop";
import HeaderOnMobile from "./mobile";

export default function Header({
  headerRef,
}: {
  headerRef: React.RefObject<HTMLDivElement>;
}) {
  const [state, setState] = React.useState<
    Partial<Interfaces.LayoutStateInterface>
  >({ openDrawer: false });

  // stores window or screen width
  const [width, setWidth] = React.useState<number>(null);

  React.useEffect(() => {
    // this setWidth will set the width of the window
    // and rerender the header to it's right content
    setWidth(window.innerWidth);

    // this is the function that is called every time the window
    // is on resize
    const handleResize = () => {
      // checking if the window size is less or greater than 800
      // and setWidth to current width of the window
      if (window.innerWidth < 800 || window.innerWidth > 800) {
        setWidth(window.innerWidth);
      }
    };

    // Listens to window screen resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // returns this navbar if user is on mobile
  return (
    <div className="header page-header top-header" ref={headerRef}>
      <Container maxWidth={"xl"}>
        <Paper
          sx={{ borderRadius: "20px", p: 1.5, boxShadow: "0 0 20px #bfbfd1" }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <div className="logo-wrapper">
              <Link passHref href="/">
                <Image
                  src="/logos/logo-dark.png"
                  height="30"
                  width={120}
                  alt="Veegor logo"
                />
              </Link>
            </div>
            {width > 900 ? (
              <HeaderOnDesktop />
            ) : (
              <HeaderOnMobile {...{ state, setState }} />
            )}
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}

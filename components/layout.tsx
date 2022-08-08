import React from "react";
import * as Interfaces from "../utils/interfaces";
import Footer from "./global/footer";
import { Container, ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "../utils/theme";
import Header from "./header";

function Layout(props: Interfaces.LayoutInterface) {
  // const [loading, setLoading] = React.useState<boolean>(true);
  const { children } = props;
  const headerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.scrollTop > 10) headerRef.current.classList.add("scrolling");
    else headerRef.current.classList.remove("scrolling");
  };

  return (
    <ThemeProvider theme={theme("light")}>
      <CssBaseline />
      <div className="container" onScroll={handleScroll}>
        <div className="wrapper page-wrapper">
          <Header headerRef={headerRef} />
          <Box component={"main"}>{children}</Box>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Layout;

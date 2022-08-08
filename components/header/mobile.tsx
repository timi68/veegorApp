// This is the header content that will be displayed if the window width
// is greater than 800px
import {Button, IconButton, ListItemButton, ListItemIcon, ListItemText, Stack} from "@mui/material";
import Link from "next/link";
import Menu from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {NavbarData} from "../../lib/data";
import React, {SetStateAction} from "react";
import ListWithSubList from "./listWithSublist";
import * as Interfaces from "../../utils/interfaces";

type Props = {state: Partial<Interfaces.LayoutStateInterface>, setState: React.Dispatch<SetStateAction<{openDrawer: boolean}>>}

const HeaderOnMobile: React.FC<Props> = ({state, setState}): JSX.Element => {
  return (
    <nav className="page-navbar responsive mobile-screen">
      <Stack direction="row" alignItems="center" spacing={.2}>
        <div className="launch" id="launch-dapp-btn-wrap">
          <Link href="/login" passHref>
            <Button
              style={{ color: "#fff" }}
              size="small"
              variant="contained"
            >
              Launch DApp
            </Button>
          </Link>
        </div>
        <div className="navigation-icon">
          <IconButton
            role="toolbar"
            className="icon"
            aria-roledescription="it toggle menubar on small screen size [andriod, tablet]"
            onClick={() => setState({ ...state, openDrawer: true })}
          >
            <Menu fontSize="medium" className="icon-svg" />
          </IconButton>
        </div>
      </Stack>
      <SwipeableDrawer
        anchor="top"
        open={state.openDrawer}
        onClose={() => setState({ ...state, openDrawer: false })}
        onOpen={() => setState({ ...state, openDrawer: true })}
      >
        <div className="drawer-container">
          <div className="drawer-wrapper">
            <ul>
              {NavbarData.map((data, index) => {
                if (Boolean(data.subList)) {
                  return <ListWithSubList data={data} key={index} />;
                }
                return (
                  <Link key={index} passHref href={data.link}>
                    <a href="components/header/index#">
                      <ListItemButton>
                        <ListItemIcon>
                          <data.icon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <small
                              style={{
                                fontFamily: "Poppins",
                                fontWeight: 500,
                              }}
                            >
                              {data.text}
                            </small>
                          }
                        />
                      </ListItemButton>
                    </a>
                  </Link>
                );
              })}
            </ul>
            <div
              className="launch"
              id="launch-app-btn-wrap"
              style={{ padding: 12, marginTop: "1em" }}
            >
              <Button
                style={{ background: "#e29f1a" }}
                size="medium"
                variant="contained"
                fullWidth
              >
                Launch DApp
              </Button>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </nav>
  );
};

export default HeaderOnMobile

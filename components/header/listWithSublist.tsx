import React from "react";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  data: {
    text: string;
    icon: any;
    subList?: {
      text: string;
      link: string;
    }[];
  };
};

export default function ListWithSubList(props: Props): JSX.Element {
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <props.data.icon />
        </ListItemIcon>
        <ListItemText
          primary={
            <small
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
            >
              {props.data.text}
            </small>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.data.subList.map((data, index) => {
          return (
            <Link href={data.link} key={index} passHref>
              <a href="components/header/index#">
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText
                      primary={
                        <small
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: 400,
                          }}
                        >
                          {data.text}
                        </small>
                      }
                    />
                  </ListItemButton>
                </List>
              </a>
            </Link>
          );
        })}
      </Collapse>
    </React.Fragment>
  );
}


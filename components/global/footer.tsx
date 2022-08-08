import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container } from "@mui/material";

const linksArray = [
  {
    title: "Protocols",
    links: [
      { text: "Network Protocol", url: "/#" },
      { text: "Listing Protocol", url: "/#" },
    ],
  },

  {
    title: "About us",
    links: [
      { text: "Info", url: "/#" },
      { text: "Our Team", url: "/#" },
      { text: "Blogs", url: "/#" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", url: "/" },
      { text: "Press Room", url: "/" },
      { text: "Terms of Service", url: "/" },
      { text: "Privacy Policy", url: "/" },
    ],
  },
];

function Footer({ children }: { children?: React.ReactNode }) {
  return (
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000c35"
          fillOpacity="1"
          d="M0,224L10.4,218.7C20.9,213,42,203,63,208C83.5,213,104,235,125,213.3C146.1,192,167,128,188,122.7C208.7,117,230,171,250,213.3C271.3,256,292,288,313,266.7C333.9,245,355,171,376,144C396.5,117,417,139,438,165.3C459.1,192,480,224,501,202.7C521.7,181,543,107,563,96C584.3,85,605,139,626,165.3C647,192,668,192,689,186.7C709.6,181,730,171,751,165.3C772.2,160,793,160,814,138.7C834.8,117,856,75,877,80C897.4,85,918,139,939,138.7C960,139,981,85,1002,96C1022.6,107,1043,181,1064,208C1085.2,235,1106,213,1127,176C1147.8,139,1169,85,1190,90.7C1210.4,96,1231,160,1252,186.7C1273,213,1294,203,1315,181.3C1335.7,160,1357,128,1377,117.3C1398.3,107,1419,117,1430,122.7L1440,128L1440,320L1429.6,320C1419.1,320,1398,320,1377,320C1356.5,320,1336,320,1315,320C1293.9,320,1273,320,1252,320C1231.3,320,1210,320,1190,320C1168.7,320,1148,320,1127,320C1106.1,320,1085,320,1064,320C1043.5,320,1023,320,1002,320C980.9,320,960,320,939,320C918.3,320,897,320,877,320C855.7,320,835,320,814,320C793,320,772,320,751,320C730.4,320,710,320,689,320C667.8,320,647,320,626,320C605.2,320,584,320,563,320C542.6,320,522,320,501,320C480,320,459,320,438,320C417.4,320,397,320,376,320C354.8,320,334,320,313,320C292.2,320,271,320,250,320C229.6,320,209,320,188,320C167,320,146,320,125,320C104.3,320,83,320,63,320C41.7,320,21,320,10,320L0,320Z"
        ></path>
      </svg>
      <div className="footer page-footer">
        <div className="footer-wrapper">
          <div className="navigation-container">
            <div className="navigation-link-list-wrapper">
              <ul className="link-list-group">
                {linksArray.map((li, index) => {
                  return (
                    <li className="link-subgroup wrap" key={index}>
                      <div className="subgroup-wrapper">
                        <div className="link-title">
                          <span>{li.title}</span>
                        </div>
                        <div className="external-links-group">
                          {li.links.map((a, index) => {
                            return (
                              <div className="link-wrap" key={index}>
                                <Link passHref href={a.url}>
                                  <a
                                    href="#"
                                    className="link"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: ".5em",
                                    }}
                                  >
                                    <ArrowForwardIosIcon
                                      style={{
                                        fontSize: ".8em",
                                      }}
                                    />
                                    <span>{a.text}</span>
                                  </a>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex-wrap">
            <div className="connect-container">
              <div className="title">Connect with us</div>
              <ul className="icons-list">
                <li>
                  <a href="mailto:oderindejames02@gmail.com">
                    <IconButton className="icon">
                      <EmailIcon fontSize="medium" />
                    </IconButton>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/veegor"
                    className="facebook-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton size="medium" className="icon">
                      <FacebookIcon fontSize="medium" />
                    </IconButton>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+2347064239637"
                    className="whatsapp-link"
                  >
                    <IconButton size="medium" className="icon">
                      <WhatsAppIcon fontSize="medium" />
                    </IconButton>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/veegordapp"
                    className="instagram-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton size="medium" className="icon">
                      <InstagramIcon fontSize="medium" />
                    </IconButton>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/veegorDApp"
                    target="_blank"
                    rel="noreferrer"
                    className="twitter-link"
                  >
                    <IconButton size="medium" className="icon">
                      <TwitterIcon fontSize="medium" />
                    </IconButton>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/veegor/about/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    className="linkedIn"
                  >
                    <IconButton size="medium" className="icon">
                      <LinkedInIcon fontSize="medium" />
                    </IconButton>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-text copyright-wrapper">
              <div className="copyright">
                <div className="text">
                  Copyright &copy; 2022 Frutiv Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Footer;

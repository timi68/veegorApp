import React from "react";
import Image from "next/image";
import Layout from "../components/layout";
import { FeaturesData } from "../lib/data";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  TextField,
  Button,
  Stack,
  CardActions,
  Typography,
  CardMedia,
  Chip,
  Box,
  Paper,
  Container,
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import UseCases from "../components/UseCases";

function LandingPage() {
  return (
    <Layout>
      <Container maxWidth={"xl"}>
        <Card
          elevation={0}
          className="banner-section"
          sx={{
            position: "relative",
            overflow: "initial",
            bgcolor: "transparent",
          }}
        >
          <CardMedia
            src={"/images/landingbg.jpg"}
            component={"img"}
            sx={{
              position: "absolute",
              height: 400,
              maxWidth: "100%",
              filter: "brightness(0.6)",
              borderRadius: "20px",
            }}
          />
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            sx={{ height: { xs: "auto", md: 400 } }}
          >
            <CardContent
              sx={{
                position: "relative",
                maxWidth: 700,
                p: 2.5,
                my: { xs: 3 },
              }}
            >
              <Typography
                color="#fff"
                fontWeight={900}
                lineHeight={{ xs: 1.5, sm: 1.3 }}
                fontSize={{ xs: "1.5em", sm: "3em" }}
              >
                Your Blockchain Solution Factory
              </Typography>
              <Typography variant={"subtitle2"} color={"#f2f2f2"}>
                Launch your project on Veegor today and experience the power of
                the Blockchain
              </Typography>
              <CardActions sx={{ mt: 2, gap: "2em" }} disableSpacing>
                <Button
                  variant="outlined"
                  sx={{ color: "#f6ad19", borderRadius: 20, px: 2 }}
                >
                  White Paper
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    borderRadius: 20,
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  Launch DApp
                </Button>
              </CardActions>
            </CardContent>
            <div className="banner-image">
              <Image
                src="/images/bannerImage.png"
                alt="banner image bottom"
                height="350"
                width="350"
                priority
              />
            </div>
          </Stack>
        </Card>
        <Box className={"investment-wrapper"} my={5} component={"section"}>
          <Box mb={2} textAlign={{ xs: "center", sm: "left" }}>
            <Typography
              variant={"h4"}
              mb={1}
              fontWeight={800}
              color={"primary"}
            >
              Veegor Investments
            </Typography>
            <Typography variant={"subtitle2"} fontWeight={600}>
              Invest in our business idea, let your asset increase on the go
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
            {Array.from(new Array(4)).map((_, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Card raised elevation={4} sx={{ bgcolor: "#a5a5c938" }}>
                  <CardActionArea>
                    <CardContent>
                      <CardMedia
                        src={"/images/game.png"}
                        component={"img"}
                        sx={{ borderRadius: "20px" }}
                      />
                      <Typography
                        variant={"subtitle1"}
                        fontWeight={700}
                        textAlign={"center"}
                      >
                        Meta-verse Gaming
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/*-----------------------------------*/}
      {TopFeaturesSvg}
      <Box className="features" id={"features"} py={"5em"}>
        <div className="features-wrapper">
          <div className="features-header">
            <Box textAlign={"center"} mb={2}>
              <Typography variant={"h5"} color={"#fff"} fontWeight={900}>
                Veegor Features
              </Typography>
              <Typography variant={"subtitle2"} color={"#f2f2f2"}>
                Features we actively provide, take a chance the power of
                blockchain on Veegor features
              </Typography>
            </Box>
          </div>
          <Grid
            container
            spacing={{ xs: 1, sm: 3 }}
            className="cards-wrapper"
            sx={{ p: 2, maxWidth: "90vw", width: 1100, mx: "auto!important" }}
          >
            {FeaturesData.map((content, index) => {
              return (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%" }} className="card" elevation={2}>
                    <div className="card-content">
                      <div className="card-icon">
                        <Image
                          height={40}
                          width={40}
                          src={content.icon}
                          alt={content.title}
                        />
                      </div>
                      <div className="card-title title-text">
                        <Typography variant={"subtitle1"} fontWeight={800}>
                          {content.title}
                        </Typography>
                      </div>
                      <div className="card-body">
                        <div className="card-text">
                          <Typography variant={"subtitle2"} fontWeight={600}>
                            {content.text}
                          </Typography>
                        </div>
                        {/*<div className="card-link">*/}
                        {/*  <Link passHref href={content.url}>*/}
                        {/*    <a href="#">*/}
                        {/*      <div*/}
                        {/*        className="link-wrap"*/}
                        {/*        style={{*/}
                        {/*          display: "flex",*/}
                        {/*          alignItems: "center",*/}
                        {/*          gap: ".5em",*/}
                        {/*        }}*/}
                        {/*      >*/}
                        {/*        <div className="link-label">*/}
                        {/*          {content.url_label}*/}
                        {/*        </div>*/}
                        {/*        {index < 3 && (*/}
                        {/*          <ArrowCircleRightOutlinedIcon*/}
                        {/*            className="link-icon arrow-forward"*/}
                        {/*            style={{*/}
                        {/*              fill: "#5c6b91",*/}
                        {/*            }}*/}
                        {/*          />*/}
                        {/*        )}*/}
                        {/*      </div>*/}
                        {/*    </a>*/}
                        {/*  </Link>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
      {BottomFeaturesSvg}
      {/*-------------------------------------------*/}

      <Container>
        <div className="ecosystem-container" id={"ecosystem"}>
          <div className="ecosystem-wrapper wrapper">
            <Box className="section-header">
              <Typography
                variant={"h6"}
                fontWeight={800}
                className="primary-text"
              >
                VEEGOR ECOSYSTEM
              </Typography>
              <Typography
                variant={"subtitle2"}
                fontWeight={500}
                className="secondary-text"
              >
                Veegor Blockchain currently supports four different Blockchain
                Protocols that you can use to create your tokens, send and
                receive tokens from.
              </Typography>
            </Box>
            <div className="logo-list">
              {logos.map((logo, index) => (
                <Card raised elevation={1} sx={{ p: 1.5 }} key={index}>
                  <Image
                    alt={logo.alt}
                    width={120}
                    height="50"
                    src={logo.src}
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
        <UseCases />
      </Container>

      <div className="video-section dApp" style={{ position: "relative" }}>
        <div className="wrapper">
          <div className="video-layout">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/QchSUPJoDfw?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="section-content">
            <div className="title">Veegor DApp</div>
            <div className="text">
              <span>
                The Veegor dApp is the No.1 Web3 Platform, offering access to
                token creation, with unique customization features including
                marketplace listing. Launch your project on Veegor and
                experience the power of blockchain from your Mobile Phone.
              </span>
            </div>
            <div className="links-wrapper">
              <div className="link">
                <a href="https://play.google.com/store/apps/details?id=io.veegor.app">
                  <Image
                    height={50}
                    width={150}
                    src="/images/iosimggg.png"
                    alt="google play link"
                  />
                </a>
              </div>
              <div className="link">
                <Link passHref href="/login">
                  <a href="#">
                    <Image
                      width={150}
                      height={50}
                      src="/images/webimgg.png"
                      alt="web version of veegor DApp"
                    />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-section">
        <div className="wrapper">
          <div className="section-info">
            <div className="section-icon">
              <KeyboardArrowDownRoundedIcon
                fontSize="large"
                style={{ fill: "#fff" }}
              />
            </div>
            <div className="section-title">
              <div className="primary-text">
                <span>Subscribe To Our Newsletter</span>
              </div>
              <div className="secondary-text">
                <span>
                  Lets keep in touch with you, you will be the first to recieve
                  news about oportunities and offers from our platform
                </span>
              </div>
            </div>
          </div>
          <div className="section-form">
            <div className="form-control">
              <input
                type="email"
                className="text-control email-textbox"
                placeholder="Enter your email"
                id="email"
              />
            </div>
            <div className="action-btn">
              <Button variant="contained" style={{ background: "#233664" }}>
                <span>Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const BottomFeaturesSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#010514"
      fillOpacity="1"
      d="M0,288L12,266.7C24,245,48,203,72,192C96,181,120,203,144,208C168,213,192,203,216,181.3C240,160,264,128,288,144C312,160,336,224,360,245.3C384,267,408,245,432,208C456,171,480,117,504,96C528,75,552,85,576,74.7C600,64,624,32,648,53.3C672,75,696,149,720,165.3C744,181,768,139,792,133.3C816,128,840,160,864,197.3C888,235,912,277,936,277.3C960,277,984,235,1008,213.3C1032,192,1056,192,1080,165.3C1104,139,1128,85,1152,58.7C1176,32,1200,32,1224,42.7C1248,53,1272,75,1296,117.3C1320,160,1344,224,1368,261.3C1392,299,1416,309,1428,314.7L1440,320L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
    ></path>
  </svg>
);

const TopFeaturesSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#010514"
      fillOpacity="1"
      d="M0,288L12,266.7C24,245,48,203,72,192C96,181,120,203,144,208C168,213,192,203,216,181.3C240,160,264,128,288,144C312,160,336,224,360,245.3C384,267,408,245,432,208C456,171,480,117,504,96C528,75,552,85,576,74.7C600,64,624,32,648,53.3C672,75,696,149,720,165.3C744,181,768,139,792,133.3C816,128,840,160,864,197.3C888,235,912,277,936,277.3C960,277,984,235,1008,213.3C1032,192,1056,192,1080,165.3C1104,139,1128,85,1152,58.7C1176,32,1200,32,1224,42.7C1248,53,1272,75,1296,117.3C1320,160,1344,224,1368,261.3C1392,299,1416,309,1428,314.7L1440,320L1440,320L1428,320C1416,320,1392,320,1368,320C1344,320,1320,320,1296,320C1272,320,1248,320,1224,320C1200,320,1176,320,1152,320C1128,320,1104,320,1080,320C1056,320,1032,320,1008,320C984,320,960,320,936,320C912,320,888,320,864,320C840,320,816,320,792,320C768,320,744,320,720,320C696,320,672,320,648,320C624,320,600,320,576,320C552,320,528,320,504,320C480,320,456,320,432,320C408,320,384,320,360,320C336,320,312,320,288,320C264,320,240,320,216,320C192,320,168,320,144,320C120,320,96,320,72,320C48,320,24,320,12,320L0,320Z"
    ></path>
  </svg>
);

const logos = [
  {
    alt: "Eth logo",
    src: "/logos/eth-logo.png",
  },
  {
    alt: "Binance logo",
    src: "/logos/binance.png",
  },
  {
    alt: "Polygon logo",
    src: "/logos/polygon.png",
  },
  {
    alt: "Solana logo",
    src: "/logos/Solana-logo.png",
  },
  {
    alt: "Avalanche logo",
    src: "/logos/avalanche.png",
  },
  {
    alt: "CMC logo",
    src: "/logos/cmc-logo.png",
  },
];

export default LandingPage;

import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ImageCustom from "./Image";

const BannerContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginBottom: 60,
  ".grid-card-banner": {
    backgroundImage: `url('/assets/banner/bg_yellow.png') `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  ".card-item-banner": {
    maxWidth: 202,
    margin: "0 auto",
    "& p": {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "28px",
      textAlign: "center",
      textTransform: "uppercase",
      marginTop: 16,
    },
    ".card-banner-img": {
      maxWidth: 202,
    },
    "&--person": {
      position: "absolute",
      bottom: 0,
      maxWidth: "100%",
      ".card-banner-img": {
        maxWidth: 471,
      },
      ".tag-banner": {
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        "& p": {
          position: "absolute",
          top: "36%",
          left: "42%",
          transform: "translate(-50%, -50%)",
          fontSize: 72,
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "88px",
          color: "#ffffff",
          width: "100%",
          textTransform: "uppercase",
        },
        ".tag-banner-img": {
          maxWidth: 422,
          margin: "0 auto",
        },
      },
    },
  },
  ".new-arrival": {
    "& img": {
      [theme.breakpoints.down(1300)]: {
        width: "100% !important",
      },
    },
  },
}));

const Banner = () => {
  const card1 = "/assets/banner/card1.png";
  const card2 = "/assets/banner/card2.png";
  const card3 = "/assets/banner/card3.png";
  const card4 = "/assets/banner/card4.png";
  const person = "/assets/banner/banner1.png";
  const tag = "/assets/banner/the_dj_tag.png";
  const newArrival = "/assets/banner/new_arrival.png";

  return (
    <BannerContainer container>
      <Grid item sm={12}>
        <Box className="wrapper" mt={8} mb={8}>
          <ImageCustom
            src={newArrival}
            alt="new-arrival"
            className="new-arrival"
          />
        </Box>
      </Grid>
      <Grid item sm={12} className="grid-card-banner">
        <Grid container className="wrapper" mt={4} mb={4}>
          <Grid item sm={12} md={12} xl={8}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={6} md={3} xl={3} alignSelf="center">
                <Box className="card-item-banner">
                  <ImageCustom
                    src={card1}
                    alt="card-banner"
                    className="card-banner-img"
                  />
                  <Typography component="p">Assassin</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3} xl={3}>
                <Box className="card-item-banner">
                  <ImageCustom
                    src={card2}
                    alt="card-banner"
                    className="card-banner-img"
                  />
                  <Typography component="p">Neon Guy</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3} xl={3}>
                <Box className="card-item-banner">
                  <ImageCustom
                    src={card3}
                    alt="card-banner"
                    className="card-banner-img"
                  />
                  <Typography component="p">Mafia England</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3} xl={3}>
                <Box className="card-item-banner">
                  <ImageCustom
                    src={card4}
                    alt="card-banner"
                    className="card-banner-img"
                  />
                  <Typography component="p">Bassketball Girl</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item display={{ xs: "none", xl: "flex" }} xl={4}>
            <Box className="card-item-banner card-item-banner--person">
              <ImageCustom
                src={person}
                alt="card-banner"
                className="card-banner-img"
              />
              <Box className="tag-banner">
                <ImageCustom
                  src={tag}
                  alt="tag-banner"
                  className="tag-banner-img"
                />
                <Typography component="p">The DJ</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </BannerContainer>
  );
};

export default Banner;

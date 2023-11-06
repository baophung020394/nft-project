import React from "react";
import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import Button from "components/Common/Button";

const FooterWrapper = styled(Grid)(({ theme }) => ({
  padding: "60px 0 180px",
  [theme.breakpoints.down(1200)]: {
    padding: "60px 10px 180px",
  },
  "& h3": {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "32px",
    color: "#fff",
    textTransform: "uppercase",
    marginBottom: 32,
  },
  "& p": {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    color: "#fff",
  },
  ".group-email": {
    display: "flex",
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
      width: "100%",
    },
    "& input": {
      marginRight: 20,
      background: "transparent",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      color: "#89888B",
      padding: "12px 20px",
      borderRadius: 4,
      border: "1px solid var(--neutral-5, #FFF)",
      maxHeight: 44,
      minWidth: 300,
      [theme.breakpoints.down(600)]: {
        marginRight: 0,
        marginBottom: 16,
      },
    },
    ".btn-sub": {
      borderRadius: 4,
      background: "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
      boxShadow: "0px 0px 50px 0px rgba(187, 75, 255, 0.32)",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      color: "#fff",
      padding: "10px 49px",
      maxHeight: 44,
      [theme.breakpoints.down(600)]: {
        minWidth: "100%",
        maxWidth: "100%",
        width: "100% !important",
      },
    },
  },
  ".group-icon": {
    "& button": {
      color: "#fff",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      marginBottom: 32,
      padding: 0,
      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
  ".list-navigation": {
    display: "flex",
    padding: 0,
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
    },
    "& ul": {
      padding: 0,
      marginRight: 20,
      "&:last-child": {
        marginRight: 0,
      },

      "& li": {
        marginBottom: 12,
        "&:last-child": {
          marginBottom: 0,
        },
      },
    },
  },
  ".policy": {
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    "& p": {
      marginRight: 60,
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  ".group-menu": {
    [theme.breakpoints.down(600)]: {
      flexDirection: "column",
    },
  },
}));
const Footer = () => {
  const phoneIcon = "/assets/icon/card/phoneicon.svg";
  const messageIcon = "/assets/icon/card/messageicon.svg";

  return (
    <FooterWrapper container className="wrapper">
      <Grid item sm={12} pb={4}>
        <Grid container className="group-menu">
          <Grid item sm={12} xl={4} mb={{ sm: "30px", xl: "0px" }}>
            <Typography component="h3" variant="h3">
              NAVIGATION
            </Typography>
            <Box className="list-navigation">
              <ul>
                <li>
                  <Typography component="p">Home</Typography>
                </li>
                <li>
                  <Typography component="p">About us</Typography>
                </li>
                <li>
                  <Typography component="p">Our teams</Typography>
                </li>
              </ul>
              <ul>
                <li>
                  <Typography component="p">Whitepaper</Typography>
                </li>
                <li>
                  <Typography component="p">Marketplace</Typography>
                </li>
                <li>
                  <Typography component="p">Roadmap</Typography>
                </li>
              </ul>
              <ul>
                <li>
                  <Typography component="p">FAQs</Typography>
                </li>
                <li>
                  <Typography component="p">News</Typography>
                </li>
                <li>
                  <Typography component="p">Community</Typography>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item sm={12} xl={4} mb={{ sm: "30px", xl: "0px" }}>
            <Typography component="h3" variant="h3">
              Contact us
            </Typography>
            <Box className="group-icon">
              <Button icon={phoneIcon}> 01234568910</Button>
              <Button icon={messageIcon}> tymex-talent@tyme.com</Button>
            </Box>
          </Grid>
          <Grid item sm={12} xl={4} mb={{ sm: "30px", xl: "0px" }}>
            <Typography component="h3" variant="h3">
              Subcribe to receive our latest update
            </Typography>
            <Box className="group-email">
              <input type="email" placeholder="Your email address" />
              <Button className="btn-sub">Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={12} pt={4} borderTop="1px solid #3A3841">
        <Grid container>
          <Grid item sm={12} lg={6}>
            <Typography component="p">
              Subcribe to receive our latest update
            </Typography>
          </Grid>
          <Grid item sm={12} lg={6} textAlign="right">
            <Box className="policy">
              <Typography component="p">Security</Typography>
              <Typography component="p">Legal</Typography>
              <Typography component="p">Privacy</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </FooterWrapper>
  );
};

export default Footer;

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
const HeaderWrapper = styled(Box)(({ theme }) => ({
  background: "#000",
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#000",
    opacity: "0.3",
  },
  ".app-bar": {
    background: "#000",
    boxShadow: "none !important",
    overflowX: "hidden",
  },
  "& ul": {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    "& li": {
      marginRight: 60,
      cursor: "pointer",
      "&:last-child": {
        marginRight: 0,
      },
      "& p ": {
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "20px",
        color: "#fff",
        textTransform: "uppercase",
        "& span": {
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "20px",
          textTransform: "uppercase",
          color: "#DA34DD",
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            bottom: -7,
            left: 3,
            height: 2,
            width: 16,
            background: "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
          },
          [theme.breakpoints.down(1300)]: {
            "&:before": {
              content: "none",
            },
          },
        },
      },
    },
  },
  ".connect-wallet": {
    maxHeight: 40,
    padding: "8px 20px",
    borderRadius: 4,
    background: "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
    boxShadow: "0px 0px 50px 0px rgba(187, 75, 255, 0.32)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
    textTransform: "capitalize",
    color: "#fff",
    cursor: "pointer",
  },
  ".main-menu": {
    padding: "32px 0",
    maxHeight: "84px",
    boxSizing: "border-box",
    [theme.breakpoints.down(1300)]: {
      maxHeight: "100%",
      padding: 0,
    },
  },
  ".menu-left": {
    transition: "0.4s all",
    [theme.breakpoints.down(1300)]: {
      "& ul": {
        flexDirection: "column",
        width: "100%",
        "& li": {
          borderBottom: "1px solid gray",
          marginRight: 0,
          width: "100%",
          padding: 8,
        },
      },
    },
  },
  ".menu-right": {
    [theme.breakpoints.down(1300)]: {
      textAlign: "right",
    },
  },
  ".menu-mobile-btn": {
    display: "none",
    marginTop: 16,
    [theme.breakpoints.down(1300)]: {
      display: "inline-block",
      width: 24,
      height: 24,
      maxWidth: 24,
      boxSizing: "border-box",
      minWidth: "unset",
      padding: 0,
      color: "#fff",
    },
  },
}));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeaderWrapper>
      <Box className="wrapper">
        <AppBar position="static" className="app-bar">
          <Button className="menu-mobile-btn" onClick={handleOpenMenu}>
            <MenuIcon />
          </Button>
          <Toolbar className="main-menu">
            <Grid container justifyContent="flex-end" alignItems="flex-end">
              <Grid
                item
                xs={12}
                xl={9}
                className="menu-left"
                display={isOpen ? "block" : "none"}
              >
                <ul>
                  <li>
                    <Typography component="p">Home</Typography>
                  </li>
                  <li>
                    <Typography component="p">about us</Typography>
                  </li>
                  <li>
                    <Typography component="p">Our teams</Typography>
                  </li>
                  <li>
                    <Typography component="p">
                      <Typography component="span">Marketplace</Typography>{" "}
                      Roadmap
                    </Typography>
                  </li>
                  <li>
                    <Typography component="p"> Whitepaper</Typography>
                  </li>
                </ul>
              </Grid>
              <Grid
                item
                xs={12}
                xl={3}
                className="menu-right"
                lineHeight="52px"
                display={isOpen ? "block" : "none"}
              >
                <Button className="connect-wallet">Connect wallet</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;

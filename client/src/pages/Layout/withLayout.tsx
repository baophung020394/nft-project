import Banner from "components/Common/Banner";
import Header from "components/Common/Header";
import Sidebar from "components/Common/Sidebar";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import styled from "@emotion/styled";
import Footer from "components/Common/Footer";

const LayoutContainer = styled(Grid)(({ theme }) => ({}));

const withLayout =
  <P extends object>(WrappedComponent: React.ComponentType<P>): React.FC<P> =>
  (props: P) => {
    const [toggleFilter, setToggleFilter] = useState(true);
    const theme = useTheme();
    const matchDownLg = useMediaQuery(theme.breakpoints.down("lg"));
    console.log("matchDownLg", matchDownLg);

    const styleButtonToggle = {
      position: "absolute",
      top: "84px",
      left: "-22px",
      backgroundColor: "#000 !important",
      height: "60px",
      boxShadow:
        "0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22)",
      zIndex: -1,
      paddingLeft: "0",
      border: "1px solid #DA34DD",
      "&:before": {
        content: '"<"',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: 10,
        zIndex: 1,
        color: "#DA34DD",
      },
    };

    const styleFilterMobile = {
      position: "fixed",
      top: "0",
      right: 0,
      maxWidth: "330px",
      width: "100%",
      zIndex: 999,
      transition: "0.4s all",
      border: "none",
    };

    const onClickToggleFilter = () => {
      setToggleFilter(!toggleFilter);
    };

    return (
      <LayoutContainer container>
        <Grid item sm={12} position="sticky">
          <Header />
        </Grid>
        <Grid item sm={12}>
          <Banner />
        </Grid>
        <div className="wrapper">
          <Grid
            container
            spacing={8}
            height="100%"
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {matchDownLg ? (
              <Box
                sx={styleFilterMobile}
                style={{
                  right: toggleFilter ? "0" : "-330px",
                }}
              >
                <Grid item sm={12} lg={3}>
                  <Button sx={styleButtonToggle} onClick={onClickToggleFilter}>
                    {"<"}
                  </Button>
                  <Sidebar matchDownLg={matchDownLg} />
                </Grid>
              </Box>
            ) : (
              <Grid item sm={12} lg={3}>
                <Sidebar />
              </Grid>
            )}

            <Grid item sm={12} xs={12} lg={9}>
              <WrappedComponent {...props} />
            </Grid>
          </Grid>
        </div>
      </LayoutContainer>
    );
  };

export default withLayout;

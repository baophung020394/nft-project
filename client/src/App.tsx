import { Box, Grid } from "@mui/material";
import LazyRouter from "routes/LazyRouter";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import styled from "@emotion/styled";
import Footer from "components/Common/Footer";

const AppContainer = styled(Grid)(({ theme }) => ({
  backgroundImage: 'url("/assets/images/card/bg_cards.png")',
  backgroundRepeat: "repeat",
  height: "100%",
  ".bg_line": {
    backgroundImage: 'url("/assets/images/card/bg_line.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: 418,
    marginTop: 50,
  },
}));
function App() {
  return (
    <AppContainer>
      <Grid container height="100%">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyRouter />
            <Grid item sm={12}>
              <Box className="bg_line"></Box>
            </Grid>
            <Grid item sm={12}>
              <Footer />
            </Grid>
          </Suspense>
        </BrowserRouter>
      </Grid>
    </AppContainer>
  );
}

export default App;

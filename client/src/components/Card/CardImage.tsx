import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CardImage = styled(Box)(({ theme }) => ({
  borderRadius: 10,
  minHeight: 233,
  // maxWidth: 235,
  maxHeight: 233,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down(1400)]: {
    minHeight: 177,
  },
  [theme.breakpoints.down(1200)]: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  "& span": {
    borderRadius: 4,
    background: "rgba(49, 59, 69, 0.50)",
    padding: "8px 12px",
    color: "#fff",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  },
}));

export default CardImage;

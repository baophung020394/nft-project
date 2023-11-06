import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CardTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "26px 0 18px",
  "& h3": {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
    color: "#fff",
  },
  "& p": {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#fff",
  },
  ".icon_price": {
    display: "flex",
    alignItems: "center",
    ".icon": {
      marginRight: 8,
    },
  },
}));

export default CardTitle;

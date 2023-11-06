import { Box } from "@mui/material";
import { styled } from "@mui/system";

const CardUser = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  minHeight: 32,
  "& p": {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#fff",
    marginLeft: 12,
  },
}));

export default CardUser;

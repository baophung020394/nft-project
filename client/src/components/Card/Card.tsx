import { styled } from "@mui/system";
import { CardModel } from "@models/Card";
import { Box, Grid, Typography } from "@mui/material";
import ImageCustom from "components/Common/Image";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardUser from "./CardUser";

const CardContainer = styled(Box)(({ theme }) => ({
  borderRadius: 10,
  background: "rgba(58, 56, 65, 0.60)",
  padding: 16,
  [theme.breakpoints.down(600)]: {
    maxWidth: "100%",
  },
  ".image_card": {
    height: "100%",
    "& img": {
      width: "100% !important",
      height: "100% !important",
      [theme.breakpoints.down(600)]: {
        width: "auto !important",
        height: "auto !important",
      },
    },
  },
  ".wishlist_category": {
    display: "flex",
    justifyContent: "space-between",
    maxHeight: 28,
    boxSizing: "border-box",
    padding: "4px 12px",
    "& span": {
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      padding: "0 8px",
    },
  },
  ".icon_price": {
    display: "flex",
    alignItems: "center",
  },
}));

interface CardProps {
  card: CardModel;
}
const Card: React.FC<CardProps> = ({ card }) => {
  const iconETH = "/assets/icon/card/logos_ethereum.svg";
  const iconHeart = "/assets/icon/card/heart.svg";
  const checkGreen = "/assets/icon/card/check_green.svg";
  const checkRed = "/assets/icon/card/check_red.svg";
  const avatar1 = "/assets/images/card/user1.png";
  const CardIamge = "/assets/images/card/carditem.png";

  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <CardContainer>
        <CardImage
          style={{
            backgroundColor: `${card?.colorFrom}`,
            background: `linear-gradient(to right, ${card?.colorFrom}, ${card?.colorTo})`,
          }}
        >
          <Box className="wishlist_category">
            <Typography component="span">{card?.category}</Typography>
            <ImageCustom src={iconHeart} alt="" />
          </Box>
          <ImageCustom src={CardIamge} className="image_card" alt="" />
        </CardImage>
        <CardTitle>
          <Typography component="h3" variant="h3">
            {card?.name}
          </Typography>
          <Box className="icon_price">
            <ImageCustom src={iconETH} alt="" className="icon" />
            <Typography component="p">{card?.priceETH} ETH</Typography>
          </Box>
        </CardTitle>
        <CardUser>
          <Box
            sx={{
              position: "relative",
              minHeight: 32,
              minWidth: 32,
              ".avatar": {
                minHeight: 32,
                minWidth: 32,
              },
              ".check-mark": {
                background: "#000",
                width: 12,
                height: 12,
                borderRadius: "50%",
                position: "absolute",
                bottom: "-3px",
                right: "-3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <ImageCustom src={avatar1} alt="avatar" className="avatar" />
            {card?.user?.level === 0 && (
              <ImageCustom src={checkGreen} alt="icon" className="check-mark" />
            )}

            {card?.user?.level === 1 && (
              <ImageCustom src={checkRed} alt="icon" className="check-mark" />
            )}

            {card?.user?.level === 2 && (
              <ImageCustom src={checkRed} alt="icon" className="check-mark" />
            )}
          </Box>
          <Typography component="p">{card?.user?.username}</Typography>
        </CardUser>
      </CardContainer>
    </Grid>
  );
};

export default Card;

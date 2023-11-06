import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { RootState } from "@store/index";
import Card from "components/Card/Card";
import FilterCategory from "components/Filters/FilterCategory";
import useApi from "hooks/useApi";
import { CardModel, ResponseCard } from "models/Card";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryAct } from "store/actions/cardActions";

const ListCardContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(600)]: {
    display: "flex",
  },
  overflowY: "auto",
  maxHeight: 1951,
  "&::-webkit-scrollbar": {
    width: 3,
  },

  "&::-webkit-scrollbar-track": {
    background: "#777",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#FFCC21",
    borderRadius: 3,
  },

  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
}));

const ListCard = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardsDisplayed, setCardsDisplayed] = useState(16);
  const category = useSelector((state: RootState) => state?.card.category);
  const searchTerm = useSelector((state: RootState) => state?.card.searchTerm);
  const card = useSelector((state: RootState) => state.card.data);
  const dispatch = useDispatch();

  const { data: cardList, loading } = useApi<ResponseCard>(
    `${process.env.REACT_APP_GET_LIST_CARDS}/card?limit=99999`,
    true,
  );

  /**
   * Filters
   */
  const cardsToDisplay = useMemo(() => {
    let filter = cardList?.results?.slice(0, cardsDisplayed);

    if (category) {
      if (category === "All") return filter;
      filter = cardList?.results.filter((res) => res?.category === category);
    }

    if (searchTerm) {
      filter = filter?.filter((res) =>
        res?.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (card !== undefined) {
      filter = card?.results?.slice(0, cardsDisplayed);
    }

    // dispatch(updateStateCallApi(false));
    return filter;
  }, [cardList, category, searchTerm, cardsDisplayed, card]);

  const listCardContainerRef = useRef<any>(null);

  const cardsToShowMore = 8;

  const updateContainerWidth = () => {
    if (listCardContainerRef?.current) {
      const width = listCardContainerRef.current.clientWidth;
      setContainerWidth(width);
    }
  };

  const handleLoadMore = () => {
    setCardsDisplayed(
      (prevCardsDisplayed) => prevCardsDisplayed + cardsToShowMore,
    );
  };

  useEffect(() => {
    if (loading) {
      dispatch(setCategoryAct("All"));
    }
  }, [loading, dispatch]);

  useEffect(() => {
    if (listCardContainerRef?.current) {
      updateContainerWidth();
    }

    const handleResize = () => {
      updateContainerWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <FilterCategory containerWidth={containerWidth} />
      <ListCardContainer
        ref={listCardContainerRef}
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {cardsToDisplay
          ? cardsToDisplay.map((card: CardModel) => (
              <Card key={card?.name} card={card} />
            ))
          : null}
      </ListCardContainer>

      {cardsToDisplay &&
      cardsToDisplay.length > 0 &&
      cardList &&
      cardsToDisplay.length < cardList?.total ? (
        <Grid container textAlign="center">
          <Grid item sm={12}>
            <Button
              sx={{
                maxWidth: "320px",
                maxHeight: "70px",
                margin: "55px auto",
                borderRadius: "4px",
                background:
                  "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
                boxShadow: "0px 0px 50px 0px rgba(187, 75, 255, 0.32)",
                padding: "23px",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "inherit",
                lineHeight: "24px",
                color: "#fff",
                width: "100%",
              }}
              onClick={handleLoadMore}
            >
              View more
            </Button>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default ListCard;

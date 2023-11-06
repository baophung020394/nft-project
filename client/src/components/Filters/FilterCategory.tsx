// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { setCategoryAct } from "store/actions/cardActions";
import { useDispatch } from "react-redux";
import { updateCards } from "store/reducers/cardSlice";
const FilterContainer = styled(Box)(({ theme }) => ({
  margin: "0 auto 40px",
  position: "relative",
  display: "flex",
  ".btn_filter": {
    maxHeight: 44,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
    padding: "10px 16px",
    borderRadius: 4,
    background:
      "linear-gradient(91deg, rgba(218, 69, 143, 0.40) -6%, rgba(218, 52, 221, 0.40) 113.05%)",
    flex: "1 0 auto",
    color: "#fff",
    textTransform: "capitalize",
    display: "inline-block",
    marginRight: 24,
    transition: "0.4s easy-in-out",
    "&.active": {
      background: "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
      boxShadow: "0px 0px 50px 0px rgba(187, 75, 255, 0.32)",
    },
  },
}));

const listFilter = [
  "All",
  "Upper Body",
  "Lower Body",
  "Hat",
  "Shoes",
  "Accessory",
  "Legendary",
  "Mythic",
  "Epic",
  "Rare",
];

interface FilterCategoryProps {
  containerWidth: number;
}
const FilterCategory: React.FC<FilterCategoryProps> = ({ containerWidth }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<any>(null);
  const firstButtonRef = useRef<any>(null);
  const lastButtonRef = useRef<any>(null);
  const dispatch = useDispatch();

  const scrollToLeft = () => {
    const scrollPos = containerRef?.current?.scrollLeft;
    containerRef?.current?.scrollTo({
      left: scrollPos - 150,
      behavior: "smooth",
    });
  };

  const scrollToRight = () => {
    const scrollPos = containerRef?.current?.scrollLeft;

    containerRef?.current?.scrollTo({
      left: scrollPos + 150,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const isEndOfContainer =
      container.scrollLeft >= container.scrollWidth - container.clientWidth;

    if (container.scrollLeft === 0) {
      if (firstButtonRef && firstButtonRef.current) {
        firstButtonRef.current.style.display = "none";
        lastButtonRef.current.style.display = "flex";
      }
    }

    if (isEndOfContainer) {
      if (lastButtonRef && lastButtonRef.current) {
        lastButtonRef.current.style.display = "none";
        firstButtonRef.current.style.display = "flex";
      }
    }
  };

  const handleClick = (index: number, value: string) => {
    setActiveIndex(index);
    dispatch(setCategoryAct(value));
    dispatch(updateCards(undefined));
  };

  return (
    <FilterContainer>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          maxWidth: "100%",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        ref={containerRef}
        onScroll={handleScroll}
      >
        {listFilter?.length > 0 &&
          listFilter?.map((btn, index) => (
            <Button
              key={btn}
              className={`btn_filter ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index, btn)}
            >
              {btn}
            </Button>
          ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          ".MuiButtonBase-root": {
            color: "#fff",
            padding: "10px 16px",
            maxWidth: "52px",
            maxHeight: "44px",
            borderRadius: "4px",
            background:
              "linear-gradient(81deg, rgba(218, 69, 143, 0.40) 7.2%, rgba(218, 52, 221, 0.00) 52.38%)",
          },
        }}
      >
        <Button
          ref={firstButtonRef}
          onClick={scrollToLeft}
          style={{ display: "none" }}
        >
          <KeyboardArrowDownIcon />
        </Button>
        <Button ref={lastButtonRef} onClick={scrollToRight}>
          <KeyboardArrowUpIcon />
        </Button>
      </Box>
    </FilterContainer>
  );
};

export default FilterCategory;

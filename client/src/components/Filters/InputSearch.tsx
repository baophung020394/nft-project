import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";
import ImageCustom from "components/Common/Image";
import { useDispatch } from "react-redux";
import { setSearchTermAct } from "store/actions/cardActions";

const InputSearchWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  border: "1px solid var(--neutral-3, #89888B)",
  padding: "10px 16px",
  ".icon_search": {},
  "& input": {
    width: "100%",
    border: "none",
    background: "transparent",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
    color: "#89888B",
    "&:focus-visible": {
      outline: "none",
    },
  },
}));

const InputSearch = () => {
  const searchIcon = "/assets/icon/card/searchicon.svg";
  const dispatch = useDispatch();

  const debouncedSearch = (value: string) => {
    setTimeout(() => {
      // Do something with the search term after delay
      console.log("Perform search with:", value);
      dispatch(setSearchTermAct(value));
    }, 500);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debouncedSearch(value);
  };
  return (
    <Grid container>
      <Grid item sm={12}>
        <InputSearchWrap>
          <ImageCustom src={searchIcon} alt="search" className="icon_search" />
          <input
            type="text"
            placeholder="Quick search"
            onChange={handleInputChange}
          />
        </InputSearchWrap>
      </Grid>
    </Grid>
  );
};

export default InputSearch;

import Button from "components/Common/Button";
import { Box, SelectChangeEvent, Slider, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateCards } from "store/reducers/cardSlice";

type FormValues = {
  priceETH?: number[];
  tier: string;
  theme: string;
  sortByDate: string;
  sortByPrice: string;
  priceFrom?: number;
  priceTo?: number;
  limit: string;
};

function valuetext(value: number) {
  return `${value} ETH`;
}

const arrowDown = "/assets/icon/card/arrowdown.svg";
const rangeDot = "/assets/images/card/rangedot.png";
const close = "/assets/icon/card/close.svg";

const FilterFormWrapper = styled(Box)(({ theme }) => ({
  
  maxHeight: "100%",
  height: "100%",
  marginTop: 30,
  [theme.breakpoints.down(1300)]: {
    paddingBottom: 40,
    ".MuiSlider-root": {
      width: "84%",
      margin: "0px auto 40px !important",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  ".customSelect": {
    width: "100%",
    maxHeight: 44,
    marginBottom: 24,
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    appearance: "none",
    padding: "10px 16px",
    border: "1px solid #3A3841",
    borderRadius: "4px",
    background: `url(${arrowDown}) no-repeat`,
    backgroundPosition: "98% 50%",
    cursor: "pointer",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    color: "#fff",
    marginTop: 12,
  },

  ".customSlider": {
    width: "96%",
    left: "50%",
    transform: "translateX(-50%)",
    marginBottom: 40,
    "& .MuiSlider-thumb:hover": {
      backgroundColor: "red",
    },
    ".MuiSlider-valueLabelOpen": {
      background: "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
      "&:before": {
        background: "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
      },
    },
    ".MuiSlider-track": {
      background:
        "linear-gradient(91deg, rgba(218, 69, 143, 0.00) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0.00) 102.8%)",
      border: "unset",
    },
    ".MuiSlider-rail": {
      background: "#7b7b7b",
      borderRadius: 2,
      height: 8,
    },
    ".MuiSlider-thumb": {
      border: "1px solid #fff",
      background: "transparent",
      "&:before": {
        backgroundImage: `url(${rangeDot})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    },
    ".MuiSlider-markLabel[data-index='0']": {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      color: "#fff",
      left: "5% !important",
    },
    ".MuiSlider-markLabel[data-index='1']": {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
      color: "#fff",
      left: "94% !important",
    },
  },
  ".group-button": {
    display: "flex",
    [theme.breakpoints.down(1300)]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  ".btn_option": {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px",
    cursor: "pointer",
    color: "#fff",
    maxHeight: 44,
    minWidth: 168,
    [theme.breakpoints.down(1300)]: {
      width: "100%",
    },
    "&--close": {
      justifyContent: "flex-start !important",
      padding: 0,
      "& img": {
        marginRight: 8,
      },
      [theme.breakpoints.down(1300)]: {
        width: "100% !important",
        justifyContent: "center !important",
        padding: "10px 57px",
      },
    },
    "&--search": {
      padding: "10px 57px",
      borderRadius: 4,
      background: "linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)",
      boxShadow: "0px 0px 50px 0px rgba(187, 75, 255, 0.32)",
    },
  },
}));

const FilterForm: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      priceETH: [0, 200],
      sortByDate: "oldest",
      sortByPrice: "ASC",
      theme: "all",
      tier: "all",
      limit: "999999",
    },
  });
  const [value, setValue] = useState<number[]>([0, 200]);
  const dispatch = useDispatch();

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    delete data.priceETH;
    const clone = { ...data };
    clone.priceFrom = value[0];
    clone.priceTo = value[1];
    axios
      .get("http://localhost:3002/card", { params: clone })
      .then((response) => {
        console.log(response.data);
        dispatch(updateCards(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleReset = () => {
    reset();
  };

  return (
    <FilterFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="priceETH"
          control={control}
          render={({ field }) => (
            <Slider
              className="customSlider"
              getAriaLabel={() => "Temperature range"}
              {...field}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              max={200}
              valueLabelFormat={valuetext}
              marks={[
                {
                  label: "0.01 ETH",
                  value: 0,
                },
                {
                  label: "200 ETH",
                  value: 200,
                },
              ]}
              sx={{}}
            />
          )}
        />

        <Controller
          name="tier"
          control={control}
          render={({ field }) => (
            <>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: "#89888B",
                }}
                component="h3"
              >
                TIER
              </Typography>
              <select {...field} className="customSelect">
                <option value="all">All</option>
                <option value="Rare">Rare</option>
              </select>
            </>
          )}
        />

        <Controller
          name="theme"
          control={control}
          render={({ field }) => (
            <>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: "#89888B",
                }}
                component="h3"
              >
                THEME
              </Typography>
              <select {...field} className="customSelect">
                <option value="all">All</option>
                <option value="Holloween">Holloween</option>
              </select>
            </>
          )}
        />

        <Controller
          name="sortByDate"
          control={control}
          render={({ field }) => (
            <>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: "#89888B",
                }}
                component="h3"
              >
                TIME
              </Typography>
              <select {...field} className="customSelect">
                <option value="latest">Latest</option>
                <option value="oldest">Old</option>
              </select>
            </>
          )}
        />

        <Controller
          name="sortByPrice"
          control={control}
          render={({ field }) => (
            <>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  color: "#89888B",
                }}
                component="h3"
              >
                PRICE
              </Typography>
              <select {...field} className="customSelect">
                <option value="ASC">Low to high</option>
                <option value="DESC">High to low</option>
              </select>
            </>
          )}
        />

        <Box className="group-button">
          <Button
            className={`btn_option btn_option--close`}
            onClick={() => handleReset()}
            icon={close}
          >
            Close filter
          </Button>
          <Button className={`btn_option btn_option--search`}>Search</Button>
        </Box>
      </form>
    </FilterFormWrapper>
  );
};

export default FilterForm;

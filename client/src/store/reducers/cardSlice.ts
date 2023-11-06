import { ResponseCard } from "@models/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardState {
  data: ResponseCard | undefined;
  loading: boolean;
  error: string | null;
  category: string;
  searchTerm: string;
}

const initialState: CardState = {
  data: undefined,
  loading: false,
  error: null,
  category: "",
  searchTerm: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    updateCards: (state, action: PayloadAction<ResponseCard | undefined>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setCategory, setSearchTerm, updateCards, setLoading, setError } =
  cardSlice.actions;

export default cardSlice.reducer;

// src/store/actions/userActions.ts
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  setCategory,
  setError,
  setLoading,
  updateCards,
} from "store/reducers/cardSlice";

export const fetchCards = createAsyncThunk(
  "card/fetchCard",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        "http://localhost:3002/card?limit=999999",
      );
      dispatch(updateCards(response.data));
    } catch (error: any) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const setCategoryAct = createAction<string>("card/setCategory");
export const setSearchTermAct = createAction<string>("card/setSearchTerm");

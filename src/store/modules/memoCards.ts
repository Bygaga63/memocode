import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TMemoCard } from "../../types/types"
import { AppThunk } from "../index"
import MemoCardsService from "../../api/MemoCardsService"

const service = new MemoCardsService();

type TMemoCardsState = {
  data: TMemoCard[]
}

const initialValue: TMemoCardsState = {
  data: []
}


const memoCards = createSlice({
  name: "memoCards",
  initialState: initialValue,
  reducers: {
    loadMemoCards: (state, action: PayloadAction<TMemoCard[]>) => {
      state.data = action.payload
    },
  }
})

export default memoCards.reducer;

export const {
  loadMemoCards
} = memoCards.actions

export const fetchMemoCards = (): AppThunk => async dispatch => {
    const cards = await service.load();
    dispatch(loadMemoCards(cards))
}
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  itemsInCart: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("cart/fetchData", async () => {
  const response = await fetch("https://api.example.com/data");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data;
});

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
      state.using = true;
    },
    decrement(state) {
      state.value -= 1;
      state.using = true;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
      state.using = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload.someValue;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;

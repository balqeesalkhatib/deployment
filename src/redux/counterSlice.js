import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    totalDecrements: 0,
    totalIncrements: 0,
    history: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.totalIncrements += 1;

      state.history.push({
        type: "Increment",
        amount: 1,
      });
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
        state.totalDecrements += 1;

        state.history.push({
          type: "Decrement",
          amount: -1,
        });
      }
    },

    reset: (state) => {
      state.value = 0;

      state.history.push({
        type: "Reset",
        amount: 0,
      });
    },

    incrementByAmount: (state, action) => {
      const value = Number(action.payload);
      if (!isNaN(value)) {
        state.value += value;
        state.totalIncrements += value;

        state.history.push({
          type: "Increment",
          amount: value,
        });
      }
    },
    decrementByAmount: (state, action) => {
      const value = Number(action.payload);
      if (!isNaN(value) && value > 0 && state.value >= value) {
        state.value -= value;
        state.totalDecrements += value;
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
  clearHistory,
} = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { item: [] },
  reducers: {
    addItems: (state, action) => {
      state.item.push(action.payload);
    },
    removeItem: (state, action) => {
      state.item.pop();
    },

    clearCart: (state, action) => {
      state.item.length = 0;
    },
  },
});
export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

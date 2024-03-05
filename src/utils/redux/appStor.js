import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const reducer = combineReducers({
    
})

const appStore = configureStore(
    {reducer:
    {
        cart:cartSlice,
    }}
);
export default appStore;
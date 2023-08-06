import { configureStore } from "@reduxjs/toolkit";
import { DarkMode } from "./Slices/DarkModeSlice";
import { FilterSlice } from "./Slices/FilterSlice";

export const store = configureStore({
  reducer: {
    mode: DarkMode.reducer,
    filter: FilterSlice.reducer,
  },
});

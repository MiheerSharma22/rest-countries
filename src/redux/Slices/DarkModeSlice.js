import { createSlice } from "@reduxjs/toolkit";

export const DarkMode = createSlice({
  name: "mode",
  initialState: {
    dark: sessionStorage.getItem("dark"),
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.dark = !state.dark;
      sessionStorage.setItem("dark", state.dark);
    },
  },
});

export const { toggleDarkMode } = DarkMode.actions;
export default DarkMode.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const DarkMode = createSlice({
    name: "mode",
    initialState: {
        dark: false
    },
    reducers:{
        toggleDarkMode: (state)=> {
            state.dark = !state.dark;
            // state.dark = (state.dark) && sessionStorage.getItem("theme");

            // sessionStorage.setItem("theme", state.dark);
        }
    }
});

export const {toggleDarkMode} = DarkMode.actions;
export default DarkMode.reducer;
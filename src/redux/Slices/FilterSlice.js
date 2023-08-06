import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    inputValue: "",
    selectValue: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
      state.selectValue = "";
    },

    setSelectValue: (state, action) => {
      state.selectValue = action.payload;
      state.inputValue = "";
    },
  },
});

export const { setInputValue, setSelectValue } = FilterSlice.actions;
export default FilterSlice.reducer;

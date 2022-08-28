import { createSlice } from '@reduxjs/toolkit';

export const purseSlice = createSlice({
    name: 'purse',
    initialState: {
        selectedCategory: 'КЛАСИКА'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
          },
     },
})

export const getselectedCategory = state => state.purse.selectedCategory;
export const { filterCategory } = purseSlice.actions
export default purseSlice.reducer;
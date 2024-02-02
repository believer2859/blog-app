import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
});

export const {toggleTheme} = themeSlice.actions;

// The function below is called a selector. It selects the value of the `value` field from the state.
// Selectors can also be used to select nested values using dot notation.

export default themeSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setPendingHttpStatus(state) {
            state.isLoading = true;
            state.error = false;
        },
        setSuccessHttpStatus(state) {
            state.isLoading = false;
            state.error = false;
        },
        setErrorHttpStatus(state) {
            state.isLoading = true;
            state.error = true;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        rockets: [],
        missions: []
    },
    reducers: {

    }
})

export const { } = dataSlice.actions;
export default dataSlice.reducer;


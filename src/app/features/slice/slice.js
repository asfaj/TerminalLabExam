import { createSlice, nanoid } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        rockets: [],
        missions: []
    },
    reducers: {
        addRockets: (state,action)=>{
         
            state.rockets= [...state.rockets, rocket]
        }


    }
})

export const { } = dataSlice.actions;
export default dataSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    word: []
}

const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        setWord(state, action){
            const newWord = action.payload;
            state.word.push(newWord);
        }
    }
})

export const wordAction = wordSlice.actions;

export default wordSlice;
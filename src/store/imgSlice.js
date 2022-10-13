import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URI_API} from "../const/const";
import {fetchText} from "./textSlice";

export const fetchImg = createAsyncThunk(
    'img/fetchImg',
    async (holiday) => {
        const res = await fetch(`${URI_API}image/${holiday}`);
        const data = await res.json();
        return data;
    }
);

const imgSlice = createSlice({
    name: 'img',
    initialState: {
        image: '',
        idImage: '',
        loading: '',
    },
    reducers: {},
    extraReducers: {
        [fetchText.pending]: state => {
            state.loading = 'loading';
            state.text = '';
            state.idText = '';
        },
        [fetchText.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.text = action.payload.text;
            state.idText = action.payload.idText;
        },
        [fetchText.rejected]: state => {
            state.loading = 'failed';
            state.text = '';
            state.idText = '';
        },
    }
})

export default textSlice.reducer;

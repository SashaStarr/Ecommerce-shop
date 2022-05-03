import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    itemsLoadingStatus: 'idle'
}

const CatalogSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        itemsFetching: state => { state.itemsLoadingStatus = 'loading' },
        itemsFetched: (state, action) => {
            state.itemsLoadingStatus = 'idle';
            state.items = action.payload;
        },
        itemsFetchingError: state => {
            state.itemsLoadingStatus = 'error';
        }
    }
});

const { actions, reducer } = CatalogSlice;

export default reducer;
export const {
    itemsFetching,
    itemsFetched,
    itemsFetchingError,
} = actions;
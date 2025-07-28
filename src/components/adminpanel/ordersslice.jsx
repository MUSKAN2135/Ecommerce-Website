import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Dummy API URL for orders
const API_URL = 'https://fakestoreapi.com/orders';

// Thunk to fetch orders
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await axios.get(API_URL);
    return await response.json();
});

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;

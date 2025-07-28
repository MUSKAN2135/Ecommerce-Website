import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice';
import productReducer from './productslice';
import orderReducer from './ordersslice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
        orders: orderReducer,
    },
});

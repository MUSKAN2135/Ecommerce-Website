import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../adminpanel/userslice';
import productReducer from '../adminpanel/productslice';
import orderReducer from '../adminpanel/ordersslice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer,
        orders: orderReducer,
    },
});

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

const loadLocalProducts = () => {
  const localData = localStorage.getItem('products');
  return localData ? JSON.parse(localData) : null;
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const localData = loadLocalProducts();
  if (localData) return localData;

  const res = await axios.get(API_URL);
  localStorage.setItem('products', JSON.stringify(res.data)); // Save initial
  return res.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, state => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase('products/addProduct', (state, action) => {
        const newProduct = {
          ...action.payload,
          id: Date.now(), // Fake ID
        };
        state.products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(state.products));
      })
      .addCase('products/updateProduct', (state, action) => {
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
          localStorage.setItem('products', JSON.stringify(state.products));
        }
      })
      .addCase('products/deleteProduct', (state, action) => {
        state.products = state.products.filter(p => p.id !== action.payload);
        localStorage.setItem('products', JSON.stringify(state.products));
      });
  }
});

export const addProduct = (product) => ({ type: 'products/addProduct', payload: product });
export const updateProduct = (product) => ({ type: 'products/updateProduct', payload: product });
export const deleteProduct = (id) => ({ type: 'products/deleteProduct', payload: id });

export default productSlice.reducer;

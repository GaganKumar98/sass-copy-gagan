import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../common/ProductInterface'

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
})

type Products = IProduct[]

interface IinitialState {
  data: Products
  status: string
}

const initialState: IinitialState = {
  data: [],
  status: STATUSES.IDLE,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment(state, action) {
      state.data.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += 1
        }
      })
    },
    decrement(state, action) {
      state.data.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity -= 1
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = STATUSES.IDLE
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR
      })
  },
})

export const { increment, decrement } = productSlice.actions
//export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  return data
})

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { IProduct } from '../../common/ProductInterface'

type Products = IProduct[]

const initialState: Products = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state: Products, action: PayloadAction<IProduct>) {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      )

      if (index === -1) {
        state.push(action.payload)
      } else {
        state[index].quantity += action.payload.quantity
      }
    },
    remove(state: Products, action: PayloadAction<IProduct>) {
      return state.filter((item) => item.id !== action.payload.id)
    },
    cartIncrement(state: Products, action: PayloadAction<IProduct>) {
      state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += 1
        }
      })
    },
    cartDecrement(state: Products, action: PayloadAction<IProduct>) {
      state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity -= 1
        }
      })
    },
  },
})

export const { add, remove, cartIncrement, cartDecrement } = cartSlice.actions

export const selectProduct = (state: RootState) => state.cart

export default cartSlice.reducer

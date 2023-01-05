import cartReducer from '../../features/cartSlice'
import { IProduct } from '../../common/ProductInterface'

type Cart = IProduct[]

const initialState: Cart = []

describe('Cart Slice tests', () => {
  test('Initialize slice with initial value', () => {
    const cartSliceInit = cartReducer(initialState, { type: 'unkown' })
    expect(cartSliceInit).toBe(initialState)
  })
})

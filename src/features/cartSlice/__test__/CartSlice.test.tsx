import cartReducer, {
  add,
  cartDecrement,
  cartIncrement,
  remove,
} from '../cartSlice'
import { IProduct } from '../../../common/ProductInterface'

type Cart = IProduct[]

const initialState: Cart = []

const mockProduct = {
  id: 1,
  title: 'Pentax Camera',
  price: 109.95,
  description:
    'PENTAX K-3 Mark III Flagship APS-C Black Camera Body - 12fps, Touch Screen LCD, Weather Resistant Magnesium Alloy Body with in-Body 5-Axis Shake Reduction. 1.05x Optical viewfinder with 100% FOV',
  image:
    'https://images.unsplash.com/photo-1593454395182-27b1b0943250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
  status: 'available',
  quantity: 1,
}

describe('Cart Slice tests', () => {
  test('Initialize slice with initial value', () => {
    const cartSliceInit = cartReducer(initialState, { type: 'unkown' })
    expect(cartSliceInit).toBe(initialState)
  })
  test('Should add product to cart', () => {
    expect(cartReducer(initialState, add(mockProduct))).toEqual([mockProduct])
  })
  test('Should remove product from cart', () => {
    expect(cartReducer([mockProduct], remove(mockProduct))).toEqual([])
  })
  test('Should increment Cart Item', () => {
    const previousState = [
      {
        id: 1,
        title: 'Pentax Camera',
        price: 109.95,
        description:
          'PENTAX K-3 Mark III Flagship APS-C Black Camera Body - 12fps, Touch Screen LCD, Weather Resistant Magnesium Alloy Body with in-Body 5-Axis Shake Reduction. 1.05x Optical viewfinder with 100% FOV',
        image:
          'https://images.unsplash.com/photo-1593454395182-27b1b0943250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
        status: 'available',
        quantity: 1,
      },
    ]
    expect(cartReducer(previousState, cartIncrement(mockProduct))).toEqual([
      {
        id: 1,
        title: 'Pentax Camera',
        price: 109.95,
        description:
          'PENTAX K-3 Mark III Flagship APS-C Black Camera Body - 12fps, Touch Screen LCD, Weather Resistant Magnesium Alloy Body with in-Body 5-Axis Shake Reduction. 1.05x Optical viewfinder with 100% FOV',
        image:
          'https://images.unsplash.com/photo-1593454395182-27b1b0943250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
        status: 'available',
        quantity: 2,
      },
    ])
  })
  test('Should decrement Cart Item', () => {
    const previousState = [
      {
        id: 1,
        title: 'Pentax Camera',
        price: 109.95,
        description:
          'PENTAX K-3 Mark III Flagship APS-C Black Camera Body - 12fps, Touch Screen LCD, Weather Resistant Magnesium Alloy Body with in-Body 5-Axis Shake Reduction. 1.05x Optical viewfinder with 100% FOV',
        image:
          'https://images.unsplash.com/photo-1593454395182-27b1b0943250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
        status: 'available',
        quantity: 1,
      },
    ]
    expect(cartReducer(previousState, cartDecrement(mockProduct))).toEqual([
      {
        id: 1,
        title: 'Pentax Camera',
        price: 109.95,
        description:
          'PENTAX K-3 Mark III Flagship APS-C Black Camera Body - 12fps, Touch Screen LCD, Weather Resistant Magnesium Alloy Body with in-Body 5-Axis Shake Reduction. 1.05x Optical viewfinder with 100% FOV',
        image:
          'https://images.unsplash.com/photo-1593454395182-27b1b0943250?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
        status: 'available',
        quantity: 0,
      },
    ])
  })
})

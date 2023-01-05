import productReducer, {
  decrement,
  fetchProducts,
  increment,
} from '../../features/productSlice'
import fetch from 'node-fetch'

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

const initialState = {
  data: [],
  status: 'idle',
}

describe('Product Slice Test', () => {
  test('Initialize slice with initial value', () => {
    const productSliceInit = productReducer(initialState, { type: 'unkown' })
    expect(productSliceInit).toBe(initialState)
  })
  test('Should increment product quantity with same id', () => {
    const previousState = {
      data: [
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
      ],
      status: 'idle',
    }
    expect(productReducer(previousState, increment(mockProduct))).toEqual({
      data: [
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
      ],
      status: 'idle',
    })
  })
  test('Should decrement product quantity with same id', () => {
    const previousState = {
      data: [
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
      ],
      status: 'idle',
    }
    expect(productReducer(previousState, decrement(mockProduct))).toEqual({
      data: [
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
      ],
      status: 'idle',
    })
  })
  test('Should decrement product quantity with same id', async () => {
    const response = await fetch('http://localhost:5000/products').then(
      (response) => response.json()
    )
    expect(
      productReducer(initialState, {
        type: fetchProducts.fulfilled.type,
        payload: response,
      })
    ).toEqual({
      data: response,
      status: 'idle',
    })
  })
})

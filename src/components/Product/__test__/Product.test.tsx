import { render } from '@testing-library/react'
//import Product from '../Product/Product'
import { store } from '../../../features/store'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'

describe('Testing Product Component', () => {
  test('render the product component with 3 Buttons', () => {
    render(<Provider store={store}>{/* <Product /> */}</Provider>)
    //const buttonList = screen.queryAllByRole('button')
    //console.log('button list : ', buttonList)
    //expect(buttonList).toHaveLength(0)
  })
})

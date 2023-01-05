/* eslint-disable react/no-children-prop */
import { render } from '@testing-library/react'
import { CartItem } from '../CartItem/CartItem'
import '@testing-library/jest-dom'

describe('Testing Cart Item Component', () => {
  test(' Cart initially render', () => {
    render(<CartItem key={0} variant={''} children={''} />)
  })
})

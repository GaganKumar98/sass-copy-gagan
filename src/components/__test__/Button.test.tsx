import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from '../Button/Button'

describe('Button Test', () => {
  test('Button Test primary', () => {
    render(<Button variant={'primary'} />)
    const btn = screen.queryByRole('button')
    expect(btn).toBeInTheDocument()
  })
  test('Button Test Disabled', () => {
    render(<Button variant={'disabled'} />)
    const btn = screen.queryByRole('button')
    expect(btn).toBeInTheDocument()
  })
  test('Button Test Counter', () => {
    render(<Button variant={'counter'} />)
    const btn = screen.queryByRole('button')
    expect(btn).toBeInTheDocument()
  })
  test('Button Test to have Attribute', () => {
    render(<Button variant={'primary'} />)
    const btn = screen.queryByRole('button')
    expect(btn).toHaveAttribute('data-testid', 'ok-button')
  })
})

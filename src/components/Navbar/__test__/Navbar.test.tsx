import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../Navbar'
// import { store } from '../../features/store'
import { MemoryRouter } from 'react-router'
import { store } from '../../../features/store'
import { Provider } from 'react-redux'

describe('Navbar Test', () => {
  test('Should render navbar', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar color="Primary" />
        </MemoryRouter>
      </Provider>
    )
    const navBar = screen.getByTestId('navbarId')
    expect(navBar).toBeInTheDocument()
  })
  test('Should render navbar heading', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar color="Primary" />
        </MemoryRouter>
      </Provider>
    )
    const navbar = await screen.findByText('STORE')
    expect(navbar).toHaveTextContent('STORE')
  })
  test('Should render 2 links', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar color={'Primary'} />
        </MemoryRouter>
      </Provider>
    )
    const link = screen.getAllByRole('link')
    expect(link).toHaveLength(2)
  })
  test('Should render Cart Items Number', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar color={'Primary'} />
        </MemoryRouter>
      </Provider>
    )
    const cartItem = screen.getByText(/cart items : 0/i)
    expect(cartItem).toBeInTheDocument()
  })
})

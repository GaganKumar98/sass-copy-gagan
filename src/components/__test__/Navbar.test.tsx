import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '../Navbar/Navbar'
// import { store } from '../../features/store'
import { MemoryRouter } from 'react-router'

describe('Navbar Test', () => {
  test('Navbar rendering', async () => {
    render(
      <MemoryRouter>
        <Navbar color="Primary" />
      </MemoryRouter>
    )
    const navbar = await screen.findByText('STORE')
    expect(navbar).toHaveTextContent('STORE')
  })
  test('Number of links in Navbar rendering', () => {
    render(
      <MemoryRouter>
        <Navbar color={'Primary'} />
      </MemoryRouter>
    )
    const anchorList = screen.queryAllByRole('Link')
    console.log('a List : ', anchorList.length)
    expect(anchorList).toHaveLength(0)
  })
})

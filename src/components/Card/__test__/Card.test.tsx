import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from '../Card'
import { Button } from '../../Button/Button'

const newMockData = {
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

const TestCard = () => {
  return (
    newMockData && (
      <Card variant={''}>
        <img src={newMockData.image} alt={newMockData.title} />
        <h4>{newMockData.title}</h4>
        <h5>{newMockData.price} $</h5>
        <h6>{newMockData.status}</h6>
        {newMockData.quantity <= 0 ? (
          <>
            <div className="card-counter">
              <Button variant={'disabled'}>-</Button>
              <p data-testid="quantity">{newMockData.quantity}</p>
              <Button variant={'counter'}>+</Button>
            </div>
            <Button variant={'disabled'}>Add To Cart</Button>
          </>
        ) : (
          <>
            <div className="card-counter">
              <Button variant={'counter'}>-</Button>
              <p data-testid="quantity">{newMockData.quantity}</p>
              <Button variant={'counter'}>+</Button>
            </div>
            <Button variant={'primary'}>Add To Cart</Button>
          </>
        )}
      </Card>
    )
  )
}

describe('Card Test', () => {
  test('Should Render', () => {
    render(<TestCard />)
  })
  test('should render image', async () => {
    render(<TestCard />)
    const imgRender = await screen.getByRole('img')
    expect(imgRender).toBeInTheDocument()
  })

  test('should render title', () => {
    render(<TestCard />)
    const titleRender = screen.getByRole('heading', {
      name: /pentax camera/i,
    })
    expect(titleRender).toBeInTheDocument()
  })

  test('should render Price', () => {
    render(<TestCard />)
    const priceRender = screen.getByRole('heading', { name: /109\.95 \$/i })
    expect(priceRender).toBeInTheDocument()
  })

  test('should render status', () => {
    render(<TestCard />)
    const statusRender = screen.getByRole('heading', { name: /available/i })
    expect(statusRender).toBeInTheDocument()
  })

  test('should render increment', () => {
    render(<TestCard />)
    const incrementRender = screen.getByRole('button', { name: /\-/i })
    expect(incrementRender).toBeInTheDocument()
  })

  test('should render decrement', () => {
    render(<TestCard />)
    const decRender = screen.getByRole('button', { name: /\+/i })
    expect(decRender).toBeInTheDocument()
  })

  test('should render add Button', () => {
    render(<TestCard />)
    const addButton = screen.getByRole('button', { name: /add to cart/i })
    expect(addButton).toBeInTheDocument()
  })

  test('should render Quantity', () => {
    render(<TestCard />)
    const quantityRender = screen.getByTestId('quantity')
    expect(quantityRender).toBeInTheDocument()
  })

  test('should have text', () => {
    render(<TestCard />)
    const cartText = screen.getByRole('button', { name: /add to cart/i })
    expect(cartText).toBeInTheDocument()
  })
})

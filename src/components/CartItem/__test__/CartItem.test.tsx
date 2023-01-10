import { render, screen } from '@testing-library/react'
import { CartItem } from '../CartItem'
import '@testing-library/jest-dom'
import { Button } from '../../Button/Button'

const mockData = {
  id: 3,
  title: 'MX Master 4X',
  price: 55.99,
  description:
    'Logitech MX Master 3S - Wireless Performance Mouse with Ultra-Fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome-Graphite',
  image: 'https://m.media-amazon.com/images/I/616ljqKS+xL._SX679_.jpg',
  status: 'available',
  quantity: 1,
}

const MockCartItem = () => {
  return (
    <CartItem variant={'cart-item'}>
      <div className="cart-item-image">
        <img src={mockData.image} alt="" />
      </div>
      <div className="cart-item-details">
        <h3>{mockData.title}</h3>
        <h3>{mockData.price}$</h3>
      </div>
      {mockData.quantity <= 1 ? (
        <div className="cart-item-controls">
          <div className="card-counter">
            <Button variant="disabled">-</Button>
            <p data-testid="quantity">{mockData.quantity}</p>
            <Button
              variant="counter"
              //onClick={() => handleIncrement(product)}
            >
              +
            </Button>
          </div>
          <button
            className="btn"
            //onClick={() => handleRemove(product)}
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="cart-item-controls">
          <div className="card-counter">
            <Button
              variant="counter"
              //onClick={() => handleDecrement(product)}
            >
              -
            </Button>
            <p data-testid="quantity">{mockData.quantity}</p>
            <Button
              variant="counter"
              //onClick={() => handleIncrement(product)}
            >
              +
            </Button>
          </div>
          <Button
            variant="btn"
            //onClick={() => handleRemove(product)}
          >
            Remove
          </Button>
        </div>
      )}
    </CartItem>
  )
}

describe('Testing Cart Item Component', () => {
  test(' Cart initially render', () => {
    render(<MockCartItem />)
  })
  test('should render image', () => {
    render(<MockCartItem />)
    const imgRender = screen.getByRole('img')
    expect(imgRender).toBeInTheDocument()
  })

  test('should render title', () => {
    render(<MockCartItem />)
    const titleRender = screen.getByRole('heading', {
      name: /MX Master 4X/i,
    })
    expect(titleRender).toBeInTheDocument()
  })

  test('should render Price', () => {
    render(<MockCartItem />)
    const priceRender = screen.getByRole('heading', { name: /55\.99\$/i })
    expect(priceRender).toBeInTheDocument()
  })

  test('should render increment', () => {
    render(<MockCartItem />)
    const incrementRender = screen.getByRole('button', { name: /\-/i })
    expect(incrementRender).toBeInTheDocument()
  })

  test('should render decrement', () => {
    render(<MockCartItem />)
    const decRender = screen.getByRole('button', { name: /\+/i })
    expect(decRender).toBeInTheDocument()
  })

  test('should render add Button', () => {
    render(<MockCartItem />)
    const addButton = screen.getByRole('button', { name: /remove/i })
    expect(addButton).toBeInTheDocument()
  })

  test('should render Quantity', () => {
    render(<MockCartItem />)
    const quantityRender = screen.getByTestId('quantity')
    expect(quantityRender).toBeInTheDocument()
  })
})

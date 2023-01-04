import React from 'react'
import { Card } from './Card'
import { ComponentMeta } from '@storybook/react'
import { Button } from '../Button/Button'

export default {
  title: 'Card',
  component: Card,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>

const product = {
  id: 3,
  title: 'MX Master 4X',
  price: 55.99,
  description:
    'Logitech MX Master 3S - Wireless Performance Mouse with Ultra-Fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome-Graphite',
  image: 'https://m.media-amazon.com/images/I/616ljqKS+xL._SX679_.jpg',
  status: 'available',
  quantity: 1,
}

export const ProductCard = () => (
  <Card variant="product" key={product.id}>
    <img src={product.image} alt={product.title} />
    <h4>{product.title}</h4>
    <h5>{product.price} $</h5>
    <h6>{product.status}</h6>
    <div className="card-counter">
      <Button variant={'counter'}>-</Button>
      <p>{product.quantity}</p>
      <Button variant={'counter'}>+</Button>
    </div>
    <Button variant={'primary'}>Add To Cart</Button>
  </Card>
)

import React from 'react'
import { CartItem } from './CartItem'
import { ComponentMeta } from '@storybook/react'
import { Button } from '../Button/Button'

export default {
  title: 'CartItem',
  component: CartItem,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0',
          padding: '20px',
          paddingTop: '0px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CartItem>

const cartItem = {
  id: 3,
  title: 'MX Master 4X',
  price: 55.99,
  description:
    'Logitech MX Master 3S - Wireless Performance Mouse with Ultra-Fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome-Graphite',
  image: 'https://m.media-amazon.com/images/I/616ljqKS+xL._SX679_.jpg',
  status: 'available',
  quantity: 1,
}

export const CartItemPrimary = () => (
  <CartItem variant="cart-item" key={cartItem.id}>
    <div className="cart-item-image">
      <img src={cartItem.image} alt="" />
    </div>
    <div className="cart-item-details">
      <h3>{cartItem.title}</h3>
      <h3>{cartItem.price}$</h3>
    </div>
    <div className="cart-item-controls">
      <div className="card-counter">
        <Button variant={'counter'}>-</Button>
        <p>{cartItem.quantity}</p>
        <Button variant={'counter'}>+</Button>
      </div>
      <Button variant={'primary'}>Remove</Button>
    </div>
  </CartItem>
)

import React, { ReactNode } from 'react'
import './CartItem.scss'

interface CartItemProps {
  variant: string
  children: ReactNode
  key: number
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { variant, children, key, ...rest } = props
  return (
    <div className={`${variant}`} key={key} {...rest}>
      {children}
    </div>
  )
}

import React, { ReactNode } from 'react'
import './CartItem.scss'

interface CartItemProps {
  variant: string
  children: ReactNode
}

export const CartItem: React.FC<CartItemProps> = (props) => {
  const { variant, children, ...rest } = props
  return (
    <div className={`${variant}`} {...rest}>
      {children}
    </div>
  )
}

import React, { ReactNode } from 'react'
import './Card.scss'

interface CardProps {
  variant: string
  children: ReactNode
}
//variant - classname - card
//key - product.id
//title - product.title
//price - product.price
//status - product.status

export const Card: React.FC<CardProps> = ({ variant, children, ...rest }) => {
  return (
    <div className={`card card-${variant}`} {...rest}>
      {children}
    </div>
  )
}

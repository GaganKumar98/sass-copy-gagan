import React, { ReactNode } from 'react'
import './Card.scss'

interface CardProps {
  variant: string
  children: ReactNode
  key: number
}
//variant - classname - card
//key - product.id
//title - product.title
//price - product.price
//status - product.status

export const Card: React.FC<CardProps> = ({
  variant,
  children,
  key,
  ...rest
}) => {
  return (
    <div className={`card card-${variant}`} key={key} {...rest}>
      {children}
    </div>
  )
}

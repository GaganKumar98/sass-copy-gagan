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

export const Card: React.FC<CardProps> = (props) => {
  const { variant, children, key, ...rest } = props
  return (
    <div className={`${variant}-card`} key={key} {...rest}>
      {children}
    </div>
  )
}

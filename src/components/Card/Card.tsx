import React, { ReactNode } from 'react'
import './Card.scss'

interface CardProps {
  variant: string
  children: ReactNode
}

export const Card: React.FC<CardProps> = ({ variant, children, ...rest }) => {
  return (
    <div className={`card card-${variant}`} {...rest}>
      {children}
    </div>
  )
}

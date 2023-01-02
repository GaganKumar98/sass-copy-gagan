import React, { ReactNode } from 'react'
import './Button.scss'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant: string
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { variant = 'primary', children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

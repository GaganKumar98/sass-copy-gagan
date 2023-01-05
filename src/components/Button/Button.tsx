import React from 'react'
import './Button.scss'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: () => void
  variant: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      data-testid="ok-button"
    >
      {children}
    </button>
  )
}

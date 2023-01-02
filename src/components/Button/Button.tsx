import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from 'react'
import './Button.scss'

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: string | undefined
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

// import { ReactNode } from 'react'

import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'

import './Navbar.scss'

// interface linkProps {
//   variant: string
//   // children: ReactNode
// }

const Navbar = (props: { color: string }) => {
  const items = useAppSelector((state) => state.cart)
  const { color } = props
  return (
    <div className={`navBar${color}`}>
      <span>STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items : {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar

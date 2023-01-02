import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import './Navbar.scss'

const Navbar = () => {
  const items = useAppSelector((state) => state.cart)
  return (
    <div className="navBar">
      <span>STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items: {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar

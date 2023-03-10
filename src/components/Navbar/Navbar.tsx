import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/hooks'
import './Navbar.scss'

const Navbar = (props: { color: string }) => {
  const items = useAppSelector((state) => state.cart)
  const { color } = props
  return (
    <header className={`navBar${color}`}>
      <span>STORE</span>
      <div data-testid="navbarId">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items : {items.length}</span>
      </div>
    </header>
  )
}

export default Navbar

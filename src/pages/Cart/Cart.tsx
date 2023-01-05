import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { cartDecrement, cartIncrement, remove } from '../../features/cartSlice'
import { IProduct } from '../../common/ProductInterface'
//import { increment } from '../../features/productSlice'
import './Cart.scss'
import { Button } from '../../components/Button/Button'
import { CartItem } from '../../components/CartItem/CartItem'
import Swal from 'sweetalert2'

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
  })
  // const MySwal = withReactContent(Swal)
  //let sum = 0
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  )
  const handleRemove = (product: IProduct) => {
    dispatch(remove(product))
    Toast.fire({
      icon: 'success',
      title: 'Product Remove Succesfully',
    })
  }
  const handleIncrement = (product: IProduct) => {
    // setQuantity(quantity + 1)
    dispatch(cartIncrement(product))
  }
  const handleDecrement = (product: IProduct) => {
    dispatch(cartDecrement(product))
  }
  if (cartItems.length === 0) {
    return (
      <div className="cart-section">
        <h2 className="heading">Your Cart is Empty</h2>
      </div>
    )
  }
  return (
    <div className="cart-section">
      <h2 className="heading">Your Cart Total is {totalAmount.toFixed(2)} $</h2>
      <div className="cart-list">
        {cartItems.map((product) => (
          <CartItem variant="cart-item" key={product.id}>
            <div className="cart-item-image">
              <img src={product.image} alt="" />
            </div>
            <div className="cart-item-details">
              <h3>{product.title}</h3>
              <h3>{product.price}$</h3>
            </div>
            {product.quantity <= 1 ? (
              <div className="cart-item-controls">
                <div className="card-counter">
                  <Button variant="disabled">-</Button>
                  <p>{product.quantity}</p>
                  <Button
                    variant="counter"
                    onClick={() => handleIncrement(product)}
                  >
                    +
                  </Button>
                </div>
                <button className="btn" onClick={() => handleRemove(product)}>
                  Remove
                </button>
              </div>
            ) : (
              <div className="cart-item-controls">
                <div className="card-counter">
                  <Button
                    variant="counter"
                    onClick={() => handleDecrement(product)}
                  >
                    -
                  </Button>
                  <p>{product.quantity}</p>
                  <Button
                    variant="counter"
                    onClick={() => handleIncrement(product)}
                  >
                    +
                  </Button>
                </div>
                <Button variant="btn" onClick={() => handleRemove(product)}>
                  Remove
                </Button>
              </div>
            )}
          </CartItem>
        ))}
      </div>
    </div>
  )
}

export default Cart

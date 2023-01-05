import { useEffect } from 'react'
import { add } from '../../features/cartSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import './Product.scss'
import { IProduct } from '../../common/ProductInterface'
import {
  decrement,
  fetchProducts,
  increment,
  STATUSES,
} from '../../features/productSlice'
import { Card } from '../Card/Card'
import { Button } from '../Button/Button'

const Product = () => {
  const { data: products, status } = useAppSelector((state) => state.product)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  console.log(products)
  const handleAdd = (product: IProduct) => {
    dispatch(add(product))
  }
  const handleDecrement = (product: IProduct) => {
    dispatch(decrement(product))
  }
  const handleIncrement = (product: IProduct) => {
    dispatch(increment(product))
  }
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong...</h2>
  }
  return (
    <div className="productsWrapper">
      {products.map((product: IProduct) => {
        if (product.status === 'out of stock') {
          return (
            <Card variant="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>{product.price} $</h5>
              <h6>{product.status}</h6>
              <button
                disabled
                className="btn-disabled"
                onClick={() => handleAdd(product)}
              >
                Add To Cart
              </button>
            </Card>
          )
        } else {
          return (
            <Card variant="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h5>{product.price} $</h5>
              <h6>{product.status}</h6>
              <div className="card-counter">
                <Button
                  onClick={() => handleDecrement(product)}
                  variant={'counter'}
                >
                  -
                </Button>
                <p>{product.quantity}</p>
                <Button
                  variant={'counter'}
                  onClick={() => handleIncrement(product)}
                >
                  +
                </Button>
              </div>
              <Button variant={'primary'} onClick={() => handleAdd(product)}>
                Add To Cart
              </Button>
            </Card>
          )
        }
      })}
    </div>
  )
}
export default Product

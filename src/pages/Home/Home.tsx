import Product from '../../components/Product/Product'
import './Home.scss'
const Home = () => {
  return (
    <div className="products-section">
      <h2 className="heading">Welcome to the Store</h2>
      <section>
        <h3>Products</h3>
        <Product />
      </section>
    </div>
  )
}

export default Home

import './styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { Provider } from 'react-redux'
import { store } from './features/store'
import Navbar from './components/Navbar/Navbar'
export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar color={'Primary'} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

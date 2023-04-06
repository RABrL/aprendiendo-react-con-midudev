import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import { products } from './mocks/products.json'
import useFilters from './hooks/useFilters'
import { IS_DEVELOPMENT } from './config'
import Cart from './components/Cart/Cart'
import CartProvider from './context/cart'

export default function App () {
  const { filterProducts } = useFilters()
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

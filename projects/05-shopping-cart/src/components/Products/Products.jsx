import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons'
import useCart from '../../hooks/useCart'

export default function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.description}
              />
              <div>
                <h3>{product.title}</h3> - <span>${product.price}</span>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                  isProductInCart
                    ? <RemoveFromCartIcon />
                    : <AddToCartIcon />
                }
                </button>
              </div>
            </li>
          )
        })}
      </ul>

    </main>
  )
}

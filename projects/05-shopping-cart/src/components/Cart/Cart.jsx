import { useId } from 'react'
import { ClearCartIcon, CartIcon } from '../Icons'
import './Cart.css'
import useCart from '../../hooks/useCart'
import CartItem from '../CartItem'

export default function Cart () {
  const { cart, addToCart, clearCart } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

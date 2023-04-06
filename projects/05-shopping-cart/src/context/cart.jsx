import { createContext } from 'react'
import useCartReducer from '../hooks/useCartReducer'

// 1. Crear contexto
export const CartContext = createContext()

// 2. Crear provider
export default function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

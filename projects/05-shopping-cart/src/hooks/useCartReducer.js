import { useReducer } from 'react'
import { cartReducer, initialState } from '../reducers/cart.js'
import { CART_ACTION_TYPES } from '../consts'

export default function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart
  }
}

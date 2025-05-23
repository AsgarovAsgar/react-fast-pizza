import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [
    // {
    //   pizzaId: 20,
    //   name: 'Mediterranean',
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32
    // }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (!item) return
      item.quantity++
      item.totalPrice = item.unitPrice * item.quantity
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      if (!item) return
      item.quantity--
      item.totalPrice = item.unitPrice * item.quantity

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      state.cart = []
    }
  }
})
export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer

// Selectors
export const getCart = (state) => state.cart.cart

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)

export const getTotalCartPrice = (state) => state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0)

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0

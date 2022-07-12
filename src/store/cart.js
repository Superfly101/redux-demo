import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeFromCart(state) {
      state.cartItems.pop();
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    increaseQty(state, action) {
      state.cartItems[0].quantity++;
    },
    decreaseQty(state) {
      state.cartItems[0].quantity--;
      if (state.cartItems[0].quantity <= 0) {
        state.cartItems.pop();
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

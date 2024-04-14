import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const temProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temProduct);
      }
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItem(state, action) {
      const removedItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removedItem;
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decrementQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const removedItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = removedItem;
      } else {
        state.cartItems[itemIndex].cartQuantity = 1;
      }
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeAllItems(state) {
      state.cartItems = [];
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    calculateTotalAmount(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeItem,
  decrementQuantity,
  removeAllItems,
  calculateTotalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;

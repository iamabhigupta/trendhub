import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../entities/Product';
import { updateCart } from '../utils/cartUtils';

// interface CartItem extends Product {
//   qty: number;
// }

export interface CartState {
  cartItems: Product[];
  itemsPrice: string;
  shippingPrice: string;
  taxPrice: string;
  totalPrice: string;
}

const initialState: CartState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : {
      cartItems: [],
      itemsPrice: '0',
      shippingPrice: '0',
      taxPrice: '0',
      totalPrice: '0',
    };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item: Product = action.payload;

      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

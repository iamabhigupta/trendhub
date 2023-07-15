import Product from '../entities/Product';
import { CartState } from '../slices/cartSlice';

export const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state: CartState) => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc: number, i: Product) => acc + i.price * i.qty,
      0
    )
  );

  state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 10);

  state.taxPrice = addDecimals(
    Number((0.15 * Number(state.itemsPrice)).toFixed(2))
  );

  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};

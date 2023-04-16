import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "src/constants/cartConstants";

export const addToCart = (product) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: product,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem("subtotal", JSON.stringify(getState().cart.subtotal));
  localStorage.setItem("total", JSON.stringify(getState().cart.total));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: product,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem("subtotal", JSON.stringify(getState().cart.subtotal));
  localStorage.setItem("total", JSON.stringify(getState().cart.total));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

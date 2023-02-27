import {
  ADDPRODUCT,
  ADDTOCART,
  DECREASE,
  DELETEFROMCART,
  INCREASE,
} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const addToCart = (cartItem) => {
  return {
    type: ADDTOCART,
    payload: cartItem,
  };
};

export const increase = (id) => {
  return {
    type: INCREASE,
    payload: id,
  };
};

export const decrease = (id) => {
  return {
    type: DECREASE,
    payload: id,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETEFROMCART,
    payload: id,
  };
};

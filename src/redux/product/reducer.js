import initialState from "./initialState";
import {
  ADDPRODUCT,
  ADDTOCART,
  DECREASE,
  DELETEFROMCART,
  INCREASE,
} from "./actionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case ADDTOCART:
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (product.quantity === 0) {
        alert("Sold Out");
        return state;
      } else {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return product;
            }
          }),
          cart: state.cart.map((item) => {
            if (action.payload.id === item.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
        };
      }

    case INCREASE:
      const item = state.products.find((item) => item.id === action.payload);

      if (item.quantity === 0) {
        alert("Sold Out");
        return state;
      } else {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload) {
              return { ...product, quantity: product.quantity - 1 };
            } else {
              return product;
            }
          }),
          cart: state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
              return cartItem;
            }
          }),
        };
      }

    case DECREASE:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        }),

        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        }),
      };

    case DELETEFROMCART:
      const c = state.cart.find((c) => c.id === action.payload);
      console.log(c);
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + c.quantity };
          } else {
            return product;
          }
        }),
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;

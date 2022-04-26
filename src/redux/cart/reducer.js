import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
    itemsInCartWomens: [],

  },
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (prodSate) => prodSate.id !== action.payload
      );
    },
    setItemInCartWomens: (state, action) => {
      state.itemsInCartWomens.push(action.payload);
    },
    deleteItemFromCartWomens: (state, action) => {
      state.itemsInCartWomens = state.itemsInCartWomens.filter(
        (prodSate) => prodSate.id !== action.payload
      );
    },
    plusProductsBase: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if (item.id === action.payload) {
          item.countProd++;
        }
        return item;
      })
    },
    minusProductsBase: (state, action) => {
      state.itemsInCart = state.itemsInCart.map(item => {
        if (item.id === action.payload) {
          item.countProd--;
          if(item.countProd < 1) {
            item.countProd = 1
          }
        }
        return item;
      })
    },
    plusProductsBaseWomens: (state, action) => {
      state.itemsInCartWomens = state.itemsInCartWomens.map(item => {
        if (item.id === action.payload) {
          item.countProd++;
        }
        return item;
      })
    },
    minusProductsBaseWomens: (state, action) => {
      state.itemsInCartWomens = state.itemsInCartWomens.map(item => {
        if (item.id === action.payload) {
          item.countProd--;
          if(item.countProd < 1) {
            item.countProd = 1
          }
        }
        return item;
      })
    },


  },
});

export const {
  setItemInCart,
  setItemInCartWomens,
  deleteItemFromCart,
  deleteItemFromCartWomens,
  plusProductsBase,
  minusProductsBase,
  plusProductsBaseWomens,
  minusProductsBaseWomens
} = cartSlice.actions;
export default cartSlice.reducer;

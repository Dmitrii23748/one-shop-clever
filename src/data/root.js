/* eslint-disable array-callback-return */
import { NEWPRODUCTS } from "./newProducts";



export const womensMainPageProducts = NEWPRODUCTS.women;
export const mensMainPageProducts = NEWPRODUCTS.men;

export const objProductWomens = womensMainPageProducts.reduce(
  (acc, womenProduct) => {
    acc[womenProduct.id] = womenProduct;
    return acc;
  },
  {}
);

export const objProductMens = mensMainPageProducts.reduce((acc, menProduct) => {
  acc[menProduct.id] = menProduct;
  return acc;
}, {});


export function createUniqueSizesArray(arr) {
  const arraySizes = arr.map((item) => {
    const arraySizesPush = [];
    arraySizesPush.push(...item.sizes);
    return arraySizesPush;
  });
  const allSizeArray = arraySizes.flat();
  const uniqueSizeArray = Array.from(new Set(allSizeArray));
  return uniqueSizeArray;
}

export function createUniqueColorsArray(arr) {
  const arrayColorsPush = [];
  arr.map((item) => {
    return item.images.map((item) => {
      arrayColorsPush.push([item.color]);
      return arrayColorsPush;
    });
  });
  const allColorsArray = arrayColorsPush.flat();
  const uniqueColorArray = Array.from(new Set(allColorsArray));
  return uniqueColorArray;
}

export function createUniqueCartColor(arrayCart, params) {
  const arrCart = [];
  arrayCart.map((item) => {
    return arrCart.push([item[params]]);
  });
  const allParamsCart = arrCart.flat();
  const uniqueCartParams = Array.from(new Set(allParamsCart));
  return uniqueCartParams;
}

export function createUniqueBrandsArray(arr) {
  const arrayBrand = [];
  arr.map((item) => {
    return arrayBrand.push(item.brand);
  });
  const uniqueBrandArray = Array.from(new Set(arrayBrand));
  return uniqueBrandArray;
}

export const priceCheckBoxWomens = [
  { title: "80 - 106", priceCheck: [80.3, 99.99, 105.99] },
  { title: "139 - 159", priceCheck: [139.99, 143.3, 159] },
  { title: "214 - 289", priceCheck: [214, 289] },
];

export const priceCheckBoxMens = [
  { title: "49 - 60", priceCheck: [49.4, 54.8, 59.4] },
  { title: "64 - 79.7", priceCheck: [64.5, 74.8, 79.7] },
  { title: "80 - 94", priceCheck: [80.4, 84.8, 93.8] },
  { title: "108 - 150", priceCheck: [108, 134, 148.8] },
  { title: "179 - 192", priceCheck: [179.99, 184.8, 191.2] },
  { title: "200 - 262", priceCheck: [200.8, 203.4, 261.2] },
];







 // let colorPictureWomens = [];
  // function colorUrl() {
  
  //   for (let index = 0; index < arrCartColor.length; index++) {
  //     const b = cartWomenImages.filter((itemA) => {
  //       return itemA.color === arrCartColor[index];
  //     });
  //     colorPictureWomens.push(b[index]);
  //   }
  // }

  // colorUrl()
  // console.log(colorPictureWomens);
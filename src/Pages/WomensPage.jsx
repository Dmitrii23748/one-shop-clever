/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import FilterWomens from "../Components/FilterWonens/FilterWomens";
import WomensFiltersProducts from "../Components/WomensFiltersProducts/WomensFiltersProducts";
import WomensFilter from "../Components/WomensFilter/WomensFilter";
import { womensMainPageProducts} from "../data/root";
import WomensCountFilters from "../Components/WomensCountFilters/WomensCountFilters";
// import { NEWPRODUCTS } from "../data/newProducts";

function WomensPage() {

  const initFilter = {
    color: [],
    size: [],
    brand: [],
    price: [],
  };
  const [productsWomens, setProductsWomens] = useState(womensMainPageProducts);
  const [filter, setFilter] = useState(initFilter);
  const [closeOpenFilterWomens, setCloseOpenFilterWomens] = useState(false);

  const handleCloseOpenFilterWomens = () => {
    setCloseOpenFilterWomens(!closeOpenFilterWomens)
  }


  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.toLowerCase()],
          });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.toLowerCase()] });
          break;
        case "BRAND":
          setFilter({...filter, brand: [...filter.brand, item.toLowerCase()]});
          break;
        case "PRICE":
          const arrPriceItem = item.map(priceItem => {
            return priceItem;
          })
          setFilter({...filter, price: [...filter.price, ...arrPriceItem]});
          break
        default:
          console.log("ok");
      }
    } else {
      switch (type) {
        case "COLOR":
          const newColor = filter.color.filter((color) => color.toLowerCase() !== item.toLowerCase());
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((size) => size.toLowerCase() !== item.toLowerCase());
          setFilter({ ...filter, size: newSize });
          break;
        case "BRAND":
          const newBrand = filter.brand.filter((brand) => {
            return brand.toLowerCase() !== item.toLowerCase();
          });
          setFilter({ ...filter, brand: newBrand });
          break;
        case "PRICE":         
          const itemZero = item[0];
          const itemOne = item[1];
          const itemTwo = item[2];
          const newPrice = filter.price.filter((priceItem) => {
              return priceItem !== itemZero && priceItem !== itemOne && priceItem !== itemTwo;
          })
          setFilter({...filter, price: newPrice})
          break;
        default:
          console.log("ok");
      }
    }
  };


  const updateProducts = useCallback(() => {
    let temp = womensMainPageProducts;
    if (filter.color.length > 0) {
      temp = temp.filter((item) => {
        const colorsWomensProducts = item.images.map((item) => {
          return item.color.toLowerCase();
        });
        const check = colorsWomensProducts.find((colorItem) =>
          filter.color.includes(colorItem.toLowerCase())
        );
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((item) => {
        const check = item.sizes.find((size) => filter.size.includes(size.toLowerCase()));
        return check !== undefined;
      });
    }
    if (filter.brand.length > 0) {
      temp = temp.filter((item) => {
        const brandsArrayWomens = [];
        brandsArrayWomens.push(item.brand);
        const brandsWomensProducts = brandsArrayWomens.map((item) => {
          return item.toLowerCase();
        });
        const check = brandsWomensProducts.find((brandItem) => {
          return filter.brand.includes(brandItem.toLowerCase())
        })
        return check !== undefined;
      });
    }
    if(filter.price.length > 0) {
      temp = temp.filter((item) => {
        const pricesArrayWomens = [];
        pricesArrayWomens.push(item.price);
        const priceWomensProducts = pricesArrayWomens.map((item) => {
          return item
        })
        const check = priceWomensProducts.find((priceItem) => {
          return filter.price.includes(priceItem)
        })
        return check !== undefined
      })
    }
    setProductsWomens(temp);
  }, [filter, womensMainPageProducts]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <div data-test-id={`clothes-/training-shop/womens`}>
      <WomensFilter
        closeOpenFilterWomens={closeOpenFilterWomens}
        handleCloseOpenFilterWomens={handleCloseOpenFilterWomens}
        />
      <FilterWomens
        filterSelect={filterSelect} 
        closeOpenFilterWomens={closeOpenFilterWomens}
        />
        <WomensCountFilters
          productsWomens={productsWomens}
          filterColor={filter.color}
          filterSize={filter.size}
          filterBrand={filter.brand}
          filterPrice={filter.price}
        />
      <WomensFiltersProducts productsWomens={productsWomens} />
      <div className="square-block">
        <div className="container">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default WomensPage;

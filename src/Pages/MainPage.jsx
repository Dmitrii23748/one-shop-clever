
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Free from "../Components/Free/Free";
import Womens from "../Components/Womens/Womens";
import Mens from "../Components/Mens/Mens";
import Collection from "../Components/Collection/Collection";
import Blog from "../Components/Blog/Blog";
import Subscribe from "../Components/Subscribe/Subscribe";
import SeeBtn from "../Components/SeeBtn/SeeBtn";
import WomensBtn from "../Components/WomensBtn/WomensBtn";
import MensBtn from "../Components/MensBtn/MensBtn";
import {womensMainPageProducts, mensMainPageProducts} from '../data/root';

function MainPage() {
  const [ categoryWomensMain, setCategoryWomensMain] = useState(womensMainPageProducts);
  const [ categoryMensMain, setcategoryMensMain] = useState(mensMainPageProducts);

  const filtersWomensMainPage = (status) => {
    if(status === 'isNewArrivals') {
      let newIsNewArrivals = [...womensMainPageProducts].filter(item => item.particulars.isNewArrivals === true);
      setCategoryWomensMain(newIsNewArrivals)
    }
    if(status === 'isSpecial') {
      let newIsStatus = [...womensMainPageProducts].filter(item => item.particulars.isSpecial === true);
      setCategoryWomensMain(newIsStatus)
    }
    if(status === 'isBestseller') {
      let newIsBestseller = [...womensMainPageProducts].filter(item => item.particulars.isBestseller === true);
      setCategoryWomensMain(newIsBestseller)
    }
    if(status === 'isMostViewed') {
      let newIsMostViewed = [...womensMainPageProducts].filter(item => item.particulars.isMostViewed === true);
      setCategoryWomensMain(newIsMostViewed)
    }
    if(status === 'isFeatured') {
      let newIsFeatured = [...womensMainPageProducts].filter(item => item.particulars.isFeatured === true);
      setCategoryWomensMain(newIsFeatured)
    }
  }
  const filtersMensMainPage = (status) => {
    if(status === 'isNewArrivals') {
      let newIsNewArrivals = [...mensMainPageProducts].filter(item => item.particulars.isNewArrivals === true);
      setcategoryMensMain(newIsNewArrivals)
    }
    if(status === 'isSpecial') {
      let newIsStatus = [...mensMainPageProducts].filter(item => item.particulars.isSpecial === true);
      setcategoryMensMain(newIsStatus)
    }
    if(status === 'isBestseller') {
      let newIsBestseller = [...mensMainPageProducts].filter(item => item.particulars.isBestseller === true);
      setcategoryMensMain(newIsBestseller)
    }
    if(status === 'isMostViewed') {
      let newIsMostViewed = [...mensMainPageProducts].filter(item => item.particulars.isMostViewed === true);
      setcategoryMensMain(newIsMostViewed)
    }
    if(status === 'isFeatured') {
      let newIsFeatured = [...mensMainPageProducts].filter(item => item.particulars.isFeatured === true);
      setcategoryMensMain(newIsFeatured)
    }
  }
  


  return (
    <div data-test-id="app">
      <Header />
      <Free />
      <WomensBtn filtersWomensMainPage={filtersWomensMainPage} />
      <Womens categoryWomensMain={categoryWomensMain}/>
      <SeeBtn />
      <MensBtn filtersMensMainPage={filtersMensMainPage} />
      <Mens categoryMensMain={categoryMensMain}/>
      <SeeBtn />
      <Collection />
      <Subscribe />
      <Blog />
    </div>
  );
}

export default MainPage;

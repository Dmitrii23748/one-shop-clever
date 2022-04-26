import React from "react";
import './Collection.css';
import colOne from '../../img/collection/collection-1.jpg';
import colTwo from '../../img/collection/collection-2.jpg';




function Collection() {
    return (
        <>
        <section className="collection">
            <div className="container">
                <div className="collection-block">
                    <div className="collection-block__item">
                        <img className="collection-block__item-img" src={colOne} alt="newseasone" />
                        <div className="collection-block__item-text">
                            <p className="collection__text-sale-seasone">New Season</p>
                            <h3 className="collection__text-title">lookbook collection</h3>
                        </div>
                    </div>
                    <div className="collection-block__item">
                        <img className="collection-block__item-img" src={colTwo} alt="sale" />
                        <div className="collection-block__item-text collection-block__item-sale">
                            <p className="collection__text-sale-seasone">Sale</p>
                            <h3 className="collection__text-title">Get UP to <span className="collection__text-span">50% off</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}



export default Collection;
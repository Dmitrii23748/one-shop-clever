import React from "react";
import "./Blog.css";
import blog1 from "../../img/blog/blog-1.jpg";
import blog2 from "../../img/blog/blog-2.jpg";
import blog3 from "../../img/blog/blog-3.jpg";

function Blog() {
  return (
    <>
      <section className="blog">
        <div className="container">
          <div className="blog__title-link">
            <h2 className="blog-title">LATEST FROM BLOG</h2>
            <a className="blog-link" href="#blog">SEE ALL</a>
          </div>
          <div className="blog-block">
            <div className="blog-block__item">
              <img className="blog-block__item-img" src={blog1} alt="blog1" />
              <div className="blog-block__item-text">
                <h3 className="blog-item__title">The Easiest Way to Break</h3>
                <p className="blog-item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </p>
              </div>
            </div>
            <div className="blog-block__item">
              <img className="blog-block__item-img" src={blog2} alt="blog2" />
              <div className="blog-block__item-text">
                <h3 className="blog-item__title">Wedding Season</h3>
                <p className="blog-item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </p>
              </div>
            </div>
            <div className="blog-block__item">
              <img className="blog-block__item-img" src={blog3} alt="blog3" />
              <div className="blog-block__item-text">
                <h3 className="blog-item__title">Recent Favorites On Repeat</h3>
                <p className="blog-item__text">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleas and praising pain was bor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;

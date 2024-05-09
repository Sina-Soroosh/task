import React from "react";
import "./Main.css";
import ProductBox from "../../modules/ProductBox/ProductBox";

function Main() {
  return (
    <main className="main">
      <div className="content">
        <div className="head">
          <div className="filter">
            <ul>
              <li className="active">
                <a href="">پروفروش ترین</a>
              </li>
              <li>
                <a href="">جدید ترین</a>
              </li>
              <li>
                <a href="">محبوب ترین</a>
              </li>
            </ul>
          </div>
          <div className="link">
            <a href="">
              مشاهده همه
              <img src="/images/icons/arrow-down.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="products">
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
          <div className="product">
            <ProductBox />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;

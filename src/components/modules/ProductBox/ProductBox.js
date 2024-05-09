import React from "react";
import "./ProductBox.css";

function ProductBox() {
  return (
    <div className="product_box">
      <div className="content">
        <div className="head">
          <ul>
            <li>
              <span className="icon">
                <img src="/images/icons/Vector.svg" alt="" />
              </span>
            </li>
            <li>
              <span className="icon">
                <img src="/images/icons/Vector.svg" alt="" />
              </span>
            </li>
            <li>
              <span className="icon">
                <img src="/images/icons/Vector.svg" alt="" />
              </span>
            </li>
          </ul>
        </div>
        <div className="image">
          <a href="#">
            <img src="/images/image 94 1.png" alt="" />
          </a>
        </div>
        <div className="title">
          <a href="#">
            <h4>عنوان محصول عنوان محصول عنوان محصول عنوان محصول</h4>
          </a>
        </div>
        <div className="details">
          <div className="top">
            <div className="score">
              <span>۴.۶</span>
              <span>
                <img src="/images/icons/Vector (1).svg" alt="" />
              </span>
            </div>
            <div className="category">
              <a href="#">
                <span className="icon">
                  <img src="/images/icons/shop.svg" alt="" />
                </span>
                <span>مهراشاپ</span>
              </a>
            </div>
          </div>
          <div className="bottom">
            <div className="add_btn">
              <button>
                <img src="/images/icons/Vector3.svg" alt="" />
              </button>
            </div>
            <div className="price">
              <div className="discount">
                <span>۴۶۰,۰۰۰</span>
              </div>
              <div className="org">
                <span>۴۶۰,۰۰۰ </span>
                <span className="unit">تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;

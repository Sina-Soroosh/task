import React from "react";
import "./ProductDesktop.css";

function ProductDesktop() {
  return (
    <div className="product_desktop">
      <div className="desktop_image">
        <img src="/images/image 94 1.png" alt="" />
      </div>
      <div className="desktop_details">
        <div className="title">
          <h4>
            <a href="#">عنوان محصول عنوان محصول عنوان محصول عنوان محصول</a>
          </h4>
        </div>
        <div className="info">
          <div className="score">
            <span>۴.۶</span>
            <span>
              <img src="/images/icons/Vector (1).svg" alt="" />
            </span>
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
  );
}

export default ProductDesktop;

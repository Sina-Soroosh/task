import React from "react";
import "./ProductMobile.css";

function ProductMobile({ isActive, onHide }) {
  return (
    <div className={`product_mobile ${isActive ? "active" : ""}`}>
      <div className="product_content">
        <div className="head">
          <div className="mobile_details">
            <div className="close_btn" onClick={onHide}>
              <svg
                width="17px"
                height="17px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width={16} height={16} id="icon-bound" fill="none" />
                <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414  13.293,14.707 14.707,13.293 9.414,8 " />
              </svg>
            </div>
            <div className="title">
              <h4>
                <a href="#">عنوان محصول عنوان محصول عنوان محصول</a>
              </h4>
            </div>
          </div>

          <div className="info">
            <div className="menu">
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
            <div className="shop">
              <span>فروشگاه مهر شاپ</span>
              <span className="logo">
                <a href="">
                  <img src="/images/Frame 746.png" alt="" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="product_images">
          <img src="/images/image 94 1.png" alt="" />
          <ul className="pagination">
            <li className="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="footer">
          <div className="top">
            <div className="score">
              <ul className="stars">
                <li>
                  <img src="/images/icons/star.svg" alt="" />
                </li>
                <li>
                  <img src="/images/icons/star.svg" alt="" />
                </li>
                <li>
                  <img src="/images/icons/star.svg" alt="" />
                </li>
                <li>
                  <img src="/images/icons/star.svg" alt="" />
                </li>
                <li>
                  <img src="/images/icons/star (1).svg" alt="" />
                </li>
              </ul>
              <span>(۱۲۱)</span>
            </div>
            <div className="fake">
              <img src="/images/icons/Frame 320.svg" alt="" />
              غیر اصل
            </div>
          </div>
          <div className="bottom">
            <div className="show">
              <a href="#">مشاهده محصول</a>
            </div>
            <div className="price">
              <div className="discount">
                <span className="number">۴۶۰,۰۰۰</span>
                <span className="percent">۲۰%</span>
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

export default ProductMobile;

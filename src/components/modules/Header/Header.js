import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setIsShowMenu((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <div className="content">
        <div className="icons-mobile">
          <ul>
            <li onClick={toggleShowMenu}>
              <img src="/images/icons/hambergermenu icon 1.svg" alt="" />
            </li>
            <li>
              <img src="/images/icons/searchnormal1.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className="logo">
          <a href="">
            <img src="/images/mehrashop-logo.svg" alt="" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li className="active">
              <a href="">خانه</a>
            </li>
            <li>
              <a href="">بلاگ</a>
            </li>
            <li>
              <a href="">داستان ما</a>
            </li>
            <li>
              <a href="">تماس با ما</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <ul>
            <li>
              <a href="">
                <img src="/images/icons/Account icon 2.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/icons/Heart icon.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/images/icons/Cart icon 2.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className={`menu-mobile ${isShowMenu ? "active" : ""}`}>
          <ul>
            <li>
              <a href="">بلاگ</a>
            </li>
            <li>
              <a href="">داستان ما</a>
            </li>
            <li>
              <a href="">تماس با ما</a>
            </li>
            <li>
              <a href="" className="shop">
                <span className="icon">
                  <img src="/images/icons/shop.svg" alt="" />
                </span>
                فروشنده شوید
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import "./Tag.css";
import ProductDesktop from "./ProductDesktop/ProductDesktop";
import ProductMobile from "./ProductMobile/ProductMobile";

function Tag({ top, left }) {
  const [isShowProductMobile, setIsShowProductMobile] = useState(false);

  const showProduct = () => {
    if (window.innerWidth <= 768) {
      setIsShowProductMobile(true);
    }
  };

  const hideProduct = () => {
    setIsShowProductMobile(false);
  };

  return (
    <>
      <div className="tag" style={{ top, left }} onClick={showProduct}>
        <span></span>
        <span></span>
        <span></span>
        <div className="product_tag">
          <ProductDesktop />
        </div>
      </div>
      <ProductMobile isActive={isShowProductMobile} onHide={hideProduct} />
    </>
  );
}

export default Tag;

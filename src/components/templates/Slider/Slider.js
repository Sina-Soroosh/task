import React, { useState } from "react";
import "./Slider.css";
import Tag from "../../modules/Tag/Tag";

function Slider() {
  const [slide, setSlide] = useState(1);

  const changeSlide = () => {
    setSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
  };

  return (
    <div className="slider">
      <div className="content">
        <div className="details">
          <div className="box active">
            <div className="icon">
              <img src="/images/icons/Frame.svg" alt="" />
            </div>
            <div className="title">
              <a href="#">مد و فشن</a>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img src="/images/icons/Frame (1).svg" alt="" />
            </div>
            <div className="title">
              <a href="#">زیبایی و سلامت</a>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img src="/images/icons/Frame (2).svg" alt="" />
            </div>
            <div className="title">
              <a href="#">لوازم خانه</a>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <img src="/images/icons/backpack_svgrepo.com.svg" alt="" />
            </div>
            <div className="title">
              <a href="#">ورزش و سفر</a>
            </div>
          </div>
          <div className="link">
            <a href="">
              مشاهده همه محصولات
              <span className="icon">
                <img src="/images/icons/arrow-down.png" alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="images">
          <div className={`image_box ${slide === 1 ? "active" : ""}`}>
            <div className="image">
              <Tag top="13%" left="45%" />
              <Tag top="39%" left="62%" />
              <Tag top="73%" left="31%" />
              <Tag top="53%" left="43%" />
              <img
                src="/images/cute-woman-with-short-hairs-relaxing-her-bedroom-boho-style-palm-trees-macrame-wall 1.png"
                alt=""
              />
            </div>
          </div>
          <div className={`image_box ${slide === 2 ? "active" : ""}`}>
            <div className="image">
              <Tag top="55%" left="41%" />
              <Tag top="39%" left="62%" />
              <img src="/images/image 110.png" alt="" />
            </div>
          </div>
          <div className="prev_btn" onClick={changeSlide}>
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="20px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
            >
              <g>
                <polyline
                  fill="none"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinejoin="bevel"
                  strokeMiterlimit={10}
                  points="37,15 20,32  37,49  "
                />
              </g>
            </svg>
          </div>
          <div className="next_btn" onClick={changeSlide}>
            {" "}
            <svg
              height="20px"
              width="20px"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 50 50"
              enableBackground="new 0 0 50 50"
              xmlSpace="preserve"
            >
              <path
                fill="#231F20"
                d="M15.563,40.836c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l15-15 c0.391-0.391,0.391-1.023,0-1.414l-15-15c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l14.293,14.293L15.563,39.422 C15.172,39.813,15.172,40.446,15.563,40.836z"
              />
            </svg>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

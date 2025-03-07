import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="content">
        <div className="link_box home active">
          <a href="#">
            <div className="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#555"
                  d="M18.1780455,11.3733043 C18.5648068,11.3733043 18.8783387,11.6865112 18.8783387,12.0728715 L18.8779659,17.9472709 C18.9045058,18.7594781 18.8070167,19.291671 18.4437066,19.6266035 C18.105756,19.9381573 17.6163877,20.02774 16.9806726,19.9929477 L3.14358762,19.9921612 C2.50135353,19.9617139 2.00101685,19.6995595 1.76807877,19.1740143 C1.61416876,18.826769 1.54233858,18.4172981 1.54233858,17.9457519 L1.54233858,12.0728715 C1.54233858,11.6865112 1.85587053,11.3733043 2.2426318,11.3733043 C2.62939306,11.3733043 2.94292502,11.6865112 2.94292502,12.0728715 L2.94292502,17.9457519 C2.94292502,18.1775916 2.96768644,18.3651131 3.01196148,18.5083933 L3.048,18.606 L3.04520125,18.5951633 C3.04625563,18.5832362 3.07436346,18.5883277 3.17678453,18.5938132 L17.0178944,18.5948021 C17.2619058,18.6077766 17.4181773,18.5935806 17.4731456,18.5929701 L17.477,18.592 C17.4642876,18.5389055 17.4889447,18.3217509 17.4777523,17.9700942 L17.4777523,12.0728715 C17.4777523,11.6865112 17.7912843,11.3733043 18.1780455,11.3733043 Z M10.4342636,0 C10.6979883,0 10.9335521,0.103647698 11.156261,0.297113339 L19.7806041,8.43584529 C20.0617527,8.70116319 20.0743627,9.14392549 19.8087695,9.42478257 C19.5431762,9.70563964 19.0999544,9.71823663 18.8188059,9.45291873 L10.4018236,1.50898373 L1.15769646,9.47411857 C0.864827408,9.72646706 0.422628974,9.69386478 0.170018608,9.40129935 C-0.082591757,9.10873393 -0.049955647,8.66699392 0.2429134,8.41464544 L9.6885128,0.275913491 L9.77478626,0.212395396 C9.98943808,0.0783954693 10.2025363,0 10.4342636,0 Z"
                />
              </svg>
            </div>
            <div className="title">
              <span>خانه</span>
            </div>
          </a>
        </div>
        <div className="link_box categories">
          <a href="#">
            <div className="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
                  fill="#292D32"
                />
                <path
                  opacity={0.4}
                  d="M18.6695 2H16.7695C14.5895 2 13.4395 3.15 13.4395 5.33V7.23C13.4395 9.41 14.5895 10.56 16.7695 10.56H18.6695C20.8495 10.56 21.9995 9.41 21.9995 7.23V5.33C21.9995 3.15 20.8495 2 18.6695 2Z"
                  fill="#292D32"
                />
                <path
                  d="M18.6695 13.4302H16.7695C14.5895 13.4302 13.4395 14.5802 13.4395 16.7602V18.6602C13.4395 20.8402 14.5895 21.9902 16.7695 21.9902H18.6695C20.8495 21.9902 21.9995 20.8402 21.9995 18.6602V16.7602C21.9995 14.5802 20.8495 13.4302 18.6695 13.4302Z"
                  fill="#292D32"
                />
                <path
                  opacity={0.4}
                  d="M7.24 13.4302H5.34C3.15 13.4302 2 14.5802 2 16.7602V18.6602C2 20.8502 3.15 22.0002 5.33 22.0002H7.23C9.41 22.0002 10.56 20.8502 10.56 18.6702V16.7702C10.57 14.5802 9.42 13.4302 7.24 13.4302Z"
                  fill="#292D32"
                />
              </svg>
            </div>
            <div className="title">
              <span>دسته‌بندی‌ها</span>
            </div>
          </a>
        </div>
        <div className="link_box cart">
          <a href="#">
            <div className="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5L1.1 2.5M1.1 2.5L3.5 10.5H14.5V4.5C14.5 3.39543 13.6046 2.5 12.5 2.5H1.1ZM12.5 14.5C11.9477 14.5 11.5 14.0523 11.5 13.5C11.5 12.9477 11.9477 12.5 12.5 12.5C13.0523 12.5 13.5 12.9477 13.5 13.5C13.5 14.0523 13.0523 14.5 12.5 14.5ZM4.5 13.5C4.5 12.9477 4.94772 12.5 5.5 12.5C6.05228 12.5 6.5 12.9477 6.5 13.5C6.5 14.0523 6.05228 14.5 5.5 14.5C4.94772 14.5 4.5 14.0523 4.5 13.5Z"
                  stroke="#000000"
                />
              </svg>
            </div>
            <div className="title">
              <span>سبد خرید</span>
            </div>
          </a>
        </div>
        <div className="link_box profile">
          <a href="#">
            <div className="icon">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=bulk">
                  <g id="profile">
                    <path
                      id="vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z"
                      fill="#000000"
                    />
                    <path
                      id="rec (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z"
                      fill="#BFBFBF"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="title">
              <span>پروفایل</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

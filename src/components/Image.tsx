import React, { useState, useEffect } from "react";

import styled from "styled-components";

import image01 from "../assets/main_images01.jpeg";
import image02 from "../assets/main_images02.jpeg";
import image03 from "../assets/main_images03.jpeg";

const imageList = [image01, image02, image03];

interface Test {
  currentIndex: number;
}

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-width: 1150px;
  max-width: 2000px;
  background-color: black;
  overflow: hidden;

  .image-text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 20;
    margin-left: -575px;
    margin-top: -150px;
    text-align: left;
  }

  .image-title {
    clear: both;
    font-family: "Pretendard";
    font-weight: 700;
    font-size: 55px;
    line-height: 65px;
    color: #fff;
    margin: 20px 0 30px;
  }

  .image-comment {
    clear: both;
    font-family: "Pretendard";
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
  }

  .caroucel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.8s ease;
    transform: translateX(-200%);
  }

  .slide-page-index {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -617px;
    font-size: 0;
    z-index: 90;
    margin-top: 120px;

    .item {
      display: inline-block;
      margin: 0 3px;

      a {
        display: block;
        width: 45px;
        height: 7px;
        font-size: 0;
        float: left;
        overflow: hidden;
        background: #fff;
        border-radius: 100px;
      }
    }

    a.active {
      background: #005cdf;
    }
  }
`;

const CaroucelWrapper = styled.div<Test>`
  .caroucel {
    overflow: hidden;
  }

  .inner {
    white-space: nowrap;
    transition: transform 0.8s ease;
    transform: ${(props: Test) => `translateX(${-100 * props.currentIndex}%)`};
  }

  .caroucel-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
      width: 100%;
      min-height: 1000px;
      object-fit: cover;
    }
  }
`;

const Image: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevState) => {
        if (prevState === imageList.length - 1) {
          return 0;
        }

        return prevState + 1;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function handleImageTabClick(index: number) {
    setActiveIndex(index);
  }

  return (
    <ImageWrapper>
      <div className="image-text-wrapper">
        <div className="image-title">
          대한민국 No.1
          <br />
          Cold-chain platform
        </div>
        <div className="image-comment">
          팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.
        </div>
      </div>
      <CaroucelWrapper currentIndex={activeIndex}>
        <div className="caroucel">
          <div className="inner">
            {imageList.map((value) => {
              return (
                <div key={value} className="caroucel-item">
                  <img src={value} />
                </div>
              );
            })}
          </div>
        </div>
      </CaroucelWrapper>
      <ul className="slide-page-index">
        {imageList.map((value, index) => {
          return (
            <li key={value} className="item">
              <a
                className={activeIndex === index ? "active" : ""}
                onClick={() => {
                  handleImageTabClick(index);
                }}
              >
                {index}
              </a>
            </li>
          );
        })}
      </ul>
    </ImageWrapper>
  );
};

export default Image;

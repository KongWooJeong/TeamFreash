import React from "react";

import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-width: 1210px;
  overflow: hidden;
  background-color: black;

  .image-text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: left;
    z-index: 20;
    margin-left: -575px;
    margin-top: -150px;
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
`;

const Image: React.FC = () => {
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
    </ImageWrapper>
  );
};

export default Image;

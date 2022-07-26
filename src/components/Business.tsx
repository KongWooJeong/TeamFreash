import React from "react";

import styled from "styled-components";

import icon01 from "../assets/icon01.png";
import icon02 from "../assets/icon02.png";
import icon03 from "../assets/icon03.png";
import icon04 from "../assets/icon04.png";
import icon05 from "../assets/icon05.png";
import icon06 from "../assets/icon06.png";
import icon07 from "../assets/icon07.png";
import icon08 from "../assets/icon08.png";

const BusinessWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 1050px;
  padding: 0;
  background: #000;
  overflow: hidden;

  .title {
    position: absolute;
    top: 150px;
    left: 0;
    width: 100%;
    color: #fff;
    z-index: 2;
    font-family: "Pretendard";
    text-align: center;
    font-weight: 700;
    font-size: 55px;
    line-height: 45px;

    span {
      font-weight: 300;
      font-size: 20px;
    }
  }

  .contents {
    position: absolute;
    top: 300px;
    left: 50%;
    width: 1210px;
    margin-left: -605px;
    z-index: 2;
  }

  .process {
    clear: both;
    display: table;
    width: 100%;

    ul {
      padding: 0;
      margin: 0;

      li {
        position: relative;
        width: 25%;
        font-family: "Pretendard";
        text-align: center;
        font-weight: 300;
        font-size: 20px;
        line-height: 25px;
        color: #fff;
        list-style: none;

        img {
          width: 80px;
          filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(244deg)
            brightness(104%) contrast(104%);
        }
      }
    }
  }

  .process:first-child li {
    float: left;
  }

  .process:nth-child(3) li {
    float: right;
  }

  .process:nth-child(3) li:after {
    position: absolute;
    top: 50%;
    left: -20%;
    width: 40%;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    content: "◀";
    font-size: 10px;
    text-align: left;
    line-height: 1px;
  }

  .process:first-child li:after {
    position: absolute;
    top: 50%;
    right: -20%;
    width: 40%;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    content: "▶";
    font-size: 10px;
    text-align: right;
    line-height: 1px;
  }

  .process:first-child li:last-child:after {
    top: 145%;
    right: 50%;
    margin-right: -5px;
    width: 10px;
    height: auto;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0% 50%,
      rgba(255, 255, 255, 0.3) 50% 60%,
      rgba(255, 255, 255, 0) 60% 100%
    );
    content: "▼";
    text-align: center;
    padding-top: 150px;
  }

  .process:nth-child(3) li:last-child:after {
    top: -180%;
    left: 50%;
    margin-left: -5px;
    width: 10px;
    height: auto;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0% 50%,
      rgba(255, 255, 255, 0.3) 50% 60%,
      rgba(255, 255, 255, 0) 60% 100%
    );
    content: "▲";
    text-align: center;
    padding-bottom: 150px;
  }

  .process-title {
    width: 100%;
    font-family: "Pretendard";
    text-align: center;
    font-weight: 600;
    font-size: 40px;
    line-height: 80px;
    color: #fff;
    padding: 80px 0;
  }

  .process-comments {
    clear: both;
    position: relative;
    width: 100%;
    font-family: "Pretendard";
    text-align: center;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    padding: 80px 0 0;
  }

  .process-comments:after {
    position: absolute;
    top: -10%;
    left: 50%;
    margin-left: -5px;
    width: 10px;
    height: 60px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0% 40%,
      rgba(255, 255, 255, 0.3) 40% 50%,
      rgba(255, 255, 255, 0) 50% 100%
    );
    content: "▲";
    font-size: 10px;
    text-align: center;
    line-height: 0;
  }

  .movie {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2000px;
    height: 1400px;
    margin-top: -700px;
    margin-left: -1000px;
    z-index: 1;
    opacity: 0.3;
  }
`;

const Business: React.FC = () => {
  return (
    <BusinessWrapper>
      <div className="title">
        <span>콜드체인 원스톱 솔루션으로 한눈에</span>
        <br />
        신선상품의 유통과정
      </div>
      <div className="contents">
        <div className="process">
          <ul>
            <li>
              <img src={icon01} />
              <br />
              새벽배송
            </li>
            <li>
              <img src={icon02} />
              <br />
              보관
            </li>
            <li>
              <img src={icon03} />
              <br />
              출고
            </li>
            <li>
              <img src={icon04} />
              <br />
              화물주선
            </li>
          </ul>
        </div>
        <div className="process-title">콜드체인 원스톱 솔루션</div>
        <div className="process">
          <ul>
            <li>
              <img src={icon05} />
              <br />
              식자재 유통
            </li>
            <li>
              <img src={icon06} />
              <br />
              프랜차이즈
            </li>
            <li>
              <img src={icon07} />
              <br />
              보험
            </li>
            <li>
              <img src={icon08} />
              <br />
              고객
            </li>
          </ul>
        </div>
        <div className="process-comments">최적화 시스템 기반 서비스 운영</div>
      </div>
      <div className="movie">
        <iframe
          src="https://player.vimeo.com/video/700346662?quality=1080p&autopause=0&playsinline=1&autoplay=1&loop=1&background=1"
          allow="autoplay"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </BusinessWrapper>
  );
};

export default Business;

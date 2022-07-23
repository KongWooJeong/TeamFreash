import React from "react";

import styled from "styled-components";

import icon01 from "../assets/icon01.png";
import arrowicon from "../assets/arrowicon.png";
import mainBusiness from "../assets/main_business_img01.jpeg";

const ServiceWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
  overflow: hidden;

  .title {
    width: 100%;
    font-family: "Pretendard";
    text-align: center;
    font-weight: 700;
    font-size: 55px;
    line-height: 45px;
    color: #000;

    span {
      font-weight: 300;
      font-size: 20px;
      color: #000;
    }
  }

  .service-tab-container {
    position: relative;
    width: 1210px;
    margin: 50px auto 0;
    padding: 0 30px;
    box-sizing: border-box;

    .service-tab {
      position: absolute;
      top: 50px;
      left: 30px;
      display: table;
      float: left;
      width: 45%;
      background: #f5f5f5;
      padding: 0;
      box-sizing: border-box;
      z-index: 1;

      ul {
        width: 100%;
        padding: 0;
        margin: 0 auto;

        .on {
          color: #fff;
          background: #02204b;
        }

        li {
          position: relative;
          float: left;
          width: 25%;
          text-align: center;
          font-family: "Pretendard";
          font-weight: 300;
          font-size: 20px;
          line-height: 40px;
          color: #000;
          cursor: pointer;
          padding: 75px 0 15px;
          box-sizing: border-box;
          list-style: none;

          img {
            position: absolute;
            top: 15px;
            left: 50%;
            width: 60px;
            margin-left: -30px;
          }
        }
      }
    }

    .service-contents {
      clear: left;
      float: left;
      position: relative;
      width: 100%;
      margin: 0 auto 0;

      .text-box {
        float: left;
        width: 40%;
        margin-top: 230px;

        .title {
          font-family: "Pretendard";
          text-align: left;
          font-weight: 700;
          font-size: 35px;
          line-height: 45px;
          color: #02204b;
        }

        .comment {
          font-family: "Pretendard";
          text-align: left;
          font-weight: 300;
          font-size: 18px;
          line-height: 25px;
          color: #666;
          margin: 30px 0 0 0;
        }

        .link {
          clear: both;
          float: left;
          cursor: pointer;
          margin: 30px 0 0 0;
          opacity: 0.3;
        }
      }

      .image-box {
        float: right;
        width: 55%;

        img {
          width: 100%;
        }
      }
    }
  }
`;

const Service: React.FC = () => {
  return (
    <ServiceWrapper>
      <div className="title">
        <span>Serivce Introduction</span>
        <br />
        서비스 소개
      </div>
      <div className="service-tab-container">
        <div className="service-tab">
          <ul>
            <li>
              <img src={icon01} />
              물류
            </li>
            <li>
              <img src={icon01} />
              유통
            </li>
            <li>
              <img src={icon01} />
              프렌차이즈
            </li>
            <li>
              <img src={icon01} />
              보험
            </li>
          </ul>
        </div>
        <div className="service-contents">
          <div className="text-box">
            <div className="title">
              상품의 관리,
              <br />
              보관부터 배송까지
              <br />
              완벽하게
            </div>
            <div className="comment">
              이커머스 운영에 최적화된 풀필먼트 센터와
              <br />
              새벽배송망을 보유한 팀프레시의
              <br />
              이커머스 전문 물류 서비스를 제공받으세요.
            </div>
            <div className="link">
              <img src={arrowicon} />
            </div>
          </div>
          <div className="image-box">
            <img src={mainBusiness} />
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
};

export default Service;

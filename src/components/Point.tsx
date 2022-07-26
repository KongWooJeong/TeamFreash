import React from "react";

import styled from "styled-components";

const PointWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
  padding-top: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% 50%,
    rgba(0, 0, 0, 0.05) 50% 100%
  );

  .point-container {
    width: 1210px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;

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

    .point-box {
      width: 100%;
      margin: 50px 0 0 0;

      .contents {
        position: relative;
        float: left;
        width: 14.7%;
        height: 500px;
        margin: 0 0.15%;
        background: #000;
        overflow: hidden;

        .text {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 20px;
          z-index: 1;

          .title {
            width: 100%;
            font-family: "Pretendard";
            font-size: 25px;
            font-weight: 500;
            line-height: 25px;
            color: #fff;
          }

          .comments {
            width: 0;
            height: 0;
            font-family: "Pretendard";
            font-size: 17px;
            font-weight: 300;
            line-height: 20px;
            color: #fff;
            opacity: 0;
            border-top: 1px solid #fff;
            padding: 10px 0 0 0;
            margin: 10px 0 0 0;
            overflow: hidden;
          }
        }

        .image {
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }
      }

      .active {
        width: 54.7%;
      }
    }
  }
`;

const Point: React.FC = () => {
  return (
    <PointWrapper>
      <div className="point-container">
        <div className="title">
          <span>팀프레시를 이끄는 힘</span>
          <br />
          핵심역량
        </div>
        <div className="point-box">
          <div className="contents active">
            <div className="text">
              <div className="title">특허 보유 TMS</div>
              <div className="comments">
                새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템
                <br />* TMS : Transportation Management System
              </div>
            </div>
            <div className="image"></div>
          </div>
          <div className="contents">
            <div className="text">
              <div className="title">특허 보유 TMS</div>
              <div className="comments">
                새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템
                <br />* TMS : Transportation Management System
              </div>
            </div>
            <div className="image"></div>
          </div>
          <div className="contents">
            <div className="text">
              <div className="title">특허 보유 TMS</div>
              <div className="comments">
                새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템
                <br />* TMS : Transportation Management System
              </div>
            </div>
            <div className="image"></div>
          </div>
          <div className="contents">
            <div className="text">
              <div className="title">특허 보유 TMS</div>
              <div className="comments">
                새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템
                <br />* TMS : Transportation Management System
              </div>
            </div>
            <div className="image"></div>
          </div>
        </div>
      </div>
    </PointWrapper>
  );
};

export default Point;
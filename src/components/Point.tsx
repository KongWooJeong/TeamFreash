import React, { Fragment, useState } from "react";

import styled from "styled-components";

import image01 from "../assets/main_pointimg01.jpeg";
import image02 from "../assets/main_pointimg02.jpeg";
import image03 from "../assets/main_pointimg03.jpeg";
import image04 from "../assets/main_pointimg04.jpeg";

interface Info {
  [key: string]: {
    title: string;
    comments: string[];
    image: string;
  };
}

const pointInfo: Info = {
  tms: {
    title: "특허 보유 TMS",
    comments: [
      "새벽배송 현황 추적에 최적화된 배차 및 고객 주문관리 시스템",
      "* TMS : Transportation Management System",
    ],
    image: image01,
  },
  morning: {
    title: "국내 1위 새벽배송",
    comments: ["대한민국 1위 안정된 새벽배송망 구축"],
    image: image02,
  },
  control: {
    title: "24시간 관제",
    comments: ["24시간 현장 관제를 통해 상품을 안전하게 배송 완료"],
    image: image03,
  },
  license: {
    title: "라이선스 보유 차량망",
    comments: ["합법적으로 허가 받은 차량만을 섭외해 운영"],
    image: image04,
  },
};

const Point: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("tms");

  return (
    <PointWrapper>
      <div className="point-container">
        <div className="title">
          <span>팀프레시를 이끄는 힘</span>
          <br />
          핵심역량
        </div>
        <div className="point-box">
          {Object.keys(pointInfo).map((item) => {
            return (
              <div
                key={item}
                className={
                  selectedItem === item ? "contents active" : "contents"
                }
                onMouseOver={() => {
                  setSelectedItem(item);
                }}
              >
                <div className="text">
                  <div className="title">{pointInfo[item].title}</div>
                  <div className="comments">
                    {pointInfo[item].comments.map((value, index) => {
                      if (index === pointInfo[item].comments.length - 1) {
                        return value;
                      }

                      return (
                        <Fragment key={value}>
                          {value}
                          <br />
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
                <img src={pointInfo[item].image} />
              </div>
            );
          })}
        </div>
      </div>
    </PointWrapper>
  );
};

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

  * {
    transition: all 0.4s ease;
  }

  .point-container {
    width: 1210px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;

    .title {
      width: 100%;
      text-align: center;
      font-family: "Pretendard";
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

        img {
          width: 100%;
          height: 100%;
          opacity: 0.3;
          object-fit: cover;
        }

        .text {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
          width: 100%;
          padding: 40px 40px 30px 40px;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
          );

          .title {
            width: 100%;
            font-size: 23px;
            font-weight: 500;
            line-height: 25px;
            color: #fff;
          }

          .comments {
            width: 0;
            height: 0;
            border-top: 1px solid #fff;
            padding: 10px 0 0 0;
            margin: 10px 0 0 0;
            font-size: 17px;
            font-weight: 300;
            line-height: 20px;
            color: #fff;
            overflow: hidden;
            opacity: 0;
          }
        }
      }

      .active {
        width: 54.7%;

        img {
          opacity: 1;
        }

        .text {
          .title {
            text-align: left;
          }

          .comments {
            width: 100%;
            height: 60px;
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default Point;

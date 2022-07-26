import React, { Fragment, useState } from "react";

import styled from "styled-components";

import arrowicon from "../assets/arrowicon.png";
import business01 from "../assets/main_business_img01.jpeg";
import business02 from "../assets/main_business_img02.jpeg";
import business03 from "../assets/main_business_img03.jpeg";
import business04 from "../assets/main_business_img04.jpeg";
import icon03 from "../assets/icon03.png";
import icon04 from "../assets/icon04.png";
import icon06 from "../assets/icon06.png";
import icon07 from "../assets/icon07.png";

interface Info {
  [key: string]: {
    name: string;
    title: string[];
    comment: string[];
    image: string;
    icon: string;
  };
}

const businessInfo: Info = {
  distribution: {
    name: "물류",
    title: ["상품의 관리,", "보관부터 배송까지", "완벽하게"],
    comment: [
      "이커머스 운영에 최적화된 풀필먼트 센터와",
      "새벽배송망을 보유한 팀프레시의",
      "이커머스 전문 물류 서비스를 제공받으세요.",
    ],
    image: business01,
    icon: icon03,
  },
  circulation: {
    name: "유통",
    title: ["식자재 제안,", "업장 운영 형태에 맞는", "최적의 형태로"],
    comment: [
      "주기적인 단가 관리 시스템을 통해",
      "합리적인 가격의 상품을 제공하고,",
      "자체 물류 역량으로 상품을 안정적으로 공급하고 있습니다.",
    ],
    image: business02,
    icon: icon04,
  },
  franchise: {
    name: "프렌차이즈",
    title: ["외식 창업,", "적은 자본으로", "빠르고 간편하게"],
    comment: [
      "외식 전문 브랜드 팀프에프앤비가",
      "소형, 소자본으로도 쉽고 편리하게",
      "점포를 운영할 수 있도록",
      "가맹 패키지를 제안해드립니다.",
    ],
    image: business03,
    icon: icon06,
  },
  insurance: {
    name: "보험",
    title: [
      "기업 대상 전문 보험,",
      "상해보험부터 재산종합보험까지",
      "똑똑하게",
    ],
    comment: [
      "기업 전문 보험 GA와 만나",
      "팀프인슈어런스가 탄생했습니다.",
      "기업 맞춤형, 최적의 보험 상품을 추천받아보세요.",
    ],
    image: business04,
    icon: icon07,
  },
};

const ServiceWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
  overflow: hidden;

  .title {
    width: 100%;
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

    .service-tab {
      position: absolute;
      top: 50px;
      left: 30px;
      display: table;
      float: left;
      width: 45%;
      padding: 0;
      background: #f5f5f5;
      z-index: 1;

      ul {
        width: 100%;
        padding: 0;
        margin: 0 auto;

        .on {
          color: #fff;
          background: #02204b;

          img {
            filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(244deg)
              brightness(104%) contrast(104%);
          }
        }

        li {
          position: relative;
          list-style: none;
          float: left;
          width: 25%;
          padding: 75px 0 15px;
          text-align: center;
          font-family: "Pretendard";
          font-weight: 300;
          font-size: 20px;
          line-height: 40px;
          color: #000;
          cursor: pointer;

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
      float: left;
      position: relative;
      width: 100%;
      margin: 0 auto 0;
      clear: left;

      .text-box {
        float: left;
        width: 40%;
        margin-top: 230px;

        .title {
          text-align: left;
          font-weight: 700;
          font-size: 35px;
          line-height: 45px;
          color: #02204b;
        }

        .comment {
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
  const [selectedBusiness, setSeletedBusiness] =
    useState<string>("distribution");

  function handleBusinessTabClick(businessType: string) {
    setSeletedBusiness(businessType);
  }

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
            {Object.keys(businessInfo).map((value, index) => {
              return (
                <li
                  key={index}
                  className={selectedBusiness === value ? "on" : ""}
                  onClick={() => handleBusinessTabClick(value)}
                >
                  <img src={businessInfo[value].icon} />
                  {businessInfo[value].name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="service-contents">
          <div className="text-box">
            <div className="title">
              {businessInfo[selectedBusiness].title.map((value, index) => {
                if (index === businessInfo[selectedBusiness].title.length - 1) {
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
            <div className="comment">
              {businessInfo[selectedBusiness].comment.map((value, index) => {
                if (
                  index ===
                  businessInfo[selectedBusiness].comment.length - 1
                ) {
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
            <div className="link">
              <img src={arrowicon} />
            </div>
          </div>
          <div className="image-box">
            <img src={businessInfo[selectedBusiness].image} />
          </div>
        </div>
      </div>
    </ServiceWrapper>
  );
};

export default Service;

import React, { useState } from "react";

import styled from "styled-components";

import arrowicon from "../assets/arrowicon2.png";
import mainLinkImage01 from "../assets/main_linkimg01.jpeg";
import mainLinkImage02 from "../assets/main_linkimg02.jpeg";
import mainLinkImage03 from "../assets/main_linkimg03.jpeg";

interface Info {
  [key: string]: {
    name: string;
    image: string;
  };
}

const info: Info = {
  news: {
    name: "News",
    image: mainLinkImage01,
  },
  recruit: {
    name: "Recruit",
    image: mainLinkImage02,
  },
  imfStory: {
    name: "Timf Strory",
    image: mainLinkImage03,
  },
};

const LinkWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;

  * {
    transition: all 0.4s ease;
  }

  .link-container {
    width: 1210px;
    margin: 0 auto;
    padding: 0 30px;

    .contents.active {
      .text {
        .title:before {
          opacity: 1;
        }

        .button {
          opacity: 1;
        }
      }

      .image {
        opacity: 1;
      }
    }

    .contents {
      position: relative;
      float: left;
      width: 30.33%;
      height: 500px;
      margin: 0 1.5%;
      border-radius: 15px;
      background: #333;
      overflow: hidden;
      cursor: pointer;

      .text {
        position: absolute;
        top: 15%;
        left: 20%;
        width: 60%;
        text-align: center;
        border: 1px solid transparent;
        z-index: 1;

        .title {
          position: relative;
          width: 100%;
          font-family: "Pretendard";
          font-size: 40px;
          font-weight: 500;
          line-height: 40px;
          color: #fff;
        }

        .title:before {
          position: absolute;
          top: 90px;
          left: 50%;
          width: 1px;
          height: 70px;
          background: #fff;
          content: "";
          opacity: 0;
        }

        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          border-radius: 100%;
          margin: 280px auto 0;
          opacity: 0;

          img {
            width: 20px;
            filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(137deg)
              brightness(104%) contrast(101%);
          }
        }
      }

      .image {
        width: 100%;
        height: 100%;
        opacity: 0.4;
      }
    }
  }
`;

const Link: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  return (
    <LinkWrapper>
      <div className="link-container">
        {Object.keys(info).map((value) => {
          return (
            <div
              key={value}
              className={
                value === selectedMenu ? "contents active" : "contents"
              }
              onMouseOver={() => {
                setSelectedMenu(value);
              }}
              onMouseOut={() => {
                setSelectedMenu("");
              }}
            >
              <div className="text">
                <div className="title">{info[value].name}</div>
                <div className="button">
                  <img src={arrowicon} />
                </div>
              </div>
              <img className="image" src={info[value].image} />
            </div>
          );
        })}
      </div>
    </LinkWrapper>
  );
};

export default Link;

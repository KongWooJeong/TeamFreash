import React from "react";

import styled from "styled-components";

import arrowicon from "../assets/arrowicon2.png";
import mainLinkImage01 from "../assets/main_linkimg01.jpeg";

const LinkWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;

  * {
    box-sizing: border-box;
  }

  .link-container {
    width: 1210px;
    margin: 0 auto;
    padding: 0 30px;

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
          transition: all 0.2s ease;
          -webkit-transition: all 0.2s ease;
        }

        .button {
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          border-radius: 100%;
          padding: 15px 0 0 0;
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
        background: url(${mainLinkImage01}) no-repeat center;
        background-size: cover;
      }
    }
  }
`;

const Link: React.FC = () => {
  return (
    <LinkWrapper>
      <div className="link-container">
        <div className="contents">
          <div className="text">
            <div className="title">News</div>
            <div className="button">
              <img src={arrowicon} />
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="contents">
          <div className="text">
            <div className="title">Recruit</div>
            <div className="button">
              <img src={arrowicon} />
            </div>
          </div>
          <div className="image"></div>
        </div>
        <div className="contents">
          <div className="text">
            <div className="title">Timf Stroy</div>
            <div className="button">
              <img src={arrowicon} />
            </div>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </LinkWrapper>
  );
};

export default Link;

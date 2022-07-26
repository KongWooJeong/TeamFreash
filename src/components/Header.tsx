import React from "react";

import styled from "styled-components";

import logo from "../assets/logo_Teamfresh.png";

const HeaderWrapper = styled.div`
  display: table;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  min-width: 1210px;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(2, 21, 48, 0.9);
  backdrop-filter: blur(2px);
  text-align: center;
  transition: all 0.2s ease;

  .header {
    width: 1210px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;
  }

  .logo {
    float: left;
    margin: 20px 0 20px 0;

    a {
      cursor: pointer;
    }

    img {
      width: 110px;
    }
  }

  .menu {
    float: right;
    transition: all 0.2s ease;
    margin: 13px 0 0;

    ul {
      padding: 0;
      margin: 0;
      font-size: 0;
      line-height: 0;

      li:before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background: #fff;
        content: "";
      }

      li {
        position: relative;
        display: inline-block;
        display: inline;
        margin: 0 20px;

        a {
          padding: 5px 0;
          font-family: "Pretendard";
          font-weight: 500;
          font-size: 18px;
          line-height: 30px;
          color: #ffffff;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div className="header">
        <div className="logo">
          <a>
            <img src={logo} />
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a>회사소개</a>
            </li>
            <li>
              <a>서비스소개</a>
            </li>
            <li>
              <a>회사소개</a>
            </li>
            <li>
              <a>고객지원</a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

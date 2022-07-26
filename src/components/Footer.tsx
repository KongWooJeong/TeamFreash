import React from "react";

import styled from "styled-components";

import logo from "../assets/logo_w.png";
import logoBrunch from "../assets/sns_brunch.png";

const FooterWrapper = styled.div`
  display: table;
  width: 100%;
  min-width: 1210px;
  text-align: center;
  background: #191919;
  padding: 50px 0;
  margin: 0;

  .footer-container {
    width: 1210px;
    margin: 0 auto;
    padding: 0 30px;
    box-sizing: border-box;

    .logo {
      float: left;
      margin: 0 0 30px;

      img {
        width: 100px;
      }
    }

    .companyinfo {
      clear: both;
      float: left;
      width: 100%;
      text-align: left;
      font-size: 0;

      ul {
        margin: 0;
        padding: 0;

        li {
          display: inline-block;
          margin: 0 30px 0 0;
          font-family: "Pretendard";
          font-size: 16px;
          font-weight: 300;
          line-height: 25px;
          color: #ccc;
        }

        li:last-child {
          width: 100%;
          margin: 10px 0 0 0;

          a {
            font-family: "Pretendard";
            font-weight: 300;
            font-size: 16px;
            text-decoration: none;
            color: #ccc;
          }
        }
      }
    }

    .snslink {
      clear: both;
      float: left;
      width: 100%;
      margin: 30px 0 0 0;

      ul {
        padding: 0;
        margin: 0;

        li {
          float: left;
          width: 40px;
          height: 40px;
          text-align: center;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 100%;
          overflow: hidden;
          padding: 6px 0 0 0;
          margin: 0 10px 0 0;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.2s ease;
          -webkit-transition: all 0.2s ease;

          i {
            color: #fff;
            font-size: 27px;
          }

          img {
            height: 27px;
            margin: 1px 0 0 0;
          }
        }
      }
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="companyinfo">
          <ul>
            <li>(주)팀프레시</li>
            <li>사업자번호 561-88-01138</li>
            <li>대표 이성일</li>
            <li>서울특별시 송파구 위례성대로 12길 15-1</li>
            <li>전화 02-423-0525</li>
            <li>팩스 02-3432-0525</li>
            <li>메일 info@timf.co.kr</li>
            <li>영업 및 제휴 문의 sales@timf.co.kr</li>
            <li>
              Copyrightⓒ <a target="_blank">TeamFresh Co.,Ltd.</a> All Rights
              Reserved.
            </li>
          </ul>
        </div>
        <div className="snslink">
          <ul>
            <li>
              <i className="xi-facebook"></i>
            </li>
            <li>
              <img src={logoBrunch} />
            </li>
            <li>
              <i className="xi-youtube-play"></i>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

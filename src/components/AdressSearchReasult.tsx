import React, { useState, useEffect } from "react";

import styled from "styled-components";

import back from "../assets/back.png";
import Modal from "./Modal";

interface ResultProps {
  addressInfo: {
    zipCode: string;
    fullAddress: string;
  };
  onBackPage: () => void;
}

interface SearchResult {
  result: boolean;
}

const AdressSearchReasult: React.FC<ResultProps> = ({
  addressInfo,
  onBackPage,
}) => {
  const [inputButtonClickCount, setInputButtonClickCount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<SearchResult>({
    result: false,
  });

  useEffect(() => {
    if (!inputButtonClickCount) {
      return;
    }

    async function requestCheckAddress() {
      const requestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addrBasic: addressInfo.fullAddress }),
      };

      try {
        const response = await fetch(
          "https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest",
          requestOption
        );
        const { result, resultMsg } = await response.json();

        if (resultMsg !== "통신성공") {
          throw new Error("failed request");
        }

        setSearchResult({
          result: Boolean(Number(result.delyverYn)),
        });
        setIsModalOpen(true);
      } catch (err) {
        console.log(err);
      }
    }

    requestCheckAddress();
  }, [inputButtonClickCount]);

  function handleInputAddressButtonClick() {
    setInputButtonClickCount(inputButtonClickCount + 1);
  }

  function handleModalCloseButtonClick() {
    setIsModalOpen(false);
  }

  function handleBackButtonClick() {
    onBackPage();
  }

  return (
    <AdressSearchReasultWrapper>
      {isModalOpen && (
        <Modal
          onClickToggleModal={() => {
            handleModalCloseButtonClick();
          }}
        >
          <div className="modal-container">
            <div className="modal-title">
              {searchResult.result ? "배송 가능" : "배송 불가능"}
            </div>
            <div className="modal-content">
              {searchResult.result ? (
                <>
                  <p>배송 가능 지역입니다.</p>
                  <p>다음날 아침 7시 이전에 도착합니다.</p>
                  <p>
                    (관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역
                    배송 불가)
                  </p>
                </>
              ) : (
                <>
                  <p>배송 불가 지역입니다.</p>
                  <p>
                    지번주소(구 주소)로 검색하셨다면 도로명 주소로 다시 시도해
                    주세요.
                  </p>
                </>
              )}
            </div>
            <div className="modal-close-button">
              <button onClick={handleModalCloseButtonClick}>확인</button>
            </div>
          </div>
        </Modal>
      )}
      <div className="header">
        <div className="button" onClick={handleBackButtonClick}>
          <img src={back} />
        </div>
        <h4>다시 주소 검색하기</h4>
      </div>

      <div className="container">
        <hr />
        <input
          type="text"
          className="zipcodebox"
          name="zonecode"
          value={addressInfo.zipCode}
          readOnly
        />
        <input
          type="text"
          className="addressbox"
          name="roadAddress"
          value={addressInfo.fullAddress}
          readOnly
        />
        <input type="text" placeholder="나머지 주소를 입력해주세요."></input>
        <button type="button" onClick={handleInputAddressButtonClick}>
          주소입력
        </button>
      </div>
      <div className="explain-wrapper">
        <div className="explain-box">
          <div className="title-box">
            <p className="title">배송 불가 장소 안내</p>
            <p>[하단 리스트 참고]</p>
            <p>관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역</p>
          </div>
          <hr />
          <div className="comments-box">
            <p>
              일부 장소가 배송 가능으로 검색될 수 있으나 배송불가지역이므로 참고
              바랍니다.
            </p>
            <br />
            <p>
              [공공시설]
              <br />
              관공서: 국회, 우체국, 수자원공사 등
              <br />
              군사지역: 군부대, 군인아파트, 위병소 등
              <br />
              교정시설: 교도소, 구치소 등
            </p>
            <br />
            <p>
              [차량출입제한]
              <br />
              학교: 초등학교, 중학교, 고등학교
              <br />
              지하철, 공원, 유원지 그 외 차량 통제 지역
              <br />
            </p>
            <br />
            <p>
              [기타]
              <br />
              대학교, 백화점, 병원(임시 지정), 시장, 마트, 공터,
              <br />
              가건물(가로판매대, 비닐하우스 등), 공사장, 산업단지, 물류단지,
              <br />
              고속도로 휴게소, 공공시설 무인택배함, 도서산간지역 등
              <br />
            </p>
          </div>
        </div>
      </div>
    </AdressSearchReasultWrapper>
  );
};

const AdressSearchReasultWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  .modal-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    .modal-title {
      height: 50px;
      font-size: 30px;
      font-weight: 500;
      color: green;
    }

    .modal-content {
      p {
        margin-bottom: 50px;
      }
    }

    .modal-close-button {
      height: 40px;

      button {
        width: 70px;
        height: 40px;
        border-radius: 5px;
        background-color: lightgreen;
        cursor: pointer;
      }
    }
  }

  .header {
    display: flex;
    width: 400px;
    height: 50px;
    margin: 0 auto;

    .button {
      margin-right: 20px;
      cursor: pointer;
    }

    h4 {
      display: inline-block;
      vertical-align: bottom;
    }
  }

  hr {
    width: 400px;
    height: 5px;
    border: 0px;
    background: rgb(2, 32, 74);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .zipcodebox {
      width: 360px;
      height: 40px;
      border: 1px solid #02204a;
      line-height: 35px;
      margin-top: 20px;
    }

    .addressbox {
      width: 360px;
      height: 40px;
      border: 1px solid #02204a;
      line-height: 40px;
      padding: 0 0 0 10px;
    }

    input {
      width: 360px;
      height: 40px;
      margin-bottom: 10px;
      border: 1px solid #02204a;
      line-height: 40px;
      padding: 0 0 0 10px;
    }

    button {
      width: 380px;
      height: 40px;
      background-color: #02204a;
      color: #fff;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
      border-radius: 10px;
      cursor: pointer;
    }
  }

  .explain-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .explain-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      .title-box {
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
          font-size: 20px;
          margin-bottom: 10px;
          color: red;
        }
      }

      .comments-box {
        width: 400px;
      }
    }
  }
`;

export default AdressSearchReasult;

import React, { useState } from "react";

import styled from "styled-components";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

import AdressSearchReasult from "../components/AdressSearchReasult";

interface Info {
  zipCode: string;
  fullAddress: string;
}

const DeliveryAreaSearchWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 200px;
`;

const DeliveryAreaSearch: React.FC = () => {
  const [addressInfo, setAddreddInfo] = useState<Info>({
    zipCode: "",
    fullAddress: "",
  });

  const handleComplete = (data: Address) => {
    const zipCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddreddInfo({
      zipCode,
      fullAddress,
    });
  };

  return (
    <DeliveryAreaSearchWrapper>
      {addressInfo.zipCode !== "" ? (
        <AdressSearchReasult
          onBackPage={() => {
            setAddreddInfo({ zipCode: "", fullAddress: "" });
          }}
          addressInfo={addressInfo}
        />
      ) : (
        <div>
          <DaumPostcodeEmbed autoClose onComplete={handleComplete} />
        </div>
      )}
    </DeliveryAreaSearchWrapper>
  );
};

export default DeliveryAreaSearch;

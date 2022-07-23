import React from "react";

import styled from "styled-components";

const IntroduceWrapper = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 200px 0;
  background: rgba(0, 0, 0, 0.03);
  overflow: hidden;
  font-family: "Pretendard";
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
  color: #000;
`;

const Introduce: React.FC = () => {
  return (
    <IntroduceWrapper>
      안전하고 신속하게 고객에 먹거리를 제공하고 있습니다.
      <br />
      국내 유일 Door to Door Cold Chain Service, 팀프레시를 만나보세요.
    </IntroduceWrapper>
  );
};

export default Introduce;

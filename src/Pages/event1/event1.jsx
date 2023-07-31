import React from "react";

import styled from "styled-components";
import { Nav } from "../../components/index";

const StyledContainer = styled.div`
  height: 100vh;

  background-image:url("../../items/BG.jpg")
`;

const StyledTest = styled.div`
  width: 50%;
  height: 50%;
  background-color: gray;
`;

const Event1 = () => {
  return (
    <StyledContainer>
      <Nav />
      <StyledTest>
        <div className="inside">Event1</div>
      </StyledTest>
    </StyledContainer>
  );
};

export default Event1;

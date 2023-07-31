import React from "react";
import styled from "styled-components";

const StyledLoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  p {
    font-size: 10rem;
    color: white;
  }
`;

const LoadingPage = () => {
  return (
    <StyledLoadingScreen>
      <p>Loading...</p>
    </StyledLoadingScreen>
  );
};

export default LoadingPage;

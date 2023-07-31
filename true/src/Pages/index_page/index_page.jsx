import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../../components/index";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: default;

  .NavContainer {
    height: 7%;
  }

  .EventContainer {
    height: 93%;
    padding-bottom: 1%;
  }
`;

const StyledEvent = styled.div`
  height: 14%;
  border-radius: 10px;
  background-color: #dedbd5;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem 0;
  margin: 1.5% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 90%;

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Index_page = () => {
  const navigate = useNavigate();

  const handleButtonClick = (eventPath) => {
    navigate(eventPath);
  };

  return (
    <StyledContainer>
      <div className="NavContainer">
        <Nav />
      </div>
      <div className="EventContainer">
        <StyledEvent onClick={() => handleButtonClick("/event1")}>
          Event 1
        </StyledEvent>
        <StyledEvent onClick={() => handleButtonClick("/event2")}>
          Event 2
        </StyledEvent>
        <StyledEvent onClick={() => handleButtonClick("/event3")}>
          Event 3
        </StyledEvent>
        <StyledEvent onClick={() => handleButtonClick("/event4")}>
          Event 4
        </StyledEvent>
        <StyledEvent onClick={() => handleButtonClick("/event5")}>
          Event 5
        </StyledEvent>
      </div>
    </StyledContainer>
  );
};

export default Index_page;

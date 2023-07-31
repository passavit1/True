import React from "react";
import styled from "styled-components";


import { Link } from "react-router-dom";

const StyledNav = styled.div`
  width: 100%;
  height: 7vh;
  // background-image: linear-gradient(
  //   110deg,
  //   rgb(221, 27, 36) 60%,
  //   rgb(236, 41, 123)
  // );
  
  display: flex;
  justify-content: center;
  align-items: center;

  .inside {
    font-family: "TrueThammasat", sans-serif;
    color: white;

    font-size: 3rem;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/True" style={{ textDecoration: "none" }}>
        <div className="inside">TRUE @ THAMMASAT</div>
      </Link>
    </StyledNav>
  );
};

export default Nav;

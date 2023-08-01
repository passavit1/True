import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const StyledNav = styled.div`
  width: 100%;
  height: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .inside {
    font-family: "TrueThammasat", sans-serif;
    color: white;

    font-size: 3rem;
  }

  .compare {
    font-family: "TrueThammasat", sans-serif;
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 2%;
    right: 5%;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/True" style={{ textDecoration: "none" }}>
        <div className="inside">TRUE @ THAMMASAT</div>
      </Link>
      <Link to="/compare" style={{ textDecoration: "none" }}>
        <div className="compare">compare</div>
      </Link>
    </StyledNav>
  );
};

export default Nav;

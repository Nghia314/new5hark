import React, { useState } from "react";
import PowerButton from "../components/Button";
import Loginform from "../components/Loginform";
import styled, { keyframes } from "styled-components";
import { PowerBtn } from "../components/AllSvgs";

const maincontainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const container = styled.div`
padding: 2rem`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}`;

const center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const Home = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <maincontainer>
      <darkdiv click={click} />
      <container>
        <PowerButton />
        <center click={click}>
          <PowerBtn
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click here</span>
        </center>
      </container>
      {click ? <Loginform click={click} /> : null}
    </maincontainer>
  );
};

export default Home;

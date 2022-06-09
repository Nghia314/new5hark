import React, { useState } from "react";
import Loginform from "../components/Loginform";
import styled, { keyframes } from "styled-components";
import { LoadingButton } from "../components/AllSvgs";
import Security from "../utils/security";
import { Link } from "react-router-dom";
// style for main container
const Maincontainer = styled.div`
  background: ${(props) => props.theme.body};
  background-image: url(https://api.lorem.space/image?w=1300%&h=1000);
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

// css container
const Container = styled.div`
padding: 2rem
justify-content: center
`;

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}`;
// css for center calling animation
const Center = styled.button`
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
    display: ${(props) => (props.click ? "none" : "center")};
    padding-top: 1rem
    justify-content: center;
  }
`;

const Home = () => {
  //  useState click
  const [click, setClick] = useState(false);
  // listen to Click to handle click
  const handleClick = () => setClick(!click);
  return (
    <>
      {Security.loggedIn() ? (
        <Maincontainer>
          <Container>
            <Center click={click}>
              <Link to={"/dashboard"}>
                <LoadingButton
                  // onClick={() => handleClick()}
                  width={click ? 120 : 200}
                  height={click ? 120 : 200}
                  fill="currentColor"
                />
              </Link>
              <span>Back To Dashboard</span>
            </Center>
          </Container>
          <div className="flex justify-center p-3 mt-6">
            {click ? <Loginform /> : null}
          </div>
        </Maincontainer>
      ) : (
        <Maincontainer>
          <Container>
            <Center click={click}>
              <LoadingButton
                onClick={() => handleClick()}
                width={click ? 120 : 200}
                height={click ? 120 : 200}
                fill="currentColor"
              />
              <span>Click to Start!</span>
            </Center>
          </Container>
          <div className="flex justify-center p-3 mt-6">
            {click ? <Loginform /> : null}
          </div>
        </Maincontainer>
      )}
    </>
  );
};

export default Home;

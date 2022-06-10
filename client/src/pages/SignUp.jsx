import React from "react";
import SignupForm from "../components/SignupForm";
import shark from "../assets/white-shark-logo.png";
import styled, { ThemeProvider } from "styled-components"
import {DarkTheme} from "../components/Themes";
const Maincontainer = styled.div`
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

const float = styled.div`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(15px) translateX(15px);
  }
  100% {
    transform: translateY(-10px);
  }
`;
const Sharklogo= styled.div`
position: absolute;
bottom: 5%;
right: 37%;
width: 27vw;
animation: ${float} 4s ease infinite;
img{
  width: 100%;
  height: auto;
}`;

function Signup() {
  return (
    <>
    <ThemeProvider theme={DarkTheme}>
      <Maincontainer>
    <Sharklogo>
                <img src={shark} alt="sharklogo"></img>
              </Sharklogo>
      <div className="flex justify-center p-3">
        <SignupForm className="grow max-w-[50rem]"/>
      </div>
      </Maincontainer>
      </ThemeProvider>
    </>
    
  );
}

export default Signup;

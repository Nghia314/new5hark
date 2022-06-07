import React, {useState} from "react";
import PowerButton from "../components/Button";
import Loginform from "../components/Loginform";
import styled, {keyframes} from "styled-components"
import {motion } from 'framer-motion';

const center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;
&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}
&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`


const Home = () => {

  return (
    <>
    <center>
      <PowerButton width={150} height={150} />
      <span>click here</span>

    </center>
    
    </>
    
  );
}

export default Home;

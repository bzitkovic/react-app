import styled from 'styled-components';
import HeroImg from '../../assets/images/event.jpg';

/* HERO Section */

export const HeroSection = styled.section `
  position: relative;
  height: 500px;
  background: url(${HeroImg}) rgba(0, 0, 0, 0.69);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-blend-mode: multiply;
`;

export const HeroSectionText = styled.div `
  text-align: center;
  position: absolute;
  z-index: 1;
  left: calc((100% - 400px) / 2);
  top: calc((100% - 250px) / 2);
  width: 400px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 15px;
  & p{
    margin-top: 15px;
    color: white;
    font-size: xx-large;
  }
  & h2{
    margin-top: 25px;
    font-size: 35px;
    color: orange;
  }

  & button{
    background-color: #c59613;
    width: 160px;
    height: 40px;
    border: none;
    border-radius: 7px;
    color: white;
    margin-top: 20px;
    text-align: center;
    cursor: pointer;
  }
`;

  
  

  

  
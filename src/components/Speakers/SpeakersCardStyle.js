/* Speakers */

import styled from 'styled-components';
import EventIcon from '../../assets/images/speakers-icon.png';

export const PageTitle = styled.h1 `
  text-align: center;
  padding: 25px;
`;

export const InfoBox = styled.div `
  background: #efefef;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  & Header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
  }
`;

export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 10px;
`;

export const Icon = styled.div `
  flex: 1 0 25px;
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;


export const TypeEvent = styled(Icon) `
  background: url(${EventIcon});
  background-repeat: no-repeat;
  background-size: contain
`;

export const Title = styled.h2 `
    font-size: 21px;
`;

export const SubHeader = styled.div `
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
`;

export const SubheaderBox = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubheaderFigure = styled.figure `
  width: 25px;
  height: 25px;
  margin-bottom: 10px;
`;

export const SubheaderImg = styled.img `
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const About = styled.p `
  padding: 30px 0;
  font-size: 17px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  text-align: center;
`;

export const Footer = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

export const BtnJoin = styled.a `
  font-weight: bold;
  transition: color 0.3s ease-out;
  cursor: pointer;

  &:hover{
    color: #58a510;
  }
`;


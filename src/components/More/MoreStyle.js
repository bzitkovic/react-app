import styled from 'styled-components';


export const SectionMore = styled.section `
  width: 1280px;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-top: 70px;
  padding-bottom: 70px;
`; 

export const SectionMoreDescription = styled.div `
  width: 750px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 70px;

  & p{
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 30px;
  }
`;

export const SectionMoreBottom = styled.button `
  background-color: #c59613;
  width: 160px;
  height: 40px;
  border: none;
  border-radius: 7px;
  color: white;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
`;

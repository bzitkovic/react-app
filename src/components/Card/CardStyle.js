/* Section MORE*/
import styled from 'styled-components';

export const SectionMoreCards = styled.div `
  width: 1280px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
`;

export const SectionMoreCard = styled.div `
  padding: 0;
  width: 300px;
  height: 320px;
  margin-right: 15px;
  margin-bottom: 40px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.12), 0 3px 3px rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  text-align: center;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(2, 0, 0, 0.274);
  }

  & img {
    width: 280px;
    height: 220px;
    padding-top: 20px;
    max-width: 240px;
    max-height: 280px;
  }
`;
  
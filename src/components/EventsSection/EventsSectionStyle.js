import styled from 'styled-components';

export const SectionEvents = styled.section `
  display: block;
    max-width: 300px;
    margin: 100px auto;
    padding: 100px;

    @media only screen and (min-width: 765px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      max-width: 1024px;
    }

    @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;    
    }

    @media only screen and (min-width: 1024px) {
      gap: 60px;
      padding: 0;
    }
    
`;


 
  
  
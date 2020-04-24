import styled from 'styled-components';


export const HeaderMain = styled.header `
    background-color: white;
    width: 100%;
    height: 80px;
`;

export const Inner = styled.div `
    display: flex;
        justify-content: space-around;
        max-width: 1280px;
        margin: auto;
        align-items: center;
        font-size: large;
        & img{
            height: 700x;
            width: 120px;
        }
        & a {
            text-decoration: none;
            &:hover{
                color: rgb(255, 0, 0);
            }
        }
        & li{
            list-style-type: none;
            margin: 0;
            padding-left: 10px;
            padding-right: 10px;
            display: inline-block
        }
`;
   

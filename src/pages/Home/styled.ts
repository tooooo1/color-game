import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9f9f9;
  }
`;

export const Title = styled.div`
  font-size: 8vh;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'RixYeoljeongdo_Regular';
  word-break: keep-all;
`;

export const Button = styled.button<{ bgcolor: string }>`
  width: 100%;
  padding: 1rem 0;
  background-color: ${(props) => props.bgcolor};
  border-radius: 7px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  transition: 0.3s all ease;
  font-family: 'Pretendard-Bold';
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  &#list {
    margin: 10px 0;
  }
`;

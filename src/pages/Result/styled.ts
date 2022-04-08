import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f2f2f2;
  }
  #root>div {
      width: 80%;
      @media only screen and (min-width: 768px) {
        width: 70%;
    }
  }
`;

export const Round = styled.div`
  padding: 1vh;
  font-weight: initial;
  font-size: 3vh;
  font-family: 'Pretendard-SemiBold';
  text-align: center;
`;

export const Color = styled.span`
  color: #1bb749;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 9vw;
  margin-top: 1rem;
  margin-bottom: 1.2rem;
  text-align: center;
  font-family: 'RixYeoljeongdo_Regular';
  word-break: keep-all;
  @media only screen and (min-width: 768px) {
    font-size: 60px;
  }
`;

export const Text = styled.div`
  font-size: 5vw;
  margin-bottom: 2vh;
  text-align: center;
  font-family: 'Pretendard-SemiBold';
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const Power = styled.div`
  font-size: 5vw;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2vh;
  text-align: center;
  font-family: 'Pretendard-SemiBold';
  padding: 12px;
  border-radius: 12px;
  background: #f1f1f1;
  @media only screen and (min-width: 768px) {
    font-size: 25px;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  padding: 10vw 0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    padding: 5vw 0;
  }
`;

export const ResultWrapper = styled.div`
  padding: 1vh 14vw;

  @media only screen and (min-width: 768px) {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
  @media (min-width: 991px) {
    width: 70%;
    text-align: center;
    margin: 0 auto;
  }
`;

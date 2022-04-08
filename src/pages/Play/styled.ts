import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      @media only screen and (min-width: 768px) {
        width: 70%;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 8vh 15vw 5vh;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
`;

export const BoardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
`;

export const Score = styled.div<{ active: boolean }>`
  font-size: 6vw;
  text-align: center;
  font-family: 'RixYeoljeongdo_Regular';
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
  animation: ${(props) => props.active && `shake 0.3s infinite`};

  &#name {
    margin-top: 2vh;
    font-size: 4vw;
    color: #444444;
  }
`;

export const Round = styled.div`
  font-weight: initial;
  font-size: 6vw;
  margin-bottom: 1rem;
  font-family: 'Pretendard-Black';
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const RoundWrapper = styled.div``;

export const Stage = styled.span<{ active: boolean }>`
  display: inline-block;
  animation: ${(props) => props.active && `bounce 0.3s infinite ease`};
  font-weight: bold;
`;

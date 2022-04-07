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
  font-size: 3vw;
  text-align: center;
  font-family: 'RixYeoljeongdo_Regular';
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
  animation: ${(props) => props.active && `shake 0.3s infinite`};
  @keyframes shake {
    0% {
      transform: translate(0px, 120px) rotate(0deg) scale(6);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg) scale(5);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg) scale(3);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg) scale(1.4);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

export const TimeUp = styled.div<{ active: boolean }>`
  display: block;
  margin-bottom: 4px;
  text-align: center;
  background: #ffffff;
  animation: ${(props) => props.active && `bounce 0.3s infinite ease`};
  font-weight: bold;
  @keyframes bounce {
    0% {
      transform: scale(1.6);
    }
    40% {
      transform: scale(0.4);
    }
    60% {
      transform: scale(1.3);
    }
    80% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Round = styled.div`
  font-weight: initial;
  font-size: 6vw;
  margin-bottom: 1rem;
  font-family: 'Pretendard-SemiBold';
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
  @keyframes bounce {
    0% {
      transform: scale(4);
    }
    40% {
      transform: scale(0.4);
    }
    60% {
      transform: scale(1.3);
    }
    80% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

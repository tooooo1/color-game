import { useState } from 'react';
import useRound, { RoundHookProps } from '../../hooks/useRound';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import usePoint, { PointHookProps } from '../../hooks/usePoint';
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled';

const Play = () => {
  const { round, active, nextRound, resetRound }: RoundHookProps = useRound();
  const {
    time,
    animationActive: timeActive,
    startTimer,
    stopTimer,
    resetTimer,
    minusTime,
  }: TimerHookProps = useTimer();

  const { point, resetPoint, scorePoint }: PointHookProps = usePoint();

  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.RoundWrapper>
          <Styled.Round>
            ROUND <Styled.Stage active={active}>{round}</Styled.Stage>
          </Styled.Round>
          <Styled.TimeUp active={timeActive}>{time}</Styled.TimeUp>
        </Styled.RoundWrapper>
        <Styled.Score active={active}>{point.toLocaleString()}</Styled.Score>
      </Styled.Wrapper>
    </Positioner>
  );
};

export default Play;

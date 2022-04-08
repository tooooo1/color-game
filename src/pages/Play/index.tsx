import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Board, Timer } from '../../components';
import useRound, { RoundHookProps } from '../../hooks/useRound';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import usePoint, { PointHookProps } from '../../hooks/usePoint';
import useFirestore, { FirestoreHookProps } from '../../hooks/useFirestore';
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled';
import { userNameState } from '../../recoil/auth';

const Play = () => {
  const userName = useRecoilValue<string>(userNameState);
  const { addRecordInStore }: FirestoreHookProps = useFirestore();
  const { round, active, nextRound, resetRound }: RoundHookProps = useRound();
  const {
    time,
    active: timeActive,
    startTimer,
    stopTimer,
    resetTimer,
    minusTime,
  }: TimerHookProps = useTimer();

  const { point, resetPoint, scorePoint }: PointHookProps = usePoint();

  const handleAnswerCardClick = useCallback((): void => {
    nextRound();
    resetTimer();
    scorePoint(round, time);
  }, [nextRound, resetTimer, scorePoint, round, time]);

  const handleWrongCardClick = useCallback((): void => {
    minusTime();
  }, [minusTime]);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [startTimer, stopTimer]);

  useEffect(() => {
    if (time < 0) {
      stopTimer();
      resetTimer();
      addRecordInStore(round, point);
    }
  }, [addRecordInStore, point, resetTimer, round, stopTimer, time]);

  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.RoundWrapper>
          <Styled.Round>
            ROUND <Styled.Stage active={active}>{round}</Styled.Stage>
          </Styled.Round>
          <Timer active={timeActive} time={time} />
        </Styled.RoundWrapper>
        <Styled.BoardWrapper>
          <Board
            handleAnswerCardClick={handleAnswerCardClick}
            handleWrongCardClick={handleWrongCardClick}
            round={round}
          />
        </Styled.BoardWrapper>
        <Styled.Score active={active}>{point.toLocaleString()}</Styled.Score>
      </Styled.Wrapper>
    </Positioner>
  );
};

export default Play;

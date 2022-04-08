import { useCallback, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Board, Timer } from '../../components';
import useRound, { RoundHookProps } from '../../hooks/useRound';
import useTimer, { TimerHookProps } from '../../hooks/useTimer';
import usePoint, { PointHookProps } from '../../hooks/usePoint';
import useFirestore, { FirestoreHookProps } from '../../hooks/useFirestore';
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled';
import { userNameState, roundState, pointState } from '../../recoil/recoil';
import { useNavigate } from 'react-router-dom';

const Play = () => {
  let navigate = useNavigate();
  const userName = useRecoilValue<string>(userNameState);
  const setRound = useSetRecoilState(roundState);
  const setPoint = useSetRecoilState(pointState);
  const { addRecordInStore }: FirestoreHookProps = useFirestore();
  const { round, active, nextRound }: RoundHookProps = useRound();
  const {
    time,
    active: timeActive,
    startTimer,
    stopTimer,
    resetTimer,
    minusTime,
  }: TimerHookProps = useTimer();

  const { point, scorePoint }: PointHookProps = usePoint();

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
      setPoint(point);
      setRound(round);
      addRecordInStore(round, point);
      scorePoint(round, time);
      navigate('/result');
    }
  });

  return (
    <Positioner>
      <Styled.GlobalStyle />
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
      <Styled.Score active={active} id="name">
        {userName}
      </Styled.Score>
    </Positioner>
  );
};

export default Play;

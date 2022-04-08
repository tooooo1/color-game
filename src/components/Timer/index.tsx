import * as Styled from './styled';

export interface TimerProps {
  time: number;
  active: boolean;
}

const Timer = ({ time, active }: TimerProps) => {
  return (
    <Styled.Container time={time} active={active}>
      <Styled.Background>
        <Styled.Time>{time}</Styled.Time>
      </Styled.Background>
      <Styled.Progress time={time} />
    </Styled.Container>
  );
};

export default Timer;

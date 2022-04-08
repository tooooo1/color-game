import * as Styled from './styled';
import { Button } from '../Home/styled';
import { Positioner } from '../../components/Wrapper/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userNameState, roundState, pointState } from '../../recoil/recoil';

const Result = () => {
  const [round, setRound] = useRecoilState(roundState);
  const userName = useRecoilValue(userNameState);
  const [point, setPoint] = useRecoilState(pointState);
  const comma: string = point.toLocaleString();

  const reset = () => {
    window.location.replace('/');
    setTimeout(() => {
      window.location.replace('/');
      setRound(1);
      setPoint(0);
    }, 1000);
  };

  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.Title>다른 색깔 찾기</Styled.Title>
        <Styled.Round>
          ROUND <Styled.Color>{round}</Styled.Color>
        </Styled.Round>
        <Styled.Text> 닉네임 : {userName} </Styled.Text>
        <Styled.ResultWrapper>
          <Styled.Power>
            <div>
              <div>
                <img src="img/dart.png" alt="dart" width={50} />
              </div>
              <div>POINT</div>
            </div>
            <div> {comma} </div>
          </Styled.Power>
          <Button
            bgcolor="#ff2e35"
            onClick={() => {
              reset();
            }}
          >
            다시하기
          </Button>
        </Styled.ResultWrapper>
      </Styled.Wrapper>
    </Positioner>
  );
};

export default Result;

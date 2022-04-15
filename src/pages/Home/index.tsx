/*
[시작 페이지]

게임 타이틀 텍스트 하나
게임 시작, 랭킹보기 버튼 2개가 있습니다.

버튼을 클릭하면 해당 페이지로 navigate합니다.
*/

import { Positioner } from '../../components/Wrapper/styled';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Title>다른 색깔 찾기</Styled.Title>
      <Styled.Button id="list" bgcolor="#ff2e35" onClick={() => navigate('/ready')}>
        게임시작
      </Styled.Button>
      <Styled.Button bgcolor="#01a8ff" onClick={() => navigate('/rank')}>
        랭킹보기
      </Styled.Button>
    </Positioner>
  );
};

export default Home;

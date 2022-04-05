import { Positioner } from '../../components/Wrapper/styled';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Title>다른 색깔 찾기</Styled.Title>
      <Styled.Button id="list" bgcolor="#ff2e35" onClick={() => navigate('/play')}>
        게임시작
      </Styled.Button>
      <Styled.Button bgcolor="#01a8ff" onClick={() => navigate('/rank')}>
        랭킹보기
      </Styled.Button>
    </Positioner>
  );
};

export default Home;

import * as Styled from './styled';
import { Button } from '../Home/styled';
import { Positioner } from '../../components/Wrapper/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userNameState, roundState, pointState } from '../../recoil/recoil';
import { useNavigate } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Result = () => {
  let navigate = useNavigate();
  const [round, setRound] = useRecoilState(roundState);
  const userName = useRecoilValue(userNameState);
  const [point, setPoint] = useRecoilState(pointState);
  const comma: string = point.toLocaleString();

  const currentUrl = window.location.href;

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
            id="list"
            bgcolor="#ff2e35"
            onClick={() => {
              reset();
            }}
          >
            다시하기
          </Button>
          <Button bgcolor="#01a8ff" onClick={() => navigate('/rank')}>
            랭킹보기
          </Button>
          <Styled.ShareText>공유하기</Styled.ShareText>
          <Styled.GridContainer>
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
            </TwitterShareButton>
            <Styled.Color>
              <CopyToClipboard text={currentUrl}>
                <Styled.URLShareButton onClick={() => alert('복사되었습니다.')}>
                  URL
                </Styled.URLShareButton>
              </CopyToClipboard>
            </Styled.Color>
          </Styled.GridContainer>
        </Styled.ResultWrapper>
      </Styled.Wrapper>
    </Positioner>
  );
};

export default Result;

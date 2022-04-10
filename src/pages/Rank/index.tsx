import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentData } from 'firebase/firestore';
import useFirestore, { UsersRecordProps } from '../../hooks/useFirestore';
import * as Styled from './styled';

const Rank = () => {
  let navigate = useNavigate();
  const { getRecordsInStore } = useFirestore();
  const [userList, setUserList] = useState<UsersRecordProps[] | DocumentData[]>([]);
  const [flag, setFlag] = useState(false);

  const Free = () => {
    return (
      <Styled.Info>
        <Styled.InfoTitle>안녕하세요. 개발자 퉁이리입니다.</Styled.InfoTitle>
        <Styled.InfoText>오늘 준비한 데이터(50,000 view)가 전부 사용되었어요.</Styled.InfoText>
        <Styled.InfoText>많은 사랑 감사합니다.</Styled.InfoText>
        <Styled.InfoText id="id">오후 5시에 다시 와주세요!</Styled.InfoText>
        <Styled.InfoText id="id">게임하신 데이터는 잘보관하였으니 걱정마세요!</Styled.InfoText>
      </Styled.Info>
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setUserList(await getRecordsInStore());
      } catch (e) {
        setFlag(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HomeButton
          width={80}
          src="img/main-page.png"
          alt="main"
          onClick={() => navigate('/')}
        />
        <Styled.Title>순위</Styled.Title>
      </Styled.Header>

      <Styled.Table>
        <Styled.THead>
          <Styled.THeadRow>
            <Styled.Rank>RANK</Styled.Rank>
            <Styled.UserName>USER</Styled.UserName>
            <Styled.Stage>ROUND</Styled.Stage>
            <Styled.Point>POINT</Styled.Point>
          </Styled.THeadRow>
        </Styled.THead>

        {flag ? (
          <></>
        ) : (
          <Styled.TBody>
            {userList.map((data, index) => {
              if (index + 1 === 1) {
                return (
                  <Styled.TBodyRow key={data.time}>
                    <Styled.Rank>🥇</Styled.Rank>
                    <Styled.RankerUserName>{data.userName}</Styled.RankerUserName>
                    <Styled.Stage>{data.round}</Styled.Stage>
                    <Styled.RankerPoint>{data.point.toLocaleString()}</Styled.RankerPoint>
                  </Styled.TBodyRow>
                );
              }
              if (index + 1 === 2) {
                return (
                  <Styled.TBodyRow key={data.time}>
                    <Styled.Rank>🥈</Styled.Rank>
                    <Styled.RankerUserName>{data.userName}</Styled.RankerUserName>
                    <Styled.Stage>{data.round}</Styled.Stage>
                    <Styled.RankerPoint>{data.point.toLocaleString()}</Styled.RankerPoint>
                  </Styled.TBodyRow>
                );
              }
              if (index + 1 === 3) {
                return (
                  <Styled.TBodyRow key={data.time}>
                    <Styled.Rank>🥉</Styled.Rank>
                    <Styled.RankerUserName>{data.userName}</Styled.RankerUserName>
                    <Styled.Stage>{data.round}</Styled.Stage>
                    <Styled.RankerPoint>{data.point.toLocaleString()}</Styled.RankerPoint>
                  </Styled.TBodyRow>
                );
              }
              return (
                <Styled.TBodyRow key={data.time}>
                  <Styled.Rank>{index + 1}등</Styled.Rank>
                  <Styled.UserName>{data.userName}</Styled.UserName>
                  <Styled.Stage>{data.round}</Styled.Stage>
                  <Styled.Point>{data.point.toLocaleString()}</Styled.Point>
                </Styled.TBodyRow>
              );
            })}
          </Styled.TBody>
        )}
      </Styled.Table>
      {flag ? <Free /> : <></>}
    </Styled.Container>
  );
};

export default Rank;

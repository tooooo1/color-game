import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentData } from 'firebase/firestore';
import useFirestore, { UsersRecordProps } from '../../hooks/useFirestore';
import * as Styled from './styled';

const Rank = () => {
  let navigate = useNavigate();
  const { getRecordsInStore } = useFirestore();
  const [userList, setUserList] = useState<UsersRecordProps[] | DocumentData[]>([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (flag) {
          setUserList(await getRecordsInStore());
          console.log('1');
          setFlag(false);
        }
      } catch (e) {}
    })();
  });

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
      </Styled.Table>
    </Styled.Container>
  );
};

export default Rank;

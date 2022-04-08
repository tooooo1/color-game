import React, { useState } from 'react';
import { Positioner } from '../../components/Wrapper/styled';
import { Button } from '../Home/styled';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userNameState } from '../../recoil/recoil';
import store from '../../utils/store';

const Ready = () => {
  const imgUrl = 'https://img.icons8.com/color/48/000000/box-important--v1.png';
  const [value, setValue] = useState('');
  const [login, setLogin] = useState(false);
  const setUserName = useSetRecoilState<string>(userNameState);
  let navigate = useNavigate();

  const loginClick = () => {
    if (value.trim().length === 0) {
      alert('닉네임을 입력해주세요.');
      setValue('');
      return;
    }

    if (value.trim().length > 8) {
      alert('닉네임은 8자 이하로 작성해주세요');
      setValue('');
      return;
    }

    setLogin(!login);
    setUserName(value);
    store.setSessionStorage('userName', value);
    navigate('/play');
  };

  return (
    <Positioner>
      <Styled.GlobalStyle />
      <Styled.Wrapper>
        <Styled.Img>
          <img src={imgUrl} alt="!" />
        </Styled.Img>
        <Styled.Title>게임 설명</Styled.Title>
        <Styled.Text>1. 주어진 시간 안에 색이 다른 사각형을 찾는다.</Styled.Text>
        <Styled.Text>2. 오답 클릭 시 -3초</Styled.Text>
        <Styled.Text id="last">
          3. <Styled.Color>ROUND</Styled.Color>가 올라갈수록 색상 차이 감소
        </Styled.Text>
        <Styled.Ex id="last">점수는 ROUND가 높아질수록 더 많이 상승합니다.</Styled.Ex>
        <Styled.InputWrapper>
          <Styled.ReadyInput
            onChange={(e) => setValue(e.target.value)}
            placeholder="닉네임을 입력하세요"
          />
          <Button bgcolor="#01a8ff" onClick={loginClick}>
            시작
          </Button>
        </Styled.InputWrapper>
      </Styled.Wrapper>
    </Positioner>
  );
};

export default Ready;

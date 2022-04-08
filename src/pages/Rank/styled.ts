import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 7vh;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'RixYeoljeongdo_Regular';
  word-break: keep-all;
`;

export const HomeButton = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px;

  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
`;

export const THead = styled.thead`
  background-color: #01a8ff;
  color: white;
  font-family: 'RixYeoljeongdo_Regular';
`;

export const THeadRow = styled.tr``;

export const TBody = styled.tbody`
  font-family: 'Pretendard-SemiBold';
`;

export const TBodyRow = styled.tr`
  border: 1px solid #eeeeee;
  transition: 0.3s background-color ease;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  :hover {
    background-color: #f8f8f8;
  }
`;

export const Rank = styled.td`
  width: 15%;
  padding: 1.5rem 0;
`;

export const UserName = styled.td`
  width: 30%;
  padding: 1.5rem 0;
  border-left: 1px solid #eeeeee;
`;

export const Stage = styled.td`
  padding: 1.5rem 0;
  border-left: 1px solid #eeeeee;
`;

export const Point = styled.td`
  width: 40%;
  padding: 1.5rem 0;
  border-left: 1px solid #eeeeee;
`;

export const RankerUserName = styled.td`
  width: 30%;
  border-left: 1px solid #eeeeee;
  font-size: 1.5rem;
`;

export const RankerPoint = styled.td`
  padding: 1.5rem 0;
  border-left: 1px solid #eeeeee;
`;

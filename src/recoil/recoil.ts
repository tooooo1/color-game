import { atom } from 'recoil';

const userNameState = atom<string>({
  key: 'userNameState',
  default: '',
});

const roundState = atom<number>({
  key: 'roundState',
  default: 1,
});

const pointState = atom<number>({
  key: 'pointState',
  default: 0,
});

export { userNameState, roundState, pointState };

import { atom } from 'jotai';

const defaultUserInfo = { nickName: '' };

export const userAtom = atom(defaultUserInfo);

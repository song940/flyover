import { call } from './core';

export const getUserInfo = () => {
  return call('getUserInfo');
};

export const getUserId = () => {
  return getUserInfo().then(user => user.userId);
};

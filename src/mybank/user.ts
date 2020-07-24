import { pcall } from '../nebula/core';

export const getAlipayUserId = () => {
  return pcall('getAlipayUserId').then(user => user.alipayUserId);
};

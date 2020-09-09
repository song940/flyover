import { pcall } from './core';

/**
 * setStorage
 * @docs https://opendocs.alipay.com/mini/api/eocm6v
 * @param {*} key
 * @param {*} data
 */
export const setStorage = (key: string, data: any) => {
  return pcall('setStorage', {
    key, data
  });
};

/**
 * getStorage
 * @docs https://opendocs.alipay.com/mini/api/azfobl
 * @param {*} key
 */
export const getStorage = (key: string) => {
  return pcall('getStorage', { key }).then(res => {
    if (res.success) return res.data;
    throw new Error();
  });
};

export const removeStorage = (key: string) => {
  return pcall('removeStorage', { key });
};

/**
 * clearStorage
 * @docs https://opendocs.alipay.com/mini/api/storage
 */
export const clearStorage = () => {
  return pcall('clearStorage');
};

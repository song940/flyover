import { call } from './core';

/**
 * setStorage
 * @docs https://opendocs.alipay.com/mini/api/eocm6v
 * @param {*} key
 * @param {*} data
 */
export const setStorage = (key, data) => {
  return call('setStorage', {
    key, data
  });
};

/**
 * getStorage
 * @docs https://opendocs.alipay.com/mini/api/azfobl
 * @param {*} key
 */
export const getStorage = key => {
  return call('getStorage', { key }).then(res => {
    if (res.success) return res.data;
    throw new Error();
  });
};

export const removeStorage = key => {
  return call('removeStorage', { key });
};

/**
 * clearStorage
 * @docs https://opendocs.alipay.com/mini/api/storage
 */
export const clearStorage = () => {
  return call('clearStorage');
};

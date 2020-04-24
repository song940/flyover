import { install } from './install';

install();


export const call = (api, params?, callback?) => {
  const [className, methodName] = api.split('.');
  const success = o => callback && callback(null, o);
  const failure = e => callback && callback(e);
  // @ts-ignore
  window.lib.windvane.call(className, methodName, params, success, failure);
};

export const pcall = (api: string, params?) => new Promise((resolve, reject) => {
  return call(api, params, (err, res) => {
    if (err) return reject(err);
    resolve(res);
  });
});

export const addEventListener = (type: string, fn) => {
  document.addEventListener(type, fn, false);
  return () => document.removeEventListener(type, fn);
};

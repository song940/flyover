
declare var dd: any;

const get = (obj: any, api: string) =>
  api.split('.').reduce((o, k) => o[k], obj);

const can = api => {
  const fn = get(dd, api);
  if(typeof fn !== 'function')
    throw new TypeError();
  return fn;
};

export const call = (method: string, params: any, cb: Function) => {
  const fn = can(method);
  params.onSuccess = res => cb(null, res);
  params.onFail = err => cb(err);
  return fn(params);
};

export const pcall = (api, params): Promise<any> => {
  return new Promise((resolve, reject) => {
    call(api, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

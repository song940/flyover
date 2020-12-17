
export const call = (api, params?, callback?) => {
  const [className, methodName] = api.split('.');
  const success = o => callback && callback(null, o);
  const failure = e => callback && callback(e);
  // @ts-ignore
  const WindVane = window.WindVane || (window.lib && window.lib.windvane);
  return WindVane.call(className, methodName, params, success, failure);
};

export const pcall = (api: string, params?): Promise<any> => new Promise((resolve, reject) => {
  return call(api, params, (err, res) => {
    if (err) return reject(err);
    resolve(res);
  });
});

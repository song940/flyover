
declare const my: any;

export const call = (method: string, ...params: any): Promise<any> => new Promise((resolve, reject) => {
  params.push((res: any) => {
    console.log(`my.call(${method})`, params, res);
    if (res.error) return reject(res);
    resolve(res);
  });
  return my.call(method, ...params);
});

export const pcall = (method: string, params?: any): Promise<any> => new Promise((resolve, reject) => {
  params.fail = reject;
  params.success = resolve;
  if (my.canIUse(method)) {
    my[method](params);
  } else {
    reject(new Error(`can not call my.${method}`));
  }
});

export const addEventListener = (eventName: string, fn: any) => {
  return my.on(eventName, fn);
};

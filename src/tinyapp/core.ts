
declare const my: any;

export const call = (method: string, params) => new Promise((resolve, reject) => {
  my.call(method, params, res => {
    console.log(`my.call(${method})`, params, res);
    if(res.error) return reject(res);
    resolve(res);
  });
});

export const pcall = (method: string, params?): Promise<any> => new Promise((resolve, reject) => {
  params.fail = reject;
  params.success = resolve;
  if (my.canIUse(method)) {
    my[method](params);
  } else {
    reject(new Error(`can not call my.${method}`));
  }
});

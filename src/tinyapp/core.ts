
declare const my: any;

export const call = (method: string, params?): Promise<any> => new Promise((resolve, reject) => {
  params.fail = reject;
  params.success = resolve;
  if (my.canIUse(method)) {
    my[method](params);
  } else {
    reject(new Error(`can not call my.${method}`));
  }
});

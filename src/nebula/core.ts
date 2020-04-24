declare var AlipayJSBridge: any;

export function ready(callback) {
  // @ts-ignore
  if (window.AlipayJSBridge) {
    callback && callback();
  } else {
    document.addEventListener('AlipayJSBridgeReady', callback, false);
  }
}

export const call = (method: string, ...params: any): void => {
  ready(() => AlipayJSBridge.call(method, ...params));
};

export const pcall = (method: string, ...params: any): Promise<any> => new Promise((resolve, reject) => {
  params.push(res => {
    console.log(`AlipayJSBridge.call(${method})`, res);
    resolve(res);
  });
  return call(method, ...params);
});

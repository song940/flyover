
// export const NebulaBridgeUrl = '//a.alipayobjects.com/g/h5-lib/alipayjsapi/3.0.5/alipayjsapi.inc.min.js';
// export const WindVaneBridgeUrl = '//g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js';
// export const DingTalkBridgeUrl = '//g.alicdn.com/dingding/dingtalk-jsapi/2.4.3/dingtalk.open.js';
// export const AmapBridgeUrl = '//as.alipayobjects.com/g/insuranceprod/amap-util/1.0.0/amap.js';
// export const QianniuBridgeUrl = '//g.alicdn.com/x-bridge/qap-sdk/2.4.2/qn.min.js';

export interface EventHandler {
  (event: any): void
}

export const addEventListener = (type: string, fn: EventHandler) => {
  document.addEventListener(type, fn, false);
  return () => document.removeEventListener(type, fn);
};

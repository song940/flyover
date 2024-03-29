export * from './detect';
export * from './common';

import * as tmall from './tmall';
import * as detect from './detect';
import * as alipay from './alipay';
import * as mybank from './mybank';
import * as koubei from './koubei';
import * as taobao from './taobao';
import * as qianniu from './qianniu';
import * as tinyapp from './tinyapp';
import { addEventListener, EventHandler } from './common';

export const call = (method, ...params) => {
  if (detect.isTmall) return tmall[method](...params);
  if (detect.isTaobao) return taobao[method](...params);
  if (detect.isAlipay) return alipay[method](...params);
  if (detect.isMyBank) return mybank[method](...params);
  if (detect.isKoubei) return koubei[method](...params);
  if (detect.isQianNiu) return qianniu[method](...params);
  // if (detect.isTinyapp) return tinyapp.call(method, params);
  return Promise.reject();
};

export const toast = (content, options?) => {
  return call('toast', content, options);
};

export const alert = (content, options?) => {
  return call('alert', content, options);
};

export const confirm = (content, options?) => {
  return call('confirm', content, options);
};

export const showLoading = () => {
  return call('showLoading');
};

export const hideLoading = () => {
  return call('hideLoading');
};

export const pushWindow = (url: string, options?) => {
  return call('pushWindow', url, options);
};

export const popWindow = () => {
  return call('popWindow');
};

export const closeWebview = () => {
  return call('closeWebview');
};

export const restorePullToRefresh = () => {
  return call('restorePullToRefresh');
};

type TransparentTitleOption = {
  mode?: "auto" | "always" | "custom" | "none"
};

type TitleAndStatusbarHeightType = {
  density?: number,
  titleBarHeight: number,
  statusBarHeight: number,
};

export const setTitle = title => {
  return call('setTitle', title);
};

export const setTitleColor = (color: number | string, reset?: boolean) => {
  return call('setTitleColor', color, reset);
};

export const setTransparentTitle = (options?: TransparentTitleOption) => {
  return call('setTransparentTitle', options);
};

export const getTitleAndStatusbarHeight = (): Promise<TitleAndStatusbarHeightType> => {
  return call('getTitleAndStatusbarHeight');
};

type OptionMenuItem = {
  icontype?: "scan" | "user",
  redDot?: string,
};

type OptionMenuType = {
  menus: Array<OptionMenuItem>,
  override?: boolean,
};

export const optionMenu = (options: OptionMenuItem | OptionMenuType, fn?: EventHandler) => {
  return call('optionMenu', options, fn);
};

export const onReady = (fn: EventHandler) => {
  return call('ready', fn);
};

export const onResume = (fn: EventHandler) => {
  return addEventListener('resume', fn);
};

export const onPause = (fn: EventHandler) => {
  return addEventListener('pause', fn);
};

export const onBack = (fn: EventHandler) => {
  return addEventListener('back', fn);
};

/**
 * onPullToRefresh
 * @param fn
 * @docs http://jsapi.alipay.net/jsapi/events/fire-pull-to-refresh.html
 */
export const onPullToRefresh = (fn: EventHandler) => {
  return addEventListener('firePullToRefresh', fn);
};

type CdpOption = {
  extInfo: any,
  immediately: boolean,
  multiCallback: boolean,
};

export const getCdpSpaceInfos = (spaceCodes: string | string[], options?: CdpOption) => {
  return call('getCdpSpaceInfos', spaceCodes, options);
};

export const getCdpSpaceInfo = (spaceCode: string, options?: CdpOption) => {
  return call('getCdpSpaceInfo', spaceCode, options);
};

export const cdpFeedback = (spaceCode: string, objectId: string, behavior = 'SHOW') => {
  return call('cdpFeedback', spaceCode, objectId, behavior);
};

export {
  detect,
  tmall,
  alipay,
  mybank,
  koubei,
  taobao,
  qianniu,
};

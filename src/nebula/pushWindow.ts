import { pcall } from './core';

type PushWindowParam = {
  /**
   * 默认标题, 在页面第一次加载之前显示在标题栏上
   */
  defaultTitle?: string,
  /**
   * 是否读取网页标题显示在标题栏上
   */
  readTitle?: boolean,
  /**
   * 是否在页面加载前显示全局菊花
   */
  showLoading?: boolean,
  /**
   * 是否支持下拉刷新
   * @note 只有集团域和本地文件允许设置为true
   */
  pullRefresh?: boolean,
  /**
   * 页面是否支持下拉（显示出黑色背景或者域名）
   * @note 只有.alipay.com/.alipay.net/本地文件允许设置为false;
   * @deprecated 9.9.5废弃， 使用’allowsBounceVertical’替代
   */
  canPullDown?: boolean,
  // TODO:
  [key: string]: any,
};

/**
 * pushWindow
 * https://myjsapi.alipay.com/jsapi/context/push-window.html
 * @param url
 * @param param
 */
export const pushWindow = (url: string, param?: PushWindowParam) => {
  return pcall('pushWindow', { url, param });
};

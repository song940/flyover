import { call, pcall } from './core';

type NotifyOption = {
  keep?: boolean
};

/**
 * addNotifyListener
 * @docs http://jsapi.alipay.net/jsapi/events/add-notify-listener.html
 * @param name s
 * @param options
 * @param fn
 */
export const addNotifyListener = (name: string, options: NotifyOption, fn?) => {
  call('addNotifyListener', { name, ...options }, fn);
  return () => removeNotifyListener(name);
};

/**
 * removeNotifyListener
 * @docs http://jsapi.alipay.net/jsapi/events/remove-notify-listener.html
 * @param name
 */
export const removeNotifyListener = (name: string) => {
  return pcall('removeNotifyListener', { name });
};

/**
 * postNotification
 * @docs http://jsapi.alipay.net/jsapi/events/post-notification.html
 * @param name
 * @param data
 */
export const postNotification = (name: string, data: any) => {
  return pcall('postNotification', { name, data });
};

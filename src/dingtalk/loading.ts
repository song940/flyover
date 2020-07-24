import { pcall } from "../windvane/core";

/**
 * https://ding-doc.dingtalk.com/doc#/dev/oo98ye/e089az
 */
export const showLoading = () => {
  return pcall(`device.notification.showPreloader`)
};

/**
 * https://ding-doc.dingtalk.com/doc#/dev/oo98ye/y987xs
 */
export const hideLoading = () => {
  return pcall(`device.notification.hidePreloader`)
};

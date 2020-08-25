import { call } from "./core";

type ToastOption = {
  duration?: number
};

/**
 * WVUIToast
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIToast-toast
 * @param message
 * @param options
 */
export const toast = (message, options: ToastOption = {}) => {
  const { duration } = options;
  return call('WVUIToast.toast', {
    message,
    duration,
  });
};

import { call } from "./core";

type ToastOption = {
  duration?: number
};

export const toast = (message, options?: ToastOption) => {
  const { duration } = options;
  return call('WVUIToast.toast', {
    message,
    duration,
  });
};

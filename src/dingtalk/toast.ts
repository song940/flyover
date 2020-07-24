import { pcall } from "../windvane/core";

export type ToastOption = {
  icon?: string,
  delay?: number,
  type: 'none' | 'success' | 'fail' | 'exception',
  duration: number,
  xOffset: number,
  yOffset: number,
};

export const toast = (content: string, options?: ToastOption) => {
  const { icon, duration, delay } = options;
  return pcall(`device.notification.toast`, {
    icon,
    text: content,
    duration,
    delay,
  });
};

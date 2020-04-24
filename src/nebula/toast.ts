import { pcall } from './core'

type ToastOption = {
  type: 'none' | 'success' | 'fail' | 'exception',
  duration: number,
  xOffset: number,
  yOffset: number,
};

export const toast = (content: string, options?: ToastOption) => {
  return pcall('toast', { content, ...options });
};

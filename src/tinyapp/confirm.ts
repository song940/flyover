import { pcall } from './core';

type ConfirmOption = {
  title?: string,
  content?: string,
  confirmButtonText?: string,
  cancelButtonText?: string,
};

/**
 * confirm
 */
export const confirm = (content: string, options: ConfirmOption = {}) => {
  return pcall('confirm', { content, ...options }).then(res => res.confirm);
};

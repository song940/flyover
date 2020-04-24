import { pcall } from './core';

type ConfirmOption = {
  title?: string,
  message?: string,
  align?: 'left' | 'center' | 'right',
  okButton?: string,
  cancelButton?: string,
};

export const confirm = (message: string, { title, okButton, cancelButton }: ConfirmOption) => {
  return pcall('confirm', {
    title,
    message,
    okButton,
    cancelButton,
  })
};

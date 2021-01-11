import { pcall } from './core';

type PromptOption = {
  title?: string,
  message?: string,
  placeholder?: string,
  align?: 'left' | 'center' | 'right',
  okButtonText?: string,
  cancelButtonText?: string,
};

export const prompt = (option: PromptOption = {}) =>
  pcall('prompt', option).then(res => {
    if (!res.ok) throw new Error();
    return res.inputValue;
  });

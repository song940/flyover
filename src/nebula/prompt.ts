import { pcall } from './core';

type PromptOption = {
  title?: string,
  message?: string,
  align?: 'left' | 'center' | 'right',
  okButton?: string,
  cancelButton?: string,
  placeholder?: string,
};

export const prompt = (options: PromptOption) => {
  return pcall('prompt', options);
};

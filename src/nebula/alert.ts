import { pcall } from './core';

type AlertOption = {
  title?: string,
  content?: string,
  buttonText?: string,
};

export const alert = (message: string, options?: AlertOption) => {
  const { title, buttonText } = options;
  return pcall('alert', {
    title,
    message,
    button: buttonText
  });
};

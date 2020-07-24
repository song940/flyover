import { pcall } from './core';

type AlertOption = {
  title?: string,
  buttonText?: string,
};

export const alert = (message: string, { title, buttonText: button }: AlertOption = {}): Promise<void> => {
  return pcall(`device.notification.alert`, {
    title,
    message,
    buttonName: button
  });
};

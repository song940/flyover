import { pcall } from "./core";

type ConfirmOption = {
  title?: string,
  message?: string,
  align?: 'left' | 'center' | 'right',
  okButton?: string,
  cancelButton?: string,
};

export const confirm = (message: string, { title, okButton, cancelButton }: ConfirmOption = {}): Promise<boolean> => {
  return pcall('device.notification.confirm', {
    title,
    message,
    buttonLabels: [ okButton, cancelButton ],
  }).then(({ buttonIndex }) => buttonIndex === 0);
};

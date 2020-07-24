import { pcall } from "./core";

type PromptOption = {
  title?: string,
  message?: string,
  okButton?: string,
  cancelButton?: string,
  placeholder?: string,
};

export const prompt = (options: PromptOption) => {
  const { title, message, placeholder, okButton, cancelButton } = options;
  return pcall('device.notification.prompt', {
    title,
    message,
    defaultText: placeholder,
    buttonLabels: [okButton, cancelButton],
  }).then(res => res.value);
};

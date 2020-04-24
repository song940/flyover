import { pcall } from "./core";

export const confirm = (message, options?) => {
  const { okbutton, canclebutton, _index } = options;
  return pcall('WVUIDialog.confirm', {
    message,
    okbutton,
    canclebutton,
    _index,
  });
};

import { pcall } from "./core";

type ConfirmOption = {
  okbutton?: string,
  canclebutton?: string,
  _index?: any
};

export const confirm = (message, options: ConfirmOption = {}) => {
  const { okbutton = '确定', canclebutton = '取消', _index } = options;
  return pcall('WVUIDialog.confirm', {
    message,
    okbutton,
    canclebutton,
    _index,
  });
};

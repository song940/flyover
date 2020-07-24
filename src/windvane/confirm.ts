import { pcall } from "./core";
import { addEventListener } from '../common';

type ConfirmOption = {
  okbutton?: string,
  canclebutton?: string,
  _index?: any
};

const waittingEvent = (id, text) => new Promise(done => {
  const removeListener = addEventListener('wv.dialog', e => {
    const { type, _index } = e.param || {};
    if (_index === id) {
      done(type === text);
      removeListener();
    }
  });
})

export const confirm = (message, options: ConfirmOption = {}) => {
  const { okbutton = '确定', canclebutton = '取消' } = options;
  const _index = Date.now();
  return pcall('WVUIDialog.confirm', {
    message,
    okbutton,
    canclebutton,
    _index,
  }).then(() => waittingEvent(_index, okbutton));
};

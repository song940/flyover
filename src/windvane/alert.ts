import { pcall } from './core';
import { addEventListener } from '../common';

type AlertOption = {
  buttonText?: string
};

const waittingEvent = id => new Promise(done => {
  const removeListener = addEventListener('WV.Event.Alert', e => {
    const { identifier } = e.param || {};
    if (identifier && id === identifier) {
      done(e);
      removeListener();
    }
  });
});

export const alert = (message, options: AlertOption = {}) => {
  const { buttonText = '确定' } = options;
  const identifier = Date.now();
  return pcall('WVUIDialog.alert', {
    message,
    okbutton: buttonText,
    identifier,
  }).then(() => waittingEvent(identifier))
};

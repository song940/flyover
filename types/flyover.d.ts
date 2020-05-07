declare const call: (method: any, ...params: any[]) => any;
declare const toast: (content: any, options?: any) => any;
declare const alert: (content: any, options?: any) => any;
declare const confirm: (content: any, options?: any) => any;
declare const showLoading: () => any;
declare const hideLoading: () => any;
declare const pushWindow: (url: any, options?: any) => any;
declare const popWindow: () => any;
declare const closeWebview: () => any;

export { alert, call, closeWebview, confirm, hideLoading, popWindow, pushWindow, showLoading, toast };

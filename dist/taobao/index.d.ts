declare type ToastOption = {
    duration?: number;
};
/**
 * WVUIToast
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIToast-toast
 * @param message
 * @param options
 */
declare const toast: (message: any, options?: ToastOption) => void;

declare type AlertOption = {
    buttonText?: string;
};
/**
 * alert
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIDialog-alert
 * @param message
 * @param options
 */
declare const alert: (message: any, options?: AlertOption) => Promise<unknown>;

declare type ConfirmOption = {
    okbutton?: string;
    canclebutton?: string;
    _index?: any;
};
/**
 * confirm
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIDialog-confirm
 * @param message
 * @param options
 */
declare const confirm: (message: string, options?: ConfirmOption) => Promise<unknown>;

/**
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUI-showLoadingBox
 */
declare const showLoading: () => Promise<any>;
/**
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUI-hideLoadingBox
 */
declare const hideLoading: () => Promise<any>;

/**
 * copyToClipboard
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#Base-copyToClipboard
 * @param text
 */
declare const copyToClipboard: (text: string) => Promise<any>;

export { alert, confirm, copyToClipboard, hideLoading, showLoading, toast };

declare function ready(callback: any): void;
declare const call: (method: string, ...params: any) => void;
declare const pcall: (method: string, ...params: any) => Promise<any>;
declare const handleResponse: (res: any) => any;

declare type ToastOption = {
    type: 'none' | 'success' | 'fail' | 'exception';
    duration: number;
    xOffset: number;
    yOffset: number;
};
declare const toast: (content: string, options?: ToastOption) => Promise<any>;

declare type AlertOption = {
    title?: string;
    buttonText?: string;
};
declare const alert: (message: string, { title, buttonText: button }?: AlertOption) => Promise<void>;

declare type ConfirmOption = {
    title?: string;
    message?: string;
    align?: 'left' | 'center' | 'right';
    okButton?: string;
    cancelButton?: string;
};
declare const confirm: (message: string, { title, okButton, cancelButton }?: ConfirmOption) => Promise<boolean>;

declare const showLoading: () => Promise<any>;
declare const hideLoading: () => Promise<any>;

/**
 * https://myjsapi.alipay.com/jsapi/context/pop-window.html
 */
declare const popWindow: () => Promise<any>;

declare type PushWindowParam = {
    /**
     * 默认标题, 在页面第一次加载之前显示在标题栏上
     */
    defaultTitle?: string;
    /**
     * 是否读取网页标题显示在标题栏上
     */
    readTitle?: boolean;
    /**
     * 是否在页面加载前显示全局菊花
     */
    showLoading?: boolean;
    /**
     * 是否支持下拉刷新
     * @note 只有集团域和本地文件允许设置为true
     */
    pullRefresh?: boolean;
    /**
     * 页面是否支持下拉（显示出黑色背景或者域名）
     * @note 只有.alipay.com/.alipay.net/本地文件允许设置为false;
     * @deprecated 9.9.5废弃， 使用’allowsBounceVertical’替代
     */
    canPullDown?: boolean;
    [key: string]: any;
};
/**
 * pushWindow
 * https://myjsapi.alipay.com/jsapi/context/push-window.html
 * @param url
 * @param param
 */
declare const pushWindow: (url: string, param?: PushWindowParam) => Promise<any>;

declare const closeWebview: () => Promise<any>;

declare const openInBrowser: (url: string) => Promise<any>;

/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
declare const setTitle: (title: any, onClickTitle: any) => void;

export { alert, call, closeWebview, confirm, handleResponse, hideLoading, openInBrowser, pcall, popWindow, pushWindow, ready, setTitle, showLoading, toast };
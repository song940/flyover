declare function ready(callback: any): void;
declare const call: (method: string, ...params: any) => void;
declare const pcall: (method: string, ...params: any) => Promise<any>;
declare const handleResponse: (res: any) => any;

declare const rpc: (operationType: string, body: any, options?: any) => Promise<any>;

declare type CdpOption = {
    extInfo?: any;
    immediately?: boolean;
    multiCallback?: boolean;
};
declare const getCdpSpaceInfos: (spaceCodes: string | string[], options?: CdpOption) => Promise<any>;
declare const getCdpSpaceInfo: (spaceCode: string, options?: CdpOption) => Promise<any>;
declare const cdpFeedback: (spaceCode: string, objectId: string, behavior?: string) => Promise<any>;

declare type UserOption = {
    configKeys?: [];
    [key: string]: any;
};
declare const getUserInfo: (options: UserOption) => Promise<any>;

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

declare type NotifyOption = {
    keep?: boolean;
};
/**
 * addNotifyListener
 * @docs http://jsapi.alipay.net/jsapi/events/add-notify-listener.html
 * @param name s
 * @param options
 * @param fn
 */
declare const addNotifyListener: (name: string, options: NotifyOption, fn?: any) => () => Promise<any>;
/**
 * removeNotifyListener
 * @docs http://jsapi.alipay.net/jsapi/events/remove-notify-listener.html
 * @param name
 */
declare const removeNotifyListener: (name: string) => Promise<any>;
/**
 * postNotification
 * @docs http://jsapi.alipay.net/jsapi/events/post-notification.html
 * @param name
 * @param data
 */
declare const postNotification: (name: string, data: any) => Promise<any>;

declare type TransparentTitleOption = {
    mode?: "auto" | "always" | "custom" | "none";
};
/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
declare const setTitle: (title: any, onClickTitle: any) => Promise<any>;
/**
 * setTitleColor
 * @param color
 * @param reset
 * @docs http://jsapi.alipay.net/jsapi/ui/set-title-color.html
 */
declare const setTitleColor: (color: number | string, reset?: boolean) => Promise<any>;
/**
 * setTransparentTitle
 * http://jsapi.alipay.net/jsapi/ui/set-transparent-title.html
 */
declare const setTransparentTitle: (options?: TransparentTitleOption) => Promise<any>;
declare type TitleAndStatusbarHeightType = {
    density?: number;
    titleBarHeight: number;
    statusBarHeight: number;
};
/**
 * getTitleAndStatusbarHeight
 * @docs http://jsapi.alipay.net/jsapi/ui/get-title-and-statusbar-height.html
 */
declare const getTitleAndStatusbarHeight: () => Promise<TitleAndStatusbarHeightType>;
declare const hideBackButton: () => Promise<any>;
declare const showBackButton: () => Promise<any>;

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

declare const subscribeMsgbox: (serviceCode: string) => Promise<any>;

declare type OptionMenuItem = {
    icontype?: "scan" | "user";
    redDot?: string;
};
declare type OptionMenuType = {
    menus: Array<OptionMenuItem>;
    override?: boolean;
};
/**
 * https://myjsapi.alipay.com/jsapi/events/option-menu.html
 */
declare const optionMenu: (options: OptionMenuItem | OptionMenuType, fn?: any) => () => void;
declare const hideOptionMenu: () => void;

declare const openInBrowser: (url: string) => Promise<any>;

declare const restorePullToRefresh: () => Promise<any>;

export { addNotifyListener, alert, call, cdpFeedback, closeWebview, confirm, getCdpSpaceInfo, getCdpSpaceInfos, getTitleAndStatusbarHeight, getUserInfo, handleResponse, hideBackButton, hideLoading, hideOptionMenu, openInBrowser, optionMenu, pcall, popWindow, postNotification, pushWindow, ready, removeNotifyListener, restorePullToRefresh, rpc, setTitle, setTitleColor, setTransparentTitle, showBackButton, showLoading, subscribeMsgbox, toast };

declare const isIOS: boolean;
declare const isAlipay: boolean;
declare const isKoubei: boolean;
declare const isKoubeiMerchant: boolean;
declare const isTaobao: boolean;
declare const isTmall: boolean;
declare const isWealth: boolean;
declare const isMyBank: boolean;
declare const isDingTalk: boolean;
declare const isQianNiu: boolean;
declare const isAmap: boolean;
declare const isInside: boolean;

declare const detect_isIOS: typeof isIOS;
declare const detect_isAlipay: typeof isAlipay;
declare const detect_isKoubei: typeof isKoubei;
declare const detect_isKoubeiMerchant: typeof isKoubeiMerchant;
declare const detect_isTaobao: typeof isTaobao;
declare const detect_isTmall: typeof isTmall;
declare const detect_isWealth: typeof isWealth;
declare const detect_isMyBank: typeof isMyBank;
declare const detect_isDingTalk: typeof isDingTalk;
declare const detect_isQianNiu: typeof isQianNiu;
declare const detect_isAmap: typeof isAmap;
declare const detect_isInside: typeof isInside;
declare namespace detect {
  export {
    detect_isIOS as isIOS,
    detect_isAlipay as isAlipay,
    detect_isKoubei as isKoubei,
    detect_isKoubeiMerchant as isKoubeiMerchant,
    detect_isTaobao as isTaobao,
    detect_isTmall as isTmall,
    detect_isWealth as isWealth,
    detect_isMyBank as isMyBank,
    detect_isDingTalk as isDingTalk,
    detect_isQianNiu as isQianNiu,
    detect_isAmap as isAmap,
    detect_isInside as isInside,
  };
}

interface EventHandler {
    (event: any): void;
}
declare const addEventListener: (type: string, fn: EventHandler) => () => void;

declare type ToastOption = {
    duration?: number;
};
/**
 * WVUIToast
 * @docs http://h5.alibaba-inc.com/api/WindVane-API.html#WVUIToast-toast
 * @param message
 * @param options
 */
declare const toast: (message: any, options?: ToastOption) => any;

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

declare const index_toast: typeof toast;
declare const index_alert: typeof alert;
declare const index_confirm: typeof confirm;
declare const index_showLoading: typeof showLoading;
declare const index_hideLoading: typeof hideLoading;
declare const index_copyToClipboard: typeof copyToClipboard;
declare namespace index {
  export {
    index_toast as toast,
    index_alert as alert,
    index_confirm as confirm,
    index_showLoading as showLoading,
    index_hideLoading as hideLoading,
    index_copyToClipboard as copyToClipboard,
  };
}

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
declare const getUserInfo: (options?: UserOption) => Promise<any>;

declare type ToastOption$1 = {
    type: 'none' | 'success' | 'fail' | 'exception';
    duration: number;
    xOffset: number;
    yOffset: number;
};
declare const toast$1: (content: string, options?: ToastOption$1) => Promise<any>;

declare type AlertOption$1 = {
    title?: string;
    buttonText?: string;
};
declare const alert$1: (message: string, { title, buttonText: button }?: AlertOption$1) => Promise<void>;

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

declare type TitleOption = {
    subtitle?: string;
    image?: string;
};
/**
 * https://myjsapi.alipay.com/jsapi/ui/set-title.html
 * @param title
 * @param onClickTitle
 */
declare const setTitle: (title: string, options: TitleOption, onClickTitle: any) => Promise<any>;
declare type TitleColorOption = {
    color?: string;
    reset?: boolean;
    resetTransparent?: boolean;
};
/**
 * setTitleColor
 * @param color
 * @param reset
 * @docs http://jsapi.alipay.net/jsapi/ui/set-title-color.html
 */
declare const setTitleColor: (options: TitleColorOption) => Promise<any>;
declare const resetTitleColor: () => Promise<any>;
/**
 * setTransparentTitle
 * http://jsapi.alipay.net/jsapi/ui/set-transparent-title.html
 */
declare const setTransparentTitle: (mode?: "auto" | "always" | "custom" | "none") => Promise<any>;
declare const resetTransparentTitle: () => Promise<any>;
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
/**
 * https://myjsapi.alipay.com/jsapi/ui/show-title-loading.html
 */
declare const showTitleLoading: () => Promise<any>;
/**
 * https://myjsapi.alipay.com/jsapi/ui/hide-title-loading.html
 */
declare const hideTitleLoading: () => Promise<any>;

declare type ConfirmOption$1 = {
    title?: string;
    message?: string;
    align?: 'left' | 'center' | 'right';
    okButton?: string;
    cancelButton?: string;
};
declare const confirm$1: (message: string, { title, okButton, cancelButton }?: ConfirmOption$1) => Promise<boolean>;

declare const showLoading$1: () => Promise<any>;
declare const hideLoading$1: () => Promise<any>;

/**
 * tradePay
 * https://myjsapi.alipay.com/jsapi/native/trade-pay.html
 * @param param0
 */
declare const tradePay: ({ uuid, extern_token, app_name, biz_type, apiname, apiservice, tip, }: {
    uuid: any;
    extern_token: any;
    app_name?: string;
    biz_type?: string;
    apiname?: string;
    apiservice?: string;
    tip?: string;
}) => Promise<any>;
declare const verifyIdentity: (verifyId: string) => Promise<any>;

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

declare const index$1_ready: typeof ready;
declare const index$1_call: typeof call;
declare const index$1_pcall: typeof pcall;
declare const index$1_handleResponse: typeof handleResponse;
declare const index$1_rpc: typeof rpc;
declare const index$1_getCdpSpaceInfos: typeof getCdpSpaceInfos;
declare const index$1_getCdpSpaceInfo: typeof getCdpSpaceInfo;
declare const index$1_cdpFeedback: typeof cdpFeedback;
declare const index$1_getUserInfo: typeof getUserInfo;
declare const index$1_addNotifyListener: typeof addNotifyListener;
declare const index$1_removeNotifyListener: typeof removeNotifyListener;
declare const index$1_postNotification: typeof postNotification;
declare const index$1_setTitle: typeof setTitle;
declare const index$1_setTitleColor: typeof setTitleColor;
declare const index$1_resetTitleColor: typeof resetTitleColor;
declare const index$1_setTransparentTitle: typeof setTransparentTitle;
declare const index$1_resetTransparentTitle: typeof resetTransparentTitle;
declare const index$1_getTitleAndStatusbarHeight: typeof getTitleAndStatusbarHeight;
declare const index$1_hideBackButton: typeof hideBackButton;
declare const index$1_showBackButton: typeof showBackButton;
declare const index$1_showTitleLoading: typeof showTitleLoading;
declare const index$1_hideTitleLoading: typeof hideTitleLoading;
declare const index$1_tradePay: typeof tradePay;
declare const index$1_verifyIdentity: typeof verifyIdentity;
declare const index$1_popWindow: typeof popWindow;
declare const index$1_pushWindow: typeof pushWindow;
declare const index$1_closeWebview: typeof closeWebview;
declare const index$1_subscribeMsgbox: typeof subscribeMsgbox;
declare const index$1_optionMenu: typeof optionMenu;
declare const index$1_hideOptionMenu: typeof hideOptionMenu;
declare const index$1_openInBrowser: typeof openInBrowser;
declare const index$1_restorePullToRefresh: typeof restorePullToRefresh;
declare namespace index$1 {
  export {
    index$1_ready as ready,
    index$1_call as call,
    index$1_pcall as pcall,
    index$1_handleResponse as handleResponse,
    index$1_rpc as rpc,
    index$1_getCdpSpaceInfos as getCdpSpaceInfos,
    index$1_getCdpSpaceInfo as getCdpSpaceInfo,
    index$1_cdpFeedback as cdpFeedback,
    index$1_getUserInfo as getUserInfo,
    toast$1 as toast,
    alert$1 as alert,
    index$1_addNotifyListener as addNotifyListener,
    index$1_removeNotifyListener as removeNotifyListener,
    index$1_postNotification as postNotification,
    index$1_setTitle as setTitle,
    index$1_setTitleColor as setTitleColor,
    index$1_resetTitleColor as resetTitleColor,
    index$1_setTransparentTitle as setTransparentTitle,
    index$1_resetTransparentTitle as resetTransparentTitle,
    index$1_getTitleAndStatusbarHeight as getTitleAndStatusbarHeight,
    index$1_hideBackButton as hideBackButton,
    index$1_showBackButton as showBackButton,
    index$1_showTitleLoading as showTitleLoading,
    index$1_hideTitleLoading as hideTitleLoading,
    confirm$1 as confirm,
    showLoading$1 as showLoading,
    hideLoading$1 as hideLoading,
    index$1_tradePay as tradePay,
    index$1_verifyIdentity as verifyIdentity,
    index$1_popWindow as popWindow,
    index$1_pushWindow as pushWindow,
    index$1_closeWebview as closeWebview,
    index$1_subscribeMsgbox as subscribeMsgbox,
    index$1_optionMenu as optionMenu,
    index$1_hideOptionMenu as hideOptionMenu,
    index$1_openInBrowser as openInBrowser,
    index$1_restorePullToRefresh as restorePullToRefresh,
  };
}

declare const getAlipayUserId: () => Promise<any>;

declare const index$2_ready: typeof ready;
declare const index$2_call: typeof call;
declare const index$2_pcall: typeof pcall;
declare const index$2_handleResponse: typeof handleResponse;
declare const index$2_rpc: typeof rpc;
declare const index$2_getCdpSpaceInfos: typeof getCdpSpaceInfos;
declare const index$2_getCdpSpaceInfo: typeof getCdpSpaceInfo;
declare const index$2_cdpFeedback: typeof cdpFeedback;
declare const index$2_getUserInfo: typeof getUserInfo;
declare const index$2_addNotifyListener: typeof addNotifyListener;
declare const index$2_removeNotifyListener: typeof removeNotifyListener;
declare const index$2_postNotification: typeof postNotification;
declare const index$2_setTitle: typeof setTitle;
declare const index$2_setTitleColor: typeof setTitleColor;
declare const index$2_resetTitleColor: typeof resetTitleColor;
declare const index$2_setTransparentTitle: typeof setTransparentTitle;
declare const index$2_resetTransparentTitle: typeof resetTransparentTitle;
declare const index$2_getTitleAndStatusbarHeight: typeof getTitleAndStatusbarHeight;
declare const index$2_hideBackButton: typeof hideBackButton;
declare const index$2_showBackButton: typeof showBackButton;
declare const index$2_showTitleLoading: typeof showTitleLoading;
declare const index$2_hideTitleLoading: typeof hideTitleLoading;
declare const index$2_tradePay: typeof tradePay;
declare const index$2_verifyIdentity: typeof verifyIdentity;
declare const index$2_popWindow: typeof popWindow;
declare const index$2_pushWindow: typeof pushWindow;
declare const index$2_closeWebview: typeof closeWebview;
declare const index$2_subscribeMsgbox: typeof subscribeMsgbox;
declare const index$2_optionMenu: typeof optionMenu;
declare const index$2_hideOptionMenu: typeof hideOptionMenu;
declare const index$2_openInBrowser: typeof openInBrowser;
declare const index$2_restorePullToRefresh: typeof restorePullToRefresh;
declare const index$2_getAlipayUserId: typeof getAlipayUserId;
declare namespace index$2 {
  export {
    index$2_ready as ready,
    index$2_call as call,
    index$2_pcall as pcall,
    index$2_handleResponse as handleResponse,
    index$2_rpc as rpc,
    index$2_getCdpSpaceInfos as getCdpSpaceInfos,
    index$2_getCdpSpaceInfo as getCdpSpaceInfo,
    index$2_cdpFeedback as cdpFeedback,
    index$2_getUserInfo as getUserInfo,
    toast$1 as toast,
    alert$1 as alert,
    index$2_addNotifyListener as addNotifyListener,
    index$2_removeNotifyListener as removeNotifyListener,
    index$2_postNotification as postNotification,
    index$2_setTitle as setTitle,
    index$2_setTitleColor as setTitleColor,
    index$2_resetTitleColor as resetTitleColor,
    index$2_setTransparentTitle as setTransparentTitle,
    index$2_resetTransparentTitle as resetTransparentTitle,
    index$2_getTitleAndStatusbarHeight as getTitleAndStatusbarHeight,
    index$2_hideBackButton as hideBackButton,
    index$2_showBackButton as showBackButton,
    index$2_showTitleLoading as showTitleLoading,
    index$2_hideTitleLoading as hideTitleLoading,
    confirm$1 as confirm,
    showLoading$1 as showLoading,
    hideLoading$1 as hideLoading,
    index$2_tradePay as tradePay,
    index$2_verifyIdentity as verifyIdentity,
    index$2_popWindow as popWindow,
    index$2_pushWindow as pushWindow,
    index$2_closeWebview as closeWebview,
    index$2_subscribeMsgbox as subscribeMsgbox,
    index$2_optionMenu as optionMenu,
    index$2_hideOptionMenu as hideOptionMenu,
    index$2_openInBrowser as openInBrowser,
    index$2_restorePullToRefresh as restorePullToRefresh,
    index$2_getAlipayUserId as getAlipayUserId,
  };
}

declare const index$3_ready: typeof ready;
declare const index$3_call: typeof call;
declare const index$3_pcall: typeof pcall;
declare const index$3_handleResponse: typeof handleResponse;
declare const index$3_rpc: typeof rpc;
declare const index$3_getCdpSpaceInfos: typeof getCdpSpaceInfos;
declare const index$3_getCdpSpaceInfo: typeof getCdpSpaceInfo;
declare const index$3_cdpFeedback: typeof cdpFeedback;
declare const index$3_getUserInfo: typeof getUserInfo;
declare const index$3_addNotifyListener: typeof addNotifyListener;
declare const index$3_removeNotifyListener: typeof removeNotifyListener;
declare const index$3_postNotification: typeof postNotification;
declare const index$3_setTitle: typeof setTitle;
declare const index$3_setTitleColor: typeof setTitleColor;
declare const index$3_resetTitleColor: typeof resetTitleColor;
declare const index$3_setTransparentTitle: typeof setTransparentTitle;
declare const index$3_resetTransparentTitle: typeof resetTransparentTitle;
declare const index$3_getTitleAndStatusbarHeight: typeof getTitleAndStatusbarHeight;
declare const index$3_hideBackButton: typeof hideBackButton;
declare const index$3_showBackButton: typeof showBackButton;
declare const index$3_showTitleLoading: typeof showTitleLoading;
declare const index$3_hideTitleLoading: typeof hideTitleLoading;
declare const index$3_tradePay: typeof tradePay;
declare const index$3_verifyIdentity: typeof verifyIdentity;
declare const index$3_popWindow: typeof popWindow;
declare const index$3_pushWindow: typeof pushWindow;
declare const index$3_closeWebview: typeof closeWebview;
declare const index$3_subscribeMsgbox: typeof subscribeMsgbox;
declare const index$3_optionMenu: typeof optionMenu;
declare const index$3_hideOptionMenu: typeof hideOptionMenu;
declare const index$3_openInBrowser: typeof openInBrowser;
declare const index$3_restorePullToRefresh: typeof restorePullToRefresh;
declare namespace index$3 {
  export {
    index$3_ready as ready,
    index$3_call as call,
    index$3_pcall as pcall,
    index$3_handleResponse as handleResponse,
    index$3_rpc as rpc,
    index$3_getCdpSpaceInfos as getCdpSpaceInfos,
    index$3_getCdpSpaceInfo as getCdpSpaceInfo,
    index$3_cdpFeedback as cdpFeedback,
    index$3_getUserInfo as getUserInfo,
    toast$1 as toast,
    alert$1 as alert,
    index$3_addNotifyListener as addNotifyListener,
    index$3_removeNotifyListener as removeNotifyListener,
    index$3_postNotification as postNotification,
    index$3_setTitle as setTitle,
    index$3_setTitleColor as setTitleColor,
    index$3_resetTitleColor as resetTitleColor,
    index$3_setTransparentTitle as setTransparentTitle,
    index$3_resetTransparentTitle as resetTransparentTitle,
    index$3_getTitleAndStatusbarHeight as getTitleAndStatusbarHeight,
    index$3_hideBackButton as hideBackButton,
    index$3_showBackButton as showBackButton,
    index$3_showTitleLoading as showTitleLoading,
    index$3_hideTitleLoading as hideTitleLoading,
    confirm$1 as confirm,
    showLoading$1 as showLoading,
    hideLoading$1 as hideLoading,
    index$3_tradePay as tradePay,
    index$3_verifyIdentity as verifyIdentity,
    index$3_popWindow as popWindow,
    index$3_pushWindow as pushWindow,
    index$3_closeWebview as closeWebview,
    index$3_subscribeMsgbox as subscribeMsgbox,
    index$3_optionMenu as optionMenu,
    index$3_hideOptionMenu as hideOptionMenu,
    index$3_openInBrowser as openInBrowser,
    index$3_restorePullToRefresh as restorePullToRefresh,
  };
}

declare const index$4_toast: typeof toast;
declare const index$4_alert: typeof alert;
declare const index$4_confirm: typeof confirm;
declare const index$4_showLoading: typeof showLoading;
declare const index$4_hideLoading: typeof hideLoading;
declare const index$4_copyToClipboard: typeof copyToClipboard;
declare namespace index$4 {
  export {
    index$4_toast as toast,
    index$4_alert as alert,
    index$4_confirm as confirm,
    index$4_showLoading as showLoading,
    index$4_hideLoading as hideLoading,
    index$4_copyToClipboard as copyToClipboard,
  };
}

declare const popWindow$1: () => void;

declare function getAbsoluteURL(url: any): any;
declare const pushWindow$1: (url: any, options?: any) => Promise<unknown>;

declare const index$5_toast: typeof toast;
declare const index$5_alert: typeof alert;
declare const index$5_confirm: typeof confirm;
declare const index$5_showLoading: typeof showLoading;
declare const index$5_hideLoading: typeof hideLoading;
declare const index$5_copyToClipboard: typeof copyToClipboard;
declare const index$5_getAbsoluteURL: typeof getAbsoluteURL;
declare namespace index$5 {
  export {
    index$5_toast as toast,
    index$5_alert as alert,
    index$5_confirm as confirm,
    index$5_showLoading as showLoading,
    index$5_hideLoading as hideLoading,
    index$5_copyToClipboard as copyToClipboard,
    popWindow$1 as popWindow,
    index$5_getAbsoluteURL as getAbsoluteURL,
    pushWindow$1 as pushWindow,
  };
}

declare const call$1: (method: any, ...params: any[]) => any;
declare const toast$2: (content: any, options?: any) => any;
declare const alert$2: (content: any, options?: any) => any;
declare const confirm$2: (content: any, options?: any) => any;
declare const showLoading$2: () => any;
declare const hideLoading$2: () => any;
declare const pushWindow$2: (url: string, options?: any) => any;
declare const popWindow$2: () => any;
declare const closeWebview$1: () => any;
declare const restorePullToRefresh$1: () => any;
declare type TransparentTitleOption = {
    mode?: "auto" | "always" | "custom" | "none";
};
declare type TitleAndStatusbarHeightType$1 = {
    density?: number;
    titleBarHeight: number;
    statusBarHeight: number;
};
declare const setTitle$1: (title: any) => any;
declare const setTitleColor$1: (color: number | string, reset?: boolean) => any;
declare const setTransparentTitle$1: (options?: TransparentTitleOption) => any;
declare const getTitleAndStatusbarHeight$1: () => Promise<TitleAndStatusbarHeightType$1>;
declare type OptionMenuItem$1 = {
    icontype?: "scan" | "user";
    redDot?: string;
};
declare type OptionMenuType$1 = {
    menus: Array<OptionMenuItem$1>;
    override?: boolean;
};
declare const optionMenu$1: (options: OptionMenuItem$1 | OptionMenuType$1, fn?: EventHandler) => any;
declare const onReady: (fn: EventHandler) => any;
declare const onResume: (fn: EventHandler) => () => void;
declare const onPause: (fn: EventHandler) => () => void;
declare const onBack: (fn: EventHandler) => () => void;
/**
 * onPullToRefresh
 * @param fn
 * @docs http://jsapi.alipay.net/jsapi/events/fire-pull-to-refresh.html
 */
declare const onPullToRefresh: (fn: EventHandler) => () => void;
declare type CdpOption$1 = {
    extInfo: any;
    immediately: boolean;
    multiCallback: boolean;
};
declare const getCdpSpaceInfos$1: (spaceCodes: string | string[], options?: CdpOption$1) => any;
declare const getCdpSpaceInfo$1: (spaceCode: string, options?: CdpOption$1) => any;
declare const cdpFeedback$1: (spaceCode: string, objectId: string, behavior?: string) => any;

export { EventHandler, addEventListener, alert$2 as alert, index$1 as alipay, call$1 as call, cdpFeedback$1 as cdpFeedback, closeWebview$1 as closeWebview, confirm$2 as confirm, detect, getCdpSpaceInfo$1 as getCdpSpaceInfo, getCdpSpaceInfos$1 as getCdpSpaceInfos, getTitleAndStatusbarHeight$1 as getTitleAndStatusbarHeight, hideLoading$2 as hideLoading, isAlipay, isAmap, isDingTalk, isIOS, isInside, isKoubei, isKoubeiMerchant, isMyBank, isQianNiu, isTaobao, isTmall, isWealth, index$3 as koubei, index$2 as mybank, onBack, onPause, onPullToRefresh, onReady, onResume, optionMenu$1 as optionMenu, popWindow$2 as popWindow, pushWindow$2 as pushWindow, index$5 as qianniu, restorePullToRefresh$1 as restorePullToRefresh, setTitle$1 as setTitle, setTitleColor$1 as setTitleColor, setTransparentTitle$1 as setTransparentTitle, showLoading$2 as showLoading, index$4 as taobao, index as tmall, toast$2 as toast };

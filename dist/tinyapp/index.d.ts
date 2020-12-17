declare const getRpcGateway: () => Promise<any>;
/**
 * rpc
 * @param operationType
 * @param body
 * @param options
 */
declare const rpc: (operationType: string, body: any, options?: {}) => Promise<any>;

declare type CdpOption = {
    extInfo: any;
    immediately: boolean;
    multiCallback: boolean;
};
declare const getCdpSpaceInfos: (spaceCodes: string | string[], options?: CdpOption) => Promise<any>;
declare const getCdpSpaceInfo: (spaceCode: string, options?: CdpOption) => Promise<any>;
declare const cdpFeedback: (spaceCode: string, objectId: string, behavior?: string) => Promise<any>;

declare const call: (method: string, ...params: any) => Promise<any>;
declare const pcall: (method: string, params?: any) => Promise<any>;
declare const addEventListener: (eventName: string, fn: any) => any;

declare const getUserInfo: () => Promise<any>;
declare const getUserId: () => Promise<any>;

declare type ToastOption = {
    type?: "none" | "success" | "fail" | "exception";
    duration?: number;
    content?: string;
};
/**
 * showToast
 * @docs https://opendocs.alipay.com/mini/api/fhur8f
 * @param {ToastOption} content
 * @param {*} options
 */
declare const showToast: (content: string, options?: ToastOption) => Promise<any>;
/**
 * hideToast
 * @docs https://opendocs.alipay.com/mini/api/iygd4e
 */
declare const hideToast: () => Promise<any>;
declare const toast: (content: string, options?: ToastOption) => Promise<any>;

/**
 * alert
 * @docs https://opendocs.alipay.com/mini/api/ui-feedback
 * @param {*} content
 * @param {*} options
 */
declare const alert: (content: string, options?: any) => Promise<any>;

declare type TabBarOption = {
    /**
     * 是否需要动画效果，默认为无动画效果。
     */
    animation?: boolean;
};
/**
 * hideTabBars
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/at18z8
 */
declare const hideTabBar: (options?: TabBarOption) => Promise<any>;
/**
 * showTabBar
 * @param {*} options
 * @docs https://opendocs.alipay.com/mini/api/dpq5dh
 */
declare const showTabBar: (options?: TabBarOption) => Promise<any>;

declare type NavbarOption = {
    title?: string;
    image?: string;
    backgroundColor?: string;
    borderBottomColor?: string;
    reset?: boolean;
};
/**
 * setNavigationBar
 * @docs https://opendocs.alipay.com/mini/api/xwq8e6
 * @param options
 */
declare const setNavigationBar: (options: NavbarOption) => Promise<any>;
declare const setTitle: (title: string) => Promise<any>;
declare const setTitleAsImage: (image: string) => Promise<any>;
declare const resetNavigationBarColor: () => Promise<any>;

/**
 * showLoading
 * @docs https://opendocs.alipay.com/mini/api/bm69kb
 */
declare const showLoading: () => Promise<any>;
/**
 * hideLoading
 * @docs https://opendocs.alipay.com/mini/api/nzf540
 */
declare const hideLoading: () => Promise<any>;

declare const confirm: (content: string, options?: {}) => Promise<any>;

declare type RequestOption = {
    /**
     * 默认 GET，目前支持 GET/POST/PUT/DELETE。
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    /**
     * @docs https://opendocs.alipay.com/mini/api/owycmh#data%20%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E
     */
    data?: any;
    /**
     * 期望返回的数据格式
     * 默认 JSON，支持 JSON、text、base64、arraybuffer（10.1.70 版本开始支持）。
     */
    dataType?: 'json' | 'text' | 'base64' | 'arraybuffer';
    /**
     * 超时时间，单位 ms，默认 30000。
     */
    timeout?: number;
};
declare const request: (url: string, options?: RequestOption) => Promise<any>;
declare const get: (url: string, options?: RequestOption) => Promise<any>;
declare const post: (url: string, data: any, options?: RequestOption) => Promise<any>;

/**
 * setStorage
 * @docs https://opendocs.alipay.com/mini/api/eocm6v
 * @param {*} key
 * @param {*} data
 */
declare const setStorage: (key: string, data: any) => Promise<any>;
/**
 * getStorage
 * @docs https://opendocs.alipay.com/mini/api/azfobl
 * @param {*} key
 */
declare const getStorage: (key: string) => Promise<any>;
declare const removeStorage: (key: string) => Promise<any>;
/**
 * clearStorage
 * @docs https://opendocs.alipay.com/mini/api/storage
 */
declare const clearStorage: () => Promise<any>;

/**
 * https://opendocs.alipay.com/mini/api/as9kin
 */
declare const getLocation: () => Promise<any>;
declare const chooseLocation: () => Promise<any>;
declare type LocationType = {
    name: string;
    latitude: string;
    longitude: string;
    address: string;
    scale?: number;
};
declare const openLocation: (locate: LocationType) => Promise<any>;

/**
 * redirectTo
 * @docs https://opendocs.alipay.com/mini/api/fh18ky
 * @param url
 */
declare const redirectTo: (url: string) => Promise<any>;
/**
 * navigateTo
 * https://opendocs.alipay.com/mini/component/navigator
 * @param {*} url
 * @param {*} query
 */
declare const navigateTo: (url: string) => Promise<any>;
/**
 * navigateBack
 * @docs https://opendocs.alipay.com/mini/api/kc5zbx
 */
declare const navigateBack: () => Promise<any>;
/**
 * switchTab
 * @docs https://opendocs.alipay.com/mini/api/ui-tabbar
 * @param url
 */
declare const switchTab: (url: string) => Promise<any>;
/**
 * reLaunch
 * @docs https://opendocs.alipay.com/mini/api/hmn54z
 * @param url
 */
declare const reLaunch: (url: string) => Promise<any>;

declare const pushWindow: (url: string, options?: any) => Promise<any>;

export { addEventListener, alert, call, cdpFeedback, chooseLocation, clearStorage, confirm, get, getCdpSpaceInfo, getCdpSpaceInfos, getLocation, getRpcGateway, getStorage, getUserId, getUserInfo, hideLoading, hideTabBar, hideToast, navigateBack, navigateTo, openLocation, pcall, post, pushWindow, reLaunch, redirectTo, removeStorage, request, resetNavigationBarColor, rpc, setNavigationBar, setStorage, setTitle, setTitleAsImage, showLoading, showTabBar, showToast, switchTab, toast };

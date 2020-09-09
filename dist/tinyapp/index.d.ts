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
declare const getCdpSpaceInfos: (spaceCodes: string | string[], options?: CdpOption) => Promise<unknown>;
declare const getCdpSpaceInfo: (spaceCode: string, options?: CdpOption) => Promise<unknown>;
declare const cdpFeedback: (spaceCode: string, objectId: string, behavior?: string) => Promise<unknown>;

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
 * navigateTo
 * https://opendocs.alipay.com/mini/component/navigator
 * @param {*} url
 * @param {*} query
 */
declare const navigateTo: (url: string) => Promise<any>;

declare const pushWindow: (url: string, options?: any) => Promise<unknown>;

export { alert, cdpFeedback, clearStorage, confirm, getCdpSpaceInfo, getCdpSpaceInfos, getRpcGateway, getStorage, hideLoading, hideTabBar, hideToast, navigateTo, pushWindow, removeStorage, rpc, setStorage, showLoading, showTabBar, showToast, toast };

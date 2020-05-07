declare type ToastOption = {
    duration?: number;
};
declare const toast: (message: any, options?: ToastOption) => void;

declare type AlertOption = {
    buttonText?: string;
};
declare const alert: (message: any, options?: AlertOption) => Promise<unknown>;

declare type ConfirmOption = {
    okbutton?: string;
    canclebutton?: string;
    _index?: any;
};
declare const confirm: (message: any, options?: ConfirmOption) => Promise<unknown>;

declare const showLoading: () => Promise<unknown>;
declare const hideLoading: () => Promise<unknown>;

export { alert, confirm, hideLoading, showLoading, toast };

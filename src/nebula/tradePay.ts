import { pcall } from './core';

/**
 * tradePay
 * https://myjsapi.alipay.com/jsapi/native/trade-pay.html
 * @param param0
 */
export const tradePay = ({
  uuid,
  extern_token,
  app_name = 'alipay',
  biz_type = 'openservice',
  apiname = 'com.alipay.paypwd.validate',
  apiservice = 'com.alipay.loan.agreement.sign',
  tip = '请输入支付宝支付密码',
}) => {
  const orderStr = [
    `uuid=${uuid}`,
    `extern_token=${extern_token}`,
    `app_name=${app_name}`,
    `biz_type=${biz_type}`,
    `apiname=${apiname}`,
    `apiservice=${apiservice}`,
    `tip=${tip}`
  ].join('&');
  return pcall('tradePay', { orderStr }).then(res => {
    if (res.resultCode === '9000') return res;
    throw res;
  });
};

export const verifyIdentity = (verifyId: string) => {
  return pcall('verifyIdentity', { verifyId }).then(res => {
    if (res.code === '1000') return res;
    throw res;
  });
};

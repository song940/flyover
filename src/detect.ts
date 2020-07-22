
const ua = window.navigator.userAgent;

export const isIOS = /iPhone|iPad|iPod/i.test(ua);
export const isAlipay = /AliApp\(AP\/([\d\.]+)\)/i.test(ua);
export const isKoubei = /AliApp\(KB\/([\d\.]+)\)/i.test(ua);
export const isKoubeiMerchant = /AliApp\(AM\/([\d\.]+)\)/i.test(ua);
export const isTaobao = /AliApp\(TB\/([\d\.]+)\)/i.test(ua);
export const isTmall = /AliApp\(TM\/([\d\.]+)\)/i.test(ua);
export const isWealth = /AliApp\(AFW\/([\d\.]+)\)/i.test(ua);
export const isMyBank = /AliApp\(BK\/([\d\.]+)\)/i.test(ua);
export const isDingTalk = /AliApp\(DingTalk\/([\d\.]+)\)/i.test(ua);
export const isQianNiu = /AliApp\(QN\/([\d\.]+)\)/i.test(ua);
export const isAmap = /amap/i.test(ua);
export const isInside = /Inside/i.test(ua);

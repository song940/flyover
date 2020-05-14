
const getAliappInfo = (ua: string) => {
  if (/AliApp\(([\w\-]+)\/([\d\.]+)\)/i.test(ua)) {
    return {
      name: String(RegExp.$1).toLowerCase(),
      version: RegExp.$2,
    };
  }

  const matches = ua.match(/(amap)\/([\d.]+)/i);
  if (Array.isArray(matches) && matches.length > 2 && matches[1] === 'amap') {
    return {
      name: 'amap',
      version: matches[2],
    };
  }

  const insideMatchs = ua.match(/(Inside)([\/\s](.*))?/i);
  if (Array.isArray(insideMatchs) && insideMatchs.length > 2 && insideMatchs[1] === 'Inside') {
    return {
      name: 'Inside',
      version: insideMatchs[3] || '',
    };
  }

  return {
    name: 'web',
    version: '',
  };
};

const ua = window.navigator.userAgent;

export const aliAppInfo = getAliappInfo(ua);
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

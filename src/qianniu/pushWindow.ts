declare var QN: any;

export function getAbsoluteURL(url) {
  let ele = document.createElement('a');
  ele.href = url;
  url = ele.href;
  ele = null;
  return url;
};

export const pushWindow = (url, options: any = {}) => {
  const { data } = options;
  return new Promise((resolve, reject) => {
    try {
      QN.navigator.push({
        url: getAbsoluteURL(url),
        query: data,
      });
      resolve();
    } catch (e) {
      reject(e);
    }

  })
};

import { pcall } from './core';

type RequestOption = {
  /**
   * 默认 GET，目前支持 GET/POST/PUT/DELETE。
   */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
  /**
   * @docs https://opendocs.alipay.com/mini/api/owycmh#data%20%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E
   */
  data?: any,
  /**
   * 期望返回的数据格式
   * 默认 JSON，支持 JSON、text、base64、arraybuffer（10.1.70 版本开始支持）。
   */
  dataType?: 'json' | 'text' | 'base64' | 'arraybuffer',
  /**
   * 超时时间，单位 ms，默认 30000。
   */
  timeout?: number,
};

export const request = (url: string, options?: RequestOption) => {
  return pcall('request', {
    url,
    ...options
  });
};

export const get = (url: string, options?: RequestOption) => {
  return request(url, options);
};

export const post = (url: string, data: any, options?: RequestOption) => {
  return request(url, {
    method: 'POST',
    data,
    ...options,
  });
}

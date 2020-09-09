import { call } from './core';
import { getConfig } from './config';

export const getRpcGateway = () => {
  return getConfig('rpcUrl').then(res => res.rpcUrl);
};
/**
 * rpc
 * @param operationType
 * @param body
 * @param options
 */
export const rpc = (operationType: string, body: any, options = {}) => {
  return call('rpc', { operationType, requestData: [body], ...options  }).then((res: any) => {
    if(res.success) return res;
    const err = new Error() as any;
    err.code = res.resultCode;
    err.message = res.resultMsg;
    err.operationType = operationType;
    err.requestData = body;
    err.response = res;
    throw err;
  })
};

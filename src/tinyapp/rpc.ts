import { pcall } from './core';
import { getConfig } from './config';

export const getRpcGateway = () => {
  return getConfig('rpcUrl').then(res => res.rpcUrl);
};

export const rpc = (operationType: string, body: any, options = {}) => {
  return pcall('rpc', { operationType, requestData: [body], ...options  }).then(res => {
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

import { pcall } from './core';

export const rpc = (operationType: string, body: any, options?: any) => {
  return pcall('rpc', { operationType, requestData: [body], ...options  });
};

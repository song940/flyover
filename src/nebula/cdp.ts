import { pcall } from './core';

type CdpOption = {
  extInfo?: any,
  immediately?: boolean,
  multiCallback?: boolean,
};

export const getCdpSpaceInfos = (spaceCodes: string | string[], options?: CdpOption) => {
  const { extInfo, immediately, multiCallback } = options || {};
  return pcall('getCdpSpaceInfos', {
    spaceCodes,
    extInfo,
    immediately,
    multiCallback,
  });
};

export const getCdpSpaceInfo = (spaceCode: string, options?: CdpOption) => {
  const { extInfo, immediately, multiCallback } = options || {};
  return pcall('getCdpSpaceInfo', {
    spaceCode,
    extInfo,
    immediately,
    multiCallback,
  });
};

export const cdpFeedback = (spaceCode: string, objectId: string, behavior = 'SHOW') => {
  return pcall('cdpFeedback', { spaceCode, objectId, behavior });
};


import { pcall } from './core';

type CdpOption = {
  extInfo: any,
  immediately: boolean,
  multiCallback: boolean,
};

export const getCdpSpaceInfos = (spaceCodes: string | string[], options?: CdpOption) => {
  return pcall('getCdpSpaceInfos', { spaceCodes, ...options });
};

export const getCdpSpaceInfo = (spaceCode: string, options?: CdpOption) => {
  return pcall('getCdpSpaceInfo', { spaceCode, ...options });
};

export const cdpFeedback = (spaceCode: string, objectId: string, behavior = 'SHOW') => {
  return pcall('cdpFeedback', { spaceCode, objectId, behavior });
};


import { call } from './core';

type CdpOption = {
  extInfo: any,
  immediately: boolean,
  multiCallback: boolean,
};

export const getCdpSpaceInfos = (spaceCodes: string | string[], options?: CdpOption) => {
  return call('getCdpSpaceInfos', { spaceCodes, ...options });
};

export const getCdpSpaceInfo = (spaceCode: string, options?: CdpOption) => {
  return call('getCdpSpaceInfo', { spaceCode, ...options });
};

export const cdpFeedback = (spaceCode: string, objectId: string, behavior = 'SHOW') => {
  return call('cdpFeedback', { spaceCode, objectId, behavior });
};

import { pcall } from './core';

export const getCdpSpaceInfo = (spaceCode: string, extInfo = null) => {
  return pcall('getCdpSpaceInfo', { spaceCode, extInfo });
};

export const cdpFeedback = (spaceCode: string, objectId: string, behavior = 'SHOW') => {
  return pcall('cdpFeedback', { spaceCode, objectId, behavior });
};

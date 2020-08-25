
import { pcall } from './core';

export const getCdpSpaceInfo = (spaceCode, extInfo = null) => {
  return pcall('getCdpSpaceInfo', { spaceCode, extInfo });
};

export const cdpFeedback = (spaceCode, objectId, behavior = 'SHOW') => {
  return pcall('cdpFeedback', { spaceCode, objectId, behavior });
};

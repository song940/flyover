import { pcall } from './core';

/**
 * https://opendocs.alipay.com/mini/api/as9kin
 */

export const getLocation = () => {
  return pcall('getLocation');
};

export const chooseLocation = () => {
  return pcall('chooseLocation');
};

type LocationType = {
  name: string,
  latitude: string,
  longitude: string,
  address: string,
  scale?: number,
};

export const openLocation = (locate: LocationType) => {
  return pcall('openLocation', locate);
};

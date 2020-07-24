import { pcall } from "./core";

export const getConfig = (configKeys: Array<string>) => {
  return pcall('getConfig', { configKeys }).then(res => res.data);
};

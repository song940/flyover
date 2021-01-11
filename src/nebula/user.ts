import { pcall } from "./core";

type UserOption = {
  configKeys?: []
  [key: string]: any
};

export const getUserInfo = (options?: UserOption) => {
  return pcall('getUserInfo', options);
};

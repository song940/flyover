import { pcall } from './core';

type BadgeType = {
  index: number,
  type: string,
  text: string,
};

type ActionSheetOption = {
  title?: string,
  items: string[],
  cancelButtonText?: string,
  destructiveBtnIndex?: number,
  badges: BadgeType[],
};

export const showActionSheet = (options: ActionSheetOption) => {
  return pcall('showActionSheet', options);
};

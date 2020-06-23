export * from './toast';
export * from './alert';
export * from './loading';
export * from './confirm';
export * from './storage';

declare const getCurrentPages: () => Array<any>;

export const getCurrentPage = () => {
  const [page] = getCurrentPages();
  // eslint-disable-next-line
  const Page = page.__proto__;
  return Page;
};

export const getCurrentPagePath = () => {
  const Page = getCurrentPage();
  const { route } = Page;
  return route;
};

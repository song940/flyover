import { loadScript, WindVaneBridgeUrl, QianniuBridgeUrl } from '../utils';

export const install = () =>
  Promise.all([
    loadScript(QianniuBridgeUrl),
    loadScript(WindVaneBridgeUrl),
  ])

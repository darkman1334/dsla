import generatePeriods from './helpers';

require('dotenv').config();
const ngrok = require('ngrok');

// eslint-disable-next-line import/no-extraneous-dependencies
const devPeriods = generatePeriods(10);

const environments = {
  mainnet: {
    web3WebsocketProviderUrl: null,
    chainlinkOracleAddress: null,
    chainlinkTokenAddress: null,
    chainlinkJobId: null,
    indexerAPIUrl: 'https://dsla.network/api',
    dslaTokenAddress: '0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe',
    daiTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    usdcTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
  kovan: {
    web3WebsocketProviderUrl:
      `wss://kovan.infura.io/ws/v3/${process.env.DSLA_INFURA_PROJECT_ID}`,
    chainlinkOracleAddress: '0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e',
    chainlinkTokenAddress: '0xa36085F69e2889c224210F603D836748e7dC0088',
    chainlinkJobId: '0x' + '29fa9aa13bf1468788b7cc4a500a45b8',
    indexerAPIUrl: 'https://dsla.network/api',
    dslaTokenAddress: null,
    daiTokenAddress: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
    usdcTokenAddress: null,
  },
  staging: {
    web3WebsocketProviderUrl: `ws://${process.env.STAGING_IP}:8545`,
    chainlinkOracleAddress: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
    chainlinkTokenAddress: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
    chainlinkNodeUrl: `http://${process.env.STAGING_IP}:6688`,
    indexerAPIUrl: 'https://dsla-staging-indexer.herokuapp.com/api',
    dslaTokenAddress: null,
    daiTokenAddress: null,
    usdcTokenAddress: null,
  },
  develop: {
    web3WebsocketProviderUrl: 'ws://localhost:8545',
    chainlinkOracleAddress: '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B',
    chainlinkTokenAddress: '0xCfEB869F69431e42cdB54A4F4f105C19C080A601',
    chainlinkNodeUrl: 'http://localhost:6688',
    indexerAPIUrl: 'https://dsla-staging-indexer.herokuapp.com/api',
    startsArray: devPeriods[0],
    endsArray: devPeriods[1],
    dslaTokenAddress: null,
    daiTokenAddress: null,
    usdcTokenAddress: null,
  },
};

const getNetworkName = (network) => {
  if (/testing/i.test(network)) return 'develop';
  if (/develop/i.test(network)) return 'develop';
  if (/staging/i.test(network)) return 'staging';
  if (/kovan/i.test(network)) return 'kovan';
  if (/live/i.test(network)) return 'mainnet';
  throw new Error(`Network not recognized: ${network}`);
};

export const getEnvFromNetwork = (network) => environments[getNetworkName(network)];

export const envParameters = environments[process.env.NODE_ENV];

export const needsGetJobId = ['develop', 'staging'].includes(process.env.NODE_ENV);

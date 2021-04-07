require('babel-polyfill');
require('babel-register');

const { getEnvFromNetwork } = require('../environments');

const PeriodRegistry = artifacts.require('PeriodRegistry');
const SLARegistry = artifacts.require('SLARegistry');
const SLORegistry = artifacts.require('SLORegistry');
const StakeRegistry = artifacts.require('StakeRegistry');
const MessengerRegistry = artifacts.require('MessengerRegistry');
const Details = artifacts.require('Details');

// For dev
const bDSLA = artifacts.require('bDSLA');

module.exports = (deployer, network) => {
  deployer.then(async () => {
    await deployer.deploy(Details);
    if (!!process.env.ONLY_DETAILS === true) return;

    const envParameters = getEnvFromNetwork(network);
    const dslaTokenAddress = envParameters.dslaTokenAddress
    || (await deployer.deploy(bDSLA)).address;
    const periodRegistry = await deployer.deploy(PeriodRegistry);
    const sloRegistry = await deployer.deploy(SLORegistry);
    const messengerRegistry = await deployer.deploy(MessengerRegistry);

    const stakeRegistry = await deployer.deploy(
      StakeRegistry,
      dslaTokenAddress,
    );

    await deployer.deploy(
      SLARegistry,
      sloRegistry.address,
      periodRegistry.address,
      messengerRegistry.address,
      stakeRegistry.address,
      envParameters.checkPastPeriods,
    );
  });
};

require('babel-polyfill');
require('babel-register');

const { getChainlinkJobId } = require('../test/helpers');
const { getEnvFromNetwork, needsGetJobId } = require('../environments');

const PeriodRegistry = artifacts.require('PeriodRegistry');
const SLARegistry = artifacts.require('SLARegistry');
const SLORegistry = artifacts.require('SLORegistry');
const StakeRegistry = artifacts.require('StakeRegistry');
const MessengerRegistry = artifacts.require('MessengerRegistry');
const NetworkAnalytics = artifacts.require('NetworkAnalytics');
const SEMessenger = artifacts.require('SEMessenger');
const Details = artifacts.require('Details');

// For dev
const bDSLA = artifacts.require('bDSLA');

module.exports = (deployer, network) => {
  if (!/testing/i.test(network)) {
    deployer.then(async () => {
      if (!!process.env.ONLY_DETAILS === true) {
        return deployer.deploy(Details);
      }
      await deployer.deploy(Details);
      const env = getEnvFromNetwork(network);
      const dslaTokenAddress = env?.dslaTokenAddress || (await deployer.deploy(bDSLA)).address;
      const periodRegistry = await deployer.deploy(PeriodRegistry);
      const sloRegistry = await deployer.deploy(SLORegistry);
      const messengerRegistry = await deployer.deploy(MessengerRegistry);

      const chainlinkJobId = !needsGetJobId ? env.chainlinkJobId : await getChainlinkJobId();

      const networkAnalytics = await deployer.deploy(
        NetworkAnalytics,
        env.chainlinkOracleAddress,
        env.chainlinkTokenAddress,
        chainlinkJobId,
        periodRegistry.address,
      );

      const seMessenger = await deployer.deploy(
        SEMessenger,
        env.chainlinkOracleAddress,
        env.chainlinkTokenAddress,
        chainlinkJobId,
        networkAnalytics.address,
      );

      const stakeRegistry = await deployer.deploy(
        StakeRegistry,
        dslaTokenAddress,
      );

      const slaRegistry = await deployer.deploy(
        SLARegistry,
        sloRegistry.address,
        periodRegistry.address,
        messengerRegistry.address,
        stakeRegistry.address,
      );

      return slaRegistry.setMessengerSLARegistryAddress(
        seMessenger.address,
      );
    });
  }
};

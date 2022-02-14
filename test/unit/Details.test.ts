const hre = require('hardhat');
import {
  ERC20PresetMinterPauser,
  ERC20PresetMinterPauser__factory,
  SLA,
  SLA__factory,
  SLARegistry,
  StakeRegistry,
  Details,
} from '../../typechain';
const { ethers, waffle, deployments, getNamedAccounts } = hre;
import {
  CONTRACT_NAMES,
  DEPLOYMENT_TAGS,
  PERIOD_TYPE,
  SENetworkNames,
  SENetworkNamesBytes32,
  SENetworks,
  SLO_TYPE,
} from '../../constants';
const { deployMockContract } = waffle;
import { expect } from '../chai-setup';
import { fromWei, toWei } from 'web3-utils';

const baseSLAConfig = {
  sloValue: 50 * 10 ** 3,
  sloType: SLO_TYPE.GreaterThan,
  whitelisted: false,
  periodType: PERIOD_TYPE.WEEKLY,
  initialPeriodId: 0,
  finalPeriodId: 10,
  extraData: [SENetworkNamesBytes32[SENetworks.ONE]],
  leverage: 1,
};

const mintAmount = '1000000';

const setup = deployments.createFixture(async () => {
  const { deployments } = hre;
  const { deployer, notDeployer } = await getNamedAccounts();
  await deployments.fixture(DEPLOYMENT_TAGS.SLA_REGISTRY_FIXTURE);
  const dslaToken: ERC20PresetMinterPauser = await ethers.getContract(
    CONTRACT_NAMES.DSLA
  );

  const slaRegistry: SLARegistry = await ethers.getContract(
    CONTRACT_NAMES.SLARegistry
  );

  const details: Details = await ethers.getContract(CONTRACT_NAMES.Details);

  const stakeRegistry: StakeRegistry = await ethers.getContract(
    CONTRACT_NAMES.StakeRegistry
  );
  await dslaToken.mint(deployer, toWei(mintAmount));
  await dslaToken.mint(notDeployer, toWei(mintAmount));
  await dslaToken.approve(stakeRegistry.address, toWei(mintAmount));
  const iMessengerArtifact = await deployments.getArtifact(
    CONTRACT_NAMES.IMessenger
  );
  const mockMessenger = await deployMockContract(
    await ethers.getSigner(deployer),
    iMessengerArtifact.abi
  );

  let tx = await slaRegistry.createSLA(
    baseSLAConfig.sloValue,
    baseSLAConfig.sloType,
    baseSLAConfig.whitelisted,
    mockMessenger.address,
    baseSLAConfig.periodType,
    baseSLAConfig.initialPeriodId,
    baseSLAConfig.finalPeriodId,
    'dummy-ipfs-hash',
    baseSLAConfig.extraData,
    baseSLAConfig.leverage
  );

  await tx.wait();
  const slaAddress = (await slaRegistry.allSLAs()).slice(-1)[0];
  const sla: SLA = await ethers.getContractAt(CONTRACT_NAMES.SLA, slaAddress);
  tx = await sla.addAllowedTokens(dslaToken.address);
  await tx.wait();
  return {
    slaRegistry,
    sla,
    dslaToken,
    details,
  };
});

type Fixture = {
  slaRegistry: SLARegistry;
  sla: SLA;
  dslaToken: ERC20PresetMinterPauser;
  details: Details;
};

describe(CONTRACT_NAMES.Details, function () {
  let fixture: Fixture;
  let deployer: string;
  let notDeployer: string;

  beforeEach(async function () {
    deployer = (await getNamedAccounts()).deployer;
    notDeployer = (await getNamedAccounts()).notDeployer;
    fixture = await setup();
  });

  it('test get SLA dynamic details match the creation details', async function () {
    const { details, sla } = fixture;
    const d = await details.getSLADynamicDetails(sla.address);

    expect(d).to.have.own.property('stakersCount')
    expect(d['stakersCount']).to.equal(sla.stakers.length)

    expect(d).to.have.own.property('nextVerifiablePeriod')
    expect(d['nextVerifiablePeriod']).to.equal(baseSLAConfig.initialPeriodId)

    expect(d).to.have.own.property('leverage')
    expect(d['leverage']).to.equal(baseSLAConfig.leverage)

  });

  it('test get SLA details arrays have the correct structure', async function (){
    const { details, sla } = fixture;
    const darr = await details.getSLADetailsArrays(sla.address);

    expect(darr).to.have.own.property('periodSLIs')
    expect(darr['periodSLIs']).to.be.an('array').lengthOf.least(1)
    expect(darr['periodSLIs'][0]).to.be.an('array')
    expect(darr['periodSLIs'][0]).to.have.own.property('timestamp')
    expect(darr['periodSLIs'][0]).to.have.own.property('sli')
    expect(darr['periodSLIs'][0]).to.have.own.property('status')

    expect(darr).to.have.own.property('tokensStake')
    expect(darr['tokensStake']).to.be.an('array').lengthOf.least(1)
    expect(darr['tokensStake'][0]).to.be.an('array')
    expect(darr['tokensStake'][0]).to.have.own.property('tokenAddress')
    expect(darr['tokensStake'][0]['tokenAddress']).to.be.properAddress;
    expect(darr['tokensStake'][0]).to.have.own.property('totalStake')
    expect(darr['tokensStake'][0]).to.have.own.property('usersPool')
    expect(darr['tokensStake'][0]).to.have.own.property('providerPool')

  });


});

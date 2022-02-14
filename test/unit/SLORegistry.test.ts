const hre = require('hardhat');
import {
	Details,
	ERC20PresetMinterPauser,
	SLA,
	SLARegistry,
	SLORegistry,
	SLORegistry__factory,
	StakeRegistry
} from '../../typechain';
const { ethers, deployments, getNamedAccounts } = hre;
import { CONTRACT_NAMES, DEPLOYMENT_TAGS, SENetworkNamesBytes32, SENetworks, SLO_TYPE } from '../../constants';
import { expect } from '../chai-setup';
import { PERIOD_TYPE } from '../../constants';
import { deployMockContract } from 'ethereum-waffle';
import { toWei } from 'web3-utils';

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
	const sloRegistry: SLORegistry = await ethers.getContract(
		CONTRACT_NAMES.SLORegistry
	);

	const slaRegistry: SLARegistry = await ethers.getContract(
		CONTRACT_NAMES.SLARegistry
	);

	return {
		sloRegistry,
		slaRegistry
	};
});

type Fixture = {
	sloRegistry: SLORegistry;
	slaRegistry: SLARegistry;
};

describe(CONTRACT_NAMES.SLORegistry, function () {
	let fixture: Fixture;
	let deployer: string;
	beforeEach(async function () {
		deployer = (await getNamedAccounts()).deployer;
		fixture = await setup();
	});

	it("should revert if SLARegistry is already set", async function () {
		const { sloRegistry } = fixture;
		const deployerSLO = SLORegistry__factory.connect(
			sloRegistry.address,
			await ethers.getSigner(deployer)
		)
		await expect(deployerSLO.setSLARegistry()).to.be.revertedWith(
			"SLARegistry address has already been set"
		);
	})

	it("should emit SLORegistered when creating SLA from SLARegistry", async () => {
		const { slaRegistry, sloRegistry } = fixture;
		const stakeRegistry: StakeRegistry = await ethers.getContract(
			CONTRACT_NAMES.StakeRegistry
		);
		const dslaToken: ERC20PresetMinterPauser = await ethers.getContract(
			CONTRACT_NAMES.DSLA
		);

		const { deployer, notDeployer } = await getNamedAccounts();
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
		await expect(slaRegistry.createSLA(
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
		)).to.emit(sloRegistry, "SLORegistered");
	})
})
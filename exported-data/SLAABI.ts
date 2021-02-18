import { AbiItem } from 'web3-utils/types';

export const SLAABI: AbiItem[] = [
  {
    inputs: [
      { internalType: 'address', name: '_owner', type: 'address' },
      { internalType: 'contract SLO', name: '_SLO', type: 'address' },
      { internalType: 'string', name: '_ipfsHash', type: 'string' },
      { internalType: 'address', name: '_messengerAddress', type: 'address' },
      { internalType: 'uint256[]', name: '_periodIds', type: 'uint256[]' },
      {
        internalType: 'enum PeriodRegistry.PeriodType',
        name: '_periodType',
        type: 'uint8',
      },
      { internalType: 'address', name: '_stakeRegistry', type: 'address' },
      { internalType: 'address', name: '_periodRegistry', type: 'address' },
      { internalType: 'bool', name: '_whitelisted', type: 'bool' },
      { internalType: 'bytes32', name: '_extraData', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_periodId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_sli',
        type: 'uint256',
      },
    ],
    name: 'SLANotRespected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_timestamp',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_sli',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_periodId',
        type: 'uint256',
      },
    ],
    name: 'SLICreated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DSLAburnRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_tokenAddress', type: 'address' },
    ],
    name: '_claimCompensation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_tokenAddress', type: 'address' },
    ],
    name: 'addAllowedTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_userAddress', type: 'address' },
    ],
    name: 'addUserToWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'allowedTokens',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'creationBlockNumber',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dslaTokenAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'extraData',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllowedTokensLength',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_tokenAddress', type: 'address' },
    ],
    name: 'getStakeholdersPositions',
    outputs: [
      { internalType: 'uint256', name: 'providerStake', type: 'uint256' },
      { internalType: 'uint256', name: 'usersStake', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_staker', type: 'address' },
      { internalType: 'uint256', name: '_allowedTokenIndex', type: 'uint256' },
    ],
    name: 'getTokenStake',
    outputs: [
      { internalType: 'address', name: 'tokenAddress', type: 'address' },
      { internalType: 'uint256', name: 'stake', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ipfsHash',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_tokenAddress', type: 'address' },
    ],
    name: 'isAllowedToken',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_staker', type: 'address' }],
    name: 'isStaker',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'messengerAddress',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumDSLAStakedTier1',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumDSLAStakedTier2',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimumDSLAStakedTier3',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'periodIds',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'periodRegistry',
    outputs: [
      { internalType: 'contract PeriodRegistry', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'periodType',
    outputs: [
      {
        internalType: 'enum PeriodRegistry.PeriodType',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address', name: '', type: 'address' },
    ],
    name: 'providerPeriodsRewards',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_userAddress', type: 'address' },
    ],
    name: 'removeUserFromWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'slaPeriods',
    outputs: [
      { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
      { internalType: 'uint256', name: 'sli', type: 'uint256' },
      { internalType: 'enum SLA.Status', name: 'status', type: 'uint8' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'slaPeriodsLength',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'slaRegistry',
    outputs: [
      { internalType: 'contract SLARegistry', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'slo',
    outputs: [{ internalType: 'contract SLO', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'stakers',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'usersCompensationPools',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'usersTotalPositions',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelisted',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'yearlyPeriods',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_sli', type: 'uint256' },
      { internalType: 'uint256', name: '_periodId', type: 'uint256' },
    ],
    name: 'registerSLI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_periodId', type: 'uint256' }],
    name: 'isAllowedPeriod',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'address', name: '_token', type: 'address' },
    ],
    name: 'stakeTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'address', name: '_tokenAddress', type: 'address' },
    ],
    name: 'withdrawStakedTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_tokenAddress', type: 'address' },
    ],
    name: 'claimUserCompensation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDetails',
    outputs: [
      { internalType: 'address', name: '_slaOwner', type: 'address' },
      { internalType: 'string', name: '_ipfsHash', type: 'string' },
      { internalType: 'contract SLO', name: '_SLO', type: 'address' },
      {
        components: [
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'uint256', name: 'sli', type: 'uint256' },
          { internalType: 'enum SLA.Status', name: 'status', type: 'uint8' },
        ],
        internalType: 'struct SLA.SLAPeriod[]',
        name: '_SLAPeriods',
        type: 'tuple[]',
      },
      { internalType: 'uint256', name: '_stakersCount', type: 'uint256' },
      {
        components: [
          { internalType: 'address', name: 'tokenAddress', type: 'address' },
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
        ],
        internalType: 'struct SLA.TokenStake[]',
        name: '_tokensStake',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'breachedContract',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
];

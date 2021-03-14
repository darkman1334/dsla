import { AbiItem } from 'web3-utils/types';

export const DetailsABI: AbiItem[] = [
  {
    inputs: [{ internalType: 'address', name: '_slaAddress', type: 'address' }],
    name: 'getSLADynamicDetails',
    outputs: [
      { internalType: 'bool', name: 'breachedContract', type: 'bool' },
      { internalType: 'uint256', name: 'stakersCount', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'nextVerifiablePeriod',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [{ internalType: 'address', name: '_slaAddress', type: 'address' }],
    name: 'getSLAStaticDetails',
    outputs: [
      { internalType: 'address', name: 'slaOwner', type: 'address' },
      { internalType: 'address', name: 'sloAddress', type: 'address' },
      { internalType: 'bool', name: 'whiteListed', type: 'bool' },
      {
        internalType: 'enum PeriodRegistry.PeriodType',
        name: 'periodType',
        type: 'uint8',
      },
      {
        internalType: 'enum SLORegistry.SLOType',
        name: 'sloType',
        type: 'uint8',
      },
      { internalType: 'uint256', name: 'sloValue', type: 'uint256' },
      { internalType: 'uint256', name: 'creationBlockNumber', type: 'uint256' },
      { internalType: 'uint256', name: 'slaId', type: 'uint256' },
      { internalType: 'string', name: 'ipfsHash', type: 'string' },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [{ internalType: 'address', name: '_slaAddress', type: 'address' }],
    name: 'getSLADetailsArrays',
    outputs: [
      { internalType: 'uint256[]', name: 'periodIDs', type: 'uint256[]' },
      {
        components: [
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'uint256', name: 'sli', type: 'uint256' },
          { internalType: 'enum SLA.Status', name: 'status', type: 'uint8' },
        ],
        internalType: 'struct SLA.PeriodSLI[]',
        name: 'periodSLIs',
        type: 'tuple[]',
      },
      {
        components: [
          { internalType: 'address', name: 'tokenAddress', type: 'address' },
          { internalType: 'uint256', name: 'totalStake', type: 'uint256' },
          { internalType: 'uint256', name: 'usersPool', type: 'uint256' },
          { internalType: 'uint256', name: 'providerPool', type: 'uint256' },
        ],
        internalType: 'struct Details.TokenStake[]',
        name: 'tokensStake',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      { internalType: 'address', name: '_slaAddress', type: 'address' },
      { internalType: 'address', name: '_owner', type: 'address' },
    ],
    name: 'getDTokensDetails',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'tokenAddress', type: 'address' },
          { internalType: 'uint256', name: 'totalSupply', type: 'uint256' },
          { internalType: 'address', name: 'dTokenAddress', type: 'address' },
          { internalType: 'string', name: 'dTokenSymbol', type: 'string' },
          { internalType: 'string', name: 'dTokenName', type: 'string' },
          { internalType: 'uint256', name: 'balance', type: 'uint256' },
          { internalType: 'uint256', name: 'allowance', type: 'uint256' },
        ],
        internalType: 'struct Details.DtokenDetails[]',
        name: 'dpTokens',
        type: 'tuple[]',
      },
      {
        components: [
          { internalType: 'address', name: 'tokenAddress', type: 'address' },
          { internalType: 'uint256', name: 'totalSupply', type: 'uint256' },
          { internalType: 'address', name: 'dTokenAddress', type: 'address' },
          { internalType: 'string', name: 'dTokenSymbol', type: 'string' },
          { internalType: 'string', name: 'dTokenName', type: 'string' },
          { internalType: 'uint256', name: 'balance', type: 'uint256' },
          { internalType: 'uint256', name: 'allowance', type: 'uint256' },
        ],
        internalType: 'struct Details.DtokenDetails[]',
        name: 'duTokens',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
];

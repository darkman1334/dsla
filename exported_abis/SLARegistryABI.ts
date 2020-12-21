export const SLARegistryABI: Array<object> = [
  {
    inputs: [
      {
        internalType: 'contract IMessenger',
        name: '_messengerAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract SLA',
        name: 'sla',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'SLACreated',
    type: 'event',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'SLAs',
    outputs: [{ internalType: 'contract SLA', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'messenger',
    outputs: [
      { internalType: 'contract IMessenger', name: '', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_owner', type: 'address' },
      { internalType: 'bytes32[]', name: '_SLONames', type: 'bytes32[]' },
      { internalType: 'contract SLO[]', name: '_SLOs', type: 'address[]' },
      { internalType: 'uint256', name: '_stake', type: 'uint256' },
      { internalType: 'string', name: '_ipfsHash', type: 'string' },
      { internalType: 'uint256', name: '_sliInterval', type: 'uint256' },
      {
        internalType: 'contract bDSLAToken',
        name: '_tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_sla_period_starts',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_sla_period_ends',
        type: 'uint256[]',
      },
    ],
    name: 'createSLA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_periodId', type: 'uint256' },
      { internalType: 'contract SLA', name: '_sla', type: 'address' },
      { internalType: 'bytes32', name: '_sloName', type: 'bytes32' },
    ],
    name: 'requestSLI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
    name: 'userSLAs',
    outputs: [{ internalType: 'contract SLA[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
    name: 'userSLACount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allSLAs',
    outputs: [{ internalType: 'contract SLA[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'SLACount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_slaOwner', type: 'address' }],
    name: 'getActivePool',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'SLAaddress', type: 'address' },
          { internalType: 'uint256', name: 'stake', type: 'uint256' },
          { internalType: 'string', name: 'assetName', type: 'string' },
        ],
        internalType: 'struct SLARegistry.ActivePool[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

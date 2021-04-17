import { AbiItem } from 'web3-utils/types';

export const SLORegistryABI: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'sla', type: 'address' },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'sloValue',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'enum SLORegistry.SLOType',
        name: 'sloType',
        type: 'uint8',
      },
    ],
    name: 'SLORegistered',
    type: 'event',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'registeredSLO',
    outputs: [
      { internalType: 'uint256', name: 'sloValue', type: 'uint256' },
      {
        internalType: 'enum SLORegistry.SLOType',
        name: 'sloType',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'setSLARegistry',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_sloValue', type: 'uint256' },
      {
        internalType: 'enum SLORegistry.SLOType',
        name: '_sloType',
        type: 'uint8',
      },
      { internalType: 'address', name: '_slaAddress', type: 'address' },
    ],
    name: 'registerSLO',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_value', type: 'uint256' },
      { internalType: 'address', name: '_slaAddress', type: 'address' },
    ],
    name: 'isRespected',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
];

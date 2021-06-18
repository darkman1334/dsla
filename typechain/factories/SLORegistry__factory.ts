/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SLORegistry, SLORegistryInterface } from "../SLORegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sla",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sloValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum SLORegistry.SLOType",
        name: "sloType",
        type: "uint8",
      },
    ],
    name: "SLORegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_slaAddress",
        type: "address",
      },
    ],
    name: "isRespected",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_sloValue",
        type: "uint256",
      },
      {
        internalType: "enum SLORegistry.SLOType",
        name: "_sloType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_slaAddress",
        type: "address",
      },
    ],
    name: "registerSLO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "registeredSLO",
    outputs: [
      {
        internalType: "uint256",
        name: "sloValue",
        type: "uint256",
      },
      {
        internalType: "enum SLORegistry.SLOType",
        name: "sloType",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setSLARegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061053c806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630c7ad72b146100515780631993b9df14610066578063a7b72ac51461008f578063f3881589146100b0575b600080fd5b61006461005f3660046103ae565b6100b8565b005b610079610074366004610382565b610197565b60405161008691906103fd565b60405180910390f35b6100a261009d366004610360565b6102d9565b6040516100869291906104e8565b6100646102f5565b6000546001600160a01b031633146100eb5760405162461bcd60e51b81526004016100e290610408565b60405180910390fd5b604051806040016040528084815260200183600581111561010857fe5b90526001600160a01b0382166000908152600160208181526040909220835181559183015182820180549192909160ff19169083600581111561014757fe5b0217905550905050806001600160a01b03167fc382b63ab3cdf2c0a86390b2ea6449f63ca4135a3feb56acebddc929412d45a9848460405161018a9291906104e8565b60405180910390a2505050565b60006101a1610332565b6001600160a01b038316600090815260016020818152604092839020835180850190945280548452918201549083019060ff1660058111156101df57fe5b60058111156101ea57fe5b9052506020810151815191925090600082600581111561020657fe5b141561021857851492506102d3915050565b600182600581111561022657fe5b14156102395785141592506102d3915050565b600282600581111561024757fe5b141561025957851092506102d3915050565b600382600581111561026757fe5b141561027a5785111592506102d3915050565b600482600581111561028857fe5b141561029a57851192506102d3915050565b60058260058111156102a857fe5b14156102bb5785101592506102d3915050565b60405162461bcd60e51b81526004016100e2906104a4565b92915050565b6001602081905260009182526040909120805491015460ff1682565b6000546001600160a01b03161561031e5760405162461bcd60e51b81526004016100e29061045c565b600080546001600160a01b03191633179055565b604080518082019091526000808252602082015290565b80356001600160a01b03811681146102d357600080fd5b600060208284031215610371578081fd5b61037b8383610349565b9392505050565b60008060408385031215610394578081fd5b823591506103a58460208501610349565b90509250929050565b6000806000606084860312156103c2578081fd5b833592506020840135600681106103d7578182fd5b915060408401356001600160a01b03811681146103f2578182fd5b809150509250925092565b901515815260200190565b60208082526034908201527f53686f756c64206f6e6c792062652063616c6c6564207573696e67207468652060408201527314d310549959da5cdd1c9e4818dbdb9d1c9858dd60621b606082015260800190565b60208082526028908201527f534c41526567697374727920616464726573732068617320616c7265616479206040820152671899595b881cd95d60c21b606082015260800190565b60208082526024908201527f6973526573706563746564207761736e27742065786563757465642070726f7060408201526365726c7960e01b606082015260800190565b82815260408101600683106104f957fe5b826020830152939250505056fea26469706673582212209ea9acf684f5a6be65b54a4936b99dfc4c39857e23e0b5d4d1101df4fd35c45f64736f6c63430006060033";

export class SLORegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SLORegistry> {
    return super.deploy(overrides || {}) as Promise<SLORegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SLORegistry {
    return super.attach(address) as SLORegistry;
  }
  connect(signer: Signer): SLORegistry__factory {
    return super.connect(signer) as SLORegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SLORegistryInterface {
    return new utils.Interface(_abi) as SLORegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SLORegistry {
    return new Contract(address, _abi, signerOrProvider) as SLORegistry;
  }
}

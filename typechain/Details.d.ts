/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DetailsInterface extends ethers.utils.Interface {
  functions: {
    "getDTokensDetails(address,address)": FunctionFragment;
    "getSLADetailsArrays(address)": FunctionFragment;
    "getSLADynamicDetails(address)": FunctionFragment;
    "getSLAStaticDetails(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getDTokensDetails",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSLADetailsArrays",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSLADynamicDetails",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSLAStaticDetails",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDTokensDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSLADetailsArrays",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSLADynamicDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSLAStaticDetails",
    data: BytesLike
  ): Result;

  events: {};
}

export class Details extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DetailsInterface;

  functions: {
    getDTokensDetails(
      _slaAddress: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, string, string, string, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[],
        ([string, BigNumber, string, string, string, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[]
      ] & {
        dpTokens: ([
          string,
          BigNumber,
          string,
          string,
          string,
          BigNumber,
          BigNumber
        ] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[];
        duTokens: ([
          string,
          BigNumber,
          string,
          string,
          string,
          BigNumber,
          BigNumber
        ] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[];
      }
    >;

    getSLADetailsArrays(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, BigNumber, number] & {
          timestamp: BigNumber;
          sli: BigNumber;
          status: number;
        })[],
        ([string, BigNumber, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalStake: BigNumber;
          usersPool: BigNumber;
          providerPool: BigNumber;
        })[]
      ] & {
        periodSLIs: ([BigNumber, BigNumber, number] & {
          timestamp: BigNumber;
          sli: BigNumber;
          status: number;
        })[];
        tokensStake: ([string, BigNumber, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalStake: BigNumber;
          usersPool: BigNumber;
          providerPool: BigNumber;
        })[];
      }
    >;

    getSLADynamicDetails(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        breachedContract: boolean;
        stakersCount: BigNumber;
        nextVerifiablePeriod: BigNumber;
        leverage: BigNumber;
      }
    >;

    getSLAStaticDetails(
      _slaAddress: string,
      _sloRegistry: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        number,
        number,
        string
      ] & {
        slaOwner: string;
        messengerAddress: string;
        sloValue: BigNumber;
        creationBlockNumber: BigNumber;
        slaId: BigNumber;
        initialPeriodId: BigNumber;
        finalPeriodId: BigNumber;
        whiteListed: boolean;
        periodType: number;
        sloType: number;
        ipfsHash: string;
      }
    >;
  };

  getDTokensDetails(
    _slaAddress: string,
    _owner: string,
    overrides?: CallOverrides
  ): Promise<
    [
      ([string, BigNumber, string, string, string, BigNumber, BigNumber] & {
        tokenAddress: string;
        totalSupply: BigNumber;
        dTokenAddress: string;
        dTokenSymbol: string;
        dTokenName: string;
        balance: BigNumber;
        allowance: BigNumber;
      })[],
      ([string, BigNumber, string, string, string, BigNumber, BigNumber] & {
        tokenAddress: string;
        totalSupply: BigNumber;
        dTokenAddress: string;
        dTokenSymbol: string;
        dTokenName: string;
        balance: BigNumber;
        allowance: BigNumber;
      })[]
    ] & {
      dpTokens: ([
        string,
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber
      ] & {
        tokenAddress: string;
        totalSupply: BigNumber;
        dTokenAddress: string;
        dTokenSymbol: string;
        dTokenName: string;
        balance: BigNumber;
        allowance: BigNumber;
      })[];
      duTokens: ([
        string,
        BigNumber,
        string,
        string,
        string,
        BigNumber,
        BigNumber
      ] & {
        tokenAddress: string;
        totalSupply: BigNumber;
        dTokenAddress: string;
        dTokenSymbol: string;
        dTokenName: string;
        balance: BigNumber;
        allowance: BigNumber;
      })[];
    }
  >;

  getSLADetailsArrays(
    _slaAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [
      ([BigNumber, BigNumber, number] & {
        timestamp: BigNumber;
        sli: BigNumber;
        status: number;
      })[],
      ([string, BigNumber, BigNumber, BigNumber] & {
        tokenAddress: string;
        totalStake: BigNumber;
        usersPool: BigNumber;
        providerPool: BigNumber;
      })[]
    ] & {
      periodSLIs: ([BigNumber, BigNumber, number] & {
        timestamp: BigNumber;
        sli: BigNumber;
        status: number;
      })[];
      tokensStake: ([string, BigNumber, BigNumber, BigNumber] & {
        tokenAddress: string;
        totalStake: BigNumber;
        usersPool: BigNumber;
        providerPool: BigNumber;
      })[];
    }
  >;

  getSLADynamicDetails(
    _slaAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, BigNumber, BigNumber, BigNumber] & {
      breachedContract: boolean;
      stakersCount: BigNumber;
      nextVerifiablePeriod: BigNumber;
      leverage: BigNumber;
    }
  >;

  getSLAStaticDetails(
    _slaAddress: string,
    _sloRegistry: string,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      number,
      number,
      string
    ] & {
      slaOwner: string;
      messengerAddress: string;
      sloValue: BigNumber;
      creationBlockNumber: BigNumber;
      slaId: BigNumber;
      initialPeriodId: BigNumber;
      finalPeriodId: BigNumber;
      whiteListed: boolean;
      periodType: number;
      sloType: number;
      ipfsHash: string;
    }
  >;

  callStatic: {
    getDTokensDetails(
      _slaAddress: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, string, string, string, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[],
        ([string, BigNumber, string, string, string, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[]
      ] & {
        dpTokens: ([
          string,
          BigNumber,
          string,
          string,
          string,
          BigNumber,
          BigNumber
        ] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[];
        duTokens: ([
          string,
          BigNumber,
          string,
          string,
          string,
          BigNumber,
          BigNumber
        ] & {
          tokenAddress: string;
          totalSupply: BigNumber;
          dTokenAddress: string;
          dTokenSymbol: string;
          dTokenName: string;
          balance: BigNumber;
          allowance: BigNumber;
        })[];
      }
    >;

    getSLADetailsArrays(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([BigNumber, BigNumber, number] & {
          timestamp: BigNumber;
          sli: BigNumber;
          status: number;
        })[],
        ([string, BigNumber, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalStake: BigNumber;
          usersPool: BigNumber;
          providerPool: BigNumber;
        })[]
      ] & {
        periodSLIs: ([BigNumber, BigNumber, number] & {
          timestamp: BigNumber;
          sli: BigNumber;
          status: number;
        })[];
        tokensStake: ([string, BigNumber, BigNumber, BigNumber] & {
          tokenAddress: string;
          totalStake: BigNumber;
          usersPool: BigNumber;
          providerPool: BigNumber;
        })[];
      }
    >;

    getSLADynamicDetails(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, BigNumber, BigNumber, BigNumber] & {
        breachedContract: boolean;
        stakersCount: BigNumber;
        nextVerifiablePeriod: BigNumber;
        leverage: BigNumber;
      }
    >;

    getSLAStaticDetails(
      _slaAddress: string,
      _sloRegistry: string,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        number,
        number,
        string
      ] & {
        slaOwner: string;
        messengerAddress: string;
        sloValue: BigNumber;
        creationBlockNumber: BigNumber;
        slaId: BigNumber;
        initialPeriodId: BigNumber;
        finalPeriodId: BigNumber;
        whiteListed: boolean;
        periodType: number;
        sloType: number;
        ipfsHash: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getDTokensDetails(
      _slaAddress: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSLADetailsArrays(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSLADynamicDetails(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSLAStaticDetails(
      _slaAddress: string,
      _sloRegistry: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDTokensDetails(
      _slaAddress: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSLADetailsArrays(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSLADynamicDetails(
      _slaAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSLAStaticDetails(
      _slaAddress: string,
      _sloRegistry: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

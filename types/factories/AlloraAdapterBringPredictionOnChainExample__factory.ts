/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  AlloraAdapterBringPredictionOnChainExample,
  AlloraAdapterBringPredictionOnChainExampleInterface,
} from "../AlloraAdapterBringPredictionOnChainExample";

const _abi = [
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "alloraAdapter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IAlloraAdapter",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "callProtocolFunctionWithAlloraAdapterPredictionValue",
    inputs: [
      {
        name: "protocolFunctionArgument",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "alloraAdapterData",
        type: "tuple",
        internalType: "struct AlloraAdapterNumericData",
        components: [
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "numericData",
            type: "tuple",
            internalType: "struct NumericData",
            components: [
              {
                name: "topicId",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "timestamp",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "extraData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "numericValues",
                type: "uint256[]",
                internalType: "uint256[]",
              },
            ],
          },
          {
            name: "extraData",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "callProtocolFunctionWithExistingValue",
    inputs: [
      {
        name: "protocolFunctionArgument",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "topicId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setAlloraAdapterContract",
    inputs: [
      {
        name: "alloraAdapter_",
        type: "address",
        internalType: "contract IAlloraAdapter",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "OwnershipTransferStarted",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x6080604052600280546001600160a01b031916734341a3f0a350c2428184a727bab86e16d4ba701817905534801561003657600080fd5b5061004033610045565b6100b1565b600180546001600160a01b031916905561005e81610061565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610897806100c06000396000f3fe6080604052600436106100865760003560e01c806379ba50971161005957806379ba5097146100e85780638da5cb5b146100fd578063afb9790014610133578063e30c397814610153578063f2fde38b1461017157600080fd5b80631b2cdc611461008b57806360d5d371146100a057806369a924d5146100b3578063715018a6146100d3575b600080fd5b61009e61009936600461051e565b610191565b005b61009e6100ae36600461056c565b610214565b3480156100bf57600080fd5b5061009e6100ce3660046105a3565b610337565b3480156100df57600080fd5b5061009e610361565b3480156100f457600080fd5b5061009e610375565b34801561010957600080fd5b506000546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b34801561013f57600080fd5b50600254610117906001600160a01b031681565b34801561015f57600080fd5b506001546001600160a01b0316610117565b34801561017d57600080fd5b5061009e61018c3660046105a3565b6103ef565b60405163504eb21360e01b8152600090734341a3f0a350c2428184a727bab86e16d4ba70189063504eb213906101cb90859060040161066f565b60408051808303816000875af11580156101e9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020d9190610780565b5050505050565b60408051630f6bcd5b60e31b815260048101839052602481019190915260006044820181905290734341a3f0a350c2428184a727bab86e16d4ba701890637b5e6ad8906064016040805180830381865afa158015610276573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029a91906107a5565b9050428160200151610e106102af919061082b565b67ffffffffffffffff1610156103325760405162461bcd60e51b815260206004820152603760248201527f416c6c6f7261416461707465724272696e6750726564696374696f6e4f6e436860448201527f61696e4578616d706c653a207374616c652076616c756500000000000000000060648201526084015b60405180910390fd5b505050565b61033f610460565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b610369610460565b61037360006104ba565b565b60015433906001600160a01b031681146103e35760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b6064820152608401610329565b6103ec816104ba565b50565b6103f7610460565b600180546001600160a01b0383166001600160a01b031990911681179091556104286000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b6000546001600160a01b031633146103735760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610329565b600180546001600160a01b03191690556103ec81600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806040838503121561053157600080fd5b82359150602083013567ffffffffffffffff81111561054f57600080fd5b83016060818603121561056157600080fd5b809150509250929050565b6000806040838503121561057f57600080fd5b50508035926020909101359150565b6001600160a01b03811681146103ec57600080fd5b6000602082840312156105b557600080fd5b81356105c08161058e565b9392505050565b6000808335601e198436030181126105de57600080fd5b830160208101925035905067ffffffffffffffff8111156105fe57600080fd5b80360382131561060d57600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b81835260006001600160fb1b0383111561065657600080fd5b8260051b80836020870137939093016020019392505050565b6000602080835261068084856105c7565b606083860152610694608086018284610614565b91505081850135607e198636030181126106ad57600080fd5b8581019050601f19808684030160408701528135835283820135848401526106d860408301836105c7565b608060408601526106ed608086018284610614565b9150506060830135601e1984360301811261070757600080fd5b9092019384019391823567ffffffffffffffff81111561072657600080fd5b8060051b360386131561073857600080fd5b848203606086015261074b82828861063d565b9550505061075c60408801886105c7565b935091508086850301606087015250610776838383610614565b9695505050505050565b6000806040838503121561079357600080fd5b8251915060208301516105618161058e565b6000604082840312156107b757600080fd5b6040516040810167ffffffffffffffff82821081831117156107e957634e487b7160e01b600052604160045260246000fd5b6040919091528351906001600160c01b038216821461080757600080fd5b908252602084015190808216821461081e57600080fd5b5060208201529392505050565b67ffffffffffffffff81811683821601908082111561085a57634e487b7160e01b600052601160045260246000fd5b509291505056fea2646970667358221220bbf4957a02bbe91b68f1ea60a05e9fecfbff4ae5e6bb8dce3de1047d3b33785e64736f6c63430008150033";

type AlloraAdapterBringPredictionOnChainExampleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlloraAdapterBringPredictionOnChainExampleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlloraAdapterBringPredictionOnChainExample__factory extends ContractFactory {
  constructor(
    ...args: AlloraAdapterBringPredictionOnChainExampleConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AlloraAdapterBringPredictionOnChainExample & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): AlloraAdapterBringPredictionOnChainExample__factory {
    return super.connect(
      runner
    ) as AlloraAdapterBringPredictionOnChainExample__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlloraAdapterBringPredictionOnChainExampleInterface {
    return new Interface(
      _abi
    ) as AlloraAdapterBringPredictionOnChainExampleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AlloraAdapterBringPredictionOnChainExample {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AlloraAdapterBringPredictionOnChainExample;
  }
}

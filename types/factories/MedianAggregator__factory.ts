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
  MedianAggregator,
  MedianAggregatorInterface,
} from "../MedianAggregator";

const _abi = [
  {
    inputs: [],
    name: "UpshotOracleV2MedianAggregatorNoValuesToAggregate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506104f8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e47811da14610030575b600080fd5b61004361003e36600461036d565b610055565b60405190815260200160405180910390f35b815160009080820361007a57604051630c34dc6760e11b815260040160405180910390fd5b60008060005b6002841115610220578660008151811061009c5761009c610435565b60200260200101519150866000815181106100b9576100b9610435565b602002602001015190506000600190505b8481101561010e578781815181106100e4576100e4610435565b60200260200101519350828410156100fa578392505b81841115610106578391505b6001016100ca565b508082036101215750925061028e915050565b600061012e600286610461565b67ffffffffffffffff811115610146576101466102b6565b60405190808252806020026020018201604052801561016f578160200160208202803683370190505b5090506000808060005b88811015610206578b818151811061019357610193610435565b6020026020010151975086881480156101aa575081155b156101b857600191506101fe565b85881480156101c5575082155b156101d357600192506101fe565b8785856101df81610474565b9650815181106101f1576101f1610435565b6020026020010181815250505b600101610179565b50610212600289610461565b9750839a5050505050610080565b8360011461026b576102668760008151811061023e5761023e610435565b60200260200101518860018151811061025957610259610435565b6020026020010151610294565b610287565b8660008151811061027e5761027e610435565b60200260200101515b9450505050505b92915050565b60006102a3600284841861048d565b6102af908484166104af565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156102f5576102f56102b6565b604052919050565b600082601f83011261030e57600080fd5b813567ffffffffffffffff811115610328576103286102b6565b61033b601f8201601f19166020016102cc565b81815284602083860101111561035057600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561038057600080fd5b823567ffffffffffffffff8082111561039857600080fd5b818501915085601f8301126103ac57600080fd5b81356020828211156103c0576103c06102b6565b8160051b6103cf8282016102cc565b928352848101820192828101908a8511156103e957600080fd5b958301955b84871015610407578635825295830195908301906103ee565b975050508601359250508082111561041e57600080fd5b5061042b858286016102fd565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561028e5761028e61044b565b6000600182016104865761048661044b565b5060010190565b6000826104aa57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561028e5761028e61044b56fea264697066735822122003c73c663d45dff07eeb974a5e9fa001a9c0d444900003d114b2a5e07c1c792964736f6c63430008150033";

type MedianAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MedianAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MedianAggregator__factory extends ContractFactory {
  constructor(...args: MedianAggregatorConstructorParams) {
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
      MedianAggregator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MedianAggregator__factory {
    return super.connect(runner) as MedianAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MedianAggregatorInterface {
    return new Interface(_abi) as MedianAggregatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MedianAggregator {
    return new Contract(address, _abi, runner) as unknown as MedianAggregator;
  }
}

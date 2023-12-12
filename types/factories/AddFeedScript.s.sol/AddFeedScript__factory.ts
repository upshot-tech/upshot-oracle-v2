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
import type { NonPayableOverrides } from "../../common";
import type {
  AddFeedScript,
  AddFeedScriptInterface,
} from "../../AddFeedScript.s.sol/AddFeedScript";

const _abi = [
  {
    inputs: [],
    name: "IS_SCRIPT",
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
    inputs: [],
    name: "run",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600b805462ff00ff19166201000117905534801561002157600080fd5b50610718806100316000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c04062261461003b578063f8ccbf4714610045575b600080fd5b61004361006c565b005b600b546100589062010000900460ff1681565b604051901515815260200160405180910390f35b60405163c1978d1f60e01b815260206004820152601960248201527f5343524950545f52554e4e45525f505249564154455f4b4559000000000000006044820152600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa1580156100ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011091906104bc565b6040516001625e79b760e01b0319815260048101829052909150600090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ffa1864990602401602060405180830381865afa158015610169573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018d91906104d5565b60405163ce817d4760e01b81526004810184905290915073b5f9d3beedf68f4246a232d52ae8f005e199b01090737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156101f357600080fd5b505af1158015610207573d6000803e3d6000fd5b5050505061024a6040518060400160405280601781526020017f42726f616463617374207374617274656420627920257300000000000000000081525083610452565b604080516101a081018252600b61016082019081526a121050d2d154881191515160aa1b61018083015281526001600160a01b0384166020820152600081830181905260608201819052662386f26fc100006080830152733ae558be9b1d540f83f0404de9c10efb100d66b260a0830152600160c0830181905260e0830181905273a762c6288ad4cab3750dc615c7cd531d99c6e1696101008401526101208301819052610e1061014084015283518181528085019094529192909181602001602082028036833701905050905073e3ced0f62f7eb2856d37bed128d2b195712d26448160008151811061034057610340610505565b6001600160a01b0392831660209182029290920181019190915260408051808201825285815291820184905251631f67fb4160e31b8152909185169063fb3fda08906103909084906004016105a5565b6020604051808303816000875af11580156103af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103d391906104bc565b507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c6001600160a01b03166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561043257600080fd5b505af1158015610446573d6000803e3d6000fd5b50505050505050505050565b61049782826040516024016104689291906106b8565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b17905261049b565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6000602082840312156104ce57600080fd5b5051919050565b6000602082840312156104e757600080fd5b81516001600160a01b03811681146104fe57600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101561054157602081850181015186830182015201610525565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501945080840160005b8381101561059a5781516001600160a01b031687529582019590820190600101610575565b509495945050505050565b60208152600082516040602084015280516101608060608601526105cd6101c086018361051b565b915060208301516105e960808701826001600160a01b03169052565b50604083015165ffffffffffff811660a087015250606083015160c0860152608083015160e086015260a083015161010061062e818801836001600160a01b03169052565b60c085015191506101206106458189018415159052565b60e0860151925061014061065c818a018515159052565b918601516001600160a01b0316938801939093529184015165ffffffffffff90811661018088015293909101519092166101a08501526020850151848203601f1901604086015291506106af8183610561565b95945050505050565b6040815260006106cb604083018561051b565b905060018060a01b0383166020830152939250505056fea26469706673582212209dd236ac72dbdd45e7a16a55c74818c4d2124b5734ae6f5fb8a2a7498ff5248364736f6c63430008150033";

type AddFeedScriptConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddFeedScriptConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddFeedScript__factory extends ContractFactory {
  constructor(...args: AddFeedScriptConstructorParams) {
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
      AddFeedScript & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AddFeedScript__factory {
    return super.connect(runner) as AddFeedScript__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddFeedScriptInterface {
    return new Interface(_abi) as AddFeedScriptInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AddFeedScript {
    return new Contract(address, _abi, runner) as unknown as AddFeedScript;
  }
}
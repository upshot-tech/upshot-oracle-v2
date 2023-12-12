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
  AverageAggregatorTest,
  AverageAggregatorTestInterface,
} from "../../AverageAggregator.t.sol/AverageAggregatorTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "log_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "log_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "log_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    name: "log_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "log_named_address",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "val",
        type: "uint256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "val",
        type: "int256[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "val",
        type: "address[]",
      },
    ],
    name: "log_named_array",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "val",
        type: "bytes",
      },
    ],
    name: "log_named_bytes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
    ],
    name: "log_named_bytes32",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "log_named_decimal_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "val",
        type: "int256",
      },
    ],
    name: "log_named_int",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "val",
        type: "string",
      },
    ],
    name: "log_named_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "log_named_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "log_string",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "log_uint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "logs",
    type: "event",
  },
  {
    inputs: [],
    name: "IS_TEST",
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
    name: "averageAggregator",
    outputs: [
      {
        internalType: "contract AverageAggregator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeArtifacts",
    outputs: [
      {
        internalType: "string[]",
        name: "excludedArtifacts_",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "excludedContracts_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeSenders",
    outputs: [
      {
        internalType: "address[]",
        name: "excludedSenders_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "failed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "targetArtifactSelectors",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct StdInvariant.FuzzSelector[]",
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetArtifacts",
    outputs: [
      {
        internalType: "string[]",
        name: "targetedArtifacts_",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "targetedContracts_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetInterfaces",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "artifacts",
            type: "string[]",
          },
        ],
        internalType: "struct StdInvariant.FuzzInterface[]",
        name: "targetedInterfaces_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetSelectors",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct StdInvariant.FuzzSelector[]",
        name: "targetedSelectors_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetSenders",
    outputs: [
      {
        internalType: "address[]",
        name: "targetedSenders_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "test_averageAggregator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint248",
        name: "a",
        type: "uint248",
      },
      {
        internalType: "uint248",
        name: "b",
        type: "uint248",
      },
      {
        internalType: "uint248",
        name: "c",
        type: "uint248",
      },
    ],
    name: "test_averageAggregatorFuzz",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_averageAggregatorNoValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260078054600160ff199182168117909255600b8054909116909117905534801561002d57600080fd5b506116da8061003d6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806385226c8111610097578063ba414fa611610066578063ba414fa6146101d2578063cbfb2737146101ea578063e20c9f71146101f2578063fa7626d4146101fa57600080fd5b806385226c8114610182578063916a17c6146101975780639f9d867b1461019f578063b5508aa9146101ca57600080fd5b80633f7286f4116100d35780633f7286f41461014a57806340c1cec61461015257806366d9a9a01461015a5780636c2620b21461016f57600080fd5b80630a9254e4146101055780631ed7831c1461010f5780632ade38801461012d5780633e5e3c2314610142575b600080fd5b61010d610207565b005b610117610252565b6040516101249190610f51565b60405180910390f35b6101356102b4565b6040516101249190610fee565b6101176103f6565b610117610456565b61010d6104b6565b6101626105c2565b60405161012491906110ae565b61010d61017d366004611178565b6106a8565b61018a610801565b60405161012491906111bb565b6101626108d1565b601c546101b2906001600160a01b031681565b6040516001600160a01b039091168152602001610124565b61018a6109b7565b6101da610a87565b6040519015158152602001610124565b61010d610bb4565b610117610cb6565b6007546101da9060ff1681565b60405161021390610f44565b604051809103906000f08015801561022f573d6000803e3d6000fd5b50601c80546001600160a01b0319166001600160a01b0392909216919091179055565b606060148054806020026020016040519081016040528092919081815260200182805480156102aa57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161028c575b5050505050905090565b6060601b805480602002602001604051908101604052809291908181526020016000905b828210156103ed57600084815260208082206040805180820182526002870290920180546001600160a01b03168352600181018054835181870281018701909452808452939591948681019491929084015b828210156103d65783829060005260206000200180546103499061121d565b80601f01602080910402602001604051908101604052809291908181526020018280546103759061121d565b80156103c25780601f10610397576101008083540402835291602001916103c2565b820191906000526020600020905b8154815290600101906020018083116103a557829003601f168201915b50505050508152602001906001019061032a565b5050505081525050815260200190600101906102d8565b50505050905090565b606060168054806020026020016040519081016040528092919081815260200182805480156102aa576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161028c575050505050905090565b606060158054806020026020016040519081016040528092919081815260200182805480156102aa576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161028c575050505050905090565b604080516000815260046020820181815260448301845282840180516001600160e01b03166361236a0360e11b179052925163f28dceb360e01b81529192737109709ecfa91a80626ff3989d68f67f5b1dd12d9263f28dceb39261051b929101611257565b600060405180830381600087803b15801561053557600080fd5b505af1158015610549573d6000803e3d6000fd5b5050601c5460405163723c08ed60e11b81526001600160a01b03909116925063e47811da915061057d908490600401611271565b602060405180830381865afa15801561059a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105be91906112c4565b5050565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156103ed5760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561069057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116106525790505b505050505081525050815260200190600101906105e6565b6040805160038082526080820190925260009160208201606080368337019050509050836001600160f81b0316816000815181106106e8576106e86112dd565b602002602001018181525050826001600160f81b031681600181518110610711576107116112dd565b602002602001018181525050816001600160f81b03168160028151811061073a5761073a6112dd565b6020908102919091010152601c5460405163723c08ed60e11b81526107fb916001600160a01b03169063e47811da90610777908590600401611271565b602060405180830381865afa158015610794573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b891906112c4565b6003846001600160f81b0316866001600160f81b0316886001600160f81b03166107e291906112f3565b6107ec91906112f3565b6107f6919061131a565b610d16565b50505050565b60606018805480602002602001604051908101604052809291908181526020016000905b828210156103ed5783829060005260206000200180546108449061121d565b80601f01602080910402602001604051908101604052809291908181526020018280546108709061121d565b80156108bd5780601f10610892576101008083540402835291602001916108bd565b820191906000526020600020905b8154815290600101906020018083116108a057829003601f168201915b505050505081526020019060010190610825565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156103ed5760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801561099f57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116109615790505b505050505081525050815260200190600101906108f5565b60606017805480602002602001604051908101604052809291908181526020016000905b828210156103ed5783829060005260206000200180546109fa9061121d565b80601f0160208091040260200160405190810160405280929190818152602001828054610a269061121d565b8015610a735780601f10610a4857610100808354040283529160200191610a73565b820191906000526020600020905b815481529060010190602001808311610a5657829003601f168201915b5050505050815260200190600101906109db565b600754600090610100900460ff1615610aa95750600754610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610baf5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b82840152825180830384018152606083019093526000929091610b37917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800161133c565b60408051601f1981840301815290829052610b519161136d565b6000604051808303816000865af19150503d8060008114610b8e576040519150601f19603f3d011682016040523d82523d6000602084013e610b93565b606091505b5091505080806020019051810190610bab9190611389565b9150505b919050565b6040805160038082526080820190925260009160208201606080368337019050509050600181600081518110610bec57610bec6112dd565b602002602001018181525050600281600181518110610c0d57610c0d6112dd565b602002602001018181525050600381600281518110610c2e57610c2e6112dd565b6020908102919091010152601c5460405163723c08ed60e11b8152610cb3916001600160a01b03169063e47811da90610c6b908590600401611271565b602060405180830381865afa158015610c88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cac91906112c4565b6002610d16565b50565b606060138054806020026020016040519081016040528092919081815260200182805480156102aa576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161028c575050505050905090565b8082146105be577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f50604051610d879060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b60608201526020810184905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a160408051818152600a81830152690808080808149a59da1d60b21b60608201526020810183905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a16105be737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610f335760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052610ed2929160200161133c565b60408051601f1981840301815290829052610eec9161136d565b6000604051808303816000865af19150503d8060008114610f29576040519150601f19603f3d011682016040523d82523d6000602084013e610f2e565b606091505b505050505b6007805461ff001916610100179055565b6102f9806113ac83390190565b6020808252825182820181905260009190848201906040850190845b81811015610f925783516001600160a01b031683529284019291840191600101610f6d565b50909695505050505050565b60005b83811015610fb9578181015183820152602001610fa1565b50506000910152565b60008151808452610fda816020860160208601610f9e565b601f01601f19169290920160200192915050565b602080825282518282018190526000919060409081850190600581811b8701840188860187805b8581101561109e57603f198b8503018752825180516001600160a01b031685528901518985018990528051898601819052908a0190606081881b870181019190870190855b8181101561108857605f19898503018352611076848651610fc2565b948e01949350918d019160010161105a565b505050978a019794505091880191600101611015565b50919a9950505050505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101561115257898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101561113d5783516001600160e01b0319168252928b019260019290920191908b0190611113565b50978a019795505050918701916001016110d6565b50919998505050505050505050565b80356001600160f81b0381168114610baf57600080fd5b60008060006060848603121561118d57600080fd5b61119684611161565b92506111a460208501611161565b91506111b260408501611161565b90509250925092565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561121057603f198886030184526111fe858351610fc2565b945092850192908501906001016111e2565b5092979650505050505050565b600181811c9082168061123157607f821691505b60208210810361125157634e487b7160e01b600052602260045260246000fd5b50919050565b60208152600061126a6020830184610fc2565b9392505050565b604080825282519082018190526000906020906060840190828601845b828110156112aa5781518452928401929084019060010161128e565b505050838103938201939093526000835290910192915050565b6000602082840312156112d657600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b8082018082111561131457634e487b7160e01b600052601160045260246000fd5b92915050565b60008261133757634e487b7160e01b600052601260045260246000fd5b500490565b6001600160e01b031983168152815160009061135f816004850160208701610f9e565b919091016004019392505050565b6000825161137f818460208701610f9e565b9190910192915050565b60006020828403121561139b57600080fd5b8151801515811461126a57600080fdfe608060405234801561001057600080fd5b506102d9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e47811da14610030575b600080fd5b61004361003e366004610182565b610055565b60405190815260200160405180910390f35b815160009080820361007a576040516361236a0360e11b815260040160405180910390fd5b6000805b828110156100b5578581815181106100985761009861024a565b6020026020010151826100ab9190610260565b915060010161007e565b506100c08282610281565b925050505b92915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561010a5761010a6100cb565b604052919050565b600082601f83011261012357600080fd5b813567ffffffffffffffff81111561013d5761013d6100cb565b610150601f8201601f19166020016100e1565b81815284602083860101111561016557600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561019557600080fd5b823567ffffffffffffffff808211156101ad57600080fd5b818501915085601f8301126101c157600080fd5b81356020828211156101d5576101d56100cb565b8160051b6101e48282016100e1565b928352848101820192828101908a8511156101fe57600080fd5b958301955b8487101561021c57863582529583019590830190610203565b975050508601359250508082111561023357600080fd5b5061024085828601610112565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b808201808211156100c557634e487b7160e01b600052601160045260246000fd5b60008261029e57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122082fb204ba383b8d8215e330f3733e1a8beea3f7aa6fc2a3bb25c19c8f752318264736f6c63430008150033a26469706673582212203827ef3f659c88804cc67d48fb32fd0e1d7afcf93d98d5a72f9b2715eabf753a64736f6c63430008150033";

type AverageAggregatorTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AverageAggregatorTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AverageAggregatorTest__factory extends ContractFactory {
  constructor(...args: AverageAggregatorTestConstructorParams) {
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
      AverageAggregatorTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): AverageAggregatorTest__factory {
    return super.connect(runner) as AverageAggregatorTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AverageAggregatorTestInterface {
    return new Interface(_abi) as AverageAggregatorTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AverageAggregatorTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AverageAggregatorTest;
  }
}

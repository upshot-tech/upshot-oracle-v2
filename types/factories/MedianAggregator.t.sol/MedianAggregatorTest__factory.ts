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
  MedianAggregatorTest,
  MedianAggregatorTestInterface,
} from "../../MedianAggregator.t.sol/MedianAggregatorTest";

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
    name: "medianAggregator",
    outputs: [
      {
        internalType: "contract MedianAggregator",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "test_medianAggregator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator3",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator4",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator5",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator6",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator7",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator8",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregator9",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "test_medianAggregatorNoValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260078054600160ff199182168117909255600b8054909116909117905534801561002d57600080fd5b50611f488061003d6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063916a17c6116100c3578063b56d1d881161007c578063b56d1d881461023c578063ba414fa614610244578063ca6cd6071461025c578063e20c9f7114610264578063f270f5381461026c578063fa7626d41461027457600080fd5b8063916a17c6146101e957806392dda712146101f1578063994e77f5146101f9578063a018909e14610201578063a085a44f1461022c578063b5508aa91461023457600080fd5b80633e5e3c23116101155780633e5e3c231461019f5780633f7286f4146101a757806366d9a9a0146101af578063763b61df146101c457806384b38501146101cc57806385226c81146101d457600080fd5b80630a9254e4146101525780630c8823c21461015c5780631ed7831c14610164578063274f5094146101825780632ade38801461018a575b600080fd5b61015a610281565b005b61015a6102cc565b61016c6103ab565b6040516101799190611643565b60405180910390f35b61015a61040d565b61019261050c565b60405161017991906116e0565b61016c61064e565b61016c6106ae565b6101b761070e565b60405161017991906117a0565b61015a6107f4565b61015a610956565b6101dc610a62565b6040516101799190611853565b6101b7610b32565b61015a610c18565b61015a610d7a565b601c54610214906001600160a01b031681565b6040516001600160a01b039091168152602001610179565b61015a610e57565b6101dc610f34565b61015a611004565b61024c61107e565b6040519015158152602001610179565b61015a6111ab565b61016c6112ec565b61015a61134c565b60075461024c9060ff1681565b60405161028d90611636565b604051809103906000f0801580156102a9573d6000803e3d6000fd5b50601c80546001600160a01b0319166001600160a01b0392909216919091179055565b604080516002808252606082018352600092602083019080368337019050509050600481600081518110610302576103026118b5565b602002602001018181525050600281600181518110610323576103236118b5565b6020908102919091010152601c5460405163723c08ed60e11b81526103a8916001600160a01b03169063e47811da906103609085906004016118cb565b602060405180830381865afa15801561037d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a1919061191e565b6003611408565b50565b6060601480548060200260200160405190810160405280929190818152602001828054801561040357602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116103e5575b5050505050905090565b6040805160038082526080820190925260009160208201606080368337019050509050600181600081518110610445576104456118b5565b602002602001018181525050600281600181518110610466576104666118b5565b602002602001018181525050600481600281518110610487576104876118b5565b6020908102919091010152601c5460405163723c08ed60e11b81526103a8916001600160a01b03169063e47811da906104c49085906004016118cb565b602060405180830381865afa1580156104e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610505919061191e565b6002611408565b6060601b805480602002602001604051908101604052809291908181526020016000905b8282101561064557600084815260208082206040805180820182526002870290920180546001600160a01b03168352600181018054835181870281018701909452808452939591948681019491929084015b8282101561062e5783829060005260206000200180546105a190611937565b80601f01602080910402602001604051908101604052809291908181526020018280546105cd90611937565b801561061a5780601f106105ef5761010080835404028352916020019161061a565b820191906000526020600020905b8154815290600101906020018083116105fd57829003601f168201915b505050505081526020019060010190610582565b505050508152505081526020019060010190610530565b50505050905090565b60606016805480602002602001604051908101604052809291908181526020018280548015610403576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116103e5575050505050905090565b60606015805480602002602001604051908101604052809291908181526020018280548015610403576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116103e5575050505050905090565b60606019805480602002602001604051908101604052809291908181526020016000905b828210156106455760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156107dc57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161079e5790505b50505050508152505081526020019060010190610732565b60408051600680825260e082019092526000916020820160c08036833701905050905060088160008151811061082c5761082c6118b5565b60200260200101818152505060028160018151811061084d5761084d6118b5565b60200260200101818152505060098160028151811061086e5761086e6118b5565b60200260200101818152505060148160038151811061088f5761088f6118b5565b602002602001018181525050600d816004815181106108b0576108b06118b5565b6020026020010181815250506006816005815181106108d1576108d16118b5565b6020908102919091010152601c5460405163723c08ed60e11b81526103a8916001600160a01b03169063e47811da9061090e9085906004016118cb565b602060405180830381865afa15801561092b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094f919061191e565b6008611408565b604080516000815260046020820181815260448301845282840180516001600160e01b0316630c34dc6760e11b179052925163f28dceb360e01b81529192737109709ecfa91a80626ff3989d68f67f5b1dd12d9263f28dceb3926109bb929101611971565b600060405180830381600087803b1580156109d557600080fd5b505af11580156109e9573d6000803e3d6000fd5b5050601c5460405163723c08ed60e11b81526001600160a01b03909116925063e47811da9150610a1d9084906004016118cb565b602060405180830381865afa158015610a3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5e919061191e565b5050565b60606018805480602002602001604051908101604052809291908181526020016000905b82821015610645578382906000526020600020018054610aa590611937565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad190611937565b8015610b1e5780601f10610af357610100808354040283529160200191610b1e565b820191906000526020600020905b815481529060010190602001808311610b0157829003601f168201915b505050505081526020019060010190610a86565b6060601a805480602002602001604051908101604052809291908181526020016000905b828210156106455760008481526020908190206040805180820182526002860290920180546001600160a01b03168352600181018054835181870281018701909452808452939491938583019392830182828015610c0057602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411610bc25790505b50505050508152505081526020019060010190610b56565b60408051600680825260e082019092526000916020820160c080368337019050509050600581600081518110610c5057610c506118b5565b602002602001018181525050600581600181518110610c7157610c716118b5565b602002602001018181525050600581600281518110610c9257610c926118b5565b602002602001018181525050600581600381518110610cb357610cb36118b5565b602002602001018181525050600581600481518110610cd457610cd46118b5565b602002602001018181525050600581600581518110610cf557610cf56118b5565b6020908102919091010152601c5460405163723c08ed60e11b81526103a8916001600160a01b03169063e47811da90610d329085906004016118cb565b602060405180830381865afa158015610d4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d73919061191e565b6005611408565b60408051600680825260e082019092526000916020820160c080368337019050509050600181600081518110610db257610db26118b5565b602002602001018181525050600181600181518110610dd357610dd36118b5565b602002602001018181525050600281600281518110610df457610df46118b5565b602002602001018181525050600281600381518110610e1557610e156118b5565b602002602001018181525050600281600481518110610e3657610e366118b5565b602002602001018181525050600281600581518110610487576104876118b5565b60408051600680825260e082019092526000916020820160c080368337019050509050600181600081518110610e8f57610e8f6118b5565b602002602001018181525050600281600181518110610eb057610eb06118b5565b602002602001018181525050600381600281518110610ed157610ed16118b5565b602002602001018181525050600481600381518110610ef257610ef26118b5565b602002602001018181525050600581600481518110610f1357610f136118b5565b602002602001018181525050600681600581518110610323576103236118b5565b60606017805480602002602001604051908101604052809291908181526020016000905b82821015610645578382906000526020600020018054610f7790611937565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa390611937565b8015610ff05780601f10610fc557610100808354040283529160200191610ff0565b820191906000526020600020905b815481529060010190602001808311610fd357829003601f168201915b505050505081526020019060010190610f58565b604080516003808252608082019092526000916020820160608036833701905050905060018160008151811061103c5761103c6118b5565b60200260200101818152505060028160018151811061105d5761105d6118b5565b602002602001018181525050600381600281518110610487576104876118b5565b600754600090610100900460ff16156110a05750600754610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156111a65760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909161112e917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800161198b565b60408051601f1981840301815290829052611148916119bc565b6000604051808303816000865af19150503d8060008114611185576040519150601f19603f3d011682016040523d82523d6000602084013e61118a565b606091505b50915050808060200190518101906111a291906119d8565b9150505b919050565b60408051600580825260c082019092526000916020820160a0803683370190505090506008816000815181106111e3576111e36118b5565b602002602001018181525050600681600181518110611204576112046118b5565b602002602001018181525050600981600281518110611225576112256118b5565b602002602001018181525050601481600381518110611246576112466118b5565b602002602001018181525050600d81600481518110611267576112676118b5565b6020908102919091010152601c5460405163723c08ed60e11b81526103a8916001600160a01b03169063e47811da906112a49085906004016118cb565b602060405180830381865afa1580156112c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e5919061191e565b6009611408565b60606013805480602002602001604051908101604052809291908181526020018280548015610403576020028201919060005260206000209081546001600160a01b031681526001909101906020018083116103e5575050505050905090565b60408051600580825260c082019092526000916020820160a080368337019050509050600181600081518110611384576113846118b5565b6020026020010181815250506002816001815181106113a5576113a56118b5565b6020026020010181815250506003816002815181106113c6576113c66118b5565b6020026020010181815250506004816003815181106113e7576113e76118b5565b602002602001018181525050600581600481518110610323576103236118b5565b808214610a5e577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516114799060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b60608201526020810184905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a160408051818152600a81830152690808080808149a59da1d60b21b60608201526020810183905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a1610a5e737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156116255760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f19818403018152908290526115c4929160200161198b565b60408051601f19818403018152908290526115de916119bc565b6000604051808303816000865af19150503d806000811461161b576040519150601f19603f3d011682016040523d82523d6000602084013e611620565b606091505b505050505b6007805461ff001916610100179055565b610518806119fb83390190565b6020808252825182820181905260009190848201906040850190845b818110156116845783516001600160a01b03168352928401929184019160010161165f565b50909695505050505050565b60005b838110156116ab578181015183820152602001611693565b50506000910152565b600081518084526116cc816020860160208601611690565b601f01601f19169290920160200192915050565b602080825282518282018190526000919060409081850190600581811b8701840188860187805b8581101561179057603f198b8503018752825180516001600160a01b031685528901518985018990528051898601819052908a0190606081881b870181019190870190855b8181101561177a57605f198985030183526117688486516116b4565b948e01949350918d019160010161174c565b505050978a019794505091880191600101611707565b50919a9950505050505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b8481101561184457898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b8083101561182f5783516001600160e01b0319168252928b019260019290920191908b0190611805565b50978a019795505050918701916001016117c8565b50919998505050505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156118a857603f198886030184526118968583516116b4565b9450928501929085019060010161187a565b5092979650505050505050565b634e487b7160e01b600052603260045260246000fd5b604080825282519082018190526000906020906060840190828601845b82811015611904578151845292840192908401906001016118e8565b505050838103938201939093526000835290910192915050565b60006020828403121561193057600080fd5b5051919050565b600181811c9082168061194b57607f821691505b60208210810361196b57634e487b7160e01b600052602260045260246000fd5b50919050565b60208152600061198460208301846116b4565b9392505050565b6001600160e01b03198316815281516000906119ae816004850160208701611690565b919091016004019392505050565b600082516119ce818460208701611690565b9190910192915050565b6000602082840312156119ea57600080fd5b8151801515811461198457600080fdfe608060405234801561001057600080fd5b506104f8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063e47811da14610030575b600080fd5b61004361003e36600461036d565b610055565b60405190815260200160405180910390f35b815160009080820361007a57604051630c34dc6760e11b815260040160405180910390fd5b60008060005b6002841115610220578660008151811061009c5761009c610435565b60200260200101519150866000815181106100b9576100b9610435565b602002602001015190506000600190505b8481101561010e578781815181106100e4576100e4610435565b60200260200101519350828410156100fa578392505b81841115610106578391505b6001016100ca565b508082036101215750925061028e915050565b600061012e600286610461565b67ffffffffffffffff811115610146576101466102b6565b60405190808252806020026020018201604052801561016f578160200160208202803683370190505b5090506000808060005b88811015610206578b818151811061019357610193610435565b6020026020010151975086881480156101aa575081155b156101b857600191506101fe565b85881480156101c5575082155b156101d357600192506101fe565b8785856101df81610474565b9650815181106101f1576101f1610435565b6020026020010181815250505b600101610179565b50610212600289610461565b9750839a5050505050610080565b8360011461026b576102668760008151811061023e5761023e610435565b60200260200101518860018151811061025957610259610435565b6020026020010151610294565b610287565b8660008151811061027e5761027e610435565b60200260200101515b9450505050505b92915050565b60006102a3600284841861048d565b6102af908484166104af565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156102f5576102f56102b6565b604052919050565b600082601f83011261030e57600080fd5b813567ffffffffffffffff811115610328576103286102b6565b61033b601f8201601f19166020016102cc565b81815284602083860101111561035057600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561038057600080fd5b823567ffffffffffffffff8082111561039857600080fd5b818501915085601f8301126103ac57600080fd5b81356020828211156103c0576103c06102b6565b8160051b6103cf8282016102cc565b928352848101820192828101908a8511156103e957600080fd5b958301955b84871015610407578635825295830195908301906103ee565b975050508601359250508082111561041e57600080fd5b5061042b858286016102fd565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561028e5761028e61044b565b6000600182016104865761048661044b565b5060010190565b6000826104aa57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561028e5761028e61044b56fea264697066735822122003c73c663d45dff07eeb974a5e9fa001a9c0d444900003d114b2a5e07c1c792964736f6c63430008150033a26469706673582212209b479bf2d8884a24267b3ebb1a6a8219417d61a987eebc2cd65e5b84533011fc64736f6c63430008150033";

type MedianAggregatorTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MedianAggregatorTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MedianAggregatorTest__factory extends ContractFactory {
  constructor(...args: MedianAggregatorTestConstructorParams) {
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
      MedianAggregatorTest & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MedianAggregatorTest__factory {
    return super.connect(runner) as MedianAggregatorTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MedianAggregatorTestInterface {
    return new Interface(_abi) as MedianAggregatorTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MedianAggregatorTest {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MedianAggregatorTest;
  }
}

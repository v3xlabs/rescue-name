export const RESCUE_NAME_ABI = [
    {
        type: "constructor",
        inputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "MAX_DEADLINE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "RENEW_DURATION",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "baseregistrar",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IBaseRegistrar"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "controller",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IETHRegistrarController"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "createVault",
        inputs: [
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "renewReward",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "execute",
        inputs: [
            {
                name: "vaults",
                type: "uint256[]",
                internalType: "uint256[]"
            },
            {
                name: "names",
                type: "string[][]",
                internalType: "string[][]"
            },
            {
                name: "payee",
                type: "address",
                internalType: "address payable"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "getPrice",
        inputs: [
            {
                name: "vaults",
                type: "uint256[]",
                internalType: "uint256[]"
            },
            {
                name: "names",
                type: "string[][]",
                internalType: "string[][]"
            },
            {
                name: "price",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "payee",
                type: "address",
                internalType: "address payable"
            }
        ],
        outputs: [
            {
                name: "result",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "lastVaultId",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "supplyList",
        inputs: [
            {
                name: "vault",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "names",
                type: "string[]",
                internalType: "string[]"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "toggleName",
        inputs: [
            {
                name: "vault",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "name",
                type: "string",
                internalType: "string"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "toggleVaultActive",
        inputs: [
            {
                name: "vault",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "topupVault",
        inputs: [
            {
                name: "vault",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [],
        stateMutability: "payable"
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "newOwner",
                type: "address",
                internalType: "address"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "vaultBalance",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "vaultDeadline",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "vaultIsActive",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "vaultNameList",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            },
            {
                name: "",
                type: "string",
                internalType: "string"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "vaultRenewReward",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "vaultToOwner",
        inputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address"
            }
        ],
        stateMutability: "view"
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "function",
        name: "withdrawVault",
        inputs: [
            {
                name: "vault",
                type: "uint256",
                internalType: "uint256"
            }
        ],
        outputs: [],
        stateMutability: "nonpayable"
    },
    {
        type: "event",
        name: "NameAdded",
        inputs: [
            {
                name: "vault",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "name",
                type: "string",
                indexed: false,
                internalType: "string"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "NameRemoved",
        inputs: [
            {
                name: "vault",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "name",
                type: "string",
                indexed: false,
                internalType: "string"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "user",
                type: "address",
                indexed: true,
                internalType: "address"
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address"
            }
        ],
        anonymous: false
    },
    {
        type: "event",
        name: "RescueNameVaultCreated",
        inputs: [
            {
                name: "vaultId",
                type: "uint256",
                indexed: false,
                internalType: "uint256"
            },
            {
                name: "owner",
                type: "address",
                indexed: false,
                internalType: "address"
            }
        ],
        anonymous: false
    }
] as const;

export const BASE_REGISTRAR_ABI = [
    {
        inputs: [
            {
                internalType: "contract ENS",
                name: "_ens",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "_baseNode",
                type: "bytes32"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "ApprovalForAll",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "controller",
                type: "address"
            }
        ],
        name: "ControllerAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "controller",
                type: "address"
            }
        ],
        name: "ControllerRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256"
            }
        ],
        name: "NameMigrated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256"
            }
        ],
        name: "NameRegistered",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256"
            }
        ],
        name: "NameRenewed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        constant: true,
        inputs: [],
        name: "GRACE_PERIOD",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "controller",
                type: "address"
            }
        ],
        name: "addController",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            }
        ],
        name: "available",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "baseNode",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "controllers",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "ens",
        outputs: [
            {
                internalType: "contract ENS",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "operator",
                type: "address"
            }
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            }
        ],
        name: "nameExpires",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "reclaim",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }
        ],
        name: "register",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }
        ],
        name: "registerOnly",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "controller",
                type: "address"
            }
        ],
        name: "removeController",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }
        ],
        name: "renew",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            }
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            }
        ],
        name: "setResolver",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    }
];

export const ETH_REGISTRAR_ABI = [
    {
        inputs: [
            {
                internalType: "contract BaseRegistrarImplementation",
                name: "_base",
                type: "address"
            },
            {
                internalType: "contract IPriceOracle",
                name: "_prices",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_minCommitmentAge",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_maxCommitmentAge",
                type: "uint256"
            },
            {
                internalType: "contract ReverseRegistrar",
                name: "_reverseRegistrar",
                type: "address"
            },
            {
                internalType: "contract INameWrapper",
                name: "_nameWrapper",
                type: "address"
            },
            {
                internalType: "contract ENS",
                name: "_ens",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commitment",
                type: "bytes32"
            }
        ],
        name: "CommitmentTooNew",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commitment",
                type: "bytes32"
            }
        ],
        name: "CommitmentTooOld",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }
        ],
        name: "DurationTooShort",
        type: "error"
    },
    {
        inputs: [],
        name: "InsufficientValue",
        type: "error"
    },
    {
        inputs: [],
        name: "MaxCommitmentAgeTooHigh",
        type: "error"
    },
    {
        inputs: [],
        name: "MaxCommitmentAgeTooLow",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            }
        ],
        name: "NameNotAvailable",
        type: "error"
    },
    {
        inputs: [],
        name: "ResolverRequiredWhenDataSupplied",
        type: "error"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commitment",
                type: "bytes32"
            }
        ],
        name: "UnexpiredCommitmentExists",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "label",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "baseCost",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "premium",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256"
            }
        ],
        name: "NameRegistered",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "label",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "cost",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256"
            }
        ],
        name: "NameRenewed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [],
        name: "MIN_REGISTRATION_DURATION",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            }
        ],
        name: "available",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "commitment",
                type: "bytes32"
            }
        ],
        name: "commit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        name: "commitments",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]"
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool"
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16"
            }
        ],
        name: "makeCommitment",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "maxCommitmentAge",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "minCommitmentAge",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "nameWrapper",
        outputs: [
            {
                internalType: "contract INameWrapper",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "prices",
        outputs: [
            {
                internalType: "contract IPriceOracle",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "recoverFunds",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            },
            {
                internalType: "bytes32",
                name: "secret",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address"
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]"
            },
            {
                internalType: "bool",
                name: "reverseRecord",
                type: "bool"
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16"
            }
        ],
        name: "register",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }
        ],
        name: "renew",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256"
            }
        ],
        name: "rentPrice",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "base",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "premium",
                        type: "uint256"
                    }
                ],
                internalType: "struct IPriceOracle.Price",
                name: "price",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "reverseRegistrar",
        outputs: [
            {
                internalType: "contract ReverseRegistrar",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string"
            }
        ],
        name: "valid",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];

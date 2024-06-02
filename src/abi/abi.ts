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

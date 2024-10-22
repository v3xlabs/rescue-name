# 🛟 [rescue.name](https://rescue.name)

A decentralized vault-based ENS renewal manager.

![website s1](https://raw.githubusercontent.com/v3xlabs/rescue-name/refs/heads/master/images/Screenshot%202024-10-22%20at%2022.43.35.png)
![website s2](https://raw.githubusercontent.com/v3xlabs/rescue-name/refs/heads/master/images/Screenshot%202024-10-22%20at%2022.47.58.png)

> 👷🏽‍♀️ Project
>
> Initial version of this project was created at [ETHPrague 2024](https://ethprague.com)

Simply create a vault, top it up, supply it with a list of names, and anyone can renew your name.

## Abstract

The idea is simple. A single smart contract, that manages vault creation, top-up, and renewal. The vault owner can add a list of ENS names to the vault, and anyone can renew the names. The vault owner can top-up the vault with ETH, and the renewer can utilize the ETH for renewing the names. Part of the renewal fee is shared with the renewer, as such to incentivize the renewer to renew the names.

## Key Features

- 🏦 Secure vault management
- 💰 Flexible vault top-up system
- 📜 Multi-name support
- 🤝 Community-driven renewals
- 💸 Incentivized renewal mechanism

## Current Status

### V0 (Current)
- ✅ Core smart contract deployment on Sepolia
- ✅ Basic vault creation and management
- ✅ Manual ENS name reneval system
- ✅ Frontend interface implementation
- ✅ Substream integration for event tracking

### V1 Roadmap

#### Q4 2024
- 🔄 Mainnet deployment
- 🔐 Automated renewals done by running rescue node software
- 🤖 Automated renewal optimization

#### Q1 2025
-  📊 Analytics dashboard
- 🔔 Notification system for expiring names
- 💼 Support for other ENS actions e.g. setting records etc.

## Getting Started

1. Visit [rescue.name](https://rescue.name)
2. Connect your wallet
3. Create a vault
4. Top up with Sepolia ETH
5. Add ENS names to manage

## Deployments & Source

The smart contracts is deployed on Sepolia, and can be found at [0x78ac7f4856ad34a170ce1b8dd9f9996fc6e5a291](https://sepolia.etherscan.io/address/0x78ac7f4856ad34a170ce1b8dd9f9996fc6e5a291).

| Description | Repository                                                                        |
| ----------- | --------------------------------------------------------------------------------- |
| Contracts   | [v3xlabs/rescue-name-contracts](https://github.com/v3xlabs/rescue-name-contracts) |
| Substream   | [v3xlabs/rescue-name-substream](https://github.com/v3xlabs/rescue-name-substream) |
| Frontend    | [v3xlabs/rescue-name](https://github.com/v3xlabs/rescue-name) (you are here)      |

## Team

This project was built together with [NevvDevv.eth](https://github.com/JustAnotherDevv) and [luc.eth](https://github.com/lucemans).

A special thank you goes out to [Yash Goyal](https://github.com/yashgo0018) for co-debugging the substream tooling.

## Fun Facts

Green Monsters Consumed: 3 🍵🍵🍵

Total issues created during this hackathon: 9 🐛🐛🐛🐛🐛🐛🐛🐛🐛

| Repository                                                | Issues                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [streamingfast/cli](https://github.com/streamingfast/cli) | [1](https://github.com/streamingfast/cli/issues/1), [2](https://github.com/streamingfast/cli/issues/2), [3](https://github.com/streamingfast/cli/issues/3), [4](https://github.com/streamingfast/cli/issues/4), [5](https://github.com/streamingfast/cli/issues/5), [6](https://github.com/streamingfast/cli/issues/6), [7](https://github.com/streamingfast/cli/issues/7), [8](https://github.com/streamingfast/cli/issues/8), [9](https://github.com/streamingfast/cli/issues/9) |

## Copyright

All code is licensed under [GPL-3.0](./LICENSE).

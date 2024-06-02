# 🛟 [rescue.name](https://rescue.name)

An decentralized vault-based ENS renewal manager.

> 👷🏽‍♀️ Hackathon Project
>
> This project was created at [ETHPrague 2024](https://ethprague.com)

Simply create a vault, top it up, supply it with a list of names, and anyone can renew your name.

## Abstract

The idea is simple. A single smart contract, that manages vault creation, top-up, and renewal. The vault owner can add a list of ENS names to the vault, and anyone can renew the names. The vault owner can top-up the vault with ETH, and the renewer can utilize the ETH for renewing the names. Part of the renewal fee is shared with the renewer, as such to incentivize the renewer to renew the names.

## Deployments & Source

The smart contracts is deployed on Sepolia, and can be found at [0x78ac7f4856ad34a170ce1b8dd9f9996fc6e5a291](https://sepolia.etherscan.io/address/0x78ac7f4856ad34a170ce1b8dd9f9996fc6e5a291).

| Description | Repository                                                                |
| ----------- | ------------------------------------------------------------------------- |
| Contracts   | [v3xlabs/rescue-name-contracts](https://github.com/rescue-name-contracts) |
| Substream   | [v3xlabs/rescue-name-substream](https://github.com/rescue-name-substream) |
| Frontend    | [v3xlabs/rescue-name](https://github.com/rescue-name)                     |

## Team

This project was built together with [NevvDevv.eth](https://github.com/JustAnotherDevv) and [luc.eth](https://github.com/lucemans).

A special thank you goes out to [Yash Goyal](https://github.com/yashgo0018) for co-debugging the substream tooling.

## Copyright

All code is licensed under [GPL-3.0](./LICENSE).

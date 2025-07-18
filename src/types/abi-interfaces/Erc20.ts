// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {EthereumLog, EthereumTransaction, LightEthereumLog} from "@subql/types-ethereum";

import {ApprovalEvent, TransferEvent, Erc20} from '../contracts/Erc20'


export type ApprovalLog = EthereumLog<ApprovalEvent["args"]>

export type TransferLog = EthereumLog<TransferEvent["args"]>


export type LightApprovalLog = LightEthereumLog<ApprovalEvent["args"]>

export type LightTransferLog = LightEthereumLog<TransferEvent["args"]>


export type NameTransaction = EthereumTransaction<Parameters<Erc20['functions']['name']>>

export type ApproveTransaction = EthereumTransaction<Parameters<Erc20['functions']['approve']>>

export type TotalSupplyTransaction = EthereumTransaction<Parameters<Erc20['functions']['totalSupply']>>

export type TransferFromTransaction = EthereumTransaction<Parameters<Erc20['functions']['transferFrom']>>

export type DecimalsTransaction = EthereumTransaction<Parameters<Erc20['functions']['decimals']>>

export type BalanceOfTransaction = EthereumTransaction<Parameters<Erc20['functions']['balanceOf']>>

export type SymbolTransaction = EthereumTransaction<Parameters<Erc20['functions']['symbol']>>

export type TransferTransaction = EthereumTransaction<Parameters<Erc20['functions']['transfer']>>

export type AllowanceTransaction = EthereumTransaction<Parameters<Erc20['functions']['allowance']>>


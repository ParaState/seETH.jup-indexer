// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {EthereumLog, EthereumTransaction, LightEthereumLog} from "@subql/types-ethereum";

import {InitializedEvent, RemoteBalanceUpdatedEvent, RiskBalanceUpdatedEvent, WithdrawEvent, Usdvault} from '../contracts/Usdvault'


export type InitializedLog = EthereumLog<InitializedEvent["args"]>

export type RemoteBalanceUpdatedLog = EthereumLog<RemoteBalanceUpdatedEvent["args"]>

export type RiskBalanceUpdatedLog = EthereumLog<RiskBalanceUpdatedEvent["args"]>

export type WithdrawLog = EthereumLog<WithdrawEvent["args"]>


export type LightInitializedLog = LightEthereumLog<InitializedEvent["args"]>

export type LightRemoteBalanceUpdatedLog = LightEthereumLog<RemoteBalanceUpdatedEvent["args"]>

export type LightRiskBalanceUpdatedLog = LightEthereumLog<RiskBalanceUpdatedEvent["args"]>

export type LightWithdrawLog = LightEthereumLog<WithdrawEvent["args"]>


export type ADMIN_ROLETransaction = EthereumTransaction<Parameters<Usdvault['functions']['ADMIN_ROLE']>>

export type NODE_ROLETransaction = EthereumTransaction<Parameters<Usdvault['functions']['NODE_ROLE']>>

export type SIGNER_ROLETransaction = EthereumTransaction<Parameters<Usdvault['functions']['SIGNER_ROLE']>>

export type _debitRiskBalanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['_debitRiskBalance']>>

export type _remoteBalanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['_remoteBalance']>>

export type _riskAccountTransaction = EthereumTransaction<Parameters<Usdvault['functions']['_riskAccount']>>

export type AssetTransaction = EthereumTransaction<Parameters<Usdvault['functions']['asset']>>

export type Borrow_risk_balanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['borrow_risk_balance']>>

export type CheckRoleTransaction = EthereumTransaction<Parameters<Usdvault['functions']['checkRole']>>

export type DepositTransaction = EthereumTransaction<Parameters<Usdvault['functions']['deposit']>>

export type GrantRoleTransaction = EthereumTransaction<Parameters<Usdvault['functions']['grantRole']>>

export type HasRoleTransaction = EthereumTransaction<Parameters<Usdvault['functions']['hasRole']>>

export type InitializeTransaction = EthereumTransaction<Parameters<Usdvault['functions']['initialize']>>

export type Remote_balanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['remote_balance']>>

export type Repay_risk_balanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['repay_risk_balance']>>

export type RevokeRoleTransaction = EthereumTransaction<Parameters<Usdvault['functions']['revokeRole']>>

export type Risk_balanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['risk_balance']>>

export type SetRiskAccountTransaction = EthereumTransaction<Parameters<Usdvault['functions']['setRiskAccount']>>

export type TransferOwnershipTransaction = EthereumTransaction<Parameters<Usdvault['functions']['transferOwnership']>>

export type Update_remote_balanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['update_remote_balance']>>

export type Update_risk_balanceTransaction = EthereumTransaction<Parameters<Usdvault['functions']['update_risk_balance']>>

export type VersionTransaction = EthereumTransaction<Parameters<Usdvault['functions']['version']>>

export type WithdrawTransaction = EthereumTransaction<Parameters<Usdvault['functions']['withdraw']>>


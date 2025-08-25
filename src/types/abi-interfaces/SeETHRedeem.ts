// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {EthereumLog, EthereumTransaction, LightEthereumLog} from "@subql/types-ethereum";

import {InitializedEvent, RedeemApprovedEvent, RedeemCancelledEvent, RedeemExecutedEvent, RedeemRequestedEvent, RoleAdminChangedEvent, RoleGrantedEvent, RoleRevokedEvent, UpgradedEvent, SeETHRedeem} from '../contracts/SeETHRedeem'


export type InitializedLog = EthereumLog<InitializedEvent["args"]>

export type RedeemApprovedLog = EthereumLog<RedeemApprovedEvent["args"]>

export type RedeemCancelledLog = EthereumLog<RedeemCancelledEvent["args"]>

export type RedeemExecutedLog = EthereumLog<RedeemExecutedEvent["args"]>

export type RedeemRequestedLog = EthereumLog<RedeemRequestedEvent["args"]>

export type RoleAdminChangedLog = EthereumLog<RoleAdminChangedEvent["args"]>

export type RoleGrantedLog = EthereumLog<RoleGrantedEvent["args"]>

export type RoleRevokedLog = EthereumLog<RoleRevokedEvent["args"]>

export type UpgradedLog = EthereumLog<UpgradedEvent["args"]>


export type LightInitializedLog = LightEthereumLog<InitializedEvent["args"]>

export type LightRedeemApprovedLog = LightEthereumLog<RedeemApprovedEvent["args"]>

export type LightRedeemCancelledLog = LightEthereumLog<RedeemCancelledEvent["args"]>

export type LightRedeemExecutedLog = LightEthereumLog<RedeemExecutedEvent["args"]>

export type LightRedeemRequestedLog = LightEthereumLog<RedeemRequestedEvent["args"]>

export type LightRoleAdminChangedLog = LightEthereumLog<RoleAdminChangedEvent["args"]>

export type LightRoleGrantedLog = LightEthereumLog<RoleGrantedEvent["args"]>

export type LightRoleRevokedLog = LightEthereumLog<RoleRevokedEvent["args"]>

export type LightUpgradedLog = LightEthereumLog<UpgradedEvent["args"]>


export type APPROVER_ROLETransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['APPROVER_ROLE']>>

export type DEFAULT_ADMIN_ROLETransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['DEFAULT_ADMIN_ROLE']>>

export type KEEPER_ROLETransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['KEEPER_ROLE']>>

export type UPGRADE_INTERFACE_VERSIONTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['UPGRADE_INTERFACE_VERSION']>>

export type ApproveRedeemTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['approveRedeem']>>

export type ApproverTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['approver']>>

export type CancelRedeemTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['cancelRedeem']>>

export type CoreTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['core']>>

export type ExecuteRedeemTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['executeRedeem']>>

export type GetRedeemRequestTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['getRedeemRequest']>>

export type GetRoleAdminTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['getRoleAdmin']>>

export type GetUserRequestsTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['getUserRequests']>>

export type GrantRoleTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['grantRole']>>

export type HasRoleTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['hasRole']>>

export type InitializeTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['initialize']>>

export type KeeperTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['keeper']>>

export type ManagerTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['manager']>>

export type MinRequestWaitTimeTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['minRequestWaitTime']>>

export type NextRequestIdTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['nextRequestId']>>

export type ProxiableUUIDTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['proxiableUUID']>>

export type RedeemRequestTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['redeemRequest']>>

export type RedeemRequestsTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['redeemRequests']>>

export type RenounceRoleTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['renounceRole']>>

export type RevokeRoleTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['revokeRole']>>

export type SetAccountsTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['setAccounts']>>

export type SetMinRequestWaitTimeTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['setMinRequestWaitTime']>>

export type SupportsInterfaceTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['supportsInterface']>>

export type UpgradeToAndCallTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['upgradeToAndCall']>>

export type UserRedeemRequestsTransaction = EthereumTransaction<Parameters<SeETHRedeem['functions']['userRedeemRequests']>>


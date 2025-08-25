// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {EthereumLog, EthereumTransaction, LightEthereumLog} from "@subql/types-ethereum";

import {ApprovalEvent, DepositEvent, InitializedEvent, RoleAdminChangedEvent, RoleGrantedEvent, RoleRevokedEvent, StakedEvent, TransferEvent, UpgradedEvent, WithdrawEvent, SeETHV2} from '../contracts/SeETHV2'


export type ApprovalLog = EthereumLog<ApprovalEvent["args"]>

export type DepositLog = EthereumLog<DepositEvent["args"]>

export type InitializedLog = EthereumLog<InitializedEvent["args"]>

export type RoleAdminChangedLog = EthereumLog<RoleAdminChangedEvent["args"]>

export type RoleGrantedLog = EthereumLog<RoleGrantedEvent["args"]>

export type RoleRevokedLog = EthereumLog<RoleRevokedEvent["args"]>

export type StakedLog = EthereumLog<StakedEvent["args"]>

export type TransferLog = EthereumLog<TransferEvent["args"]>

export type UpgradedLog = EthereumLog<UpgradedEvent["args"]>

export type WithdrawLog = EthereumLog<WithdrawEvent["args"]>


export type LightApprovalLog = LightEthereumLog<ApprovalEvent["args"]>

export type LightDepositLog = LightEthereumLog<DepositEvent["args"]>

export type LightInitializedLog = LightEthereumLog<InitializedEvent["args"]>

export type LightRoleAdminChangedLog = LightEthereumLog<RoleAdminChangedEvent["args"]>

export type LightRoleGrantedLog = LightEthereumLog<RoleGrantedEvent["args"]>

export type LightRoleRevokedLog = LightEthereumLog<RoleRevokedEvent["args"]>

export type LightStakedLog = LightEthereumLog<StakedEvent["args"]>

export type LightTransferLog = LightEthereumLog<TransferEvent["args"]>

export type LightUpgradedLog = LightEthereumLog<UpgradedEvent["args"]>

export type LightWithdrawLog = LightEthereumLog<WithdrawEvent["args"]>


export type ConfirmToSolTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['ConfirmToSol']>>

export type DEFAULT_ADMIN_ROLETransaction = EthereumTransaction<Parameters<SeETHV2['functions']['DEFAULT_ADMIN_ROLE']>>

export type KEPPER_ROKETransaction = EthereumTransaction<Parameters<SeETHV2['functions']['KEPPER_ROKE']>>

export type MANAGER_ROLETransaction = EthereumTransaction<Parameters<SeETHV2['functions']['MANAGER_ROLE']>>

export type ManagerMintTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['ManagerMint']>>

export type PayRedeemTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['PayRedeem']>>

export type RepayUsdcTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['RepayUsdc']>>

export type UPGRADE_INTERFACE_VERSIONTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['UPGRADE_INTERFACE_VERSION']>>

export type WithdrawAaveTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['WithdrawAave']>>

export type AavePoolTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['aavePool']>>

export type AaveProxyTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['aaveProxy']>>

export type AllowanceTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['allowance']>>

export type ApproveTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['approve']>>

export type AssetTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['asset']>>

export type BalanceOfTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['balanceOf']>>

export type ConvertToAssetsTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['convertToAssets']>>

export type ConvertToSharesTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['convertToShares']>>

export type DecimalsTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['decimals']>>

export type DepositTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['deposit']>>

export type FeeConfigTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['feeConfig']>>

export type GetRoleAdminTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['getRoleAdmin']>>

export type GrantRoleTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['grantRole']>>

export type HasRoleTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['hasRole']>>

export type InitializeTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['initialize']>>

export type LockSharesFromTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['lockSharesFrom']>>

export type MaxDepositTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['maxDeposit']>>

export type MaxMintTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['maxMint']>>

export type MaxRedeemTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['maxRedeem']>>

export type MaxWithdrawTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['maxWithdraw']>>

export type MintTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['mint']>>

export type NameTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['name']>>

export type PreviewDepositTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['previewDeposit']>>

export type PreviewMintTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['previewMint']>>

export type PreviewRedeemTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['previewRedeem']>>

export type PreviewWithdrawTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['previewWithdraw']>>

export type ProxiableUUIDTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['proxiableUUID']>>

export type RedeemTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['redeem']>>

export type RenounceRoleTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['renounceRole']>>

export type RevokeRoleTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['revokeRole']>>

export type SolanaUsdcAmountTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['solanaUsdcAmount']>>

export type SupportsInterfaceTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['supportsInterface']>>

export type SymbolTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['symbol']>>

export type TotalAssetsTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['totalAssets']>>

export type TotalSupplyTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['totalSupply']>>

export type TransferTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['transfer']>>

export type TransferFromTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['transferFrom']>>

export type UnlockSharesToTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['unlockSharesTo']>>

export type UpgradeToAndCallTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['upgradeToAndCall']>>

export type UsdcTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['usdc']>>

export type UsdcAwaitingBridgeToSolanaTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['usdcAwaitingBridgeToSolana']>>

export type WethTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['weth']>>

export type WithdrawTransaction = EthereumTransaction<Parameters<SeETHV2['functions']['withdraw']>>


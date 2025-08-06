// SPDX-License-Identifier: Apache-2.0

// Auto-generated , DO NOT EDIT
import {EthereumLog, EthereumTransaction, LightEthereumLog} from "@subql/types-ethereum";

import {ApprovalEvent, BorrowedEvent, InitializedEvent, ReferralBoundEvent, StakedEvent, TransferEvent, UnstakeAcceptedEvent, UnstakeFinishedEvent, Sseth} from '../contracts/Sseth'


export type ApprovalLog = EthereumLog<ApprovalEvent["args"]>

export type BorrowedLog = EthereumLog<BorrowedEvent["args"]>

export type InitializedLog = EthereumLog<InitializedEvent["args"]>

export type ReferralBoundLog = EthereumLog<ReferralBoundEvent["args"]>

export type StakedLog = EthereumLog<StakedEvent["args"]>

export type TransferLog = EthereumLog<TransferEvent["args"]>

export type UnstakeAcceptedLog = EthereumLog<UnstakeAcceptedEvent["args"]>

export type UnstakeFinishedLog = EthereumLog<UnstakeFinishedEvent["args"]>


export type LightApprovalLog = LightEthereumLog<ApprovalEvent["args"]>

export type LightBorrowedLog = LightEthereumLog<BorrowedEvent["args"]>

export type LightInitializedLog = LightEthereumLog<InitializedEvent["args"]>

export type LightReferralBoundLog = LightEthereumLog<ReferralBoundEvent["args"]>

export type LightStakedLog = LightEthereumLog<StakedEvent["args"]>

export type LightTransferLog = LightEthereumLog<TransferEvent["args"]>

export type LightUnstakeAcceptedLog = LightEthereumLog<UnstakeAcceptedEvent["args"]>

export type LightUnstakeFinishedLog = LightEthereumLog<UnstakeFinishedEvent["args"]>


export type ADMIN_ROLETransaction = EthereumTransaction<Parameters<Sseth['functions']['ADMIN_ROLE']>>

export type NODE_ROLETransaction = EthereumTransaction<Parameters<Sseth['functions']['NODE_ROLE']>>

export type SIGNER_ROLETransaction = EthereumTransaction<Parameters<Sseth['functions']['SIGNER_ROLE']>>

export type __ERC20_initTransaction = EthereumTransaction<Parameters<Sseth['functions']['__ERC20_init']>>

export type AllowanceTransaction = EthereumTransaction<Parameters<Sseth['functions']['allowance']>>

export type ApproveTransaction = EthereumTransaction<Parameters<Sseth['functions']['approve']>>

export type BalanceOfTransaction = EthereumTransaction<Parameters<Sseth['functions']['balanceOf']>>

export type CheckRoleTransaction = EthereumTransaction<Parameters<Sseth['functions']['checkRole']>>

export type DecimalsTransaction = EthereumTransaction<Parameters<Sseth['functions']['decimals']>>

export type EarningTransaction = EthereumTransaction<Parameters<Sseth['functions']['earning']>>

export type FeeConfigTransaction = EthereumTransaction<Parameters<Sseth['functions']['feeConfig']>>

export type Fee_accountTransaction = EthereumTransaction<Parameters<Sseth['functions']['fee_account']>>

export type Finished_unstake_acceptTransaction = EthereumTransaction<Parameters<Sseth['functions']['finished_unstake_accept']>>

export type GrantRoleTransaction = EthereumTransaction<Parameters<Sseth['functions']['grantRole']>>

export type HasRoleTransaction = EthereumTransaction<Parameters<Sseth['functions']['hasRole']>>

export type InitializeTransaction = EthereumTransaction<Parameters<Sseth['functions']['initialize']>>

export type NameTransaction = EthereumTransaction<Parameters<Sseth['functions']['name']>>

export type Pre_mint_amountTransaction = EthereumTransaction<Parameters<Sseth['functions']['pre_mint_amount']>>

export type Pre_redeem_amountTransaction = EthereumTransaction<Parameters<Sseth['functions']['pre_redeem_amount']>>

export type ReferralsTransaction = EthereumTransaction<Parameters<Sseth['functions']['referrals']>>

export type RevokeRoleTransaction = EthereumTransaction<Parameters<Sseth['functions']['revokeRole']>>

export type Set_fee_accountTransaction = EthereumTransaction<Parameters<Sseth['functions']['set_fee_account']>>

export type Set_fee_valueTransaction = EthereumTransaction<Parameters<Sseth['functions']['set_fee_value']>>

export type Set_usd_vaultTransaction = EthereumTransaction<Parameters<Sseth['functions']['set_usd_vault']>>

export type StakeTransaction = EthereumTransaction<Parameters<Sseth['functions']['stake']>>

export type Stake_ethTransaction = EthereumTransaction<Parameters<Sseth['functions']['stake_eth']>>

export type SymbolTransaction = EthereumTransaction<Parameters<Sseth['functions']['symbol']>>

export type Token_to_vaultTransaction = EthereumTransaction<Parameters<Sseth['functions']['token_to_vault']>>

export type TotalSupplyTransaction = EthereumTransaction<Parameters<Sseth['functions']['totalSupply']>>

export type TransferTransaction = EthereumTransaction<Parameters<Sseth['functions']['transfer']>>

export type TransferFromTransaction = EthereumTransaction<Parameters<Sseth['functions']['transferFrom']>>

export type TransferOwnershipTransaction = EthereumTransaction<Parameters<Sseth['functions']['transferOwnership']>>

export type UnstakeTransaction = EthereumTransaction<Parameters<Sseth['functions']['unstake']>>

export type Unstake_accept_idTransaction = EthereumTransaction<Parameters<Sseth['functions']['unstake_accept_id']>>

export type Unstake_acceptedTransaction = EthereumTransaction<Parameters<Sseth['functions']['unstake_accepted']>>

export type Usd_vaultTransaction = EthereumTransaction<Parameters<Sseth['functions']['usd_vault']>>

export type VersionTransaction = EthereumTransaction<Parameters<Sseth['functions']['version']>>

export type WethTransaction = EthereumTransaction<Parameters<Sseth['functions']['weth']>>


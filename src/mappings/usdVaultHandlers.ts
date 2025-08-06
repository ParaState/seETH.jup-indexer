import { RemoteBalanceUpdated, RiskBalanceUpdated, USDVaultWithdraw } from "../types";
import { RemoteBalanceUpdatedLog, RiskBalanceUpdatedLog, WithdrawLog } from "../types/abi-interfaces/Usdvault";
import assert from "assert";

export async function handleRemoteBalanceUpdatedLog(remoteBalanceUpdated: RemoteBalanceUpdatedLog): Promise<void> {
  logger.info(`New remote balance updated transaction log at block ${remoteBalanceUpdated.blockNumber}`);
  assert(remoteBalanceUpdated.args, "No remoteBalanceUpdated.args");

  logger.info(`remoteBalanceUpdated========================================`);
  logger.info(`remoteBalanceUpdated.address: ${remoteBalanceUpdated.address}`);
  logger.info(`remoteBalanceUpdated.blockNumber: ${remoteBalanceUpdated.blockNumber}`);
  logger.info(`remoteBalanceUpdated.transactionHash: ${remoteBalanceUpdated.transactionHash}`);
  logger.info(`remoteBalanceUpdated.transaction.blockTimestamp: ${remoteBalanceUpdated.transaction.blockTimestamp}`);
  logger.info(`remoteBalanceUpdated.args.op: ${remoteBalanceUpdated.args.op}`);
  logger.info(`remoteBalanceUpdated.args.amount: ${remoteBalanceUpdated.args.amount}`);
  logger.info(`remoteBalanceUpdated========================================`);

  const record = RemoteBalanceUpdated.create({
    id: remoteBalanceUpdated.transactionHash,
    blockHeight: BigInt(remoteBalanceUpdated.blockNumber),
    contractAddress: remoteBalanceUpdated.address,
    opType: remoteBalanceUpdated.args.op,
    amount: remoteBalanceUpdated.args.amount.toBigInt(),
    timestamp: new Date(Number(remoteBalanceUpdated.transaction.blockTimestamp) * 1000),
  });

  await record.save();
}

export async function handleRiskBalanceUpdatedLog(riskBalanceUpdated: RiskBalanceUpdatedLog): Promise<void> {
  logger.info(`New risk balance updated transaction log at block ${riskBalanceUpdated.blockNumber}`);
  assert(riskBalanceUpdated.args, "No riskBalanceUpdated.args");

  logger.info(`riskBalanceUpdated========================================`);
  logger.info(`riskBalanceUpdated.address: ${riskBalanceUpdated.address}`);
  logger.info(`riskBalanceUpdated.blockNumber: ${riskBalanceUpdated.blockNumber}`);
  logger.info(`riskBalanceUpdated.transactionHash: ${riskBalanceUpdated.transactionHash}`);
  logger.info(`riskBalanceUpdated.transaction.blockTimestamp: ${riskBalanceUpdated.transaction.blockTimestamp}`);
  logger.info(`riskBalanceUpdated.args.newBalance: ${riskBalanceUpdated.args.newBalance}`);
  logger.info(`riskBalanceUpdated========================================`);

  const record = RiskBalanceUpdated.create({
    id: riskBalanceUpdated.transactionHash,
    blockHeight: BigInt(riskBalanceUpdated.blockNumber),
    contractAddress: riskBalanceUpdated.address,
    newBalance: riskBalanceUpdated.args.newBalance.toBigInt(),
    timestamp: new Date(Number(riskBalanceUpdated.transaction.blockTimestamp) * 1000),
  });

  await record.save();
}

export async function handleUSDVaultWithdrawLog(withdraw: WithdrawLog): Promise<void> {
  logger.info(`New USD vault withdraw transaction log at block ${withdraw.blockNumber}`);
  assert(withdraw.args, "No withdraw.args");

  logger.info(`withdraw========================================`);
  logger.info(`withdraw.address: ${withdraw.address}`);
  logger.info(`withdraw.blockNumber: ${withdraw.blockNumber}`);
  logger.info(`withdraw.transactionHash: ${withdraw.transactionHash}`);
  logger.info(`withdraw.transaction.blockTimestamp: ${withdraw.transaction.blockTimestamp}`);
  logger.info(`withdraw.args.to: ${withdraw.args.to}`);
  logger.info(`withdraw.args.amount: ${withdraw.args.amount}`);
  logger.info(`withdraw========================================`);

  const record = USDVaultWithdraw.create({
    id: withdraw.transactionHash,
    blockHeight: BigInt(withdraw.blockNumber),
    contractAddress: withdraw.address,
    to: withdraw.args.to,
    amount: withdraw.args.amount.toBigInt(),
    timestamp: new Date(Number(withdraw.transaction.blockTimestamp) * 1000),
  });

  await record.save();
}

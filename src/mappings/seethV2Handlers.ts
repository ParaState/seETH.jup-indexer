import assert from "assert";
import { Deposit, Withdraw } from "../types";
import { DepositLog, WithdrawLog } from "../types/abi-interfaces/SeETHV2";

// SeETH V2 Deposit event
// event Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares);
export async function handleDeposit(deposit: DepositLog): Promise<void> {
  logger.info(`New deposit transaction log at block ${deposit.blockNumber}`);
  assert(deposit.args, "No log.args");

  logger.info(`handleDeposit========================================`);
  logger.info(`handleDeposit.address: ${deposit.address}`);
  logger.info(`handleDeposit.blockNumber: ${deposit.blockNumber}`);
  logger.info(`handleDeposit.transactionHash: ${deposit.transactionHash}`);
  logger.info(`handleDeposit.transaction.blockTimestamp: ${deposit.transaction.blockTimestamp}`);
  logger.info(`handleDeposit.args.sender: ${deposit.args.sender}`);
  logger.info(`handleDeposit.args.owner: ${deposit.args.owner}`);
  logger.info(`handleDeposit.args.assets: ${deposit.args.assets}`);
  logger.info(`handleDeposit.args.shares: ${deposit.args.shares}`);
  logger.info(`handleDeposit========================================`);

  const record = Deposit.create({
    id: deposit.transactionHash,
    blockHeight: BigInt(deposit.blockNumber),
    owner: deposit.args.owner.toString(),
    assets: BigInt(deposit.args.assets.toString()),
    shares: BigInt(deposit.args.shares.toString()),
    timestamp: new Date(Number(deposit.transaction.blockTimestamp) * 1000),
  });

  await record.save();
}

// SeETH V2 Withdraw event
// event Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares);
export async function handleWithdraw(withdraw: WithdrawLog): Promise<void> {
  logger.info(`New withdraw transaction log at block ${withdraw.blockNumber}`);
  assert(withdraw.args, "No withdraw.args");

  logger.info(`handleWithdraw========================================`);
  logger.info(`handleWithdraw.address: ${withdraw.address}`);
  logger.info(`handleWithdraw.blockNumber: ${withdraw.blockNumber}`);
  logger.info(`handleWithdraw.transactionHash: ${withdraw.transactionHash}`);
  logger.info(`handleWithdraw.transaction.blockTimestamp: ${withdraw.transaction.blockTimestamp}`);
  logger.info(`handleWithdraw.args.sender: ${withdraw.args.sender}`);
  logger.info(`handleWithdraw.args.receiver: ${withdraw.args.receiver}`);
  logger.info(`handleWithdraw.args.owner: ${withdraw.args.owner}`);
  logger.info(`handleWithdraw.args.assets: ${withdraw.args.assets}`);
  logger.info(`handleWithdraw.args.shares: ${withdraw.args.shares}`);
  logger.info(`handleWithdraw========================================`);

  const record = Withdraw.create({
    id: withdraw.transactionHash,
    blockHeight: BigInt(withdraw.blockNumber),
    sender: withdraw.args.sender.toString(),
    receiver: withdraw.args.receiver.toString(),
    owner: withdraw.args.owner.toString(),
    assets: BigInt(withdraw.args.assets.toString()),
    shares: BigInt(withdraw.args.shares.toString()),
    timestamp: new Date(Number(withdraw.transaction.blockTimestamp) * 1000),
  });

  await record.save();
}

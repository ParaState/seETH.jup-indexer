import { Staker, StakedRecord, UnstakeAccepted } from "../types";
import { StakedLog, UnstakeAcceptedLog, UnstakeFinishedLog } from "../types/abi-interfaces/Sseth";
import assert from "assert";

export async function handleStakedLog(staked: StakedLog): Promise<void> {
  logger.info(`New staked transaction log at block ${staked.blockNumber}`);
  assert(staked.args, "No staked.args");
  const record = StakedRecord.create({
    id: staked.transactionHash,
    pool: staked.address,
    blockHeight: BigInt(staked.blockNumber),
    staker: staked.args.staker,
    stakeToken: "0x000",
    stakeAmount: staked.args.amount.toBigInt(),
    mintReceiver: staked.args.receiver,
    mintAmount: staked.args.minted.toBigInt(),
    timestamp: new Date(Number(staked.transaction.blockTimestamp) * 1000),
  });

  await record.save();

  const staker_id = `${staked.address}-${staked.args.staker}`;

  let staker = await Staker.get(staker_id);

  if (!staker) {
    staker = await Staker.create({
      id: staker_id,
      pool: staked.address,
      staker: staked.args.staker,
      stakeAmount: staked.args.amount.toBigInt(),
      mintAmount: staked.args.minted.toBigInt(),
    });
  } else {
    staker.mintAmount = staked.args.minted.toBigInt() + staker.mintAmount!;
    staker.stakeAmount = staked.args.amount.toBigInt() + staker.stakeAmount!;
  }

  await staker.save();
}

export async function handleUnstakeAcceptedLog(unstake: UnstakeAcceptedLog): Promise<void> {
  logger.info(`New unstake accepted transaction log at block ${unstake.blockNumber}`);
  assert(unstake.args, "No unstake.args");

  logger.info(`unstake========================================`);
  logger.info(`unstake.address: ${unstake.address}`);
  logger.info(`unstake.blockNumber: ${unstake.blockNumber}`);
  logger.info(`unstake.transactionHash: ${unstake.transactionHash}`);
  logger.info(`unstake.transaction.blockTimestamp: ${unstake.transaction.blockTimestamp}`);
  logger.info(`unstake.args.accept_id: ${unstake.args.accept_id}`);
  logger.info(`unstake.args.staker: ${unstake.args.staker}`);
  logger.info(`unstake.args.receiver: ${unstake.args.receiver}`);
  logger.info(`unstake.args.unstake_amount: ${unstake.args.unstake_amount}`);
  logger.info(`unstake.args.redeem_earning: ${unstake.args.redeem_earning}`);
  logger.info(`unstake.args.redeem_eth: ${unstake.args.redeem_eth}`);
  logger.info(`unstake.args.redeem_usdc: ${unstake.args.redeem_usdc}`);
  logger.info(`unstake.args: ${JSON.stringify(unstake.args)}`);
  logger.info(`unstake.args.accept_id: ${unstake.args.accept_id}`);
  logger.info(`unstake========================================`);

  const record = UnstakeAccepted.create({
    id: unstake.transactionHash,
    acceptId: unstake.args.accept_id.toBigInt(),
    pool: unstake.address,
    blockHeight: BigInt(unstake.blockNumber),
    staker: unstake.args.staker,
    unstakeToken: unstake.address,
    unstakeAmount: unstake.args.unstake_amount.toBigInt(),
    redeemEarning: unstake.args.redeem_earning.toBigInt(),
    redeemEth: unstake.args.redeem_eth.toBigInt(),
    redeemUsdc: unstake.args.redeem_usdc.toBigInt(),
    status: "pending", // Initial status is pending
    timestamp: new Date(Number(unstake.transaction.blockTimestamp) * 1000),
  });

  await record.save();
}

export async function handleUnstakeFinishedLog(finished: UnstakeFinishedLog): Promise<void> {
  logger.info(`New unstake finished transaction log at block ${finished.blockNumber}`);
  assert(finished.args, "No finished.args");

  const record = await UnstakeAccepted.get(finished.args.accept_id.toString());

  if (record && record.status === "pending") {
    record.status = "success";
    await record.save();
  }
}

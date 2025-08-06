import { Staker, StakedRecord, UnstakeAccepted, ReferralBound } from "../types";
import { StakedLog, UnstakeAcceptedLog, UnstakeFinishedLog, ReferralBoundLog } from "../types/abi-interfaces/Sseth";
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
  logger.info(`unstake.args.withdraw_eth: ${unstake.args.withdraw_eth}`);
  logger.info(`unstake.args.repay_usdc: ${unstake.args.repay_usdc}`);
  logger.info(`unstake.args: ${JSON.stringify(unstake.args)}`);
  logger.info(`unstake.args.accept_id: ${unstake.args.accept_id}`);
  logger.info(`unstake========================================`);

  const record = UnstakeAccepted.create({
    id: unstake.args.accept_id.toString(),
    txHash: unstake.transactionHash,
    pool: unstake.address,
    blockHeight: BigInt(unstake.blockNumber),
    staker: unstake.args.staker,
    unstakeToken: unstake.address,
    unstakeAmount: unstake.args.unstake_amount.toBigInt(),
    redeemEarning: unstake.args.redeem_earning.toBigInt(),
    withdrawEth: unstake.args.withdraw_eth.toBigInt(),
    repayUsdc: unstake.args.repay_usdc.toBigInt(),
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

export async function handleReferralBoundLog(referralBound: ReferralBoundLog): Promise<void> {
  logger.info(`New referral bound transaction log at block ${referralBound.blockNumber}`);
  assert(referralBound.args, "No referralBound.args");

  logger.info(`referralBound========================================`);
  logger.info(`referralBound.address: ${referralBound.address}`);
  logger.info(`referralBound.blockNumber: ${referralBound.blockNumber}`);
  logger.info(`referralBound.transactionHash: ${referralBound.transactionHash}`);
  logger.info(`referralBound.transaction.blockTimestamp: ${referralBound.transaction.blockTimestamp}`);
  logger.info(`referralBound.args.user: ${referralBound.args.user}`);
  logger.info(`referralBound.args.referrer: ${referralBound.args.referrer}`);
  logger.info(`referralBound========================================`);

  const record = ReferralBound.create({
    id: referralBound.transactionHash,
    blockHeight: BigInt(referralBound.blockNumber),
    user: referralBound.args.user,
    referrer: referralBound.args.referrer,
    timestamp: new Date(Number(referralBound.transaction.blockTimestamp) * 1000),
  });

  await record.save();
}

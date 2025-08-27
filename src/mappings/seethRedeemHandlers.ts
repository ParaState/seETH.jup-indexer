import { RedeemRequest } from "../types";
import { RedeemRequestedLog, RedeemCancelledLog, RedeemApprovedLog, RedeemExecutedLog } from "../types/abi-interfaces/SeETHRedeem";
import assert from "assert";

// SeETH RedeemRequested event
// event RedeemRequested(uint256 indexed requestId, address indexed owner, uint256 shares);
export async function handleRedeemRequested(redeemRequested: RedeemRequestedLog): Promise<void> {
  logger.info(`New redeemRequested transaction log at block ${redeemRequested.blockNumber}`);
  assert(redeemRequested.args, "No redeemRequested.args");

  logger.info(`redeemRequested========================================`);
  logger.info(`redeemRequested.address: ${redeemRequested.address}`);
  logger.info(`redeemRequested.blockNumber: ${redeemRequested.blockNumber}`);
  logger.info(`redeemRequested.transactionHash: ${redeemRequested.transactionHash}`);
  logger.info(`redeemRequested.transaction.blockTimestamp: ${redeemRequested.transaction.blockTimestamp}`);
  logger.info(`redeemRequested.args.requestId: ${redeemRequested.args.requestId}`);
  logger.info(`redeemRequested.args.owner: ${redeemRequested.args.owner}`);
  logger.info(`redeemRequested.args.shares: ${redeemRequested.args.shares}`);
  logger.info(`redeemRequested========================================`);

  const requestId = redeemRequested.args.requestId.toString();
  const owner = redeemRequested.args.owner;
  const shares = BigInt(redeemRequested.args.shares.toString());
  const requestTime = BigInt(redeemRequested.transaction.blockTimestamp.toString());
  const timestamp = new Date(Number(redeemRequested.transaction.blockTimestamp) * 1000);

  logger.info(`Creating new RedeemRequest: ${requestId} for owner: ${owner} with shares: ${shares}`);

  const record = RedeemRequest.create({
    id: requestId,
    blockHeight: BigInt(redeemRequested.blockNumber),
    owner: owner,
    shares: shares,
    requestTime: requestTime,
    approved: false,
    executed: false,
    cancelled: false,
    createdAt: timestamp,
    updatedAt: timestamp,
    requestedTxHash: redeemRequested.transactionHash,
  });

  await record.save();
}

// SeETH RedeemCancelled event
// event RedeemCancelled(uint256 indexed requestId, address indexed owner, uint256 shares);
export async function handleRedeemCancelled(redeemCancelled: RedeemCancelledLog): Promise<void> {
  logger.info(`New redeemCancelled transaction log at block ${redeemCancelled.blockNumber}`);
  assert(redeemCancelled.args, "No redeemCancelled.args");

  logger.info(`redeemCancelled========================================`);
  logger.info(`redeemCancelled.address: ${redeemCancelled.address}`);
  logger.info(`redeemCancelled.blockNumber: ${redeemCancelled.blockNumber}`);
  logger.info(`redeemCancelled.transactionHash: ${redeemCancelled.transactionHash}`);
  logger.info(`redeemCancelled.transaction.blockTimestamp: ${redeemCancelled.transaction.blockTimestamp}`);
  logger.info(`redeemCancelled.args.requestId: ${redeemCancelled.args.requestId}`);
  logger.info(`redeemCancelled.args.owner: ${redeemCancelled.args.owner}`);
  logger.info(`redeemCancelled.args.shares: ${redeemCancelled.args.shares}`);
  logger.info(`redeemCancelled========================================`);

  const requestId = redeemCancelled.args.requestId.toString();
  const timestamp = new Date(Number(redeemCancelled.transaction.blockTimestamp) * 1000);

  const cancelledAt = new Date(Number(redeemCancelled.transaction.blockTimestamp) * 1000);

  logger.info(`Cancelling RedeemRequest: ${requestId}`);

  const record = await RedeemRequest.get(requestId);
  if (record) {
    if (record.cancelled) {
      logger.warn(`RedeemRequest ${requestId} already cancelled`);
      return;
    }

    record.cancelled = true;
    record.updatedAt = timestamp;
    record.cancelledTxHash = redeemCancelled.transactionHash;
    record.cancelledAt = cancelledAt;
    await record.save();
  } else {
    logger.warn(`RedeemRequest ${requestId} not found for cancellation`);
  }
}

// SeETH RedeemApproved event
// event RedeemApproved(uint256 indexed requestId, address indexed owner, uint256 shares);
export async function handleRedeemApproved(redeemApproved: RedeemApprovedLog): Promise<void> {
  logger.info(`New redeemApproved transaction log at block ${redeemApproved.blockNumber}`);
  assert(redeemApproved.args, "No redeemApproved.args");

  logger.info(`redeemApproved========================================`);
  logger.info(`redeemApproved.address: ${redeemApproved.address}`);
  logger.info(`redeemApproved.blockNumber: ${redeemApproved.blockNumber}`);
  logger.info(`redeemApproved.transactionHash: ${redeemApproved.transactionHash}`);
  logger.info(`redeemApproved.transaction.blockTimestamp: ${redeemApproved.transaction.blockTimestamp}`);
  logger.info(`redeemApproved.args.requestId: ${redeemApproved.args.requestId}`);
  logger.info(`redeemApproved.args.owner: ${redeemApproved.args.owner}`);
  logger.info(`redeemApproved.args.shares: ${redeemApproved.args.shares}`);
  logger.info(`redeemApproved========================================`);

  const requestId = redeemApproved.args.requestId.toString();
  const timestamp = new Date(Number(redeemApproved.transaction.blockTimestamp) * 1000);

  const approvedAt = new Date(Number(redeemApproved.transaction.blockTimestamp) * 1000);

  logger.info(`Approving RedeemRequest: ${requestId}`);

  const record = await RedeemRequest.get(requestId);
  if (record) {
    if (record.approved) {
      logger.warn(`RedeemRequest ${requestId} already approved`);
      return;
    }

    record.approved = true;
    record.updatedAt = timestamp;
    record.approvedTxHash = redeemApproved.transactionHash;
    record.approvedAt = approvedAt;
    await record.save();
  } else {
    logger.warn(`RedeemRequest ${requestId} not found for approval`);
  }
}

// SeETH RedeemExecuted event
// event RedeemExecuted(uint256 indexed requestId, address indexed owner, uint256 shares, uint256 assetsPaid);
export async function handleRedeemExecuted(redeemExecuted: RedeemExecutedLog): Promise<void> {
  logger.info(`New redeemExecuted transaction log at block ${redeemExecuted.blockNumber}`);
  assert(redeemExecuted.args, "No redeemExecuted.args");

  logger.info(`redeemExecuted========================================`);
  logger.info(`redeemExecuted.address: ${redeemExecuted.address}`);
  logger.info(`redeemExecuted.blockNumber: ${redeemExecuted.blockNumber}`);
  logger.info(`redeemExecuted.transactionHash: ${redeemExecuted.transactionHash}`);
  logger.info(`redeemExecuted.transaction.blockTimestamp: ${redeemExecuted.transaction.blockTimestamp}`);
  logger.info(`redeemExecuted.args.requestId: ${redeemExecuted.args.requestId}`);
  logger.info(`redeemExecuted.args.owner: ${redeemExecuted.args.owner}`);
  logger.info(`redeemExecuted.args.shares: ${redeemExecuted.args.shares}`);
  logger.info(`redeemExecuted.args.assetsPaid: ${redeemExecuted.args.assetsPaid}`);
  logger.info(`redeemExecuted========================================`);

  const requestId = redeemExecuted.args.requestId.toString();
  const assetsPaid = BigInt(redeemExecuted.args.assetsPaid.toString());
  const timestamp = new Date(Number(redeemExecuted.transaction.blockTimestamp) * 1000);

  const executedAt = new Date(Number(redeemExecuted.transaction.blockTimestamp) * 1000);

  logger.info(`Executing RedeemRequest: ${requestId} with assetsPaid: ${assetsPaid}`);

  const record = await RedeemRequest.get(requestId);
  if (record) {
    if (record.executed) {
      logger.warn(`RedeemRequest ${requestId} already executed`);
      return;
    }

    record.executed = true;
    record.assetsPaid = assetsPaid;
    record.updatedAt = timestamp;
    record.executedTxHash = redeemExecuted.transactionHash;
    record.executedAt = executedAt;
    await record.save();
  } else {
    logger.warn(`RedeemRequest ${requestId} not found for execution`);
  }
}

import { Staker, StakedRecord, UnstakeAccepted } from "../types";
import {
    StakedLog, UnstakeAcceptedLog
} from "../types/abi-interfaces/SsETHAbi";
import { BigNumber, utils } from "ethers";
import assert from "assert";

export async function handleStakedLog( staked: StakedLog): Promise<void> {
    logger.info(`New staked transaction log at block ${staked.blockNumber}`);
    assert(staked.args, "No staked.args");

    const record = StakedRecord.create({
        id: staked.transactionHash,
        pool: staked.address,
        blockHeight: BigInt(staked.blockNumber),
        staker: staked.args.staker,
        stake_token: "0x000",
        stake_amount: staked.args.amount.toBigInt(),
        mint_receiver: staked.args.receiver,
        mint_amount: staked.args.minted.toBigInt(),
        timestamp: new Date(Number(staked.transaction.blockTimestamp)),
    });

    await record.save();

    const staker_id = `${staked.address}-${staked.args.staker}`;

    let staker = await Staker.get(staker_id);

    if( !staker ) {
        staker = await Staker.create({
            id: staker_id,
            pool: staked.address,
            staker: staked.args.staker,
            stake_amount: staked.args.amount.toBigInt(),
            mint_amount: staked.args.minted.toBigInt()
        });

    } else {
        const tmp_mint_amount = BigNumber.from(staker.mint_amount);
        const tmp_stake_amount = BigNumber.from(staker.stake_amount);

        staker.mint_amount = staked.args.minted.add(tmp_mint_amount).toBigInt();
        staker.stake_amount = staked.args.amount.add(tmp_stake_amount).toBigInt();
    }

    await staker.save();

}

async function handleUnstakeAcceptedLog( unstake: UnstakeAcceptedLog): Promise<void> {
    logger.info(`New unstake accepted transaction log at block ${unstake.blockNumber}`);
    assert(unstake.args, "No unstake.args");

    const record = UnstakeAccepted.create({
        id: unstake.transactionHash,
        accept_id: unstake.args.accept_id.toBigInt(),
        pool: unstake.address,
        blockHeight: BigInt(unstake.blockNumber),
        staker: unstake.args.staker,
        unstake_token: unstake.address,
        unstake_amount: unstake.args.unstake_amount.toBigInt(),
        redeem_earning: unstake.args.redeem_earning.toBigInt(),
        redeem_eth: unstake.args.redeem_eth.toBigInt(),
        status: "pending", // Initial status is pending
        timestamp: new Date(Number(unstake.transaction.blockTimestamp)),
    });

    await record.save();
}
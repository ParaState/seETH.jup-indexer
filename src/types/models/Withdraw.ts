// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type WithdrawProps = Omit<Withdraw, NonNullable<FunctionPropertyNames<Withdraw>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatWithdrawProps = Omit<WithdrawProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class Withdraw implements CompatEntity {

    constructor(
        
        id: string,
        sender: string,
        receiver: string,
        owner: string,
        assets: bigint,
        shares: bigint,
    ) {
        this.id = id;
        this.sender = sender;
        this.receiver = receiver;
        this.owner = owner;
        this.assets = assets;
        this.shares = shares;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public sender: string;
    public receiver: string;
    public owner: string;
    public assets: bigint;
    public shares: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'Withdraw';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save Withdraw entity without an ID");
        await store.set('Withdraw', id.toString(), this as unknown as CompatWithdrawProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove Withdraw entity without an ID");
        await store.remove('Withdraw', id.toString());
    }

    static async get(id: string): Promise<Withdraw | undefined> {
        assert((id !== null && id !== undefined), "Cannot get Withdraw entity without an ID");
        const record = await store.get('Withdraw', id.toString());
        if (record) {
            return this.create(record as unknown as WithdrawProps);
        } else {
            return;
        }
    }

    static async getBySender(sender: string, options: GetOptions<CompatWithdrawProps>): Promise<Withdraw[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatWithdrawProps>('Withdraw', 'sender', sender, options);
        return records.map(record => this.create(record as unknown as WithdrawProps));
    }
    

    static async getByReceiver(receiver: string, options: GetOptions<CompatWithdrawProps>): Promise<Withdraw[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatWithdrawProps>('Withdraw', 'receiver', receiver, options);
        return records.map(record => this.create(record as unknown as WithdrawProps));
    }
    

    static async getByOwner(owner: string, options: GetOptions<CompatWithdrawProps>): Promise<Withdraw[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatWithdrawProps>('Withdraw', 'owner', owner, options);
        return records.map(record => this.create(record as unknown as WithdrawProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<WithdrawProps>[], options: GetOptions<WithdrawProps>): Promise<Withdraw[]> {
        const records = await store.getByFields<CompatWithdrawProps>('Withdraw', filter  as unknown as FieldsExpression<CompatWithdrawProps>[], options as unknown as GetOptions<CompatWithdrawProps>);
        return records.map(record => this.create(record as unknown as WithdrawProps));
    }

    static create(record: WithdrawProps): Withdraw {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.sender,
            record.receiver,
            record.owner,
            record.assets,
            record.shares,
        );
        Object.assign(entity,record);
        return entity;
    }
}

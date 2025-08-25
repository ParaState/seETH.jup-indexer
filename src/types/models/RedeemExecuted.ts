// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type RedeemExecutedProps = Omit<RedeemExecuted, NonNullable<FunctionPropertyNames<RedeemExecuted>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatRedeemExecutedProps = Omit<RedeemExecutedProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class RedeemExecuted implements CompatEntity {

    constructor(
        
        id: string,
        requestId: bigint,
        owner: string,
        shares: bigint,
        assetsPaid: bigint,
    ) {
        this.id = id;
        this.requestId = requestId;
        this.owner = owner;
        this.shares = shares;
        this.assetsPaid = assetsPaid;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public requestId: bigint;
    public owner: string;
    public shares: bigint;
    public assetsPaid: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'RedeemExecuted';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save RedeemExecuted entity without an ID");
        await store.set('RedeemExecuted', id.toString(), this as unknown as CompatRedeemExecutedProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove RedeemExecuted entity without an ID");
        await store.remove('RedeemExecuted', id.toString());
    }

    static async get(id: string): Promise<RedeemExecuted | undefined> {
        assert((id !== null && id !== undefined), "Cannot get RedeemExecuted entity without an ID");
        const record = await store.get('RedeemExecuted', id.toString());
        if (record) {
            return this.create(record as unknown as RedeemExecutedProps);
        } else {
            return;
        }
    }

    static async getByRequestId(requestId: bigint, options: GetOptions<CompatRedeemExecutedProps>): Promise<RedeemExecuted[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemExecutedProps>('RedeemExecuted', 'requestId', requestId, options);
        return records.map(record => this.create(record as unknown as RedeemExecutedProps));
    }
    

    static async getByOwner(owner: string, options: GetOptions<CompatRedeemExecutedProps>): Promise<RedeemExecuted[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemExecutedProps>('RedeemExecuted', 'owner', owner, options);
        return records.map(record => this.create(record as unknown as RedeemExecutedProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<RedeemExecutedProps>[], options: GetOptions<RedeemExecutedProps>): Promise<RedeemExecuted[]> {
        const records = await store.getByFields<CompatRedeemExecutedProps>('RedeemExecuted', filter  as unknown as FieldsExpression<CompatRedeemExecutedProps>[], options as unknown as GetOptions<CompatRedeemExecutedProps>);
        return records.map(record => this.create(record as unknown as RedeemExecutedProps));
    }

    static create(record: RedeemExecutedProps): RedeemExecuted {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.requestId,
            record.owner,
            record.shares,
            record.assetsPaid,
        );
        Object.assign(entity,record);
        return entity;
    }
}

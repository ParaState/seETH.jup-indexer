// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type RedeemCancelledProps = Omit<RedeemCancelled, NonNullable<FunctionPropertyNames<RedeemCancelled>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatRedeemCancelledProps = Omit<RedeemCancelledProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class RedeemCancelled implements CompatEntity {

    constructor(
        
        id: string,
        requestId: bigint,
        owner: string,
        shares: bigint,
    ) {
        this.id = id;
        this.requestId = requestId;
        this.owner = owner;
        this.shares = shares;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public requestId: bigint;
    public owner: string;
    public shares: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'RedeemCancelled';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save RedeemCancelled entity without an ID");
        await store.set('RedeemCancelled', id.toString(), this as unknown as CompatRedeemCancelledProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove RedeemCancelled entity without an ID");
        await store.remove('RedeemCancelled', id.toString());
    }

    static async get(id: string): Promise<RedeemCancelled | undefined> {
        assert((id !== null && id !== undefined), "Cannot get RedeemCancelled entity without an ID");
        const record = await store.get('RedeemCancelled', id.toString());
        if (record) {
            return this.create(record as unknown as RedeemCancelledProps);
        } else {
            return;
        }
    }

    static async getByRequestId(requestId: bigint, options: GetOptions<CompatRedeemCancelledProps>): Promise<RedeemCancelled[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemCancelledProps>('RedeemCancelled', 'requestId', requestId, options);
        return records.map(record => this.create(record as unknown as RedeemCancelledProps));
    }
    

    static async getByOwner(owner: string, options: GetOptions<CompatRedeemCancelledProps>): Promise<RedeemCancelled[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemCancelledProps>('RedeemCancelled', 'owner', owner, options);
        return records.map(record => this.create(record as unknown as RedeemCancelledProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<RedeemCancelledProps>[], options: GetOptions<RedeemCancelledProps>): Promise<RedeemCancelled[]> {
        const records = await store.getByFields<CompatRedeemCancelledProps>('RedeemCancelled', filter  as unknown as FieldsExpression<CompatRedeemCancelledProps>[], options as unknown as GetOptions<CompatRedeemCancelledProps>);
        return records.map(record => this.create(record as unknown as RedeemCancelledProps));
    }

    static create(record: RedeemCancelledProps): RedeemCancelled {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.requestId,
            record.owner,
            record.shares,
        );
        Object.assign(entity,record);
        return entity;
    }
}

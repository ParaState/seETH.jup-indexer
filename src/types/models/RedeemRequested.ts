// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type RedeemRequestedProps = Omit<RedeemRequested, NonNullable<FunctionPropertyNames<RedeemRequested>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatRedeemRequestedProps = Omit<RedeemRequestedProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class RedeemRequested implements CompatEntity {

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
        return 'RedeemRequested';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save RedeemRequested entity without an ID");
        await store.set('RedeemRequested', id.toString(), this as unknown as CompatRedeemRequestedProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove RedeemRequested entity without an ID");
        await store.remove('RedeemRequested', id.toString());
    }

    static async get(id: string): Promise<RedeemRequested | undefined> {
        assert((id !== null && id !== undefined), "Cannot get RedeemRequested entity without an ID");
        const record = await store.get('RedeemRequested', id.toString());
        if (record) {
            return this.create(record as unknown as RedeemRequestedProps);
        } else {
            return;
        }
    }

    static async getByRequestId(requestId: bigint, options: GetOptions<CompatRedeemRequestedProps>): Promise<RedeemRequested[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemRequestedProps>('RedeemRequested', 'requestId', requestId, options);
        return records.map(record => this.create(record as unknown as RedeemRequestedProps));
    }
    

    static async getByOwner(owner: string, options: GetOptions<CompatRedeemRequestedProps>): Promise<RedeemRequested[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemRequestedProps>('RedeemRequested', 'owner', owner, options);
        return records.map(record => this.create(record as unknown as RedeemRequestedProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<RedeemRequestedProps>[], options: GetOptions<RedeemRequestedProps>): Promise<RedeemRequested[]> {
        const records = await store.getByFields<CompatRedeemRequestedProps>('RedeemRequested', filter  as unknown as FieldsExpression<CompatRedeemRequestedProps>[], options as unknown as GetOptions<CompatRedeemRequestedProps>);
        return records.map(record => this.create(record as unknown as RedeemRequestedProps));
    }

    static create(record: RedeemRequestedProps): RedeemRequested {
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

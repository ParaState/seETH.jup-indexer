// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type RedeemRequestProps = Omit<RedeemRequest, NonNullable<FunctionPropertyNames<RedeemRequest>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatRedeemRequestProps = Omit<RedeemRequestProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class RedeemRequest implements CompatEntity {

    constructor(
        
        id: string,
        owner: string,
        shares: bigint,
        requestTime: bigint,
        status: string,
    ) {
        this.id = id;
        this.owner = owner;
        this.shares = shares;
        this.requestTime = requestTime;
        this.status = status;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public owner: string;
    public shares: bigint;
    public requestTime: bigint;
    public status: string;
    public assetsPaid?: bigint;
    public createdAt?: Date;
    public updatedAt?: Date;
    public requestedAt?: Date;
    public approvedAt?: Date;
    public executedAt?: Date;
    public cancelledAt?: Date;
    public requestedTxHash?: string;
    public cancelledTxHash?: string;
    public approvedTxHash?: string;
    public executedTxHash?: string;
    

    get _name(): string {
        return 'RedeemRequest';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save RedeemRequest entity without an ID");
        await store.set('RedeemRequest', id.toString(), this as unknown as CompatRedeemRequestProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove RedeemRequest entity without an ID");
        await store.remove('RedeemRequest', id.toString());
    }

    static async get(id: string): Promise<RedeemRequest | undefined> {
        assert((id !== null && id !== undefined), "Cannot get RedeemRequest entity without an ID");
        const record = await store.get('RedeemRequest', id.toString());
        if (record) {
            return this.create(record as unknown as RedeemRequestProps);
        } else {
            return;
        }
    }

    static async getByOwner(owner: string, options: GetOptions<CompatRedeemRequestProps>): Promise<RedeemRequest[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemRequestProps>('RedeemRequest', 'owner', owner, options);
        return records.map(record => this.create(record as unknown as RedeemRequestProps));
    }
    

    static async getByStatus(status: string, options: GetOptions<CompatRedeemRequestProps>): Promise<RedeemRequest[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemRequestProps>('RedeemRequest', 'status', status, options);
        return records.map(record => this.create(record as unknown as RedeemRequestProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<RedeemRequestProps>[], options: GetOptions<RedeemRequestProps>): Promise<RedeemRequest[]> {
        const records = await store.getByFields<CompatRedeemRequestProps>('RedeemRequest', filter  as unknown as FieldsExpression<CompatRedeemRequestProps>[], options as unknown as GetOptions<CompatRedeemRequestProps>);
        return records.map(record => this.create(record as unknown as RedeemRequestProps));
    }

    static create(record: RedeemRequestProps): RedeemRequest {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.owner,
            record.shares,
            record.requestTime,
            record.status,
        );
        Object.assign(entity,record);
        return entity;
    }
}

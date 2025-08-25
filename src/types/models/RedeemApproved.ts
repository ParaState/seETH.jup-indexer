// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type RedeemApprovedProps = Omit<RedeemApproved, NonNullable<FunctionPropertyNames<RedeemApproved>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatRedeemApprovedProps = Omit<RedeemApprovedProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class RedeemApproved implements CompatEntity {

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
        return 'RedeemApproved';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save RedeemApproved entity without an ID");
        await store.set('RedeemApproved', id.toString(), this as unknown as CompatRedeemApprovedProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove RedeemApproved entity without an ID");
        await store.remove('RedeemApproved', id.toString());
    }

    static async get(id: string): Promise<RedeemApproved | undefined> {
        assert((id !== null && id !== undefined), "Cannot get RedeemApproved entity without an ID");
        const record = await store.get('RedeemApproved', id.toString());
        if (record) {
            return this.create(record as unknown as RedeemApprovedProps);
        } else {
            return;
        }
    }

    static async getByRequestId(requestId: bigint, options: GetOptions<CompatRedeemApprovedProps>): Promise<RedeemApproved[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemApprovedProps>('RedeemApproved', 'requestId', requestId, options);
        return records.map(record => this.create(record as unknown as RedeemApprovedProps));
    }
    

    static async getByOwner(owner: string, options: GetOptions<CompatRedeemApprovedProps>): Promise<RedeemApproved[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatRedeemApprovedProps>('RedeemApproved', 'owner', owner, options);
        return records.map(record => this.create(record as unknown as RedeemApprovedProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<RedeemApprovedProps>[], options: GetOptions<RedeemApprovedProps>): Promise<RedeemApproved[]> {
        const records = await store.getByFields<CompatRedeemApprovedProps>('RedeemApproved', filter  as unknown as FieldsExpression<CompatRedeemApprovedProps>[], options as unknown as GetOptions<CompatRedeemApprovedProps>);
        return records.map(record => this.create(record as unknown as RedeemApprovedProps));
    }

    static create(record: RedeemApprovedProps): RedeemApproved {
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

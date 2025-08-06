// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type ReferralBoundProps = Omit<ReferralBound, NonNullable<FunctionPropertyNames<ReferralBound>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatReferralBoundProps = Omit<ReferralBoundProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class ReferralBound implements CompatEntity {

    constructor(
        
        id: string,
        user: string,
        referrer: string,
    ) {
        this.id = id;
        this.user = user;
        this.referrer = referrer;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public user: string;
    public referrer: string;
    public timestamp?: Date;
    

    get _name(): string {
        return 'ReferralBound';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save ReferralBound entity without an ID");
        await store.set('ReferralBound', id.toString(), this as unknown as CompatReferralBoundProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove ReferralBound entity without an ID");
        await store.remove('ReferralBound', id.toString());
    }

    static async get(id: string): Promise<ReferralBound | undefined> {
        assert((id !== null && id !== undefined), "Cannot get ReferralBound entity without an ID");
        const record = await store.get('ReferralBound', id.toString());
        if (record) {
            return this.create(record as unknown as ReferralBoundProps);
        } else {
            return;
        }
    }

    static async getByUser(user: string, options: GetOptions<CompatReferralBoundProps>): Promise<ReferralBound[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatReferralBoundProps>('ReferralBound', 'user', user, options);
        return records.map(record => this.create(record as unknown as ReferralBoundProps));
    }
    

    static async getByReferrer(referrer: string, options: GetOptions<CompatReferralBoundProps>): Promise<ReferralBound[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatReferralBoundProps>('ReferralBound', 'referrer', referrer, options);
        return records.map(record => this.create(record as unknown as ReferralBoundProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<ReferralBoundProps>[], options: GetOptions<ReferralBoundProps>): Promise<ReferralBound[]> {
        const records = await store.getByFields<CompatReferralBoundProps>('ReferralBound', filter  as unknown as FieldsExpression<CompatReferralBoundProps>[], options as unknown as GetOptions<CompatReferralBoundProps>);
        return records.map(record => this.create(record as unknown as ReferralBoundProps));
    }

    static create(record: ReferralBoundProps): ReferralBound {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.user,
            record.referrer,
        );
        Object.assign(entity,record);
        return entity;
    }
}

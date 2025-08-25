// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type DepositProps = Omit<Deposit, NonNullable<FunctionPropertyNames<Deposit>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatDepositProps = Omit<DepositProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class Deposit implements CompatEntity {

    constructor(
        
        id: string,
        owner: string,
        assets: bigint,
        shares: bigint,
    ) {
        this.id = id;
        this.owner = owner;
        this.assets = assets;
        this.shares = shares;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public owner: string;
    public assets: bigint;
    public shares: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'Deposit';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save Deposit entity without an ID");
        await store.set('Deposit', id.toString(), this as unknown as CompatDepositProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove Deposit entity without an ID");
        await store.remove('Deposit', id.toString());
    }

    static async get(id: string): Promise<Deposit | undefined> {
        assert((id !== null && id !== undefined), "Cannot get Deposit entity without an ID");
        const record = await store.get('Deposit', id.toString());
        if (record) {
            return this.create(record as unknown as DepositProps);
        } else {
            return;
        }
    }

    static async getByOwner(owner: string, options: GetOptions<CompatDepositProps>): Promise<Deposit[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatDepositProps>('Deposit', 'owner', owner, options);
        return records.map(record => this.create(record as unknown as DepositProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<DepositProps>[], options: GetOptions<DepositProps>): Promise<Deposit[]> {
        const records = await store.getByFields<CompatDepositProps>('Deposit', filter  as unknown as FieldsExpression<CompatDepositProps>[], options as unknown as GetOptions<CompatDepositProps>);
        return records.map(record => this.create(record as unknown as DepositProps));
    }

    static create(record: DepositProps): Deposit {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.owner,
            record.assets,
            record.shares,
        );
        Object.assign(entity,record);
        return entity;
    }
}

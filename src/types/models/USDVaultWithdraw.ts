// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type USDVaultWithdrawProps = Omit<USDVaultWithdraw, NonNullable<FunctionPropertyNames<USDVaultWithdraw>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatUSDVaultWithdrawProps = Omit<USDVaultWithdrawProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class USDVaultWithdraw implements CompatEntity {

    constructor(
        
        id: string,
        contractAddress: string,
        to: string,
        amount: bigint,
    ) {
        this.id = id;
        this.contractAddress = contractAddress;
        this.to = to;
        this.amount = amount;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public contractAddress: string;
    public to: string;
    public amount: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'USDVaultWithdraw';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save USDVaultWithdraw entity without an ID");
        await store.set('USDVaultWithdraw', id.toString(), this as unknown as CompatUSDVaultWithdrawProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove USDVaultWithdraw entity without an ID");
        await store.remove('USDVaultWithdraw', id.toString());
    }

    static async get(id: string): Promise<USDVaultWithdraw | undefined> {
        assert((id !== null && id !== undefined), "Cannot get USDVaultWithdraw entity without an ID");
        const record = await store.get('USDVaultWithdraw', id.toString());
        if (record) {
            return this.create(record as unknown as USDVaultWithdrawProps);
        } else {
            return;
        }
    }

    static async getByTo(to: string, options: GetOptions<CompatUSDVaultWithdrawProps>): Promise<USDVaultWithdraw[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatUSDVaultWithdrawProps>('USDVaultWithdraw', 'to', to, options);
        return records.map(record => this.create(record as unknown as USDVaultWithdrawProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<USDVaultWithdrawProps>[], options: GetOptions<USDVaultWithdrawProps>): Promise<USDVaultWithdraw[]> {
        const records = await store.getByFields<CompatUSDVaultWithdrawProps>('USDVaultWithdraw', filter  as unknown as FieldsExpression<CompatUSDVaultWithdrawProps>[], options as unknown as GetOptions<CompatUSDVaultWithdrawProps>);
        return records.map(record => this.create(record as unknown as USDVaultWithdrawProps));
    }

    static create(record: USDVaultWithdrawProps): USDVaultWithdraw {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.contractAddress,
            record.to,
            record.amount,
        );
        Object.assign(entity,record);
        return entity;
    }
}

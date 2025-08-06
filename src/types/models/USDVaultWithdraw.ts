// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type UsdVaultWithdrawProps = Omit<UsdVaultWithdraw, NonNullable<FunctionPropertyNames<UsdVaultWithdraw>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatUsdVaultWithdrawProps = Omit<UsdVaultWithdrawProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class UsdVaultWithdraw implements CompatEntity {

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
        return 'UsdVaultWithdraw';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save UsdVaultWithdraw entity without an ID");
        await store.set('UsdVaultWithdraw', id.toString(), this as unknown as CompatUsdVaultWithdrawProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove UsdVaultWithdraw entity without an ID");
        await store.remove('UsdVaultWithdraw', id.toString());
    }

    static async get(id: string): Promise<UsdVaultWithdraw | undefined> {
        assert((id !== null && id !== undefined), "Cannot get UsdVaultWithdraw entity without an ID");
        const record = await store.get('UsdVaultWithdraw', id.toString());
        if (record) {
            return this.create(record as unknown as UsdVaultWithdrawProps);
        } else {
            return;
        }
    }

    static async getByTo(to: string, options: GetOptions<CompatUsdVaultWithdrawProps>): Promise<UsdVaultWithdraw[]> {
        // Inputs must be cast as the store interface has not been updated to support alternative ID types
        const records = await store.getByField<CompatUsdVaultWithdrawProps>('UsdVaultWithdraw', 'to', to, options);
        return records.map(record => this.create(record as unknown as UsdVaultWithdrawProps));
    }
    


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<UsdVaultWithdrawProps>[], options: GetOptions<UsdVaultWithdrawProps>): Promise<UsdVaultWithdraw[]> {
        const records = await store.getByFields<CompatUsdVaultWithdrawProps>('UsdVaultWithdraw', filter  as unknown as FieldsExpression<CompatUsdVaultWithdrawProps>[], options as unknown as GetOptions<CompatUsdVaultWithdrawProps>);
        return records.map(record => this.create(record as unknown as UsdVaultWithdrawProps));
    }

    static create(record: UsdVaultWithdrawProps): UsdVaultWithdraw {
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

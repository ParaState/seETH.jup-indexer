// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type RiskBalanceUpdatedProps = Omit<RiskBalanceUpdated, NonNullable<FunctionPropertyNames<RiskBalanceUpdated>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatRiskBalanceUpdatedProps = Omit<RiskBalanceUpdatedProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class RiskBalanceUpdated implements CompatEntity {

    constructor(
        
        id: string,
        contractAddress: string,
        newBalance: bigint,
    ) {
        this.id = id;
        this.contractAddress = contractAddress;
        this.newBalance = newBalance;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public contractAddress: string;
    public newBalance: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'RiskBalanceUpdated';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save RiskBalanceUpdated entity without an ID");
        await store.set('RiskBalanceUpdated', id.toString(), this as unknown as CompatRiskBalanceUpdatedProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove RiskBalanceUpdated entity without an ID");
        await store.remove('RiskBalanceUpdated', id.toString());
    }

    static async get(id: string): Promise<RiskBalanceUpdated | undefined> {
        assert((id !== null && id !== undefined), "Cannot get RiskBalanceUpdated entity without an ID");
        const record = await store.get('RiskBalanceUpdated', id.toString());
        if (record) {
            return this.create(record as unknown as RiskBalanceUpdatedProps);
        } else {
            return;
        }
    }


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<RiskBalanceUpdatedProps>[], options: GetOptions<RiskBalanceUpdatedProps>): Promise<RiskBalanceUpdated[]> {
        const records = await store.getByFields<CompatRiskBalanceUpdatedProps>('RiskBalanceUpdated', filter  as unknown as FieldsExpression<CompatRiskBalanceUpdatedProps>[], options as unknown as GetOptions<CompatRiskBalanceUpdatedProps>);
        return records.map(record => this.create(record as unknown as RiskBalanceUpdatedProps));
    }

    static create(record: RiskBalanceUpdatedProps): RiskBalanceUpdated {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.contractAddress,
            record.newBalance,
        );
        Object.assign(entity,record);
        return entity;
    }
}

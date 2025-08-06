// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type RemoteBalanceUpdatedProps = Omit<RemoteBalanceUpdated, NonNullable<FunctionPropertyNames<RemoteBalanceUpdated>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatRemoteBalanceUpdatedProps = Omit<RemoteBalanceUpdatedProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class RemoteBalanceUpdated implements CompatEntity {

    constructor(
        
        id: string,
        contractAddress: string,
        opType: number,
        amount: bigint,
    ) {
        this.id = id;
        this.contractAddress = contractAddress;
        this.opType = opType;
        this.amount = amount;
        
    }

    public id: string;
    public blockHeight?: bigint;
    public contractAddress: string;
    public opType: number;
    public amount: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'RemoteBalanceUpdated';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save RemoteBalanceUpdated entity without an ID");
        await store.set('RemoteBalanceUpdated', id.toString(), this as unknown as CompatRemoteBalanceUpdatedProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove RemoteBalanceUpdated entity without an ID");
        await store.remove('RemoteBalanceUpdated', id.toString());
    }

    static async get(id: string): Promise<RemoteBalanceUpdated | undefined> {
        assert((id !== null && id !== undefined), "Cannot get RemoteBalanceUpdated entity without an ID");
        const record = await store.get('RemoteBalanceUpdated', id.toString());
        if (record) {
            return this.create(record as unknown as RemoteBalanceUpdatedProps);
        } else {
            return;
        }
    }


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<RemoteBalanceUpdatedProps>[], options: GetOptions<RemoteBalanceUpdatedProps>): Promise<RemoteBalanceUpdated[]> {
        const records = await store.getByFields<CompatRemoteBalanceUpdatedProps>('RemoteBalanceUpdated', filter  as unknown as FieldsExpression<CompatRemoteBalanceUpdatedProps>[], options as unknown as GetOptions<CompatRemoteBalanceUpdatedProps>);
        return records.map(record => this.create(record as unknown as RemoteBalanceUpdatedProps));
    }

    static create(record: RemoteBalanceUpdatedProps): RemoteBalanceUpdated {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
            record.contractAddress,
            record.opType,
            record.amount,
        );
        Object.assign(entity,record);
        return entity;
    }
}

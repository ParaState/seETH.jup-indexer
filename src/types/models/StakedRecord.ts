// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type StakedRecordProps = Omit<StakedRecord, NonNullable<FunctionPropertyNames<StakedRecord>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatStakedRecordProps = Omit<StakedRecordProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class StakedRecord implements CompatEntity {

    constructor(
        
        id: string,
    ) {
        this.id = id;
        
    }

    public id: string;
    public pool?: string;
    public blockHeight?: bigint;
    public staker?: string;
    public stakeToken?: string;
    public stakeAmount?: bigint;
    public mintReceiver?: string;
    public mintToken?: string;
    public mintAmount?: bigint;
    public timestamp?: Date;
    

    get _name(): string {
        return 'StakedRecord';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save StakedRecord entity without an ID");
        await store.set('StakedRecord', id.toString(), this as unknown as CompatStakedRecordProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove StakedRecord entity without an ID");
        await store.remove('StakedRecord', id.toString());
    }

    static async get(id: string): Promise<StakedRecord | undefined> {
        assert((id !== null && id !== undefined), "Cannot get StakedRecord entity without an ID");
        const record = await store.get('StakedRecord', id.toString());
        if (record) {
            return this.create(record as unknown as StakedRecordProps);
        } else {
            return;
        }
    }


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<StakedRecordProps>[], options: GetOptions<StakedRecordProps>): Promise<StakedRecord[]> {
        const records = await store.getByFields<CompatStakedRecordProps>('StakedRecord', filter  as unknown as FieldsExpression<CompatStakedRecordProps>[], options as unknown as GetOptions<CompatStakedRecordProps>);
        return records.map(record => this.create(record as unknown as StakedRecordProps));
    }

    static create(record: StakedRecordProps): StakedRecord {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
        );
        Object.assign(entity,record);
        return entity;
    }
}

// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames, FieldsExpression, GetOptions } from "@subql/types-core";
import assert from 'assert';



export type UnstakeAcceptedProps = Omit<UnstakeAccepted, NonNullable<FunctionPropertyNames<UnstakeAccepted>> | '_name'>;

/*
 * Compat types allows for support of alternative `id` types without refactoring the node
 */
type CompatUnstakeAcceptedProps = Omit<UnstakeAcceptedProps, 'id'> & { id: string; };
type CompatEntity = Omit<Entity, 'id'> & { id: string; };

export class UnstakeAccepted implements CompatEntity {

    constructor(
        
        id: string,
    ) {
        this.id = id;
        
    }

    public id: string;
    public acceptId?: bigint;
    public pool?: string;
    public blockHeight?: bigint;
    public staker?: string;
    public unstakeToken?: string;
    public unstakeAmount?: bigint;
    public redeemEarning?: bigint;
    public redeemEth?: bigint;
    public redeemUsdc?: bigint;
    public status?: string;
    public timestamp?: Date;
    

    get _name(): string {
        return 'UnstakeAccepted';
    }

    async save(): Promise<void> {
        const id = this.id;
        assert(id !== null, "Cannot save UnstakeAccepted entity without an ID");
        await store.set('UnstakeAccepted', id.toString(), this as unknown as CompatUnstakeAcceptedProps);
    }

    static async remove(id: string): Promise<void> {
        assert(id !== null, "Cannot remove UnstakeAccepted entity without an ID");
        await store.remove('UnstakeAccepted', id.toString());
    }

    static async get(id: string): Promise<UnstakeAccepted | undefined> {
        assert((id !== null && id !== undefined), "Cannot get UnstakeAccepted entity without an ID");
        const record = await store.get('UnstakeAccepted', id.toString());
        if (record) {
            return this.create(record as unknown as UnstakeAcceptedProps);
        } else {
            return;
        }
    }


    /**
     * Gets entities matching the specified filters and options.
     *
     * ⚠️ This function will first search cache data followed by DB data. Please consider this when using order and offset options.⚠️
     * */
    static async getByFields(filter: FieldsExpression<UnstakeAcceptedProps>[], options: GetOptions<UnstakeAcceptedProps>): Promise<UnstakeAccepted[]> {
        const records = await store.getByFields<CompatUnstakeAcceptedProps>('UnstakeAccepted', filter  as unknown as FieldsExpression<CompatUnstakeAcceptedProps>[], options as unknown as GetOptions<CompatUnstakeAcceptedProps>);
        return records.map(record => this.create(record as unknown as UnstakeAcceptedProps));
    }

    static create(record: UnstakeAcceptedProps): UnstakeAccepted {
        assert(record.id !== undefined && record.id !== null, "id must be provided");
        const entity = new this(
            record.id,
        );
        Object.assign(entity,record);
        return entity;
    }
}

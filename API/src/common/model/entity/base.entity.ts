import {Exclude} from 'class-transformer';
import {CreateDateColumn, UpdateDateColumn} from 'typeorm';
export abstract class BaseEntity {

    @Exclude({ toPlainOnly: true })
    created: Date;

    @Exclude({ toPlainOnly: true })
    @UpdateDateColumn()
    updated: Date;
}
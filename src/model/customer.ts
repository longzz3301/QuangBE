/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { BaseEntity, BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('customer-info')
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable:true})
    firstName: string 

    @Column({nullable:true})
    lastName: string 

    @Column({nullable:true})
    email: string 

    @Column({nullable:true})
    phone: string 

    @Column({nullable:true})
    productQuantity: number 

    @Column({nullable:true})
    address: string 

    @Column({nullable:true})
    code: string 

    @Column({nullable:true})
    appointmentDate: string 

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @BeforeInsert()
    async generateCode() {
        const [data, count] = await Customer.findAndCount({})
        this.code = `ID${String(count + 1).padStart(10, '0')}`;
    }
}